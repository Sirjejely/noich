import Link from 'next/link';

export default function HomePage() {
  const pillars = [
    {
      icon: '🌊',
      title: 'Ocean-Climate Innovation',
      desc: 'We build and test practical solutions for coastal and marine challenges.',
    },
    {
      icon: '🤝',
      title: 'Partnerships',
      desc: 'We connect academia, agencies, communities, and innovators to scale impact.',
    },
    {
      icon: '🎓',
      title: 'Capacity Building',
      desc: 'We train and empower stakeholders to act effectively and sustainably.',
    },
    {
      icon: '📍',
      title: 'Local Relevance',
      desc: 'We co-create with communities across Nigeria and West Africa.',
    },
  ];

  const highlights = [
    {
      tag: 'Innovation / mCDR',
      title: 'Ocean Alkalinity Enhancement',
      desc:
        'We research and promote safe, scalable approaches—using mineral alkalinity enhancement and ocean buffering processes—to support marine carbon dioxide removal (mCDR) while protecting marine ecosystems.',
    },
    {
      tag: 'Nature-based',
      title: 'Blue Carbon Solutions',
      desc:
        'We support mangrove restoration and coastal ecosystem protection to strengthen climate resilience and enhance long-term carbon storage.',
    },
    {
      tag: 'Technology / Data',
      title: 'Marine Monitoring & Innovation',
      desc:
        'We develop practical monitoring and data tools for pollution tracking, ecosystem observation, and evidence-led coastal decision-making.',
    },
  ];

  return (
    <div className="text-white">
      {/* HERO (centered on ocean background, no panel) */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-ocean.jpg')" }}
        />

        {/* overlays for readability */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-slate-950/45 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(59,130,246,0.18),transparent_55%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Nigeria Ocean-Climate <br className="hidden sm:block" />
              Innovation Hub
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Solving climate challenges with ocean-focused innovation, science, and community partnerships.
            </p>

            <p className="mt-4 text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              Advancing ocean-based climate solutions across the Gulf of Guinea and West Africa.
            </p>

            {/* Buttons (grid, not flex) */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4 max-w-2xl mx-auto">
              <Link
                href="/work"
                className="text-center px-7 py-3 rounded-2xl bg-blue-600/90 hover:bg-blue-600 font-semibold transition shadow-lg shadow-blue-900/25"
              >
                Explore Our Work
              </Link>

              <Link
                href="/contact"
                className="text-center px-7 py-3 rounded-2xl border border-white/15 hover:bg-white/5 font-semibold transition"
              >
                Get Involved
              </Link>

              <Link
                href="/about"
                className="text-center px-7 py-3 rounded-2xl border border-white/15 hover:bg-white/5 font-semibold transition"
              >
                About NOCIH
              </Link>
            </div>

            {/* Stats (centered grid) */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {[
                { value: '2026', label: 'Established' },
                { value: 'GoG', label: 'Gulf of Guinea Focus' },
                { value: 'West Africa', label: 'Regional Collaboration' },
                { value: 'Evidence → Action', label: 'Approach' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-slate-950/30 backdrop-blur p-4"
                >
                  <div className="text-xl md:text-2xl font-bold">{s.value}</div>
                  <div className="text-sm md:text-base text-slate-300 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">What we do</h2>
        <p className="mt-4 text-center text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          We combine science, technology, partnerships, and community engagement to drive measurable ocean-climate impact.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 hover:bg-white/10 transition"
            >
              <div className="text-4xl">{p.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-base md:text-lg leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 md:pb-24">
        <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-7 md:p-10">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Featured work areas</h2>
              <p className="mt-3 text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl">
                From marine carbon removal research to blue carbon restoration and coastal monitoring—our work is evidence-led and locally grounded.
              </p>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/5 font-semibold transition"
            >
              View all programs <span className="ml-2 translate-y-[1px]">→</span>
            </Link>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-5">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <span className="inline-block px-3 py-1 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/40">
                  {h.tag}
                </span>
                <h3 className="mt-4 text-xl md:text-2xl font-semibold text-blue-200">{h.title}</h3>
                <p className="mt-3 text-slate-300 text-base md:text-lg leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
