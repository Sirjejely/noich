import { teamMembers } from '@/lib/team';

export default function TeamPage() {
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

  return (
    <div className="overflow-hidden text-white">
      {/* HERO */}
      <section className="relative min-h-[76vh] overflow-hidden flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/team.gif')" }}
        />

        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-slate-950/55 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_55%)]" />

        <div className="pointer-events-none absolute -top-32 left-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-5 py-2 text-sm md:text-base text-cyan-100 backdrop-blur-md shadow-lg shadow-cyan-950/30">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            Meet the people behind <Brand small />
          </div>

          <h1 className="mt-7 text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            Our Team
          </h1>

          <p className="mt-7 text-xl md:text-2xl text-cyan-50/90 leading-relaxed max-w-5xl mx-auto">
            Passionate experts, researchers, innovators, and leaders driving
            ocean-climate innovation, collaboration, capacity building, and
            resilience across Nigeria, West Africa, and the wider African
            continent.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {[
              'Innovation',
              'Partnerships',
              'Capacity Building',
              'Research',
              'Resilience',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-950/50 px-5 py-3 text-sm md:text-base text-slate-100 backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-cyan-400/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="pointer-events-none absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative text-center">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200">
            Leadership & Contributors
          </span>

          <h2 className="mt-5 text-3xl md:text-5xl font-black">
            The team shaping Africa’s ocean-climate future
          </h2>

          <p className="mt-5 text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            <Brand small /> brings together interdisciplinary expertise in
            science, innovation, operations, policy, education, environmental
            monitoring, and community engagement.
          </p>
        </div>

        <div className="relative mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <div className="relative h-72 overflow-hidden bg-slate-900">
                <img
                  src={
                    member.image.startsWith('/team/')
                      ? member.image
                      : `/team/${member.image}`
                  }
                  alt={member.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-xs md:text-sm text-cyan-100 backdrop-blur">
                    <Brand small /> <span className="ml-1">Leadership</span>
                  </span>
                </div>
              </div>

              <div className="relative p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {member.name}
                </h3>

                <p className="mt-2 text-cyan-200 text-sm md:text-base font-medium leading-relaxed">
                  {member.role}
                </p>

                <div className="mt-5 flex justify-center">
                  <div className="h-[2px] w-20 rounded-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                </div>

                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  Supporting practical ocean-climate innovation, partnership,
                  and capacity building across Africa.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-20 rounded-[2rem] border border-cyan-300/15 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 p-8 md:p-12 text-center shadow-2xl shadow-cyan-950/30">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Our strength is collaboration
          </h2>

          <p className="mt-5 text-slate-300 text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
            <Brand /> brings together interdisciplinary expertise in science,
            innovation, operations, policy, environmental monitoring, and
            community engagement to deliver practical ocean-climate solutions
            with lasting impact.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              'Science',
              'Innovation',
              'Operations',
              'Policy',
              'Monitoring',
              'Community Engagement',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-slate-950/40 px-5 py-3 text-sm md:text-base text-slate-100 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}