import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Admin Dashboard (Disabled in Local Mode)</h1>
        <Link className="btn secondary" href="/">
          Back to Portfolio
        </Link>
      </div>

      <p className="muted">
        Authentication and database are temporarily disabled for local-first UI/content
        development. Re-enable auth + Sheets in the next phase.
      </p>
    </main>
  );
}
