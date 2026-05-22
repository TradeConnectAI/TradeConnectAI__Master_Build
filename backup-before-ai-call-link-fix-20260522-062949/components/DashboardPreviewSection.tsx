export default function DashboardPreview() {
  return (
    <section className="bg-[#020817] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-300">
            DASHBOARD PREVIEW
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Everything Organised In One Place
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            See new enquiries, booked jobs, missed calls and AI conversations from one clean dashboard.
          </p>
        </div>

        <div className="rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-blue-500/10 backdrop-blur-xl md:p-8">

          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <h3 className="text-2xl font-black">TradeConnectAI Dashboard</h3>
              <p className="mt-1 text-sm text-white/50">Today’s lead activity</p>
            </div>

            <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-bold text-green-300">
              Live
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            <div className="rounded-3xl bg-[#0b1220] p-6">
              <p className="text-sm text-white/50">New Leads</p>
              <p className="mt-3 text-4xl font-black text-blue-400">18</p>
            </div>

            <div className="rounded-3xl bg-[#0b1220] p-6">
              <p className="text-sm text-white/50">Jobs Booked</p>
              <p className="mt-3 text-4xl font-black text-blue-400">7</p>
            </div>

            <div className="rounded-3xl bg-[#0b1220] p-6">
              <p className="text-sm text-white/50">Missed Calls Saved</p>
              <p className="mt-3 text-4xl font-black text-blue-400">12</p>
            </div>

            <div className="rounded-3xl bg-[#0b1220] p-6">
              <p className="text-sm text-white/50">Avg Reply Time</p>
              <p className="mt-3 text-4xl font-black text-blue-400">4s</p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">

            <div className="rounded-3xl bg-[#0b1220] p-6">
              <h4 className="mb-5 text-xl font-bold">Latest AI Conversations</h4>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="font-bold">Emergency electrician needed</p>
                  <p className="mt-1 text-sm text-white/50">Cardiff • Qualified • Booking offered</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="font-bold">Boiler repair enquiry</p>
                  <p className="mt-1 text-sm text-white/50">Newport • Details captured • Sent to engineer</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="font-bold">Bathroom quote request</p>
                  <p className="mt-1 text-sm text-white/50">Caerphilly • Non-urgent • Follow-up scheduled</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#0b1220] p-6">
              <h4 className="mb-5 text-xl font-bold">Upcoming Bookings</h4>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                  <div>
                    <p className="font-bold">Fuse board issue</p>
                    <p className="mt-1 text-sm text-white/50">Today • 7:00pm</p>
                  </div>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-200">
                    Confirmed
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                  <div>
                    <p className="font-bold">Leak investigation</p>
                    <p className="mt-1 text-sm text-white/50">Tomorrow • 10:30am</p>
                  </div>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-200">
                    Confirmed
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                  <div>
                    <p className="font-bold">Quote follow-up</p>
                    <p className="mt-1 text-sm text-white/50">Friday • 2:00pm</p>
                  </div>
                  <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm text-yellow-200">
                    Pending
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}