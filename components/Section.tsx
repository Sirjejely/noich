export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        {subtitle ? <p className="mt-2 text-slate-300 max-w-3xl">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
