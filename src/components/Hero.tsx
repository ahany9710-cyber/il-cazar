import { motion } from 'framer-motion';
import { config } from '../config';

const Hero = () => {
  const heroImageSrc = config.heroImageUrl?.trim() || './hero.jpg?v=2';

  const scrollToForm = () => {
    const formSection = document.getElementById('lead-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="project-highlights" className="w-full">
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        <img
          src={heroImageSrc}
          alt="Park Sight by IL Cazar — R4 New Capital"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center max-w-3xl w-full bg-black/55 backdrop-blur-md rounded-2xl md:rounded-3xl px-6 py-8 md:px-10 md:py-10 border border-white/15 shadow-2xl"
          >
            <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white mb-3 drop-shadow-md">
              by IL Cazar Developments
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              Park Sight
            </h1>
            <p className="text-xl md:text-2xl text-white mb-2 font-semibold drop-shadow-md">
              R4 — New Capital
            </p>
            <p className="text-base md:text-lg text-green-200 mb-3 font-medium drop-shadow-md">
              A New Line of Living
            </p>
            <p className="text-sm md:text-base text-white leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-md">
              مشروع سكني متكامل في موقع مميز بالعاصمة الإدارية — عمود أخضر مستمر، وحدات بإطلالة على الحديقة، ومرحلة أولى 20 فدان.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={scrollToForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-tatweer-orange text-white rounded-2xl hover:bg-green-700 transition-all duration-200 font-semibold shadow-xl text-lg"
              >
                استكشف الوحدات
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
