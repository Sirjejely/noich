export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-cyan-300/10 bg-slate-950">
      {/* Custom animations without styled-jsx */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-blue-700/10 blur-3xl" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-15">
          <div className="absolute -left-[10%] bottom-0 h-[70px] w-[120%] rounded-[50%] border-t border-cyan-300/40 animate-[footerWaveMove_8s_ease-in-out_infinite]" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-12">
        <div className="grid gap-8 text-sm md:grid-cols-2 md:text-base lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400/25 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <img
                  src="/images/logo.jpg"
                  alt="NOCIH-Africa Logo"
                  className="relative h-14 w-auto rounded-full border border-white/10 shadow-lg shadow-cyan-950/40 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
              </div>

              <div className="leading-tight">
                <h3 className="flex items-end gap-1 text-2xl md:text-3xl font-black tracking-tight">
                  <span className="text-white">NOCIH</span>
                  <span className="text-white">-</span>
                  <span className="inline-block font-serif italic font-black text-transparent bg-clip-text bg-[linear-gradient(90deg,#67e8f9,#ffffff,#38bdf8,#14b8a6,#67e8f9)] bg-[length:300%_100%] drop-shadow-[0_0_18px_rgba(103,232,249,0.35)] animate-[africaWave_3.5s_ease-in-out_infinite,africaShimmer_5s_linear_infinite]">
                    Africa
                  </span>
                </h3>

                <p className="text-cyan-300/90 text-sm tracking-wide">
                  Ocean-Climate Hydro-Initiative
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              Science, innovation and partnerships for practical ocean-climate
              action across Africa.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
              <span className="text-sm">Science • Innovation • Partnership</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="flex items-center gap-3 text-lg font-semibold text-white mb-5">
              <span className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-blue-500" />
              Quick Links
            </h4>
            <ul className="space-y-3 text-slate-300">
              {[
                { name: 'Home', href: '/' },
                { name: 'Our Work', href: '/work' },
                { name: 'Team', href: '/team' },
                { name: 'News', href: '/news' },
                { name: 'Get Involved', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 transition duration-300 hover:text-cyan-300"
                  >
                    <span className="h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-5" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="flex items-center gap-3 text-lg font-semibold text-white mb-5">
              <span className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-teal-500" />
              Contact
            </h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-cyan-300">✉</span>
                <a
                  href="mailto:info@nocih.org"
                  className="hover:text-cyan-300 transition"
                >
                  info@nocih.org
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-cyan-300">📍</span>
                <span>Calabar, Nigeria</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-cyan-300">📍</span>
                <span>Uyo, Nigeria</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-cyan-300">🌍</span>
                <span>Africa-focused ocean-climate innovation</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="flex items-center gap-3 text-lg font-semibold text-white mb-5">
              <span className="h-6 w-1 rounded-full bg-gradient-to-b from-blue-400 to-teal-400" />
              Follow Us
            </h4>

            <p className="mb-4 text-sm leading-relaxed text-slate-300 md:text-base">
              Follow our ocean-climate research, innovation and community
              activities.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NOCIH-Africa on X"
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2.5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-500/15"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <svg className="relative w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2H21l-6.545 7.48L22 22h-6.828l-5.34-6.99L3.6 22H1l7.02-8.02L2 2h6.828l4.86 6.38L18.244 2Zm-2.394 18h1.89L8.42 4H6.39l9.46 16Z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NOCIH-Africa on Facebook"
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2.5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-500/15"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <svg className="relative w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.99H7.9V12h2.5V9.8c0-2.47 1.46-3.83 3.7-3.83 1.07 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.6.76-1.6 1.54V12h2.72l-.43 2.88h-2.29v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NOCIH-Africa on LinkedIn"
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2.5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-500/15"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <svg className="relative w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.98 0h4.37v2.05h.06c.61-1.16 2.12-2.38 4.37-2.38 4.67 0 5.53 3.07 5.53 7.06V23h-4.56v-6.8c0-1.62-.03-3.71-2.26-3.71-2.26 0-2.61 1.77-2.61 3.6V23H8.2V8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 lg:flex-row">
            <div className="text-center md:text-left">
              <p>
                © {year} Novel Ocean-Climate Innovation Hydro-Initiative{' '}
                <span className="text-slate-300">(NOCIH-Africa)</span>.
              </p>
              <p className="mt-1 text-xs text-slate-500 md:text-sm">
                All rights reserved.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-400/[0.07] px-4 py-2 text-xs text-emerald-100 md:text-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-200">
                ✓
              </span>
              CAC Reg. No. 9684356
            </div>

            <div className="flex items-center gap-3 text-sm">
              <a href="/privacy" className="hover:text-cyan-300 transition">
                Privacy
              </a>
              <span className="text-slate-600">•</span>
              <a href="/contact" className="hover:text-cyan-300 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}