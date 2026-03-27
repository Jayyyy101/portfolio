"use client";

import { useEffect, useRef } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { sendTrack } from "@/components/Tracker";

export function AuthButtons() {
  const { data: session } = useSession();
  const sentRef = useRef(false);

  useEffect(() => {
    if (!session?.user || sentRef.current) return;
    sentRef.current = true;
    sendTrack("login");
  }, [session]);

  if (session?.user) {
    return (
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span className="muted">{session.user.email}</span>
        <button
          className="btn secondary"
          onClick={() => {
            sendTrack("logout");
            signOut();
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button className="btn" onClick={() => signIn("google")}>
      Login with Google
    </button>
  );
}
