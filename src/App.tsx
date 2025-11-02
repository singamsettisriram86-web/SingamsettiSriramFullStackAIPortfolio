import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';
import portfolioData from './data/portfolio.json';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(['hero', 'skills', 'projects', 'education', 'about', 'contact']);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.001ms');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <ScrollProgress />
      <Navigation isDark={isDark} toggleTheme={toggleTheme} activeSection={activeSection} />

      <main id="main-content">
        <Hero data={portfolioData.personal} />
        <Skills certifications={portfolioData.certifications} />
        <Projects data={portfolioData.projects} />
        <Education data={portfolioData.education} />
        <About data={{
          name: portfolioData.personal.name,
          bio: portfolioData.personal.bio,
          languages: portfolioData.personal.languages,
          location: portfolioData.personal.location,
        }} />
        <Contact data={{
          email: portfolioData.personal.email,
          phone: portfolioData.personal.phone,
          github: portfolioData.personal.github,
          linkedin: portfolioData.personal.linkedin,
        }} />
      </main>

      <Footer data={{
        name: portfolioData.personal.name,
        email: portfolioData.personal.email,
        github: portfolioData.personal.github,
        linkedin: portfolioData.personal.linkedin,
      }} />
    </div>
  );
}

export default App;
