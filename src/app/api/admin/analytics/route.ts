import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { readSheet } from "@/lib/sheets";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await readSheet("views");
  if (!rows.length) return NextResponse.json({ totals: 0, byEvent: {}, byPage: {} });

  const [header, ...body] = rows;
  const eventIdx = header.indexOf("event_type");
  const pageIdx = header.indexOf("page");
  const byEvent: Record<string, number> = {};
  const byPage: Record<string, number> = {};

  body.forEach((row) => {
    const event = row[eventIdx] ?? "unknown";
    const page = row[pageIdx] ?? "unknown";
    byEvent[event] = (byEvent[event] ?? 0) + 1;
    byPage[page] = (byPage[page] ?? 0) + 1;
  });

  return NextResponse.json({
    totals: body.length,
    byEvent,
    byPage,
  });
}
