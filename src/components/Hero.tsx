import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  data: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    availability: string;
    email: string;
    github: string;
    linkedin: string;
    stats: {
      yearsActive: number;
      projects: number;
      internships: number;
    };
  };
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

const AnimatedText = ({ text, gradient = false }: { text: string; gradient?: boolean }) => {
  const letters = text.split('');

  return (
    <>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block cursor-default"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{
            y: -8,
            rotate: [0, -10, 10, -10, 0],
            scale: 1.3,
            transition: {
              rotate: {
                duration: 0.5,
                ease: "easeInOut"
              },
              y: { duration: 0.2 },
              scale: { duration: 0.2 }
            }
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </>
  );
};

export const Hero = ({ data }: HeroProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950/30">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-accent-400/30 to-emerald-500/30 dark:from-accent-500/20 dark:to-emerald-600/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-accent-400 via-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-30"
              />
              <img
                src="/ChatGPT Image Nov 1, 2025, 10_30_07 AM copy copy.png"
                alt="Singamsetti Sriram"
                className="relative w-64 h-80 lg:w-80 lg:h-96 object-contain rounded-3xl shadow-2xl border-4 border-white/20 dark:border-white/10 bg-white dark:bg-slate-800"
              />
            </div>
          </motion.div>

          <div className="text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-medium mb-6"
            >
              <MapPin size={16} />
              {data.location}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-accent-600 via-emerald-600 to-teal-600 dark:from-accent-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                Hi, I'm
              </span>{' '}
              <span className="whitespace-nowrap text-gray-900 dark:text-white">
                <AnimatedText text={data.name} />
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-heading font-semibold text-accent-600 dark:text-accent-400 mb-6"
            >
              <AnimatedText text={data.title} />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              {data.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {data.availability}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
            <motion.button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-accent-600 to-emerald-600 hover:from-accent-700 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown size={20} />
              </motion.span>
            </motion.button>

            <motion.a
              href="https://drive.usercontent.google.com/download?id=1cL1utfQpTe_3YyY1KppYq3hHS0fGHcW1&export=download"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-accent-600 dark:text-accent-400 border-2 border-accent-600 dark:border-accent-400 rounded-xl font-semibold hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
            <motion.a
              href={`https://github.com/${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub profile"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              href={`https://linkedin.com/in/${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn profile"
            >
              <Linkedin size={24} />
            </motion.a>

            <motion.a
              href={`mailto:${data.email}`}
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email contact"
            >
              <Mail size={24} />
            </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-gray-400 dark:text-gray-600" size={32} />
      </motion.div>
    </section>
  );
};
