import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { updateRowByMatch } from "@/lib/sheets";

const projectSchema = z.object({
  id: z.string().min(1),
  title: z.string(),
  subtitle: z.string(),
  problem: z.string(),
  approach: z.string(),
  impact: z.string(),
  tools: z.string(),
  order: z.number(),
  is_published: z.boolean(),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = projectSchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const ok = await updateRowByMatch("projects", "id", parsed.data.id, {
    title: parsed.data.title,
    subtitle: parsed.data.subtitle,
    problem: parsed.data.problem,
    approach: parsed.data.approach,
    impact: parsed.data.impact,
    tools: parsed.data.tools,
    order: String(parsed.data.order),
    is_published: String(parsed.data.is_published),
    updated_at: new Date().toISOString(),
  });

  if (!ok) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
