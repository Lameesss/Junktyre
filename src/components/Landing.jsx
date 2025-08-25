import React from 'react';
import { motion } from 'framer-motion';

const Landing = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
          
          {/* Left Section - Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2 
            }}
          >
            {/* Brand Name */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4"
              initial={{ y: -50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
            >
              JUNK
            </motion.h1>
            
            {/* Product Slogan */}
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 mb-6"
              initial={{ y: -30, opacity: 0, x: -20 }}
              animate={{ y: 0, opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.6,
                type: "spring",
                stiffness: 80
              }}
            >
              Premium Quality Products
            </motion.h2>
            
            {/* Product Description */}
            <motion.p 
              className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ y: -20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8,
                type: "spring",
                stiffness: 60
              }}
            >
              Discover our exclusive collection of premium products designed to enhance your lifestyle. 
              Each item is carefully crafted with attention to detail and quality materials to provide 
              you with the best shopping experience.
            </motion.p>
            
            {/* Add to Cart Button */}
            <motion.button
              className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 1.0,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 20px -5px rgba(0, 0, 0, 0.1)",
                y: -5
              }}
              whileTap={{ scale: 0.92 }}
            >
              Add to your cart
            </motion.button>
          </motion.div>
          
          {/* Right Section - Product Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.3 
            }}
          >
            <motion.div
              className="relative"
              initial={{ rotateY: -20, opacity: 0, scale: 0.8 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5,
                type: "spring",
                stiffness: 80
              }}
            >
              <motion.img
                src="/junk1.png"
                alt="Junk Product"
                className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto object-contain drop-shadow-2xl max-w-full"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15)) drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))'
                }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 8,
                  y: -10,
                  transition: { duration: 0.4, type: "spring", stiffness: 100 }
                }}
              />
              
              {/* Enhanced floating animation effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: [-200, 200],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut"
                }}
              />
              
              {/* Additional glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
