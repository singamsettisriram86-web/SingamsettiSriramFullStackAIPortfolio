import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ExternalLink, Github, X, Code2 } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  image: string;
  tech: string[];
  shortDesc: string;
  problem: string;
  solution: string;
  impact: string;
  highlights: string[];
  demoUrl: string;
  codeUrl: string;
}

interface ProjectsProps {
  data: Project[];
}

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-accent-100/50 dark:border-accent-900/50 transition-all cursor-pointer group"
    >
      <div className="relative h-48 bg-gradient-to-br from-accent-500 via-emerald-500 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Code2 size={64} className="text-white/20" />
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-full text-xs font-semibold text-accent-700 dark:text-accent-300 shadow-lg">
          {project.year}
        </div>
      </div>

      <div className="p-6">
        <div className="text-sm text-accent-600 dark:text-accent-400 font-semibold mb-2">
          {project.role}
        </div>

        <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {project.shortDesc}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 text-xs font-medium rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-accent-200/50 dark:border-accent-800/50"
      >
        <div className="sticky top-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-b border-accent-200/50 dark:border-accent-700/50 px-6 py-4 flex justify-between items-center z-10">
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="relative h-64 bg-gradient-to-br from-accent-500 via-emerald-500 to-teal-600 rounded-xl overflow-hidden shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center">
              <Code2 size={96} className="text-white/20" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 dark:bg-red-900/10 rounded-xl p-6 border border-red-200 dark:border-red-800">
              <h3 className="text-lg font-heading font-semibold text-red-900 dark:text-red-200 mb-3">
                Problem
              </h3>
              <p className="text-sm text-red-700 dark:text-red-300">{project.problem}</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-heading font-semibold text-blue-900 dark:text-blue-200 mb-3">
                Solution
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">{project.solution}</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-lg font-heading font-semibold text-green-900 dark:text-green-200 mb-3">
                Impact
              </h3>
              <p className="text-sm text-green-700 dark:text-green-300">{project.impact}</p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6">
            <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4">
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.demoUrl}
              className="flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-semibold transition-colors"
            >
              <ExternalLink size={20} />
              View Demo
            </a>
            <a
              href={project.codeUrl}
              className="flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-colors"
            >
              <Github size={20} />
              View Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = ({ data }: ProjectsProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref: headerRef, isInView: headerInView } = useInView();

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing impactful solutions built with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};
