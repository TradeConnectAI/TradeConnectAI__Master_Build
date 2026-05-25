import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  return NextResponse.json({
    hasSupabaseUrl: Boolean(url),
    hasServiceRoleKey: Boolean(serviceKey),
    supabaseUrlPreview: url ? `${url.slice(0, 30)}...` : null,
  });
}
