export default function TeamCard({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <img
        src={image}
        alt={name}
        className="h-28 w-28 rounded-2xl object-cover border border-white/10"
      />
      <div className="mt-4">
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-slate-300 text-sm">{role}</div>
      </div>
    </div>
  );
}
