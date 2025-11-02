import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, ExternalLink } from 'lucide-react';

interface SkillsProps {
  certifications: Array<{ name: string; issuer: string; url?: string }>;
}

const technologies = {
  frontend: [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  ],
  backend: [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  ],
  database: [
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ],
  tools: [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  ],
};

const TechnologyCard = ({ name, logo, delay }: { name: string; logo: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.1, y: -8 }}
      className="group relative"
    >
      <div className="flex flex-col items-center justify-center p-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-accent-100/50 dark:border-accent-900/50 transition-all h-32 w-32">
        <div className="relative w-16 h-16 mb-3 flex items-center justify-center">
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

const SkillSection = ({
  title,
  technologies,
  startDelay,
}: {
  title: string;
  technologies: Array<{ name: string; logo: string }>;
  startDelay: number;
}) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6 text-center">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={tech.name}
            name={tech.name}
            logo={tech.logo}
            delay={startDelay + index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const Skills = ({ certifications }: SkillsProps) => {
  const { ref: headerRef, isInView: headerInView } = useInView();

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </motion.div>

        <SkillSection title="Frontend Development" technologies={technologies.frontend} startDelay={0.1} />
        <SkillSection title="Backend & Languages" technologies={technologies.backend} startDelay={0.3} />
        <SkillSection title="Database" technologies={technologies.database} startDelay={0.5} />
        <SkillSection title="Tools & Technologies" technologies={technologies.tools} startDelay={0.7} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-accent-100/50 dark:border-accent-900/50 mt-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
              <Award size={24} />
            </div>
            <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white">
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => {
              const motionProps = {
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { duration: 0.4, delay: 1 + index * 0.1 },
                whileHover: { scale: 1.05, y: -4 },
              };

              return (
                <motion.div
                  key={cert.name}
                  {...motionProps}
                  className="p-4 rounded-xl bg-gradient-to-br from-accent-50 via-emerald-50 to-teal-50 dark:from-accent-900/30 dark:via-emerald-900/20 dark:to-teal-900/10 border border-accent-200/50 dark:border-accent-800/50 shadow-md"
                >
                  <div className="text-sm font-semibold text-accent-900 dark:text-accent-100 mb-1">
                    {cert.name}
                  </div>
                  <div className="text-xs text-accent-700 dark:text-accent-400 mb-3">
                    {cert.issuer}
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                    >
                      View Certificate
                      <ExternalLink size={12} />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
