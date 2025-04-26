import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import DesignCard from './DesignCard';
import { designsData, designCategories } from '../miniComponents/designData';

const DesignGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDesigns = designsData.filter((design) => {
    const matchesCategory =
      selectedCategory === 'All' || design.category === selectedCategory;
    const matchesSearch =
      design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      design.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="designs" className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Creative Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of design work across various
            categories
          </p>
        </motion.div>

        <div className="mb-10 space-y-6">
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search designs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors duration-200"
              />
            </div>
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-gray-400" />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors duration-200"
              >
                {designCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {designCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Designs grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {filteredDesigns.length > 0 ? (
              filteredDesigns.map((design, index) => (
                <DesignCard key={design.id} design={design} index={index} />
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <p className="text-xl text-gray-600">
                  No designs found matching your criteria
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {filteredDesigns.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            {/* <button className="px-8 py-3 bg-white border-2 border-primary-500 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors duration-200">
              Load More Designs
            </button> */}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DesignGrid;