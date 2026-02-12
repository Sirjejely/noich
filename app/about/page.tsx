export default function AboutPage() {
  const values = [
    {
      title: 'Scientific Integrity',
      desc: 'We follow evidence, transparency, and responsible science in all our work.',
    },
    {
      title: 'Climate Action',
      desc: 'We focus on measurable solutions that reduce risk and protect lives and ecosystems.',
    },
    {
      title: 'Innovation',
      desc: 'We build and test practical ideas that can scale across coastal communities.',
    },
    {
      title: 'Capacity Building',
      desc: 'We train and empower people, institutions, and communities to act effectively.',
    },
    {
      title: 'Resilience',
      desc: 'We strengthen systems to withstand shocks and recover faster.',
    },
    {
      title: 'Adaptation',
      desc: 'We support climate-smart strategies that fit local realities and long-term needs.',
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
    <div className="text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-ocean1.jpg')" }}
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-slate-950/40 to-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              About NOCIH
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-blue-100 leading-relaxed">
              Nigeria Ocean-Climate Innovation Hub (NOCIH) advances ocean-based climate innovations
              across the Gulf of Guinea and West Africa—connecting science, communities, and partners
              to deliver practical solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/40">
                Established: January 2026
              </span>
              <span className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/40">
                Based in Calabar, Nigeria
              </span>
              <span className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/40">
                Gulf of Guinea • West Africa
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-20">
        {/* Who we are */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>

          <div className="mt-5 space-y-5 text-slate-200 text-lg md:text-xl leading-relaxed">
            <p>
              Nigeria Ocean-Climate Innovation Hub (NOCIH) is a non-profit environmental organization
              based in Calabar, Nigeria, established in January 2026 to advance ocean-climate innovation
              and collaboration across the Gulf of Guinea and West Africa.
            </p>

            <p className="text-slate-300">
              NOCIH serves as a platform connecting science, technology, and communities to promote
              sustainable ocean practices and practical solutions to climate-related marine challenges.
              Our work strengthens resilience in coastal regions through research translation,
              partnerships, and locally relevant environmental technologies.
            </p>

            <p className="text-slate-300">
              Our activities align with the{' '}
              <span className="text-blue-300 font-semibold">United Nations Ocean Decade (2021–2030)</span>{' '}
              and the GEOS Programme objectives for the marine environment, contributing to evidence-driven
              action for healthier oceans and climate stability.
            </p>

            <p className="text-slate-300">
              We collaborate with universities, research institutions, government agencies, coastal communities,
              entrepreneurs, policymakers, and environmental organizations to accelerate technological and
              nature-based solutions to ocean-climate challenges in Nigeria and West Africa.
            </p>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Our Focus Areas</h2>
          <p className="mt-4 text-center text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We focus on building practical solutions and partnerships that translate evidence into action.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 hover:bg-white/10 transition"
              >
                <div className="text-4xl">{f.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-slate-300 text-base md:text-lg leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission / Vision / Values (flexible & beautiful) */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Mission */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-7 md:p-9 hover:bg-white/10 transition">
            <div className="text-4xl">🎯</div>
            <h3 className="mt-4 text-2xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-slate-200 text-lg md:text-xl leading-relaxed">
              To develop and scale ocean-climate solutions through innovation, collaboration,
              and capacity building.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-7 md:p-9 hover:bg-white/10 transition">
            <div className="text-4xl">🌍</div>
            <h3 className="mt-4 text-2xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-slate-200 text-lg md:text-xl leading-relaxed">
              A resilient West Africa where ocean ecosystems and coastal communities thrive
              in a changing climate.
            </p>
          </div>

          {/* Core Values summary */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-7 md:p-9 hover:bg-white/10 transition md:col-span-2 xl:col-span-1">
            <div className="text-4xl">🧭</div>
            <h3 className="mt-4 text-2xl font-semibold">Our Core Values</h3>
            <p className="mt-3 text-slate-200 text-lg md:text-xl leading-relaxed">
              The principles that guide our decisions, partnerships, and delivery.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
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

        {/* Values grid (detailed) */}
        <div className="mt-14">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Our Core Values</h2>
          <p className="mt-4 text-center text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            These values shape how we work, what we prioritize, and the standard we uphold.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-slate-300 text-base md:text-lg leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Alignment statement (optional but strong) */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-slate-950/40 p-7 md:p-10">
            <h3 className="text-2xl font-semibold">Alignment</h3>
            <p className="mt-3 text-slate-300 text-lg md:text-xl leading-relaxed">
              Our work aligns with the <span className="text-blue-300 font-semibold">UN Ocean Decade (2021–2030)</span>{' '}
              and supports evidence-led action for healthier oceans, stronger coastal resilience, and climate stability.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
