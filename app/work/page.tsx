import Link from 'next/link';

export default function WorkPage() {
  const work = [
    {
      tag: 'Carbon Removal / Research',
      title: 'Ocean Alkalinity Enhancement',
      desc: `We research and promote safe, scalable approaches—using mineral alkalinity enhancement and ocean buffering processes—to support marine carbon dioxide removal (mCDR) while protecting marine ecosystems.`,
      img: '/images/alkalinity-1.jpg',
    },
    {
      tag: 'Nature-based Solutions',
      title: 'Blue Carbon Solutions',
      desc: `We support mangrove restoration, seagrass protection, and coastal ecosystem management to enhance carbon storage, strengthen biodiversity, and reduce climate risks for coastal communities.`,
      img: '/images/alkalinity-2.jpg',
    },
    {
      tag: 'Technology / Data',
      title: 'Marine Monitoring & Innovation',
      desc: `We develop practical technologies for ocean data collection, pollution tracking, and monitoring—enabling evidence-led decisions for healthier oceans and stronger resilience.`,
      img: '/images/ship.jpg',
    },
  ];

  const stats = [
    { k: 'Gulf of Guinea', v: 'Primary Region', sub: 'Nigeria & West Africa' },
    { k: 'Science-based', v: 'Approach', sub: 'Evidence → Action' },
    { k: 'Communities', v: 'Co-creation', sub: 'Locally relevant solutions' },
    { k: 'Partners', v: 'Collaboration', sub: 'Academia • NGOs • Government' },
  ];

  return (
    <div className="text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/our-work-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-slate-950/50 to-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Our Work
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-blue-100 leading-relaxed">
              We focus on innovative, science-based solutions to protect and restore ocean health
              while addressing climate change impacts across the Gulf of Guinea and West Africa.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-2xl bg-blue-600/85 hover:bg-blue-600 font-semibold"
              >
                Partner with us
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/5 font-semibold"
              >
                Learn about NOCIH
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 md:-mt-14 relative z-20">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur-lg p-6 md:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-sm md:text-base text-slate-300">{s.k}</div>
                <div className="mt-1 text-lg md:text-xl font-semibold">{s.v}</div>
                <div className="mt-1 text-sm md:text-base text-slate-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK CARDS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          What We Do
        </h2>
        <p className="mt-4 text-center text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Our programs combine ocean science, technology, partnerships, and community engagement to
          drive measurable climate impact and long-term resilience.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {work.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-all"
            >
              {/* image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/60 backdrop-blur">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* content */}
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-blue-200">{item.title}</h3>
                <p className="mt-3 text-slate-200 text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/5 font-semibold"
                  >
                    Get involved <span className="translate-y-[1px]">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-slate-950/40 p-7 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold">How we deliver impact</h3>
          <p className="mt-3 text-slate-300 text-lg md:text-xl leading-relaxed max-w-4xl">
            We combine evidence-led research, pilots and prototypes, stakeholder partnerships, and
            community capacity building—so solutions are safe, scalable, and locally relevant.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {['Research → Pilots', 'Technology & Data', 'Nature-based Solutions', 'Partnerships', 'Community Co-creation'].map(
              (t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-white/5 text-slate-100"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
