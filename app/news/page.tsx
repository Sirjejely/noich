'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';

type NewsPost = {
  title: string;
  excerpt: ReactNode;
  dateLabel: string;
  category: string;
  tag?: string;
  image?: string;
};

function Brand({ small = false }: { small?: boolean }) {
  return (
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
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-cyan-300/20 bg-white/10 px-3 py-1 text-xs text-cyan-100 backdrop-blur-md">
      {children}
    </span>
  );
}

const previousNews: NewsPost[] = [
  {
    category: 'Partnership',
    tag: 'Ocean Acidification',
    dateLabel: 'February 2026 • University of Calabar, Nigeria',
    title:
      'Support from The Ocean Foundation Inc., USA for the BIOTTA Ocean Acidification Project in the Gulf of Guinea',
    excerpt: (
      <>
        On 11 February 2026, Prof. Francis Emile Asuquo received scientific
        equipment worth more than $20,000 from The Ocean Foundation, USA,
        strengthening Ocean Acidification monitoring and SDG 14.3.1 data
        generation through <Brand small /> and University of Calabar
        collaboration.
      </>
    ),
    image: '/images/grant.jpg',
  },
];

const featured = previousNews[0];

function FluidImageGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  const images = [
    '/images/labana1.jpg',
    '/images/labana2.jpg',
    '/images/labana3.jpg',
    '/images/labana4.jpg',
    '/images/fieldtrip1.jpg',
    '/images/fieldtrip2.jpg',
    '/images/fieldtrip3.jpg',
    '/images/fieldtrip4.jpg',
  ];

  return (
    <>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <button
            type="button"
            key={src}
            onClick={() => setSelected(src)}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] text-left shadow-xl shadow-cyan-950/20 transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-2xl hover:shadow-cyan-950/40"
          >
            <div className="relative h-56 w-full">
              <Image
                src={src}
                alt={`Ocean Acidification monitoring field and laboratory activity ${
                  i + 1
                }`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />

            <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm font-medium text-cyan-100">
                Ocean Acidification Monitoring
              </p>
              <p className="mt-1 text-xs text-slate-300">
                NOCIH-Africa × UNICAL • February 2026
              </p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected}
              alt="Expanded Ocean Acidification monitoring image"
              fill
              className="object-contain"
            />

            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-2xl text-white backdrop-blur-md transition hover:bg-white/20"
              onClick={() => setSelected(null)}
              aria-label="Close image"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function ProjectStatus() {
  const statusItems = [
    ['Field Sample Collection', 'Ongoing', '🌊'],
    ['Laboratory Analysis', 'Ongoing', '🔬'],
    ['Monitoring, Reporting & Verification', 'Pending', '📊'],
  ];

  return (
    <div className="mt-20 text-center">
      <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200">
        Project Status
      </span>

      <h3 className="mt-5 text-3xl md:text-5xl font-black">
        Project Status & Data Pipeline
      </h3>

      <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
        The Ocean Acidification monitoring project is currently ongoing, with
        active field sample collection and laboratory analysis. Monitoring,
        Reporting and Verification activities will follow after data validation.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {statusItems.map(([title, status, icon]) => (
          <div
            key={title}
            className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 text-center backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:shadow-2xl hover:shadow-cyan-950/30"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-4xl shadow-lg shadow-cyan-950/20">
              {icon}
            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              {status}
            </p>

            <h4 className="mt-3 text-xl font-bold text-white">{title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

function SamplingMap() {
  return (
    <div className="mt-20 text-center">
      <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200">
        Sampling Locations
      </span>

      <h3 className="mt-5 text-3xl md:text-5xl font-black">
        Gulf of Guinea field monitoring area
      </h3>

      <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
        The Ocean Acidification monitoring campaign is being conducted across
        the coastal waters of the Ibeno–Okposo Atlantic Ocean segment of the
        Gulf of Guinea by the combined teams of <Brand small /> and University
        of Calabar researchers. The project will continue until the end of
        December 2026.
      </p>

      <div className="mt-10 h-[420px] w-full overflow-hidden rounded-[2rem] border border-cyan-300/15 shadow-2xl shadow-cyan-950/30">
        <iframe
          title="Ibeno Akwa Ibom Nigeria sampling location map"
          src="https://maps.google.com/maps?q=Ibeno%20Akwa%20Ibom%20Nigeria&t=&z=7&ie=UTF8&iwloc=&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function NewsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden text-center">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/our-work-bg.jpg')" }}
        />

        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-slate-950/55 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_55%)]" />

        <div className="pointer-events-none absolute -top-32 left-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:px-8 md:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/10 px-5 py-2 text-sm text-cyan-100 shadow-lg shadow-cyan-950/30 backdrop-blur-md md:text-base">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
            </span>
            Latest updates from <Brand small />
          </div>

          <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">
            News & Updates
          </h1>

          <p className="mx-auto mt-7 max-w-5xl text-xl leading-relaxed text-cyan-50/90 md:text-2xl">
            Scientific progress, field activities, partnerships, and project
            milestones from <Brand /> as we build ocean-climate innovation
            across Nigeria, West Africa, and the wider African continent.
          </p>
        </div>
      </section>

      
      <section className="relative z-20 mx-auto -mt-14 max-w-7xl px-6 lg:px-8">
        <article className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-slate-950/85 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
          
          <div className="relative w-full overflow-hidden bg-white">
            <div className="relative mx-auto w-full aspect-[879/624]">
              <Image
                src="/images/banner.jpeg"
                alt="World Oceans Day 2026 public lecture banner"
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="p-8 text-center md:p-12 lg:p-14">
            <div className="flex flex-wrap justify-center gap-2">
              <Badge>World Oceans Day</Badge>
              <Badge>Public Lecture</Badge>
              <Badge>Marine Carbon Dioxide Removal</Badge>
            </div>

            <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
              Monday, 8th June, 2026 • University of Calabar, Nigeria
            </p>

            <h2 className="mx-auto mt-5 max-w-6xl text-3xl font-black leading-tight text-white md:text-5xl">
              World Oceans Day 2026 Celebration
            </h2>

            <p className="mx-auto mt-6 max-w-5xl text-lg leading-relaxed text-slate-300 md:text-xl">
              <Brand small /> in collaboration with MACORN-UNICAL, the
              Institute of Oceanography, UNICAL, and the Faculty of
              Oceanography, UNICAL, all in the University of Calabar, Nigeria,
              are jointly celebrating World Oceans Day 2026 with the theme:{' '}
              <span className="font-semibold text-cyan-100">
                “REIMAGINE: BEYOND THE WORLD WE KNOW — A NEW RELATIONSHIP WITH
                OUR OCEAN.”
              </span>
            </p>

            <div className="mx-auto mt-10 grid max-w-6xl gap-6 text-left lg:grid-cols-2">
              <div className="rounded-[2rem] border border-cyan-300/15 bg-cyan-400/10 p-7">
                <h3 className="text-2xl font-black text-white">
                  Activities of the Day
                </h3>

                <p className="mt-4 leading-relaxed text-slate-300">
                  The celebration will include a public awareness campaign on
                  ocean-climate crises within and outside the University of
                  Calabar, Nigeria. The programme is designed to deepen public
                  understanding of ocean protection, climate change, coastal
                  resilience, and the urgent need for responsible engagement
                  with marine resources.
                </p>
              </div>

              <div className="rounded-[2rem] border border-blue-300/15 bg-blue-400/10 p-7">
                <h3 className="text-2xl font-black text-white">
                  Seminar Lecture
                </h3>

                <p className="mt-4 leading-relaxed text-slate-300">
                  A public lecture titled{' '}
                  <span className="font-semibold text-cyan-100">
                    “Harnessing African Innovative Technologies for Marine
                    Carbon Dioxide Removal — Enhancing Ocean Resilience to
                    Climate Change”
                  </span>{' '}
                  will be presented by Engr. Henry Okoroego, Science &amp;
                  Technology Advisor of NOCIH.
                </p>
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-5xl text-lg leading-relaxed text-slate-300">
              The lecture will be followed by panel discussions on pathways for
              mitigating climate change by utilizing African innovative
              technologies. It is described as the first of its kind in
              sub-Saharan Africa and is expected to pave the way for
              industry-university collaboration, as well as wider partnerships
              with stakeholders interested in conserving and protecting the rich
              marine resources of the coastal and marine ecosystems of West
              Africa.
            </p>
          </div>
        </article>
      </section>

      {/* PREVIOUS FEATURED NEWS PUSHED DOWN */}
      <section className="relative z-20 mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200">
            Previous News
          </span>

          <h2 className="mt-5 text-3xl font-black md:text-5xl">
            Recent Updates
          </h2>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-slate-950/80 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
          <div className="grid lg:grid-cols-5">
            <div className="relative h-[420px] bg-slate-900 lg:col-span-3 md:h-[560px]">
              <Image
                src={featured.image!}
                alt={featured.title}
                fill
                className="object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-sm text-slate-200">
                Prof. Francis Emile Asuquo and Prof. Francis Nwosu receiving
                BIOTTA equipment at the University of Calabar.
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 text-center lg:col-span-2 lg:text-left md:p-10">
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                <Badge>{featured.category}</Badge>
                <Badge>{featured.tag}</Badge>
              </div>

              <p className="mt-4 text-sm text-cyan-300">
                Featured • {featured.dateLabel}
              </p>

              <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl">
                {featured.title}
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                {featured.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIELD + LAB */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 md:py-24">
        <div className="pointer-events-none absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative text-center">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-200">
            Field & Laboratory Activities
          </span>

          <h2 className="mt-5 text-3xl font-black md:text-5xl">
            Ocean Acidification monitoring in action
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Combined <Brand small /> and University of Calabar teams are
            conducting Ocean Acidification monitoring across the Gulf of Guinea
            coastal waters through field sampling, laboratory analysis, and
            evidence-led reporting.
          </p>
        </div>

        <FluidImageGallery />

        <ProjectStatus />

        <SamplingMap />

        <div className="mt-20 rounded-[2rem] border border-cyan-300/15 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 p-8 text-center shadow-2xl shadow-cyan-950/30 md:p-12">
          <h3 className="text-3xl font-black leading-tight md:text-5xl">
            More updates from <Brand /> coming soon
          </h3>

          <p className="mx-auto mt-5 max-w-5xl text-lg leading-relaxed text-slate-300 md:text-xl">
            This newsroom will continue to share project announcements,
            research notes, field stories, partner highlights, workshops,
            community engagement activities, and ocean-climate innovation
            milestones from across Africa.
          </p>
        </div>
      </section>
    </div>
  );
}
