"use client";

import { useEffect, useState } from "react";

type Analytics = {
  totals: number;
  byEvent: Record<string, number>;
  byPage: Record<string, number>;
};

export function AdminAnalytics() {
  const [data, setData] = useState<Analytics | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/admin/analytics")
      .then(async (r) => {
        if (!r.ok) throw new Error("Unauthorized or failed to fetch analytics");
        return r.json();
      })
      .then(setData)
      .catch((e: Error) => setError(e.message));
  }, []);

  if (error) return <p className="muted">{error}</p>;
  if (!data) return <p className="muted">Loading analytics...</p>;

  return (
    <div className="grid grid-2">
      <div className="card">
        <h3>Total Events</h3>
        <p>{data.totals}</p>
      </div>
      <div className="card">
        <h3>By Event</h3>
        <pre>{JSON.stringify(data.byEvent, null, 2)}</pre>
      </div>
      <div className="card">
        <h3>By Page</h3>
        <pre>{JSON.stringify(data.byPage, null, 2)}</pre>
      </div>
    </div>
  );
}
