export type BetaLead = {
  id: string;
  source: string;
  name: string;
  business: string;
  trade: string;
  teamSize: string;
  phone: string;
  email: string;
  help: string;
  needs: string[];
  status: "New" | "Contacted" | "Demo booked" | "Won" | "Lost";
  createdAt: string;
};

function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return { url, serviceKey };
}

export function hasLeadStorage() {
  const { url, serviceKey } = getSupabaseConfig();
  return Boolean(url && serviceKey);
}

export async function saveBetaLead(lead: BetaLead) {
  const { url, serviceKey } = getSupabaseConfig();

  if (!url || !serviceKey) {
    console.warn("Supabase lead storage is not configured. Lead was emailed/logged only.");
    return false;
  }

  const response = await fetch(`${url}/rest/v1/beta_leads`, {
    method: "POST",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      id: lead.id,
      source: lead.source,
      name: lead.name,
      business: lead.business,
      trade: lead.trade,
      team_size: lead.teamSize,
      phone: lead.phone,
      email: lead.email,
      help: lead.help,
      needs: lead.needs,
      status: lead.status,
      created_at: lead.createdAt,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Failed to save lead to Supabase", response.status, text);
    return false;
  }

  return true;
}

export async function getBetaLeads(): Promise<BetaLead[]> {
  const { url, serviceKey } = getSupabaseConfig();

  if (!url || !serviceKey) {
    return [];
  }

  const response = await fetch(
    `${url}/rest/v1/beta_leads?select=*&order=created_at.desc&limit=100`,
    {
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const text = await response.text();
    console.error("Failed to read leads from Supabase", response.status, text);
    return [];
  }

  const rows = (await response.json()) as Array<{
    id: string;
    source: string | null;
    name: string | null;
    business: string | null;
    trade: string | null;
    team_size: string | null;
    phone: string | null;
    email: string | null;
    help: string | null;
    needs: string[] | null;
    status: BetaLead["status"] | null;
    created_at: string;
  }>;

  return rows.map((row) => ({
    id: row.id,
    source: row.source || "",
    name: row.name || "",
    business: row.business || "",
    trade: row.trade || "",
    teamSize: row.team_size || "",
    phone: row.phone || "",
    email: row.email || "",
    help: row.help || "",
    needs: Array.isArray(row.needs) ? row.needs : [],
    status: row.status || "New",
    createdAt: row.created_at,
  }));
}
