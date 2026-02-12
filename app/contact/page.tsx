'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const ways = [
    {
      title: 'Volunteer',
      icon: '🤝',
      desc:
        'Contribute your time, skills, or local knowledge to support community engagement, events, logistics, or field activities.',
      bullets: ['Field support', 'Community outreach', 'Events & operations'],
    },
    {
      title: 'Partner',
      icon: '🌐',
      desc:
        'Collaborate with us—universities, NGOs, government, companies and research institutions. Let’s co-design impactful programs.',
      bullets: ['Research collaborations', 'Project partnerships', 'Policy engagement'],
    },
    {
      title: 'Donate',
      icon: '💙',
      desc:
        'Your support helps expand ocean-climate solutions, strengthen monitoring, and build resilience in coastal communities.',
      bullets: ['Support pilots', 'Training programs', 'Equipment & data'],
    },
    {
      title: 'Spread Awareness',
      icon: '📢',
      desc:
        'Share our mission, organize a local session, or amplify ocean-climate action in your network and community.',
      bullets: ['Campaigns', 'Talks & outreach', 'Social media'],
    },
    {
      title: 'Intern / Research',
      icon: '🎓',
      desc:
        'Students and young professionals can gain experience through internships, research assistance, and project participation.',
      bullets: ['Internships', 'Research support', 'Project delivery'],
    },
    {
      title: 'Sponsor a Program',
      icon: '⭐',
      desc:
        'Support a targeted program area—blue carbon, monitoring, capacity building, or innovation pilots—with measurable outcomes.',
      bullets: ['Defined outcomes', 'Transparent reporting', 'Long-term impact'],
    },
  ];

  return (
    <div className="text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(99,102,241,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-18 md:py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Get Involved
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-blue-100 leading-relaxed">
              Join us in protecting our oceans and fighting climate change. Every action counts — your
              support can accelerate practical solutions across the Gulf of Guinea and West Africa.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Volunteer', 'Partner', 'Donate', 'Intern/Research', 'Spread Awareness'].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-slate-950/40 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPTIONS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Ways to support our work</h2>
        <p className="mt-4 text-center text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Whether you’re an individual, institution, or organization, there’s a meaningful way to join our mission.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ways.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl p-8 border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-900/30 hover:-translate-y-2"
            >
              <div className="text-5xl mb-5">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-200 text-base md:text-lg leading-relaxed">{item.desc}</p>

              <ul className="mt-5 space-y-2 text-slate-300 text-base md:text-lg">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-[2px] text-blue-300">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact-form"
                className="mt-7 inline-flex items-center justify-center w-full px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/5 font-semibold transition"
              >
                Contact us <span className="ml-2 translate-y-[1px]">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* CONTACT + OFFICES */}
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {/* Contact info */}
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-7 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold">Let’s work together</h3>
            <p className="mt-3 text-slate-300 text-lg md:text-xl leading-relaxed">
              Reach out to discuss partnerships, volunteering, donations, sponsorships, or any way you’d like to contribute.
            </p>

            <div className="mt-6 space-y-3 text-lg md:text-xl">
              <div>
                <span className="text-slate-400">Email:</span>{' '}
                <a className="text-blue-300 hover:underline" href="mailto:info@nocih.org">
                  info@nocih.org
                </a>
              </div>

              <div className="text-slate-300">
                <span className="text-slate-400">Response time:</span> 2–3 working days
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {['Ocean-Climate Innovation', 'Blue Carbon', 'Monitoring & Data', 'Training & Mentorship'].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full text-sm md:text-base border border-white/10 bg-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-7 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold">Our Offices</h3>
            <p className="mt-3 text-slate-300 text-lg md:text-xl leading-relaxed">
              We operate from Nigeria with programs and partnerships across the Gulf of Guinea and West Africa.
            </p>

            <div className="mt-6 space-y-8 text-slate-200 text-lg md:text-xl">
              {/* Main Office */}
              <div className="flex items-start gap-4">
                <span className="text-blue-300 text-2xl mt-1">🏢</span>
                <div>
                  <h4 className="font-semibold text-white">Main Office</h4>
                  <p>4/7 Ikot Uduak Layout, off MCC Road,</p>
                  <p>Calabar, Cross River State, Nigeria</p>
                </div>
              </div>

              {/* Branch Office */}
              <div className="flex items-start gap-4">
                <span className="text-blue-300 text-2xl mt-1">📍</span>
                <div>
                  <h4 className="font-semibold text-white">Branch Office</h4>
                  <p>A 81 Ewet Housing Estate,</p>
                  <p>Uyo Urban, Uyo, Akwa Ibom State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NETLIFY FORM */}
        <div
          id="contact-form"
          className="scroll-mt-28 mt-12 max-w-2xl mx-auto rounded-3xl bg-slate-900/70 backdrop-blur-lg border border-slate-700 p-8 md:p-10 shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Send us a message
          </h3>

          {formStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">🎉</div>
              <h4 className="text-2xl font-semibold text-green-400 mb-4">Thank you!</h4>
              <p className="text-lg text-gray-300">
                We will get back to you within <strong>2–3 working days</strong>.
              </p>
            </div>
          ) : (
            <form
              action="/api/contact"
              method="POST"
              onSubmit={() => setTimeout(() => setFormStatus('success'), 600)}
              className="space-y-6"
            >

              <input type="hidden" name="form-name" value="contact" />

              <p className="hidden">
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>

              <input type="hidden" name="subject" value="New message from NOCIH website" />

              <input
                type="text"
                name="name"
                required
                className="w-full px-5 py-4 bg-slate-800/70 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                placeholder="Your full name"
              />

              <input
                type="email"
                name="email"
                required
                className="w-full px-5 py-4 bg-slate-800/70 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                placeholder="Your email address"
              />

              <select
                name="interest"
                required
                className="w-full px-5 py-4 bg-slate-800/70 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-all duration-300"
                defaultValue=""
              >
                <option value="" disabled>
                  How do you want to get involved?
                </option>
                <option value="Volunteer">Volunteer</option>
                <option value="Partner">Partner</option>
                <option value="Donate">Donate</option>
                <option value="Intern / Research">Intern / Research</option>
                <option value="Sponsor a Program">Sponsor a Program</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-5 py-4 bg-slate-800/70 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none"
                placeholder="Tell us more..."
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-700/40 transform hover:-translate-y-1"
              >
                Send Message
              </button>

              <p className="text-sm text-slate-400 text-center pt-1">
                This form is powered by Netlify Forms.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
