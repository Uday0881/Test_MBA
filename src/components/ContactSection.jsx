import { useAppContext } from '../hooks/useAppContext';
import SectionHeading from './SectionHeading';

export default function ContactSection({ id, data }) {
  const { formData, setFormData, submitContact, contactStatus } = useAppContext();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const hasSubmitted = contactStatus.status === 'success';

  return (
    <section id={id} className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} description={data.description} />

        <div className="mt-16 grid gap-10 xl:grid-cols-[0.9fr_0.6fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/80">
            {hasSubmitted ? (
              <div className="space-y-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  ✓
                </div>
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{data.successMessage}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Our admissions team will contact you within 48 hours.</p>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  submitContact();
                }}
                className="space-y-6"
              >
                {data.fields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {field.label}
                      {field.required ? ' *' : ''}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        rows={4}
                        className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      />
                    ) : field.type === 'select' ? (
                      <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      >
                        <option value="">Select</option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={formData[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                      />
                    )}
                  </div>
                ))}

                {contactStatus.status === 'error' ? (
                  <p className="rounded-3xl bg-rose-50 px-5 py-4 text-sm text-rose-700 dark:bg-rose-500/10 dark:text-rose-200">
                    {contactStatus.message}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#0e2926] px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-900"
                  disabled={contactStatus.status === 'pending'}
                >
                  {contactStatus.status === 'pending' ? 'Submitting...' : 'Submit Application →'}
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/80">
            {data.contactCards.map((card) => (
              <div key={card.label} className="rounded-3xl bg-slate-50 p-6 dark:bg-slate-950/70">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">{card.label}</p>
                <p className="mt-3 text-base font-medium text-slate-900 dark:text-slate-100">{card.value}</p>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
