import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import img1 from "/images/pic1.jpg";
import img2 from "/images/pic2.jpg";
import img3 from "/images/pic3.jpg";
import img4 from "/images/pic4.jpg";
import img5 from "/images/pic5.jpg";
import img6 from "/images/pic6.jpg";
import img7 from "/images/pic7.jpg";
import img8 from "/images/pic8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full flex flex-col items-center p-6 bg-gray-100">
      <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-300 relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Wedding Memory"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      <div className="flex gap-2 mt-4">
        {images.map((img, index) => (
          <motion.button
            key={index}
            className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
              index === currentIndex ? "border-blue-500 scale-110" : "border-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Contact;
