'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Work', href: '/work' },
  { name: 'Team', href: '/team' },
  { name: 'News', href: '/news', isNew: true },
  { name: 'Get Involved', href: '/contact', isCta: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = (href: string, isCta?: boolean) =>
    [
      'relative group px-5 py-3 rounded-full transition-all duration-300 text-base md:text-lg font-medium overflow-hidden',
      'border backdrop-blur-md',
      pathname === href
        ? 'bg-cyan-500/15 border-cyan-300/50 text-cyan-100 shadow-lg shadow-cyan-950/30'
        : 'border-white/10 text-slate-200 hover:text-white hover:border-cyan-300/40 hover:bg-white/10',
      isCta
        ? 'bg-gradient-to-r from-cyan-500/25 via-blue-500/25 to-teal-500/25 border-cyan-300/40 shadow-md shadow-cyan-950/30'
        : '',
    ].join(' ');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-400/10 bg-slate-950/75 backdrop-blur-2xl">
        {/* Soft ocean glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 left-1/4 h-32 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -top-20 right-10 h-36 w-80 rounded-full bg-blue-700/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-5 py-4 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/images/logo.jpg"
                alt="NOCIH-Africa Logo"
                className="relative h-12 md:h-14 w-auto rounded-full border border-white/10 shadow-lg shadow-cyan-950/30 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
              />
            </div>

            <div className="leading-tight ml-1">
              <div className="flex items-end gap-1">
                <span className="text-3xl md:text-4xl font-black tracking-tight text-white">
                  NOCIH
                </span>

                <span className="text-3xl md:text-4xl font-black text-white">-</span>

                <span className="africa-wave text-3xl md:text-4xl font-black italic font-serif tracking-wide">
                  Africa
                </span>
              </div>

              <span className="text-sm md:text-base text-cyan-300/90 block -mt-1 tracking-wide">
                Ocean-Climate Innovation Hub
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-8">
            <div className="relative group mr-1">
              <div className="absolute inset-0 rounded-md bg-emerald-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src="/images/nigeria.gif"
                alt="Nigeria flag"
                className="relative h-10 md:h-11 w-auto rounded-md border border-white/10 shadow-sm"
              />
            </div>

            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item.href, item.isCta)}
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative flex items-center gap-2">
                  {item.isNew && (
                    <span className="relative inline-flex items-center">
                      <span className="text-lg leading-none">📣</span>
                      <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
                      <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500" />
                    </span>
                  )}

                  {item.name}

                  {item.isCta && (
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden relative h-12 w-12 rounded-2xl border border-white/10 bg-white/5 text-white shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:bg-white/10 hover:border-cyan-300/40"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <span className="absolute left-3 right-3 top-4 h-0.5 rounded-full bg-white transition-all duration-300" />
            <span
              className={[
                'absolute left-3 right-3 top-6 h-0.5 rounded-full bg-white transition-all duration-300',
                mobileOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span className="absolute left-3 right-3 top-8 h-0.5 rounded-full bg-white transition-all duration-300" />
          </button>
        </div>

        {/* Mobile */}
        <div
          className={[
            'md:hidden overflow-hidden transition-all duration-500',
            mobileOpen ? 'max-h-[620px] opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <div className="px-4 sm:px-6 pb-6">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-4 shadow-2xl shadow-cyan-950/30">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm uppercase tracking-[0.25em] text-cyan-300">
                  Menu
                </span>

                <img
                  src="/images/nigeria.gif"
                  alt="Nigeria flag"
                  className="h-9 w-auto rounded-md border border-white/10 shadow-sm"
                />
              </div>

              <div className="flex flex-col gap-3">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={linkClass(item.href, item.isCta)}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="relative flex items-center justify-between gap-2">
                      <span className="flex items-center gap-2">
                        {item.isNew && (
                          <span className="relative inline-flex items-center">
                            <span className="text-lg leading-none">📣</span>
                            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
                            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-red-500" />
                          </span>
                        )}

                        {item.name}
                      </span>

                      <span className="text-cyan-300">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        .africa-wave {
          display: inline-block;
          font-family: Georgia, 'Times New Roman', cursive;
          background: linear-gradient(
            90deg,
            #67e8f9,
            #ffffff,
            #38bdf8,
            #14b8a6,
            #67e8f9
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 25px rgba(103, 232, 249, 0.25);
          animation: africaWave 3.5s ease-in-out infinite,
            africaShimmer 5s linear infinite;
          transform-origin: center bottom;
        }

        @keyframes africaWave {
          0%,
          100% {
            transform: translateY(0) rotate(0deg) skewX(0deg);
          }
          25% {
            transform: translateY(-2px) rotate(-1deg) skewX(-4deg);
          }
          50% {
            transform: translateY(1px) rotate(1deg) skewX(4deg);
          }
          75% {
            transform: translateY(-1px) rotate(-0.5deg) skewX(-2deg);
          }
        }

        @keyframes africaShimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 300% 50%;
          }
        }
      `}</style>
    </>
  );
}