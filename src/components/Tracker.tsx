"use client";

import { useEffect, useMemo, useRef } from "react";

export function sendTrack(eventType: string, durationSec = 0, section = "") {
  const sessionId = window.sessionStorage.getItem("session_id") ?? crypto.randomUUID();
  window.sessionStorage.setItem("session_id", sessionId);

  const params = new URLSearchParams(window.location.search);
  fetch("/api/track", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      session_id: sessionId,
      event_type: eventType,
      page: window.location.pathname,
      section,
      duration_sec: durationSec,
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
    }),
  }).catch(() => undefined);
}

export function Tracker() {
  const startRef = useRef(0);
  const isInit = useRef(false);
  const shouldTrack = useMemo(
    () => typeof window !== "undefined" && window.location.pathname === "/",
    []
  );

  useEffect(() => {
    if (!shouldTrack || isInit.current) return;
    isInit.current = true;
    startRef.current = Date.now();
    sendTrack("page_view");

    const onUnload = () => {
      const durationSec = Math.floor((Date.now() - startRef.current) / 1000);
      sendTrack("session_end", durationSec);
    };

    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, [shouldTrack]);

  useEffect(() => {
    if (!shouldTrack) return;

    const seenSections = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const section = (entry.target as HTMLElement).dataset.trackSection;
          if (!section || seenSections.has(section)) return;
          seenSections.add(section);
          sendTrack("section_view", 0, section);
        });
      },
      { threshold: 0.5 }
    );

    document
      .querySelectorAll<HTMLElement>("[data-track-section]")
      .forEach((node) => observer.observe(node));

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const clickable = target?.closest<HTMLElement>("[data-track-click]");
      if (!clickable) return;
      const section = clickable.dataset.trackClick ?? "";
      sendTrack("section_click", 0, section);
    };

    document.addEventListener("click", onClick);
    return () => {
      observer.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, [shouldTrack]);

  return null;
}
