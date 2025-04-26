import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';


const Hero = () => {

  const scrollToDesigns = () => {
    const designsSection = document.getElementById('designs');
    if (designsSection) {
      designsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-40 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent-400 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-secondary-400 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-300 rounded-full opacity-20 blur-3xl animate-bounce" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              Graphic Design Studio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight"
          >
            <span className="inline-block">🎨 Welcome to </span>
            <span className="text-gradient font-extrabold">SketchKingston</span>
            <span className="block mt-2">Where Creativity Meets Design</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10"
          >
            We transform ideas into captivating visual experiences. Explore our portfolio
            of creative designs crafted with passion and precision.
          </motion.p>

        

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              onClick={scrollToDesigns}
              className="flex flex-col items-center text-gray-500 hover:text-primary-500 transition-colors duration-200"
            >
              <span className="text-sm font-medium mb-2">Explore Designs</span>
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;