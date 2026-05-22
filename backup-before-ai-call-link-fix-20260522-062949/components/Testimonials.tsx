export default function Testimonials() {
  return (
    <section className="bg-[#030b18] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-blue-300">
            TESTIMONIALS
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Trades Businesses Love It
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/70">
            Built to help busy trades stop missing leads and win more work.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* TESTIMONIAL 1 */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-lg leading-relaxed text-white/80">
              “We were constantly missing calls while on jobs. TradeConnectAI
              now handles enquiries instantly and books work automatically.”
            </p>

            <div className="mt-8">
              <p className="font-bold">James H.</p>
              <p className="text-sm text-white/50">
                Electrical Contractor
              </p>
            </div>
          </div>

          {/* TESTIMONIAL 2 */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-lg leading-relaxed text-white/80">
              “The missed call recovery alone has paid for itself. Customers get
              replies instantly instead of waiting hours.”
            </p>

            <div className="mt-8">
              <p className="font-bold">Sarah T.</p>
              <p className="text-sm text-white/50">
                Plumbing Business Owner
              </p>
            </div>
          </div>

          {/* TESTIMONIAL 3 */}
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-lg leading-relaxed text-white/80">
              “Feels like having a full-time receptionist without the overhead.
              It keeps the business organised automatically.”
            </p>

            <div className="mt-8">
              <p className="font-bold">Michael R.</p>
              <p className="text-sm text-white/50">
                Property Maintenance
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}