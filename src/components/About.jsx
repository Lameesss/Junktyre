import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="bg-white py-16 w-full">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Section - Image */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-start"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              type: "spring",
              stiffness: 80
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative"
              initial={{ rotateY: -15, opacity: 0, scale: 0.9 }}
              whileInView={{ rotateY: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.0, 
                delay: 0.3,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true }}
            >
              <motion.img
                src="/about.png"
                alt="About Junk Tyre"
                className="w-80 sm:w-96 lg:w-[450px] h-auto object-contain"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.4, type: "spring", stiffness: 100 }
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Right Section - Text Content */}
          <motion.div 
            className="flex-1 lg:pl-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              type: "spring",
              stiffness: 80
            }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-8"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              ABOUT US
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed mb-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 80
              }}
              viewport={{ once: true }}
            >
              We are passionate about providing premium automotive care solutions that transform your vehicle's appearance. 
              Our Junk Tyre polishing spray is crafted with precision and care, designed to bring back the deep black shine 
              and professional look to your tyres. With years of experience in automotive care, we understand what vehicle 
              owners need to maintain that showroom-worthy appearance.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
               {/* Buy Now Button */}
               <motion.button
                 className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300"
                 whileHover={{ 
                   scale: 1.05,
                   y: -2
                 }}
                 whileTap={{ scale: 0.95 }}
               >
                 Buy Now
               </motion.button>
               
               {/* View Details Button */}
               <motion.button
                 className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-600 transition-colors duration-300"
                 whileHover={{ 
                   scale: 1.05,
                   y: -2
                 }}
                 whileTap={{ scale: 0.95 }}
               >
                 View Details
               </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
