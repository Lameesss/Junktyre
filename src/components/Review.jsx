import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Car Enthusiast",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "Junk Tyre has completely transformed my vehicle's appearance! The deep black shine it gives to my tyres is incredible. My car looks brand new every time I use it. Highly recommended for anyone who wants that showroom-worthy look."
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Professional Driver",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "As a professional driver, I need my vehicle to look its best. Junk Tyre delivers exceptional results every time. The application is easy and the results are long-lasting. It's become an essential part of my car care routine."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Car Detailer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "I've tried many tyre polishing products, but Junk Tyre stands out for its quality and ease of use. The shine is incredible and it doesn't leave any residue. My clients are always impressed with the results."
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Classic Car Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "For my classic car collection, I only use the best products. Junk Tyre provides that premium finish that makes my vintage vehicles look absolutely stunning. The deep black color is exactly what I was looking for."
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="bg-white py-16 w-full">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
            TESTIMONIALS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers say about Junk Tyre
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ 
                  duration: 0.6, 
                  type: "spring", 
                  stiffness: 100 
                }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                {/* Quote Icon */}
                <motion.div
                  className="text-4xl text-black mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  "
                </motion.div>

                {/* Review Text */}
                <motion.p
                  className="text-lg text-gray-700 leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {reviews[currentIndex].text}
                </motion.p>

                {/* Author Info */}
                <motion.div
                  className="flex items-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={reviews[currentIndex].image}
                      alt={reviews[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">
                      {reviews[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {reviews[currentIndex].role}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-black' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
