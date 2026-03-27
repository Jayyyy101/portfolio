import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { updateRowByMatch } from "@/lib/sheets";

const experienceSchema = z.object({
  id: z.string().min(1),
  company: z.string(),
  role: z.string(),
  start_date: z.string(),
  end_date: z.string(),
  summary: z.string(),
  highlights_json: z.string(),
  order: z.number(),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = experienceSchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const ok = await updateRowByMatch("experience", "id", parsed.data.id, {
    company: parsed.data.company,
    role: parsed.data.role,
    start_date: parsed.data.start_date,
    end_date: parsed.data.end_date,
    summary: parsed.data.summary,
    highlights_json: parsed.data.highlights_json,
    order: String(parsed.data.order),
    updated_at: new Date().toISOString(),
  });

  if (!ok) {
    return NextResponse.json({ error: "Experience not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
