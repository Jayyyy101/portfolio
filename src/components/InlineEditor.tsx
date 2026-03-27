"use client";

import { useState } from "react";

type InlineEditorProps = {
  canEdit: boolean;
  fieldKey: string;
  value: string;
};

export function InlineEditor({ canEdit, fieldKey, value }: InlineEditorProps) {
  const [draft, setDraft] = useState(value);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  if (!canEdit) return <p>{value}</p>;

  async function save() {
    setSaving(true);
    setStatus("");
    const res = await fetch("/api/portfolio/update", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ key: fieldKey, value: draft }),
    });
    setSaving(false);
    setStatus(res.ok ? "Saved" : "Failed");
  }

  return (
    <div className="grid">
      <textarea rows={4} value={draft} onChange={(e) => setDraft(e.target.value)} />
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button className="btn" onClick={save} disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </button>
        <span className="muted">{status}</span>
      </div>
    </div>
  );
}
