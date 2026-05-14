export default function SectionHeading({ eyebrow, heading, description }) {
  return (
    <div className="space-y-3 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-600">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-4xl">{heading}</h2>
      {description ? <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">{description}</p> : null}
    </div>
  );
}
