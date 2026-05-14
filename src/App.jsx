import { AppProvider } from './context/AppContext';
import { siteContent } from './constants/siteContent';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import CurriculumSection from './components/CurriculumSection';
import FacultySection from './components/FacultySection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const SECTION_COMPONENTS = {
  hero: Hero,
  stats: StatsBar,
  about: AboutSection,
  curriculum: CurriculumSection,
  faculty: FacultySection,
  testimonials: TestimonialSection,
  contact: ContactSection,
  footer: Footer,
};

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <AppProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Navbar
          brand={siteContent.brand}
          navLinks={siteContent.navLinks}
          onNavClick={scrollTo}
          onApply={() => scrollTo('contact')}
        />

        <main className="pt-24">
          {siteContent.sections.map((section) => {
            const SectionComponent = SECTION_COMPONENTS[section.type];
            if (!SectionComponent) return null;
            return (
              <SectionComponent
                key={section.id}
                id={section.id}
                data={siteContent[section.dataKey]}
                navLinks={siteContent.navLinks}
                scrollTo={scrollTo}
              />
            );
          })}
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
