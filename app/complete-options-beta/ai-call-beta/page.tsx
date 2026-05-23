"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Role = "assistant" | "customer" | "system";

type Message = {
  id: string;
  role: Role;
  text: string;
  at: string;
};

type Booking = {
  name: string;
  phone: string;
  service: string;
  postcode: string;
  wasteType: string;
  skipSize: string;
  dateWanted: string;
  permit: string;
  access: string;
  notes: string;
};

const emptyBooking: Booking = {
  name: "",
  phone: "",
  service: "",
  postcode: "",
  wasteType: "",
  skipSize: "",
  dateWanted: "",
  permit: "",
  access: "",
  notes: "",
};

const questions: { key: keyof Booking; label: string; prompt: string }[] = [
  {
    key: "service",
    label: "Service",
    prompt:
      "Thanks. Are you after a skip, grab hire, waste removal, aggregates, or something else?",
  },
  {
    key: "skipSize",
    label: "Skip size",
    prompt:
      "What size skip do you need? For example, 4 yard, 6 yard, 8 yard, or 12 yard. If you are not sure, tell me roughly what you are clearing.",
  },
  {
    key: "wasteType",
    label: "Waste type",
    prompt:
      "What type of waste is it? General waste, hardcore, soil, green waste, wood, mixed builders waste, or something else?",
  },
  {
    key: "postcode",
    label: "Postcode",
    prompt: "What postcode or area is the job in?",
  },
  {
    key: "dateWanted",
    label: "Preferred date",
    prompt: "What day would you ideally like delivery or collection?",
  },
  {
    key: "permit",
    label: "Permit",
    prompt:
      "Will the skip go on private land like a driveway, or on the road where a permit may be needed?",
  },
  {
    key: "access",
    label: "Access",
    prompt:
      "Are there any access issues? Narrow lane, parked cars, gates, low wires, steep drive, or anything the driver should know?",
  },
  {
    key: "name",
    label: "Customer name",
    prompt: "Can I take your name, please?",
  },
  {
    key: "phone",
    label: "Phone number",
    prompt:
      "And what is the best phone number for the office to confirm the booking?",
  },
];

function nowTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function uid(prefix = "id") {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function clean(input: string) {
  return input.trim().replace(/\s+/g, " ");
}

function containsAny(text: string, words: string[]) {
  const t = text.toLowerCase();
  return words.some((word) => t.includes(word));
}

function extractBooking(prev: Booking, text: string): Booking {
  const t = text.toLowerCase();
  const next = { ...prev };
  const raw = clean(text);

  if (!next.service) {
    if (containsAny(t, ["skip", "skips"])) next.service = "Skip hire";
    else if (containsAny(t, ["grab", "grab hire"])) next.service = "Grab hire";
    else if (containsAny(t, ["waste removal", "rubbish", "clearance"]))
      next.service = "Waste removal";
    else if (containsAny(t, ["aggregate", "aggregates", "stone", "sand"]))
      next.service = "Aggregates delivery";
  }

  if (!next.skipSize) {
    const sizeMatch = t.match(/\b(2|3|4|5|6|8|10|12|14|16)\s*(yard|yd|yards)?\b/);
    if (sizeMatch && containsAny(t, ["yard", "yd", "skip", "ton", "tonne"])) {
      next.skipSize = `${sizeMatch[1]} yard`;
    }
  }

  if (!next.wasteType) {
    if (containsAny(t, ["hardcore", "rubble", "brick", "concrete"]))
      next.wasteType = "Hardcore / rubble";
    else if (containsAny(t, ["soil", "earth", "dirt"]))
      next.wasteType = "Soil";
    else if (containsAny(t, ["green", "garden", "branches"]))
      next.wasteType = "Green waste";
    else if (containsAny(t, ["wood", "timber"]))
      next.wasteType = "Wood / timber";
    else if (containsAny(t, ["general", "mixed", "house", "garage", "builders"]))
      next.wasteType = "General / mixed waste";
  }

  if (!next.postcode) {
    const pc = raw.match(/\b[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}\b/i);
    if (pc) next.postcode = pc[0].toUpperCase();
    else if (containsAny(t, ["barry", "cardiff", "penarth", "llantwit", "bridgend", "cowbridge"])) {
      next.postcode = raw;
    }
  }

  if (!next.dateWanted) {
    if (
      containsAny(t, [
        "today",
        "tomorrow",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
        "next week",
        "asap",
      ])
    ) {
      next.dateWanted = raw;
    }
  }

  if (!next.permit) {
    if (containsAny(t, ["road", "street", "pavement", "permit"]))
      next.permit = "May need permit";
    else if (containsAny(t, ["drive", "driveway", "private land", "garden", "yard"]))
      next.permit = "Private land / likely no permit";
  }

  if (!next.access) {
    if (
      containsAny(t, [
        "narrow",
        "gate",
        "gates",
        "wire",
        "wires",
        "low",
        "steep",
        "parked",
        "cars",
        "lane",
        "access",
      ])
    ) {
      next.access = raw;
    }
  }

  if (!next.phone) {
    const phone = raw.match(/(\+44\s?7\d{3}|\b07\d{3})\s?\d{3}\s?\d{3}\b/);
    if (phone) next.phone = phone[0];
  }

  if (!next.name) {
    const nameMatch = raw.match(/(?:my name is|i am|i'm|this is)\s+([a-zA-Z][a-zA-Z\s'-]{1,40})/i);
    if (nameMatch) next.name = nameMatch[1].trim();
  }

  if (raw.length > 5) {
    next.notes = [next.notes, raw].filter(Boolean).slice(-6).join(" | ");
  }

  return next;
}

