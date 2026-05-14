import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import SectionHeading from './SectionHeading';

export default function CurriculumSection({ id, data }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={id} className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={data.eyebrow} heading={data.heading} description="Explore the core modules that make this MBA a career accelerator." />

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {data.modules.map((module, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                type="button"
                key={module.title}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`group flex w-full flex-col gap-4 rounded-[28px] border p-6 text-left transition ${
                  isOpen ? 'border-amber-300 bg-amber-50 shadow-lg shadow-amber-200/20 dark:border-amber-400/30 dark:bg-amber-500/10' : 'border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-slate-950 dark:text-white">{module.title}</p>
                  </div>
                  <span className="text-amber-500">{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
                </div>
                {isOpen ? <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{module.description}</p> : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
