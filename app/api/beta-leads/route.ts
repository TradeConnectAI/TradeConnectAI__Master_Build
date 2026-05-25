import { NextResponse } from "next/server";
import { saveBetaLead, type BetaLead } from "@/lib/beta-leads";

function clean(value: FormDataEntryValue | null) {
  return String(value || "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const needs = formData
    .getAll("needs")
    .map((value) => String(value).trim())
    .filter(Boolean);

  const offer = clean(formData.get("offer")) || "Founding beta: free for first 15 companies in exchange for feedback";`n`n  const lead: BetaLead = {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `${Date.now()}`,
    source: clean(formData.get("source")) || "homepage",
    name: clean(formData.get("name")),
    business: clean(formData.get("business")),
    trade: clean(formData.get("trade")),
    teamSize: clean(formData.get("teamSize")),
    phone: clean(formData.get("phone")),
    email: clean(formData.get("email")),
    help: clean(formData.get("help")),
    needs,
    status: "New",
    createdAt: new Date().toISOString(),
  };

  console.log("TradeConnectAI beta lead", lead);

  await saveBetaLead(lead);

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL || "info@tradeconnectai.co.uk";
  const fromEmail =
    process.env.LEAD_FROM_EMAIL ||
    "TradeConnectAI <leads@send.tradeconnectai.co.uk>";

  if (resendApiKey) {
    const subject = `New free founding beta lead - ${
      lead.business || lead.name || "Website"
    }`;

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h1>New TradeConnectAI beta lead</h1>
        <p><strong>Source:</strong> ${escapeHtml(lead.source)}</p>`n        <p><strong>Offer:</strong> ${escapeHtml(offer)}</p>
        <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(lead.business)}</p>
        <p><strong>Trade:</strong> ${escapeHtml(lead.trade)}</p>
        <p><strong>Team size:</strong> ${escapeHtml(lead.teamSize)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
        <p><strong>Needs:</strong> ${escapeHtml(
          lead.needs.join(", ") || "Not specified"
        )}</p>
        <p><strong>Problem:</strong><br/>${escapeHtml(lead.help).replaceAll(
          "\n",
          "<br/>"
        )}</p>
        <p><strong>Created:</strong> ${escapeHtml(lead.createdAt)}</p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: lead.email || undefined,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to send beta lead email", errorText);
    }
  } else {
    console.warn("RESEND_API_KEY not set. Lead was logged/saved only.");
  }

  return NextResponse.redirect(new URL("/book-demo/thanks", request.url), {
    status: 303,
  });
}

