import { useState } from "react";
import { motion } from "framer-motion";
import HeroForm from "../HeroForm/HeroForm";
import AwardImage from "../../assets/Awards.png";
import "./Hero.css";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="hero" className="flex items-center justify-center text-center">
      <video
        src="https://ik.imagekit.io/iiz6sw7ik/VN20251109_110332.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 text-white max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          STUDY ABROAD CONSULTANTS
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-4xl text-blue-300 mb-8 font-semibold"
        >
          YOUR SINDWAN CONSULTANCY TO OVERSEAS
        </motion.h2>
        <img
          src={AwardImage}
          alt="Awards"
          className="w-70 md:w-100 mx-auto mb-6"
        />
        {!showForm && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg"
          >
            START NOW
          </motion.button>
        )}
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md"
            onClick={() => setShowForm(false)}
          />
          <div className="relative z-10 w-full max-w-lg px-4">
            <HeroForm closeForm={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
