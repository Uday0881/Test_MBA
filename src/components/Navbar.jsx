import { Moon, Sun } from 'lucide-react';
import { useAppContext } from '../hooks/useAppContext';

export default function Navbar({ brand, navLinks, onNavClick, onApply }) {
  const { theme, toggleTheme } = useAppContext();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <div>
          <button type="button" onClick={() => onNavClick('home')} className="text-left">
            <p className="text-sm font-semibold text-amber-600">{brand.shortName}</p>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{brand.fullName}</p>
          </button>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.id}
              onClick={() => onNavClick(link.id)}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            type="button"
            onClick={onApply}
            className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm shadow-amber-500/20 transition hover:bg-amber-400"
          >
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
}
