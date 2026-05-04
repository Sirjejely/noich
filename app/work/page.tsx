import Link from 'next/link';

export default function WorkPage() {
  const Brand = ({ small = false }: { small?: boolean }) => (
    <span className="inline-flex items-end gap-1 font-bold">
      <span>NOCIH</span>
      <span>-</span>
      <span
        className={[
          'inline-block font-serif italic font-black text-transparent bg-clip-text',
          'bg-[linear-gradient(90deg,#67e8f9,#ffffff,#38bdf8,#14b8a6,#67e8f9)]',
          'bg-[length:300%_100%] drop-shadow-[0_0_18px_rgba(103,232,249,0.35)]',
          'animate-[africaWave_3.5s_ease-in-out_infinite,africaShimmer_5s_linear_infinite]',
          small ? 'text-base md:text-lg' : '',
        ].join(' ')}
      >
        Africa
      </span>
    </span>
  );

  const work = [
    {
      tag: 'Carbon Removal / Research',
      title: 'Ocean Alkalinity Enhancement',
      desc: `We research and promote safe, scalable approaches using mineral alkalinity enhancement and ocean buffering processes to support marine carbon dioxide removal while protecting marine ecosystems.`,
      img: '/images/alkalinity-1.jpg',
      icon: '🧪',
    },
    {
      tag: 'Nature-based Solutions',
      title: 'Blue Carbon Solutions',
      desc: `We support mangrove restoration, seagrass protection, and coastal ecosystem management to enhance carbon storage, strengthen biodiversity, and reduce climate risks for coastal communities.`,
      img: '/images/alkalinity-2.jpg',
      icon: '🌿',
    },
    {
      tag: 'Technology / Data',
      title: 'Marine Monitoring & Innovation',
      desc: `We develop practical technologies for ocean data collection, pollution tracking, and monitoring, enabling evidence-led decisions for healthier oceans and stronger resilience.`,
      img: '/images/ship.jpg',
      icon: '🛰️',
    },
  ];

  const stats = [
    {
      k: 'Primary Region',
      v: 'Gulf of Guinea',
      sub: 'Nigeria • West Africa • Africa',
    },
    {
      k: 'Approach',
      v: 'Science-based',
      sub: 'Evidence translated into action',
    },
    {
      k: 'Delivery Model',
      v: 'Co-creation',
      sub: 'Community-led and locally relevant',
    },
    {
      k: 'Network',
      v: 'Partnerships',
      sub: 'Academia • NGOs • Government',
    },
  ];

  const delivery = [
    {
      title: 'Research',
      desc: 'We generate and translate evidence for practical ocean-climate decision-making.',
      icon: '🔬',
    },
    {
      title: 'Pilots',
      desc: 'We test safe, scalable models that can work in real coastal settings.',
      icon: '🧭',
    },
    {
      title: 'Technology',
      desc: 'We use data, sensors, and practical tools to support monitoring and innovation.',
      icon: '⚙️',
    },
    {
      title: 'Communities',
      desc: 'We build capacity through training, awareness, and local engagement.',
      icon: '🤝',
    },
  ];

  return (
    <div className="overflow-hidden text-white">
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/our-work-bg.jpg')" }}
        />

        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-slate-950/50 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_55%)]" />

        <div className="pointer-events-none absolute -top-32 left-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-5 py-2 text-sm md:text-base text-cyan-100 backdrop-blur-md shadow-lg shadow-cyan-950/30">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            Science • Ocean Innovation • African Resilience
          </div>

          <h1 className="mt-7 text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            Our Work
          </h1>

          <p className="mt-7 text-xl md:text-2xl text-cyan-50/90 leading-relaxed max-w-5xl mx-auto">
            <Brand /> focuses on innovative, science-based solutions that
            protect ocean health, restore coastal ecosystems, strengthen
            communities, and respond to climate change impacts across Nigeria,
            the Gulf of Guinea, West Africa, and the wider African continent.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-7 py-4 text-cyan-100 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:border-cyan-200/60"
            >
              Partner with us
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-slate-100 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-cyan-300/40"
            >
              Learn about <Brand small />
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 -mt-14">
        <div className="rounded-[2rem] border border-cyan-300/15 bg-slate-950/75 backdrop-blur-xl p-6 md:p-8 shadow-2xl shadow-cyan-950/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.v}
                className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-center transition duration-500 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-400/10"
              >
                <div className="text-sm md:text-base text-cyan-300">
                  {s.k}
                </div>
                <div className="mt-2 text-xl md:text-2xl font-bold text-white">
                  {s.v}
                </div>
                <div className="mt-2 text-sm md:text-base text-slate-400">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK CARDS */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="pointer-events-none absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative text-center">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200">
            What We Do
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-black">
            Practical ocean-climate solutions for Africa
          </h2>

          <p className="mt-5 text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our programmes combine ocean science, marine technology,
            community engagement, institutional partnerships, and nature-based
            solutions to drive measurable climate impact and long-term coastal
            resilience.
          </p>
        </div>

        <div className="relative mt-12 grid gap-7 lg:grid-cols-3">
          {work.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute top-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-slate-950/60 text-3xl backdrop-blur-md shadow-lg shadow-cyan-950/30">
                  {item.icon}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-block rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm md:text-base text-cyan-100 backdrop-blur">
                    {item.tag}
                  </span>
                </div>
              </div>

              <div className="relative p-7 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-cyan-100">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-7">
                  <Link
                    href="/contact"
                    className="group/link inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-6 py-3 font-semibold text-cyan-100 transition duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/10"
                  >
                    Get involved
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DELIVERY MODEL */}
        <div className="mt-20 text-center">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200">
            How We Deliver Impact
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-black">
            From evidence to action
          </h2>

          <p className="mt-5 text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            <Brand /> works through a simple but powerful pathway: research,
            testing, technology, partnership, and community ownership.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {delivery.map((d) => (
              <div
                key={d.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 text-center backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-4xl shadow-lg shadow-cyan-950/20">
                  {d.icon}
                </div>

                <h3 className="mt-5 text-xl md:text-2xl font-bold text-white">
                  {d.title}
                </h3>

                <p className="mt-3 text-slate-300 text-base md:text-lg leading-relaxed">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED IMPACT STRIP */}
        <div className="mt-20 rounded-[2rem] border border-cyan-300/15 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 p-8 md:p-12 text-center shadow-2xl shadow-cyan-950/30">
          <h3 className="text-3xl md:text-5xl font-black leading-tight">
            Building measurable ocean-climate impact with <Brand />
          </h3>

          <p className="mt-5 max-w-5xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed">
            We combine evidence-led research, pilots and prototypes,
            stakeholder partnerships, marine monitoring, and community capacity
            building so solutions are safe, scalable, inclusive, and locally
            relevant.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              'Research → Pilots',
              'Technology & Data',
              'Nature-based Solutions',
              'Marine Monitoring',
              'Partnerships',
              'Community Co-creation',
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-slate-950/40 px-5 py-3 text-sm md:text-base text-slate-100 backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-7 py-4 text-cyan-100 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:border-cyan-200/60"
            >
              Partner with us
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-slate-100 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-cyan-300/40"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}