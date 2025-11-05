import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { User, Languages, MapPin } from 'lucide-react';

interface AboutProps {
  data: {
    name: string;
    bio: string;
    languages: string[];
    location: string;
  };
}

export const About = ({ data }: AboutProps) => {
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: contentRef, isInView: contentInView } = useInView();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer focused on building impactful solutions
          </p>
        </motion.div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                <User size={24} />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-white">
                My Story
              </h3>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {data.bio}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={contentInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 bg-gradient-to-r from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-900/10 rounded-xl border border-accent-200 dark:border-accent-800"
            >
              <p className="text-accent-900 dark:text-accent-100 font-medium">
                I'm always excited to collaborate on innovative projects and explore new technologies.
                Let's build something amazing together!
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                  <Languages size={24} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">
                  Languages
                </h3>
              </div>
              <div className="space-y-2">
                {data.languages.map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, x: -20 }}
                    animate={contentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-500" />
                    <span className="text-gray-700 dark:text-gray-300">{lang}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                  <MapPin size={24} />
                </div>
                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">
                  Location
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{data.location}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800"
            >
              <img
                src="/ChatGPT Image Nov 1, 2025, 10_30_07 AM copy copy.png"
                alt="Singamsetti Sriram"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
