import { ChevronLeftIcon, ChevronRightIcon, HeartIcon, XIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const NewDesign = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    setCurrentIndex(prev => 
      direction === 'next' ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length
    );
    setSelectedImage(images[currentIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-900 to-pink-900 relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-400"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
            }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            ❦
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Animated Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6 font-serif">
            Eternal Love Story
            <motion.div
              className="mx-auto mt-4 w-24 h-1 bg-rose-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1 }}
            />
          </h1>
          <p className="text-rose-100 text-lg max-w-2xl mx-auto">
            A journey of love captured through moments that take our breath away
          </p>
        </motion.div>

        {/* Masonry Grid Gallery */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          initial="hidden"
          animate="visible"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer break-inside-avoid"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => {
                setSelectedImage(img);
                setCurrentIndex(index);
              }}
            >
              {/* Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={img}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <HeartIcon className="w-16 h-16 text-rose-400 animate-pulse" />
                  <span className="absolute bottom-4 left-4 text-rose-100 font-medium text-sm">
                    Memory #{index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full mx-4"
              initial={{ scale: 0.8, rotate: -2 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.8, rotate: 2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <motion.img
                key={currentIndex}
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-[80vh] object-contain rounded-xl shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Navigation Arrows */}
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full p-4 text-rose-100 hover:text-rose-400 transition-colors"
                onClick={() => handleNavigation('prev')}
              >
                <ChevronLeftIcon className="w-12 h-12" />
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full p-4 text-rose-100 hover:text-rose-400 transition-colors"
                onClick={() => handleNavigation('next')}
              >
                <ChevronRightIcon className="w-12 h-12" />
              </button>

              {/* Close Button */}
              <button
                className="absolute -top-8 right-0 text-rose-100 hover:text-rose-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <XIcon className="w-10 h-10" />
              </button>

              {/* Image Counter */}
              <div className="absolute -bottom-8 left-0 text-rose-100 text-lg font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Footer */}
      <motion.div
        className="text-center py-8 text-rose-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-sm italic">
          "In your arms I found my forever, in your heart I found my home"
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-rose-400 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default NewDesign;