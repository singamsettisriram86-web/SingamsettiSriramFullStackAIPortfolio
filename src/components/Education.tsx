import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GraduationCap, BookOpen, Users } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  years: string;
  coursework: string[];
  activities?: string[];
}

interface EducationProps {
  data: EducationItem[];
}

const EducationCard = ({ item, index }: { item: EducationItem; index: number }) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
          <GraduationCap size={28} />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-1">
            {item.degree}
          </h3>
          <p className="text-accent-600 dark:text-accent-400 font-semibold mb-2">
            {item.institution}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.years}</p>

          {item.coursework.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={16} className="text-gray-600 dark:text-gray-400" />
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Key Coursework
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.activities && item.activities.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users size={16} className="text-gray-600 dark:text-gray-400" />
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Activities
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.activities.map((activity) => (
                  <span
                    key={activity}
                    className="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 text-xs font-medium rounded-full"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Education = ({ data }: EducationProps) => {
  const { ref: headerRef, isInView: headerInView } = useInView();

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Strong academic foundation in computer science and engineering
          </p>
        </motion.div>

        <div className="space-y-6">
          {data.map((item, index) => (
            <EducationCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
