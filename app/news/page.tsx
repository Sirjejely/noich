"use client";

import { useState } from "react";
import Image from "next/image";

type NewsPost = {
  title: string;
  excerpt: string;
  dateLabel: string;
  category: string;
  tag?: string;
  image?: string;
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
      "On 11 February 2026, Prof. Francis Emile Asuquo received scientific equipment worth more than $20,000 from The Ocean Foundation (USA), strengthening OA monitoring and SDG 14.3.1 data generation.",
    image: "/images/grant.jpg",
  },
];

const featured = posts[0];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/10">
      {children}
    </span>
  );
}

/* 🔥 GALLERY WITH LIGHTBOX */
function FluidImageGallery() {
  const [selected, setSelected] = useState<string | null>(null);

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
    <>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <div
            key={i}
            onClick={() => setSelected(src)}
            className="cursor-pointer group relative overflow-hidden rounded-2xl border border-white/10"
          >
            <div className="relative w-full h-56">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition">
              <p className="text-xs text-white">
                OA Monitoring • NOCIH × UNICAL • Feb 2026
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-full max-w-5xl h-[80vh]">
            <Image
              src={selected}
              alt=""
              fill
              className="object-contain"
            />

            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* 🔬 PROJECT STATUS */
function ProjectStatus() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-6">
        Project Status & Data Pipeline
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          ["Field Sampling", "Completed"],
          ["Laboratory Analysis", "Completed"],
          ["Data Processing", "Ongoing"],
          ["Results & Reporting", "Pending"],
        ].map(([title, status], i) => (
          <div key={i} className="rounded-xl border p-5 bg-white/5">
            <p className="text-xs">{status}</p>
            <h4 className="mt-2 font-semibold">{title}</h4>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/40 p-5">
        <p className="text-sm text-slate-200">
          Data are undergoing rigorous validation following international ocean
          acidification monitoring standards. Final results will be published in
          alignment with SDG 14.3.1 reporting frameworks.
        </p>
      </div>
    </div>
  );
}

/* 🌍 SAMPLING MAP */
function SamplingMap() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-4">
        Sampling Locations (Tropical South Atlantic)
      </h3>

      <p className="text-slate-300 max-w-3xl mb-6">
        The Ocean Acidification monitoring campaign was conducted across coastal
        waters in the Gulf of Guinea by the combined NOCIH and University of
        Calabar (UNICAL) team.
      </p>

      <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
        <iframe
          src="https://maps.google.com/maps?q=University%20of%20Calabar&t=&z=6&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function NewsPage() {
  return (
    <div className="min-h-screen text-white bg-slate-900">
      {/* HERO */}
      <section className="text-center pt-20 pb-10">
        <h1 className="text-5xl font-bold">News & Updates</h1>
        <p className="mt-4 text-slate-300">
          Scientific progress and field activities from NOCIH
        </p>
      </section>

      {/* FEATURED */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 rounded-3xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur">
          
          <div className="relative lg:col-span-3 h-[400px] md:h-[520px]">
            <Image
              src={featured.image!}
              alt=""
              fill
              className="object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-sm">
              Prof. Francis Emile Asuquo (2nd left) and Prof. Francis Nwosu (4th left)
              receiving BIOTTA equipment at the University of Calabar.
            </div>
          </div>

          <div className="lg:col-span-2 p-8">
            <div className="flex gap-2 flex-wrap">
              <Badge>{featured.category}</Badge>
              <Badge>{featured.tag}</Badge>
            </div>

            <p className="mt-3 text-sm text-slate-300">
              Featured • {featured.dateLabel}
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              {featured.title}
            </h2>

            <p className="mt-4 text-slate-200 leading-relaxed">
              {featured.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* FIELD + LAB */}
      <section className="max-w-6xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-semibold">
          Field Monitoring & Laboratory Analysis
        </h2>

        <p className="mt-4 text-slate-200 max-w-3xl">
          Combined NOCIH and UNICAL team conducting Ocean Acidification monitoring
          in February 2026 across Tropical South Atlantic coastal waters.
        </p>

        <FluidImageGallery />

        <ProjectStatus />

        <SamplingMap />
      </section>
    </div>
  );
}