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

const LEADS_KEY = "tradeconnectai:beta-leads";

function getKvConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  return { url, token };
}

export function hasLeadStorage() {
  const { url, token } = getKvConfig();
  return Boolean(url && token);
}

async function kvCommand<T>(command: unknown[]): Promise<T | null> {
  const { url, token } = getKvConfig();

  if (!url || !token) {
    return null;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("KV command failed", response.status, text);
    return null;
  }

  const json = await response.json();
  return json.result as T;
}

export async function saveBetaLead(lead: BetaLead) {
  if (!hasLeadStorage()) {
    console.warn("Lead storage is not configured. Lead was emailed/logged only.");
    return false;
  }

  await kvCommand(["LPUSH", LEADS_KEY, JSON.stringify(lead)]);
  return true;
}

export async function getBetaLeads(): Promise<BetaLead[]> {
  if (!hasLeadStorage()) {
    return [];
  }

  const result = await kvCommand<string[]>(["LRANGE", LEADS_KEY, 0, 99]);

  if (!Array.isArray(result)) {
    return [];
  }

  return result
    .map((item) => {
      try {
        return JSON.parse(item) as BetaLead;
      } catch {
        return null;
      }
    })
    .filter((lead): lead is BetaLead => Boolean(lead));
}
