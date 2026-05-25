import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const lead = {
    name: String(formData.get("name") || ""),
    business: String(formData.get("business") || ""),
    trade: String(formData.get("trade") || ""),
    phone: String(formData.get("phone") || ""),
    email: String(formData.get("email") || ""),
    help: String(formData.get("help") || ""),
    createdAt: new Date().toISOString(),
  };

  console.log("TradeConnectAI beta lead", lead);

  return NextResponse.redirect(new URL("/?beta=thanks#beta", request.url), {
    status: 303,
  });
}
