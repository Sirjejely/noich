export default function AboutPage() {
  const values = [
    {
      title: 'Scientific Integrity',
      desc: 'We follow evidence, transparency, and responsible science in all our work.',
      icon: '🔬',
    },
    {
      title: 'Climate Action',
      desc: 'We focus on measurable solutions that reduce risk and protect lives and ecosystems.',
      icon: '🌱',
    },
    {
      title: 'Innovation',
      desc: 'We build and test practical ideas that can scale across coastal communities.',
      icon: '⚙️',
    },
    {
      title: 'Capacity Building',
      desc: 'We train and empower people, institutions, and communities to act effectively.',
      icon: '🎓',
    },
    {
      title: 'Resilience',
      desc: 'We strengthen systems to withstand shocks and recover faster.',
      icon: '🛡️',
    },
    {
      title: 'Adaptation',
      desc: 'We support climate-smart strategies that fit local realities and long-term needs.',
      icon: '🌊',
    },
  ];

  const focusAreas = [
    {
      title: 'Ocean-Climate Innovation',
      desc: 'Pilot practical solutions and translate research into tools communities can use.',
      icon: '⚙️',
    },
    {
      title: 'Collaboration & Partnerships',
      desc: 'Connect universities, agencies, communities, and innovators to scale impact.',
      icon: '🤝',
    },
    {
      title: 'Capacity Building',
      desc: 'Train students, coastal communities, and stakeholders in climate-smart practice.',
      icon: '🎓',
    },
    {
      title: 'Resilience & Adaptation',
      desc: 'Support locally relevant strategies that strengthen coastal resilience.',
      icon: '🌊',
    },
  ];

  return (
    <div className="overflow-hidden text-white">
      {/* HERO */}
      <section className="relative min-h-[78vh] overflow-hidden flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/hero-ocean1.jpg')" }}
        />

        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-slate-950/50 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_55%)]" />

        {/* Floating ocean glows */}
        <div className="pointer-events-none absolute -top-32 left-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-5 py-2 text-sm md:text-base text-cyan-100 backdrop-blur-md shadow-lg shadow-cyan-950/30">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            Ocean-Climate Innovation for Africa
          </div>

          <h1 className="mt-7 text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            About{' '}
            <span className="inline-flex items-end gap-1">
              <span>NOCIH</span>
              <span>-</span>
              <span className="inline-block font-serif italic font-black text-transparent bg-clip-text bg-[linear-gradient(90deg,#67e8f9,#ffffff,#38bdf8,#14b8a6,#67e8f9)] bg-[length:300%_100%] drop-shadow-[0_0_25px_rgba(103,232,249,0.45)] animate-[africaWave_3.5s_ease-in-out_infinite,africaShimmer_5s_linear_infinite]">
                Africa
              </span>
            </span>
          </h1>

          <p className="mt-7 text-xl md:text-2xl text-cyan-50/90 leading-relaxed max-w-4xl mx-auto">
            Novel Ocean-Climate Innovation Hydro-Initiative advances ocean-based
            climate innovation across Nigeria, the Gulf of Guinea, West Africa,
            and the wider African continent by connecting science, communities,
            technology, and strategic partners.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <span className="px-5 py-3 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/50 backdrop-blur-md text-slate-100">
              Established: January 2026
            </span>

            <span className="px-5 py-3 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/50 backdrop-blur-md text-slate-100">
              Based in Calabar, Nigeria
            </span>

            <span className="px-5 py-3 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/50 backdrop-blur-md text-slate-100">
              Gulf of Guinea • West Africa • Africa
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="pointer-events-none absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Who we are */}
        <div className="relative rounded-[2rem] border border-cyan-300/15 bg-white/[0.06] p-7 md:p-12 text-center shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

          <div className="mx-auto max-w-5xl">
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl md:text-5xl font-black leading-tight">
              We are building an African platform for ocean-climate innovation.
            </h2>

            <div className="mt-7 space-y-6 text-slate-200 text-lg md:text-xl leading-relaxed">
              <p>
                Novel Ocean-Climate Innovation Hydro-Initiative{' '}
                <span className="font-semibold text-cyan-200">(NOCIH-Africa)</span>{' '}
                is a non-profit environmental organization based in Calabar,
                Nigeria, established in January 2026 to advance ocean-climate
                innovation, research translation, and collaboration across the
                Gulf of Guinea, West Africa, and the wider African continent.
              </p>

              <p className="text-slate-300">
                NOCIH-Africa serves as a platform connecting science,
                technology, policy, and communities to promote sustainable ocean
                practices and practical responses to climate-related marine
                challenges. Our work supports coastal resilience through
                research, partnerships, environmental innovation, and locally
                relevant solutions.
              </p>

              <p className="text-slate-300">
                We also engage in building capacity among stakeholders through{' '}
                <span className="text-cyan-300 font-semibold">workshops</span>,{' '}
                <span className="text-cyan-300 font-semibold">
                  awareness creation
                </span>
                ,{' '}
                <span className="text-cyan-300 font-semibold">
                  innovative technologies
                </span>
                ,{' '}
                <span className="text-cyan-300 font-semibold">
                  strategic partnerships
                </span>
                , and{' '}
                <span className="text-cyan-300 font-semibold">
                  community-based engagement
                </span>
                .
              </p>

              <p className="text-slate-300">
                NOCIH-Africa collaborates with universities, research
                institutions, government agencies, coastal communities,
                entrepreneurs, policymakers, and environmental organizations to
                accelerate technological and nature-based responses to
                ocean-climate challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mt-16 text-center">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200">
            What We Focus On
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-black">
            Our Focus Areas
          </h2>

          <p className="mt-5 text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            NOCIH-Africa focuses on building practical solutions and
            partnerships that translate evidence into real ocean-climate action.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((f) => (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 text-center backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-4xl shadow-lg shadow-cyan-950/20">
                  {f.icon}
                </div>

                <h3 className="relative mt-5 text-xl font-bold text-white">
                  {f.title}
                </h3>

                <p className="relative mt-3 text-slate-300 text-base md:text-lg leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3 text-center">
          <div className="group rounded-[2rem] border border-cyan-300/15 bg-gradient-to-b from-cyan-400/10 to-white/[0.04] p-8 md:p-10 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-950/30">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-4xl">
              🎯
            </div>

            <h3 className="mt-5 text-2xl md:text-3xl font-bold">
              Our Mission
            </h3>

            <p className="mt-4 text-slate-200 text-lg md:text-xl leading-relaxed">
              To develop and scale ocean-climate solutions through innovation,
              collaboration, research translation, and capacity building.
            </p>
          </div>

          <div className="group rounded-[2rem] border border-cyan-300/15 bg-gradient-to-b from-blue-400/10 to-white/[0.04] p-8 md:p-10 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-950/30">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-400/10 text-4xl">
              🌍
            </div>

            <h3 className="mt-5 text-2xl md:text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-4 text-slate-200 text-lg md:text-xl leading-relaxed">
              A resilient Africa where ocean ecosystems and coastal communities
              thrive in a changing climate.
            </p>
          </div>

          <div className="group rounded-[2rem] border border-cyan-300/15 bg-gradient-to-b from-teal-400/10 to-white/[0.04] p-8 md:p-10 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-950/30 md:col-span-2 xl:col-span-1">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-400/10 text-4xl">
              🧭
            </div>

            <h3 className="mt-5 text-2xl md:text-3xl font-bold">
              Our Core Values
            </h3>

            <p className="mt-4 text-slate-200 text-lg md:text-xl leading-relaxed">
              The principles that guide NOCIH-Africa’s decisions, partnerships,
              programmes, and delivery.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                'Scientific Integrity',
                'Climate Action',
                'Innovation',
                'Capacity Building',
                'Resilience',
                'Adaptation',
              ].map((v) => (
                <span
                  key={v}
                  className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/40 text-slate-100"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Values */}
        <div className="mt-18 md:mt-20 text-center">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200">
            What Guides Us
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-black">
            Our Core Values
          </h2>

          <p className="mt-5 text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            These values shape how NOCIH-Africa works, what we prioritize, and
            the standards we uphold in every partnership and programme.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 text-center backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-slate-950/50 text-3xl">
                  {v.icon}
                </div>

                <h3 className="mt-5 text-xl md:text-2xl font-bold text-white">
                  {v.title}
                </h3>

                <p className="mt-3 text-slate-300 text-base md:text-lg leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 rounded-[2rem] border border-cyan-300/15 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 p-8 md:p-12 text-center shadow-2xl shadow-cyan-950/30">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Partner with{' '}
            <span className="inline-flex items-end gap-1">
              <span>NOCIH</span>
              <span>-</span>
              <span className="inline-block font-serif italic font-black text-transparent bg-clip-text bg-[linear-gradient(90deg,#67e8f9,#ffffff,#38bdf8,#14b8a6,#67e8f9)] bg-[length:300%_100%] drop-shadow-[0_0_20px_rgba(103,232,249,0.35)] animate-[africaWave_3.5s_ease-in-out_infinite,africaShimmer_5s_linear_infinite]">
                Africa
              </span>
            </span>
          </h2>

          <p className="mt-5 max-w-4xl mx-auto text-slate-300 text-lg md:text-xl leading-relaxed">
            We welcome collaboration with researchers, universities,
            institutions, coastal communities, funders, innovators, and
            policy-focused partners committed to practical ocean-climate action
            across Africa.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-7 py-4 text-cyan-100 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:border-cyan-200/60"
            >
              Get Involved
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-4 text-slate-100 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-cyan-300/40"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}