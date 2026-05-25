import { NextResponse } from "next/server";

export async function GET() {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL || "info@tradeconnectai.co.uk";
  const fromEmail =
    process.env.LEAD_FROM_EMAIL || "TradeConnectAI <leads@send.tradeconnectai.co.uk>";

  const status = {
    hasResendApiKey: Boolean(resendApiKey),
    toEmail,
    fromEmail,
  };

  if (!resendApiKey) {
    return NextResponse.json({
      ok: false,
      reason: "RESEND_API_KEY is missing in this Vercel environment.",
      status,
    });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: "TradeConnectAI test email",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h1>TradeConnectAI test email</h1>
          <p>If you received this, Resend is working.</p>
          <p>Sent at ${new Date().toISOString()}</p>
        </div>
      `,
    }),
  });

  const text = await response.text();

  return NextResponse.json({
    ok: response.ok,
    statusCode: response.status,
    status,
    resendResponse: text,
  });
}
