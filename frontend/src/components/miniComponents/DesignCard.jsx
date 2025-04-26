import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart } from 'lucide-react';
import { Link } from 'react-router';

const DesignCard = ({ design, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={design.imageUrl}
          alt={design.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p className="text-sm font-medium">{design.category}</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
          {design.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {design.description}
        </p>

        {/* Footer Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-pink-700">
            <Heart className="h-4 w-4 mr-1" />
            <span className="text-sm">{design.likes}</span>
          </div>

          <Link to={design?.to}
            
            className="px-4 py-1.5 bg-pink-500 text-white text-sm font-medium rounded-full flex items-center hover:bg-pink-600 transition-colors duration-200 hover:scale-110 "
          >
            <Eye className="h-4 w-4 mr-1" />
            View
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DesignCard;