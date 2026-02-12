export default function ProgramCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
