export default function StatsBar({ id, data }) {
  return (
    <section id={id} className="bg-amber-400 py-10 text-slate-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 sm:grid-cols-4 sm:px-6 lg:px-8">
        {data.map((item) => (
          <div key={item.label} className="rounded-3xl border border-slate-900/10 bg-white/80 p-6 text-center shadow-sm shadow-slate-900/10 backdrop-blur-sm">
            <p className="text-3xl font-extrabold">{item.value}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-700">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
