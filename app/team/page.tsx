import { teamMembers } from '@/lib/team';

export default function TeamPage() {
  return (
    <div className="text-white">
      {/* HERO / BACKGROUND */}
      <section className="relative overflow-hidden">
        {/* GIF background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/team.gif')" }}
        />

        {/* overlays to make portraits pop */}
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-slate-950/55 to-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-18 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Our Team
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-blue-100 leading-relaxed">
              Passionate experts and leaders driving ocean-climate innovation and collaboration in West Africa.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/40 backdrop-blur">
                Innovation
              </span>
              <span className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/40 backdrop-blur">
                Partnerships
              </span>
              <span className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/40 backdrop-blur">
                Capacity Building
              </span>
              <span className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/40 backdrop-blur">
                Resilience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/30"
            >
              {/* image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image.startsWith('/team/') ? member.image : `/team/${member.image}`}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.07] transition-transform duration-700"
                  loading="lazy"
                />
                {/* subtle bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
              </div>

              {/* content */}
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-semibold">{member.name}</h3>
                <p className="mt-2 text-blue-200 text-sm md:text-base font-medium">
                  {member.role}
                </p>

                {/* stylish divider */}
                <div className="mt-5 flex justify-center">
                  <div className="h-[2px] w-16 rounded-full bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-blue-500/40" />
                </div>

                {/* optional badge */}
                <div className="mt-4">
                  <span className="inline-block px-4 py-2 rounded-full text-xs md:text-sm border border-white/10 bg-slate-950/40 text-slate-100">
                    NOCIH Leadership
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-slate-950/40 p-7 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold">Our strength is collaboration</h2>
          <p className="mt-3 text-slate-300 text-lg md:text-xl leading-relaxed max-w-4xl">
            We bring together interdisciplinary expertise—science, innovation, operations, policy, and community engagement—
            to deliver practical ocean-climate solutions with lasting impact.
          </p>
        </div>
      </section>
    </div>
  );
}
