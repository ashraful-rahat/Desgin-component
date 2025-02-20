import { motion } from "framer-motion";
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

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full flex flex-col items-center p-6 bg-gray-100">
      <div className="relative flex items-center justify-center w-full overflow-hidden py-6">
        {/* Left Arrow */}
        <button onClick={handlePrev} className="absolute left-0 px-4 py-2 bg-gray-300 rounded-full">
          ◀
        </button>

        <motion.div className="relative flex items-center justify-center w-full h-80">
          {images.map((img, index) => {
            let offset = index - currentIndex;
            const half = Math.floor(images.length / 2);
            
            // Adjust offset to get the minimal circular difference
            if (offset > half) {
              offset -= images.length;
            } else if (offset < -half) {
              offset += images.length;
            }

            const scale = offset === 0 ? 1.5 : 1 - Math.abs(offset) * 0.1;
            const translateX = offset * 120; // Adjust multiplier for spacing
            const zIndex = images.length - Math.abs(offset);

            return (
              <motion.div
                key={index}
                className="absolute w-40 h-40 md:w-52 md:h-52 rounded-lg overflow-hidden border-2 cursor-pointer"
                style={{ zIndex }}
                animate={{ scale, x: translateX }}
                transition={{ type: "spring", stiffness: 100 }}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right Arrow */}
        <button onClick={handleNext} className="absolute right-0 px-4 py-2 bg-gray-300 rounded-full">
          ▶
        </button>
      </div>
    </div>
  );
};

export default Navbar;