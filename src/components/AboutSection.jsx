import SectionHeading from './SectionHeading';

export default function AboutSection({ id, data }) {
  return (
    <section id={id} className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} description={data.description.join(' ')} />

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
          <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/70">
            {data.description.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {paragraph}
              </p>
            ))}

            <div className="grid gap-4 sm:grid-cols-2">
              {data.highlights.map((item) => (
                <div key={item.title} className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-800">
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {data.badges.map((badge) => (
              <div key={badge.title} className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-xl font-bold text-amber-500">{badge.title}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{badge.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