function nextQuestion(booking: Booking) {
  return questions.find((q) => !booking[q.key]);
}

function completionScore(booking: Booking) {
  const important: (keyof Booking)[] = [
    "service",
    "postcode",
    "wasteType",
    "dateWanted",
    "name",
    "phone",
  ];
  const got = important.filter((key) => booking[key]).length;
  return Math.round((got / important.length) * 100);
}

function getCallStatus(booking: Booking) {
  const score = completionScore(booking);
  if (score >= 100) return "Ready for admin review";
  if (score >= 65) return "Part captured";
  return "In progress";
}

export default function FreeAiCallBetaPage() {
  const [supported, setSupported] = useState(true);
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [saving, setSaving] = useState(false);
  const [booking, setBooking] = useState<Booking>(emptyBooking);
  const [saved, setSaved] = useState<{ callId: string; jobId: string } | null>(
    null
  );
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uid("msg"),
      role: "assistant",
      text:
        "Thanks for calling Complete Options beta. I can help capture a skip hire, grab hire, waste removal, or aggregates enquiry. Tell me what you need help with today.",
      at: nowTime(),
    },
  ]);

  const recognitionRef = useRef<any>(null);

  const score = completionScore(booking);
  const nextQ = nextQuestion(booking);

  const canSave = useMemo(() => {
    return Boolean(
      booking.service ||
        booking.postcode ||
        booking.wasteType ||
        booking.name ||
        booking.phone
    );
  }, [booking]);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-GB";

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onresult = (event: any) => {
      const text = event.results?.[0]?.[0]?.transcript || "";
      if (text) handleCustomerText(text);
    };

    recognitionRef.current = recognition;
  }, []);

  useEffect(() => {
    const first = messages[0]?.text;
    if (first) {
      setTimeout(() => speak(first), 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addMessage(role: Role, text: string) {
    setMessages((prev) => [
      ...prev,
      {
        id: uid("msg"),
        role,
        text,
        at: nowTime(),
      },
    ]);
  }

  function speak(text: string) {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    utterance.rate = 0.96;
    utterance.pitch = 1;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }

  function assistantReply(updated: Booking) {
    const q = nextQuestion(updated);

    let reply = "";

    if (completionScore(updated) >= 100) {
      reply =
        "Brilliant, I have enough to send this to the office for review. I will mark it as ready for confirmation. The team can check availability, price, permit needs, and call back if needed.";
    } else if (q) {
      reply = q.prompt;
    } else {
      reply =
        "I have captured the main details. The office can review this and confirm the next step.";
    }

    addMessage("assistant", reply);
    speak(reply);
  }

  function handleCustomerText(text: string) {
    const customerText = clean(text);

    addMessage("customer", customerText);

    const updated = extractBooking(booking, customerText);
    setBooking(updated);

    setTimeout(() => assistantReply(updated), 250);
  }

  function startListening() {
    setSaved(null);
    setError("");

    if (!recognitionRef.current) {
      setSupported(false);
      return;
    }

    try {
      recognitionRef.current.start();
    } catch {
      setListening(false);
    }
  }

  function stopSpeech() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    setSpeaking(false);
  }

  function resetCall() {
    stopSpeech();
    setBooking(emptyBooking);
    setSaved(null);
    setError("");
    setMessages([
      {
        id: uid("msg"),
        role: "assistant",
        text:
          "New call started. Tell me what service you need: skip hire, grab hire, waste removal, or aggregates.",
        at: nowTime(),
      },
    ]);
  }

  async function saveCall() {
    setSaving(true);
    setError("");
    setSaved(null);

    try {
      const response = await fetch("/api/voice-beta/calls", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: "Browser AI call beta",
          status: getCallStatus(booking),
          confidence: completionScore(booking),
          booking,
          transcript: messages,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to save call");
      }

      setSaved({
        callId: result.call.id,
        jobId: result.job.id,
      });

      const reply =
        "Saved to Supabase. This call and job are now available in the beta admin review screen.";
      addMessage("system", reply);
      speak(reply);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Could not save to Supabase";
      setError(message);
    } finally {
      setSaving(false);
    }
  }

  function manualQuickFill() {
    const sample =
      "I need an 8 yard skip for general builders waste in Barry CF62 7AB next Monday. It will go on the driveway. My name is Dean Horgan and my number is 07123 456789.";
    handleCustomerText(sample);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-6 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 md:p-8">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                Complete Options AI Beta
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                AI Call Handler
              </h1>
              <p className="mt-3 max-w-2xl text-slate-300">
                Browser voice beta with Supabase storage. Captures real
                enquiries, saves transcripts, and creates job cards for admin
                review.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100">
              <div className="font-black">{score}% captured</div>
              <div className="text-cyan-200/80">{getCallStatus(booking)}</div>
            </div>
          </div>

          {!supported && (
            <div className="mb-5 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4 text-sm text-amber-100">
              Voice recognition is not available in this browser. Use Chrome or
              Edge on desktop/mobile.
            </div>
          )}

          {error && (
            <div className="mb-5 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-sm text-red-100">
              Supabase save failed: {error}
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <button
              onClick={startListening}
              disabled={listening}
              className="rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {listening ? "Listening..." : "Start talking"}
            </button>

            <button
              onClick={stopSpeech}
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-bold text-white transition hover:bg-white/15"
            >
              Stop voice
            </button>

            <button
              onClick={saveCall}
              disabled={!canSave || saving}
              className="rounded-2xl border border-emerald-300/30 bg-emerald-300/15 px-5 py-4 font-bold text-emerald-100 transition hover:bg-emerald-300/20 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save to Supabase"}
            </button>

            <button
              onClick={resetCall}
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 font-bold text-white transition hover:bg-white/15"
            >
              New call
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              onClick={manualQuickFill}
              className="rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-4 py-2 text-sm font-bold text-fuchsia-100 hover:bg-fuchsia-300/20"
            >
              Test with sample customer
            </button>

            <a
              href="/complete-options-beta/admin/voice-beta"
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/15"
            >
              Open admin review
            </a>
          </div>

          {saved && (
            <div className="mt-5 rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-sm text-emerald-100">
              Saved to Supabase. Job and call are now in the beta admin area.
            </div>
          )}

          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/30 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-black">Live transcript</h2>
              <div className="text-xs text-slate-400">
                {listening ? "Mic active" : speaking ? "AI speaking" : "Ready"}
              </div>
            </div>

            <div className="max-h-[520px] space-y-3 overflow-auto pr-1">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`rounded-2xl p-4 ${
                    msg.role === "assistant"
                      ? "border border-cyan-300/20 bg-cyan-300/10"
                      : msg.role === "customer"
                      ? "border border-white/10 bg-white/10"
                      : "border border-emerald-300/20 bg-emerald-300/10"
                  }`}
                >
                  <div className="mb-1 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <span>{msg.role === "assistant" ? "AI assistant" : msg.role}</span>
                    <span>{msg.at}</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-100">{msg.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30">
            <h2 className="text-xl font-black">Captured booking</h2>
            <p className="mt-1 text-sm text-slate-400">
              The beta extracts useful job details as the customer talks.
            </p>

            <div className="mt-5 space-y-3">
              {questions.map((q) => (
                <div
                  key={q.key}
                  className="rounded-2xl border border-white/10 bg-black/25 p-4"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    {q.label}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    {booking[q.key] || "Not captured yet"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-xl font-black">Next question</h2>
            <p className="mt-3 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-slate-200">
              {nextQ?.prompt ||
                "Enough information captured. Save the call and review in admin."}
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

