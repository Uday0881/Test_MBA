import { Linkedin, Instagram, Youtube } from 'lucide-react';

const socialIcons = {
  linkedin: Linkedin,
  instagram: Instagram,
  youtube: Youtube,
};

export default function Footer({ id, data, navLinks, scrollTo }) {
  return (
    <footer id={id} className="bg-slate-950 py-20 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.8fr_1fr_1fr] lg:px-8">
        <div className="space-y-6">
          <div className="text-2xl font-bold text-white">{data.description}</div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">A modern landing page architecture with reusable sections, responsive layout, and a production-ready component design.</p>
          <div className="flex items-center gap-3">
            {data.socials.map((key) => {
              const Icon = socialIcons[key];
              return (
                <button key={key} type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10">
                  <Icon size={18} />
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-500">{data.menuLabel}</p>
          <div className="mt-6 space-y-3">
            {data.menuLinks.map((link) => (
              <button key={link.id} type="button" onClick={() => scrollTo(link.id)} className="text-sm text-slate-400 transition hover:text-white">
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-500">{data.contactLabel}</p>
          <div className="mt-6 space-y-4 text-sm text-slate-400">
            {data.contactDetails.map((contact) => (
              <div key={contact.label}>
                <p className="font-semibold text-slate-100">{contact.label}</p>
                <p>{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-slate-800/80 px-5 py-6 text-sm text-slate-500 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span>{data.copyright}</span>
          <span>{data.smallPrint}</span>
        </div>
      </div>
    </footer>
  );
}
