export default function NewsPage() {
  return (
    <div className="min-h-screen text-white bg-slate-950">
      {/* HERO */}
      <section className="relative py-24 md:py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold">News & Updates</h1>
          <p className="mt-6 text-xl md:text-2xl text-slate-300">
            Stay connected with what is happening at NOCIH
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-28">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-10 text-center">
          <div className="text-6xl mb-6">📢</div>

          <h2 className="text-3xl font-semibold mb-4">
            Updates Coming Soon
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            We will be posting trending news, project updates, research progress,
            field activities, partnerships, and community engagement stories from
            the Nigeria Ocean-Climate Innovation Hub.
          </p>

          <p className="mt-6 text-blue-300 text-xl font-medium">
            Stay tuned — exciting developments are on the way.
          </p>
        </div>
      </section>
    </div>
  );
}
