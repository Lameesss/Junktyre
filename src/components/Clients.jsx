import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const stats = [
    { number: "25,356", label: "Happy Customers" },
    { number: "6,050", label: "Followers" },
    { number: "851", label: "Shops" },
    { number: "95%", label: "Satisfaction Rate" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-white py-16 w-full">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Top Section Divider */}
        <motion.div 
          className="w-full h-px bg-gray-200 mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              {/* Number */}
              <motion.div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {stat.number}
              </motion.div>
              
              {/* Label */}
              <motion.div
                className="text-sm sm:text-base text-gray-600 font-medium"
                whileHover={{ 
                  color: "#000",
                  transition: { duration: 0.2 }
                }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Section Divider */}
        <motion.div 
          className="w-full h-px bg-gray-200 mt-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </div>
    </div>
  );
};

export default Clients;
