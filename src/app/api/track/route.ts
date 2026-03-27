import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { appendSheetRow } from "@/lib/sheets";

const trackSchema = z.object({
  session_id: z.string().min(1),
  event_type: z.string().min(1),
  page: z.string().min(1),
  section: z.string().optional().default(""),
  duration_sec: z.number().optional().default(0),
  utm_source: z.string().optional().default(""),
  utm_medium: z.string().optional().default(""),
  utm_campaign: z.string().optional().default(""),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const payload = trackSchema.safeParse(await req.json());
  if (!payload.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const userAgent = req.headers.get("user-agent") ?? "";
  const now = new Date().toISOString();
  try {
    await appendSheetRow("views", [
      now,
      session?.user?.email ?? "anonymous",
      session?.user?.name ?? "Anonymous",
      payload.data.session_id,
      payload.data.event_type,
      payload.data.page,
      payload.data.section,
      String(payload.data.duration_sec),
      userAgent,
      payload.data.utm_source,
      payload.data.utm_medium,
      payload.data.utm_campaign,
    ]);
  } catch {
    return NextResponse.json(
      { success: false, warning: "Tracking skipped: Sheets not configured yet." },
      { status: 202 }
    );
  }

  return NextResponse.json({ success: true });
}
