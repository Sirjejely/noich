'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Work', href: '/work' },
  { name: 'Team', href: '/team' },
  { name: 'Get Involved', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass = (href: string) =>
    [
      'px-5 py-3 rounded-full transition-all duration-300 text-base md:text-lg font-medium',
      'border border-white/10 hover:border-blue-400/40 hover:bg-white/5',
      pathname === href
        ? 'bg-blue-600/25 border-blue-400/50 text-blue-200 shadow-lg shadow-blue-900/20'
        : 'text-gray-200',
    ].join(' ');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-lg border-b border-blue-950/40">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.jpg" alt="NOCIH Logo" className="h-12 md:h-14 w-auto" />
          <div className="leading-tight ml-1">
            <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">NOCIH</span>
            <span className="text-sm md:text-base text-blue-400 block -mt-1">Ocean-Climate Hub</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 ml-10">
          <img
            src="/images/nigeria.gif"
            alt="Nigeria flag"
            className="h-10 md:h-11 w-auto rounded-sm border border-white/10 shadow-sm mr-1"
          />
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden px-4 py-3 text-lg rounded-xl border border-white/10 hover:bg-white/5"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-4 sm:px-6 pb-5">
          <div className="flex flex-col gap-4 pt-2 items-start">
            <img
              src="/images/nigeria-flag.gif"
              alt="Nigeria flag"
              className="h-10 w-auto rounded-sm border border-white/10 shadow-sm"
            />
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass(item.href)}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
