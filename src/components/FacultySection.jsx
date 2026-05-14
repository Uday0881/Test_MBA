import SectionHeading from './SectionHeading';

export default function FacultySection({ id, data }) {
  return (
    <section id={id} className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} description="Learn from experienced faculty who are active practitioners and advisors." />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {data.members.map((member) => (
            <article key={member.name} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0e2926] text-3xl font-bold text-amber-300">{member.name.match(/\b\w/g)?.slice(0, 2).join('')}</div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">{member.name}</h3>
              <p className="mt-2 text-sm font-semibold text-amber-500">{member.role}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{member.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
