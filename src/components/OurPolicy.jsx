import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets/frontend_assets/assets'

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: 'Easy Exchange Policy',
      description: 'We offer hassle free exchange policy'
    },
    {
      icon: assets.quality_icon,
      title: '7 days Return Policy',
      description: 'We provide 7 days free return policy'
    },
    {
      icon: assets.support_img,
      title: 'Best customer support',
      description: 'We provide 24/7 customer support policy'
    }
  ]

  return (
    <div className='bg-white py-20 w-full'>
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center'>
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 80,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { duration: 0.3, type: "spring", stiffness: 200 }
              }}
              whileTap={{ 
                y: -4,
                scale: 1.02,
                transition: { duration: 0.2, type: "spring", stiffness: 300 }
              }}
              // Mobile-friendly continuous animations
              animate={{
                y: [0, -2, 0]
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              {/* Icon with animation - Works on all screen sizes */}
              <motion.div
                className="mb-5 cursor-pointer"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.6, type: "spring", stiffness: 100 }
                }}
                whileTap={{ 
                  rotate: 180,
                  scale: 0.95,
                  transition: { duration: 0.3, type: "spring", stiffness: 200 }
                }}
                // Mobile-friendly animations
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
              >
                <motion.img 
                  src={policy.icon} 
                  className='w-12 m-auto' 
                  alt="" 
                  initial={{ rotateY: -15, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  // Enhanced mobile interactions
                  whileHover={{ 
                    scale: 1.15,
                    rotateY: 15,
                    transition: { duration: 0.4, type: "spring", stiffness: 150 }
                  }}
                  whileTap={{ 
                    scale: 0.9,
                    rotateY: -15,
                    transition: { duration: 0.2, type: "spring", stiffness: 300 }
                  }}
                />
              </motion.div>
              
              {/* Title with animation */}
              <motion.h3 
                className='font-semibold mb-2 text-gray-800'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.4,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  color: "#000000",
                  transition: { duration: 0.3 }
                }}
              >
                {policy.title}
              </motion.h3>
              
              {/* Description with animation */}
              <motion.p 
                className='text-gray-400 text-sm sm:text-base'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  color: "#666666",
                  transition: { duration: 0.3 }
                }}
              >
                {policy.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
