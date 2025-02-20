import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// Import your images
import img1 from "/images/pic1.jpg";
import img2 from "/images/pic2.jpg";
import img3 from "/images/pic3.jpg";
import img4 from "/images/pic4.jpg";
import img5 from "/images/pic5.jpg";
import img6 from "/images/pic6.jpg";
import img7 from "/images/pic7.jpg";
import img8 from "/images/pic8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const NewDesign = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Fix here

  // Duplicate images if less than 12 for better grid layout
  const galleryImages = images.length < 12 ? [...images, ...images] : images;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50 p-8">
      {/* Main Gallery Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        initial="hidden"
        animate="visible"
      >
        {galleryImages.map((img, index) => (
          <motion.div
            key={`${img}-${index}`}
            className="relative aspect-square cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelectedImage(img)}
          >
            {/* Image with decorative frame */}
            <motion.div
              className="absolute inset-0 bg-white p-2 shadow-lg rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={img}
                alt={`Wedding memory ${index + 1}`}
                className="w-full h-full object-cover rounded-md"
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-lg shadow-xl"
              />
              <button
                className="absolute -top-8 right-0 text-white text-3xl"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Text */}
      <motion.div
        className="text-center my-12"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-4xl font-serif text-rose-600 mb-4">
          Our Wedding Memories
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Forever begins with a single moment. Relive our special day through
          these captured memories.
        </p>
      </motion.div>
    </div>
  );
};

export default NewDesign;
