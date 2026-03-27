import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { updateContentValue } from "@/lib/sheets";

const updateSchema = z.object({
  key: z.string().min(1),
  value: z.string(),
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = updateSchema.safeParse(await req.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const ok = await updateContentValue(
    parsed.data.key,
    parsed.data.value,
    session.user.email
  );

  if (!ok) {
    return NextResponse.json({ error: "Content key not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
