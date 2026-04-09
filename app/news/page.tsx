import Image from "next/image";
import Link from "next/link";

type NewsPost = {
  title: string;
  excerpt: string;
  dateLabel: string;
  category: string;
  tag?: string;
  image?: string;
  href?: string;
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
  },

  {
    category: "Field & Laboratory",
    tag: "OA Monitoring Campaign",
    dateLabel: "February 2026 • Tropical South Atlantic Ocean",
    title:
      "Ocean Acidification Monitoring Campaign by NOCIH–UNICAL Team",
    excerpt:
      "A combined team from NOCIH and the University of Calabar (UNICAL) conducted field sampling and laboratory analysis of ocean acidification parameters across coastal waters of the Tropical South Atlantic. This campaign strengthens regional monitoring capacity and advances SDG 14.3.1 data generation.",
    image: "/images/labana1.jpg",
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

/* 🔥 BEAUTIFUL FLUID GALLERY */
function FluidImageGallery() {
  const images = [
    "/images/labana1.jpg",
    "/images/labana2.jpg",
    "/images/labana3.jpg",
    "/images/labana4.jpg",
    "/images/fieldtrip1.jpg",
    "/images/fieldtrip2.jpg",
    "/images/fieldtrip3.jpg",
    "/images/fieldtrip4.jpg",
  ];

  return (
    <div className="mt-12">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6">
        Field & Laboratory Highlights
      </h3>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-800/40 backdrop-blur transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="relative w-full h-56">
              <Image
                src={src}
                alt="Ocean Acidification monitoring activity"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
              <p className="text-xs text-white/90">
                OA Monitoring • NOCIH × UNICAL • Feb 2026
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NewsPage() {
  return (
    <div className="min-h-screen text-white bg-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-slate-900 to-slate-900" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            📰 NOCIH Newsroom
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            News & Updates
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-xl text-slate-200">
            Stories, scientific progress, partnerships, and field activities
            from the Nigeria Ocean-Climate Innovation Hub.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-6xl mx-auto px-6">
        {featured && (
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md">
            <div className="grid lg:grid-cols-5">
              <div className="relative lg:col-span-3 h-[400px] md:h-[520px]">
                <Image
                  src={featured.image!}
                  alt="Featured"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="lg:col-span-2 p-8">
                <div className="flex gap-2 flex-wrap">
                  <Badge tone="blue">{featured.category}</Badge>
                  <Badge tone="emerald">{featured.tag}</Badge>
                </div>

                <p className="mt-3 text-sm text-slate-300">
                  Featured • {featured.dateLabel}
                </p>

                <h2 className="mt-4 text-3xl font-semibold">
                  {featured.title}
                </h2>

                <p className="mt-4 text-slate-200">
                  {featured.excerpt}
                </p>
              </div>
            </div>
          </article>
        )}
      </section>

      {/* 🔥 FIELD + LAB SECTION */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Field Monitoring & Laboratory Analysis
          </h2>

          <p className="mt-4 text-slate-200 max-w-3xl">
            These images capture real-time field sampling and laboratory
            analysis conducted by the combined NOCIH and University of Calabar
            (UNICAL) Ocean Acidification team in February 2026 across the
            Tropical South Atlantic coastal waters. Activities include in-situ
            measurements, sample handling, and analytical procedures supporting
            SDG 14.3.1 data generation.
          </p>

          <FluidImageGallery />
        </div>
      </section>

      {/* LATEST */}
      <section className="max-w-6xl mx-auto px-6 mt-16 pb-24">
        <h3 className="text-2xl font-semibold mb-6">Latest updates</h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {latest.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur hover:bg-white/15 transition"
            >
              <div className="flex gap-2 flex-wrap">
                <Badge tone="blue">{p.category}</Badge>
                {p.tag && <Badge>{p.tag}</Badge>}
              </div>

              <p className="mt-2 text-xs text-slate-300">
                {p.dateLabel}
              </p>

              <h4 className="mt-3 text-lg font-semibold">
                {p.title}
              </h4>

              <p className="mt-3 text-sm text-slate-200">
                {p.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}