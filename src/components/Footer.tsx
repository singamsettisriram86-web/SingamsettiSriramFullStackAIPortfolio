import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  data: {
    name: string;
    email: string;
    github: string;
    linkedin: string;
  };
}

export const Footer = ({ data }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold mb-2">{data.name}</h3>
            <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2">
              Made with <Heart size={16} className="text-red-500" fill="currentColor" /> using React & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href={`https://github.com/${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              href={`https://linkedin.com/in/${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>

            <motion.a
              href={`mailto:${data.email}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {data.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
