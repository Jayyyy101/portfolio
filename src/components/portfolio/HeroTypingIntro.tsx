"use client";

import { useEffect, useRef, useState } from "react";

const LINE = "Hi, my name is";

/** Typing-line intro; respects prefers-reduced-motion (full line, no animation). */
export function HeroTypingIntro() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const run = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setText("");
      setShowCursor(true);

      if (reduce.matches) {
        setText(LINE);
        setShowCursor(false);
        return;
      }

      let i = 0;
      intervalRef.current = setInterval(() => {
        i += 1;
        setText(LINE.slice(0, i));
        if (i >= LINE.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          intervalRef.current = null;
          setShowCursor(false);
        }
      }, 42);
    };

    run();
    reduce.addEventListener("change", run);
    return () => {
      reduce.removeEventListener("change", run);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <p className="hero-section__intro" aria-hidden="true">
      <span>{text}</span>
      {showCursor ? <span className="hero-section__intro-cursor">▍</span> : null}
    </p>
  );
}
