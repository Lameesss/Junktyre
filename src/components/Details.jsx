import React from 'react';
import { motion } from 'framer-motion';

const Details = () => {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Natural Shine",
      description: "Provides natural shine and luster to your tyres without harmful chemicals, making them look brand new."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "No Side Effects",
      description: "Safe for all tyre types and won't damage rubber or cause any harmful side effects to your vehicle."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Quick & Easy",
      description: "Fast-acting formula that dries quickly and provides instant results with minimal effort required."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
        {/* Main Heading */}
        <motion.div
          className="text-center mb-8"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-6 font-normal">
            WHY JUNK TYRE?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transform your vehicle's appearance with our premium tyre polishing spray. 
            Junk Tyre brings back the deep black shine and professional look to your tyres, 
            making them look as good as new.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              {/* Icon */}
              <motion.div
                className="flex justify-center mb-6"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-16 h-16 flex items-center justify-center text-black border-2 border-black rounded-full">
                  {feature.icon}
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-xl sm:text-2xl font-semibold text-black mb-4"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-600 leading-relaxed"
                whileHover={{ 
                  color: "#000",
                  transition: { duration: 0.2 }
                }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-1 bg-black rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Details;
