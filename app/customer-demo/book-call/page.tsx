export default function BookCallPage() {
  return (
    <main className="min-min-min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <p className="text-cyan-300 font-semibold">Customer Demo</p>
          <h1 className="text-4xl font-bold">Book a Job</h1>
          <p className="text-slate-300 mt-2">
            Customers can request a callback or let the AI booking assistant capture the job details.
          </p>
        </div>

        <form className="rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-4">
          <Field label="Name" placeholder="Sarah Jenkins" />
          <Field label="Phone" placeholder="07700 900123" />
          <Field label="Postcode" placeholder="CF23 8AB" />
          <Field label="What do you need help with?" placeholder="Leaking kitchen sink" />
          <Field label="How urgent is it?" placeholder="Today / This week / Emergency" />

          <button type="button" className="w-full rounded-xl bg-cyan-400 text-slate-950 font-black py-3">
            Start AI Booking
          </button>
        </form>

        <div className="rounded-2xl border border-emerald-700 bg-slate-900 p-5">
          <h2 className="text-xl font-bold">AI Qualification Preview</h2>
          <p className="text-slate-300 mt-2">
            The assistant checks service area, urgency, budget fit, job type, and booking intent before sending anything to the tradesperson.
          </p>
        </div>
      </div>
    </main>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-sm text-slate-300">{label}</span>
      <input
        className="mt-2 w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-white"
        placeholder={placeholder}
      />
    </label>
  );
}



