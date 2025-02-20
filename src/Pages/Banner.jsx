import { motion } from "framer-motion";
import { useRef } from "react";
import img1 from "/images/pic1.jpg";
import img2 from "/images/pic2.jpg";
import img3 from "/images/pic3.jpg";
import img4 from "/images/pic4.jpg";
import img5 from "/images/pic5.jpg";
import img6 from "/images/pic6.jpg";
import img7 from "/images/pic7.jpg";
import img8 from "/images/pic8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Banner = () => {
  const galleryRef = useRef(null);

  return (
    <div className="relative w-full overflow-hidden p-4 bg-gray-100">
      <motion.div
        ref={galleryRef}
        className="flex gap-4"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((img, index) => (
          <div key={index} className="w-64 h-96 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
            <img src={img} alt={`Wedding ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Banner;
