export type PlumberUrgency = "today" | "this_week" | "flexible";

export type PlumberJob = {
  id: string;
  customerName: string;
  phone: string;
  postcode: string;
  address: string;
  issue: string;
  urgency: PlumberUrgency;
  notes: string;
  status: "new" | "quoted" | "text_ready";
  createdAt: string;
  guidePricePounds: number;
};

export type PlumberEnquiryInput = {
  customerName: string;
  phone: string;
  postcode: string;
  address?: string;
  issue: string;
  urgency: PlumberUrgency;
  notes?: string;
};

export const PLUMBER_JOBS_STORAGE_KEY = "tcai_plumber_jobs_v1";

const URGENCY_LABEL: Record<PlumberUrgency, string> = {
  today: "today if possible",
  this_week: "this week",
  flexible: "when convenient",
};

export function urgencyLabel(urgency: PlumberUrgency) {
  return URGENCY_LABEL[urgency] || urgency;
}

export function suggestGuidePrice(issue: string, urgency: PlumberUrgency): number {
  const text = issue.toLowerCase();
  let base = 95;

  if (text.includes("boiler")) base = 120;
  else if (text.includes("leak") || text.includes("burst") || text.includes("flood"))
    base = 110;
  else if (text.includes("tap") || text.includes("washer")) base = 85;
  else if (text.includes("toilet") || text.includes("cistern")) base = 90;
  else if (text.includes("radiator") || text.includes("heating")) base = 105;
  else if (text.includes("blocked") || text.includes("drain") || text.includes("sink"))
    base = 100;
  else if (text.includes("install") || text.includes("replace")) base = 150;

  if (urgency === "today") base += 25;
  if (urgency === "flexible") base -= 10;

  return Math.max(65, base);
}

export function buildQuoteDraft(job: PlumberJob): string {
  const when = urgencyLabel(job.urgency);
  const lines = [
    `QUOTE DRAFT — for your review before sending`,
    ``,
    `To: ${job.customerName}`,
    `Phone: ${job.phone}`,
    `Postcode: ${job.postcode}`,
    job.address ? `Address: ${job.address}` : null,
    ``,
    `Job: ${job.issue}`,
    `Preferred timing: ${when}`,
    ``,
    `Guide price: £${job.guidePricePounds} (call-out / first visit)`,
    `Includes: attendance, diagnosis, and a clear next-step price if parts or further work are needed.`,
    `Does not include: major parts, full boiler swap, or unexpected extras — confirmed on site.`,
    ``,
    job.notes ? `Notes: ${job.notes}` : null,
    `Status: draft only — check and edit before you send.`,
  ];

  return lines.filter((line) => line !== null).join("\n");
}

export function buildCustomerText(job: PlumberJob): string {
  const first = job.customerName.trim().split(/\s+/)[0] || "there";
  const when = urgencyLabel(job.urgency);

  return [
    `Hi ${first}, thanks for getting in touch about ${job.issue.toLowerCase()}.`,
    `I can look at coming out ${when}.`,
    `Guide for the first visit is about £${job.guidePricePounds} — I'll confirm once I've seen it.`,
    `Reply YES and your address if you want me to book you in.`,
    `Thanks`,
  ].join(" ");
}

export function createPlumberJob(input: PlumberEnquiryInput): PlumberJob {
  const urgency = input.urgency || "this_week";
  const issue = input.issue.trim();
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `job_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  return {
    id,
    customerName: input.customerName.trim(),
    phone: input.phone.trim(),
    postcode: input.postcode.trim().toUpperCase(),
    address: (input.address || "").trim(),
    issue,
    urgency,
    notes: (input.notes || "").trim(),
    status: "new",
    createdAt: new Date().toISOString(),
    guidePricePounds: suggestGuidePrice(issue, urgency),
  };
}

export function loadJobsFromLocalStorage(): PlumberJob[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(PLUMBER_JOBS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as PlumberJob[]) : [];
  } catch {
    return [];
  }
}

export function saveJobsToLocalStorage(jobs: PlumberJob[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PLUMBER_JOBS_STORAGE_KEY, JSON.stringify(jobs));
}

export function upsertJobInLocalStorage(job: PlumberJob): PlumberJob[] {
  const existing = loadJobsFromLocalStorage().filter((j) => j.id !== job.id);
  const next = [job, ...existing].sort(
    (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt)
  );
  saveJobsToLocalStorage(next);
  return next;
}

export function getJobFromLocalStorage(id: string): PlumberJob | null {
  return loadJobsFromLocalStorage().find((j) => j.id === id) || null;
}
