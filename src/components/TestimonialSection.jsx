import SectionHeading from './SectionHeading';

export default function TestimonialSection({ id, data }) {
  return (
    <section id={id} className="bg-[#0e2926] py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} description="Hear from alumni who launched faster, converted deals, and advanced into leadership roles." />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {data.reviews.map((review) => (
            <article key={review.name} className="rounded-[32px] border border-white/10 bg-white/10 p-8 backdrop-blur-lg">
              <div className="text-6xl leading-none text-amber-300">“</div>
              <p className="mt-4 text-sm leading-7 text-slate-100/90">{review.quote}</p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{review.name}</p>
                <p className="text-sm text-amber-300">{review.role}</p>
                <p className="mt-1 text-sm text-slate-300">{review.batch}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
