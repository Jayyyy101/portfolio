import { NextResponse } from "next/server";
import { getPortfolioData } from "@/lib/portfolio";

export async function GET() {
  try {
    const data = await getPortfolioData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to load portfolio data", details: String(error) },
      { status: 500 }
    );
  }
}
