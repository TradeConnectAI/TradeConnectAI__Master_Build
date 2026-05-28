import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("barry_beta_auth")?.value;

  return NextResponse.json({
    authenticated: auth === "yes",
  });
}
