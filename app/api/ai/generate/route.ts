import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      success: false,
      message: "AI generation is temporarily disabled.",
    },
    { status: 503 }
  );
}

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: "AI generation is temporarily disabled.",
    },
    { status: 503 }
  );
}