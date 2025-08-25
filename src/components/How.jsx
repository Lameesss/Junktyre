import React from 'react';
import { motion } from 'framer-motion';

const How = () => {
  return (
    <div className="bg-gray-100 w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-8 sm:mb-10"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            type: "spring", 
            stiffness: 120 
          }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-600"
            initial={{ scale: 0.7, opacity: 0, rotateX: -15 }}
            whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.1,
              type: "spring",
              stiffness: 100
            }}
            viewport={{ once: true }}
          >
            HOW TO USE
          </motion.h2>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ y: 30, opacity: 0, scale: 0.8 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.3,
            type: "spring",
            stiffness: 90
          }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/how.png"
            alt="How to use Junk Tyre"
            className="max-w-full h-auto object-contain rounded-lg shadow-sm"
            style={{ maxWidth: '400px', width: '100%' }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.4, type: "spring", stiffness: 100 }
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default How;
