import { ArrowRight } from 'lucide-react';

export default function Hero({ id, data, scrollTo }) {
  return (
    <section id={id} className="relative overflow-hidden bg-[#0e2926] pb-24 pt-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-6 lg:px-8">
        <div className="grid gap-16 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl space-y-6">
            <p className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
              {data.preTitle}
            </p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-[-0.05em] sm:text-6xl">
              {data.title.split(data.highlight).map((part, index, arr) => (
                <span key={part}>
                  {part}
                  {index < arr.length - 1 && <span className="text-amber-300">{data.highlight}</span>}
                </span>
              ))}
            </h1>
            <p className="max-w-xl text-lg text-slate-200 sm:text-xl">{data.description}</p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                {data.primaryAction}
                <ArrowRight className="ml-2" size={16} />
              </button>
              <button
                type="button"
                onClick={() => scrollTo('curriculum')}
                className="rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15"
              >
                {data.secondaryAction}
              </button>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">{data.statsCardTitle ?? 'Program Highlights'}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {data.stats.map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-3xl bg-slate-950/20 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-200">•</div>
                  <div>
                    <p className="text-xl font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-200/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
