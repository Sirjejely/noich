export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10 text-sm md:text-base">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/logo.jpg" alt="NOCIH Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-2xl font-bold text-white">NOCIH</h3>
                <p className="text-blue-400 text-sm">Ocean-Climate Hub</p>
              </div>
            </div>

            <p className="mt-5 text-slate-300 leading-relaxed text-base">
              Advancing ocean-based climate solutions through science,
              innovation and partnerships across Nigeria and West Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="/work" className="hover:text-blue-400 transition">Our Work</a></li>
              <li><a href="/team" className="hover:text-blue-400 transition">Team</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition">Get Involved</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-3 text-slate-300">
              <li>
                <a href="mailto:info@nocih.org" className="hover:text-blue-400 transition">
                  info@nocih.org
                </a>
              </li>
              <li>Calabar, Nigeria</li>
              <li>Uyo, Nigeria</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Follow Us</h4>

            <div className="flex gap-4">

              {/* X (Twitter) */}
              <a href="#" target="_blank" className="bg-slate-900 p-3 rounded-xl hover:bg-blue-600 transition">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2H21l-6.545 7.48L22 22h-6.828l-5.34-6.99L3.6 22H1l7.02-8.02L2 2h6.828l4.86 6.38L18.244 2Zm-2.394 18h1.89L8.42 4H6.39l9.46 16Z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" target="_blank" className="bg-slate-900 p-3 rounded-xl hover:bg-blue-600 transition">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.99H7.9V12h2.5V9.8c0-2.47 1.46-3.83 3.7-3.83 1.07 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.6.76-1.6 1.54V12h2.72l-.43 2.88h-2.29v6.99A10 10 0 0 0 22 12Z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" target="_blank" className="bg-slate-900 p-3 rounded-xl hover:bg-blue-600 transition">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.98 0h4.37v2.05h.06c.61-1.16 2.12-2.38 4.37-2.38 4.67 0 5.53 3.07 5.53 7.06V23h-4.56v-6.8c0-1.62-.03-3.71-2.26-3.71-2.26 0-2.61 1.77-2.61 3.6V23H8.2V8z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center text-slate-400 text-sm md:text-base">
          © {year} Nigeria Ocean-Climate Innovation Hub (NOCIH). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
