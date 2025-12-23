import { useState } from "react";
import { motion } from "framer-motion";
import HeroForm from "../HeroForm/HeroForm";
import AwardImage from "../../assets/Awards.png";
import "./Hero.css";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);

  const handleOpenForm = (tool) => {
    setSelectedTool(tool);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedTool(null);
  };

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
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-full max-w-lg"
          >
            <HeroForm selectedTool={selectedTool} closeForm={handleCloseForm} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
