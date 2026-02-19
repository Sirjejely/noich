import Image from "next/image";
import Link from "next/link";

type NewsPost = {
  title: string;
  excerpt: string;
  dateLabel: string;
  category: string;
  tag?: string;
  image?: string; // path under /public
  href?: string; // future detail page
  featured?: boolean;
};

const posts: NewsPost[] = [
  {
    featured: true,
    category: "Partnership",
    tag: "Ocean Acidification",
    dateLabel: "February 2026 • University of Calabar, Nigeria",
    title:
      "Support from The Ocean Foundation (TOF) Inc., USA for the BIOTTA Ocean Acidification Project in the Gulf of Guinea",
    excerpt:
      "On 11 February 2026, our partner and Scientific Advisor, Prof. Francis Emile Asuquo, received scientific equipment worth more than $20,000 from The Ocean Foundation (USA) under the BIOTTA Project—strengthening ocean acidification monitoring, capacity building, and SDG 14.3.1-aligned data generation in the Gulf of Guinea.",
    image: "/images/grant.jpg",
    // href: "/news/biotta-grant",
  },

  // Placeholders you can replace later:
  {
    category: "Field Activity",
    tag: "Monitoring",
    dateLabel: "Coming soon",
    title: "Gulf of Guinea field monitoring updates",
    excerpt:
      "Highlights from deployments, sampling, and instrumentation work across our project sites.",
  },
  {
    category: "Research",
    tag: "Data",
    dateLabel: "Coming soon",
    title: "New datasets and insights from OA observations",
    excerpt:
      "Progress on quality control, indicator reporting, and early observations relevant to SDG 14.3.1.",
  },
  {
    category: "Community",
    tag: "Awareness",
    dateLabel: "Coming soon",
    title: "Stakeholder engagement and awareness activities",
    excerpt:
      "Updates from sessions with students, NGOs, coastal communities, and policy stakeholders.",
  },
];

const featured = posts.find((p) => p.featured);
const latest = posts.filter((p) => !p.featured);

function Badge({
  children,
  tone = "slate",
}: {
  children: React.ReactNode;
  tone?: "slate" | "blue" | "emerald";
}) {
  const tones: Record<string, string> = {
    slate: "text-slate-200 border-white/10 bg-white/5",
    blue: "text-blue-200 border-blue-400/20 bg-blue-500/10",
    emerald: "text-emerald-200 border-emerald-400/20 bg-emerald-500/10",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export default function NewsPage() {
  return (
    // lighter background
    <div className="min-h-screen text-white bg-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-slate-900 to-slate-900" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-24 md:pb-12">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur">
              <span className="text-lg">📰</span>
              <span>NOCIH Newsroom</span>
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold">
              News & Updates
            </h1>

            <p className="mt-5 max-w-2xl text-xl md:text-2xl text-slate-200">
              Stories, progress updates, partnerships, and field activities from
              the Nigeria Ocean-Climate Innovation Hub.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        {/* FEATURED */}
        {featured && (
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md">
            <div className="grid lg:grid-cols-5">
              {/* image */}
              <div className="relative lg:col-span-3 bg-slate-800 flex items-center justify-center p-4">
                {featured.image ? (
                  <>
                    <div className="relative w-full h-[340px] md:h-[460px] lg:h-[560px]">
                      <Image
                        src={featured.image}
                        alt="BIOTTA project equipment received at the University of Calabar"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>

                    {/* subtle bottom gradient for caption readability */}
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs md:text-sm text-slate-100/90">
                        Prof. Francis Emile Asuquo (2nd left) and Prof. Francis
                        Nwosu (4th left) with staff receiving BIOTTA equipment on
                        arrival at the University of Calabar, Nigeria.
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="h-[340px] md:h-[460px] lg:h-[560px] w-full bg-slate-800/60" />
                )}
              </div>

              {/* text */}
              <div className="lg:col-span-2 p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="blue">{featured.category}</Badge>
                  {featured.tag ? (
                    <Badge tone="emerald">{featured.tag}</Badge>
                  ) : null}
                </div>

                <p className="mt-4 text-sm text-slate-200">
                  <span className="text-slate-100 font-medium">Featured</span>{" "}
                  • {featured.dateLabel}
                </p>

                <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
                  {featured.title}
                </h2>

                {/* Make intro closer + bigger */}
                <p className="mt-3 text-base md:text-lg text-slate-200 leading-relaxed">
                  {featured.excerpt}
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                  <h3 className="text-sm font-semibold text-slate-100">
                    Key highlights
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc pl-5">
                    <li>Equipment support valued at over $20,000</li>
                    <li>Pilot monitoring of OA levels and ecosystem effects</li>
                    <li>Capacity building and stakeholder awareness</li>
                    <li>SDG 14.3.1-aligned data generation</li>
                  </ul>
                </div>

                <p className="mt-5 text-slate-200 leading-relaxed">
                  <span className="text-slate-100 font-medium">
                    NOCIH scientific personnel
                  </span>{" "}
                  will be fully involved in the project.
                </p>

                {featured.href ? (
                  <div className="mt-8">
                    <Link
                      href={featured.href}
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-white/15 hover:border-blue-400/30 transition"
                    >
                      Read full story →
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        )}

        {/* LATEST + SIDEBAR */}
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Latest Updates */}
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold">
                  Latest updates
                </h3>
                <p className="mt-2 text-slate-200">
                  More news posts will appear here as we publish updates.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {latest.map((p) => (
                <div
                  key={p.title}
                  className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6 hover:bg-white/15 transition"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone="blue">{p.category}</Badge>
                    {p.tag ? <Badge tone="slate">{p.tag}</Badge> : null}
                  </div>

                  <p className="mt-3 text-xs text-slate-300">{p.dateLabel}</p>

                  <h4 className="mt-3 text-lg font-semibold leading-snug">
                    {p.title}
                  </h4>

                  <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                    {p.excerpt}
                  </p>

                  {p.href ? (
                    <div className="mt-5">
                      <Link
                        href={p.href}
                        className="text-sm font-medium text-blue-200 hover:text-blue-100"
                      >
                        Read more →
                      </Link>
                    </div>
                  ) : (
                    <div className="mt-5 text-sm font-medium text-slate-300">
                      Read more →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-7 h-fit">
            <h3 className="text-xl font-semibold">Quick facts</h3>

            <div className="mt-5 space-y-4 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-4">
                <p className="text-slate-100 font-medium">BIOTTA Project focus</p>
                <p className="mt-1">
                  Capacity building and reliable OA monitoring data for West
                  Africa.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-4">
                <p className="text-slate-100 font-medium">Standards alignment</p>
                <p className="mt-1">
                  IOC-UNESCO Indicator Methodology for SDG 14.3.1.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-4">
                <p className="text-slate-100 font-medium">NOCIH involvement</p>
                <p className="mt-1">
                  Scientific personnel will be fully involved in implementation
                  and monitoring activities.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/25 p-4">
              <p className="text-sm text-slate-200">
                Want to add more posts? Just append items to the{" "}
                <span className="text-slate-100 font-medium">posts</span> array
                at the top of this file.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
