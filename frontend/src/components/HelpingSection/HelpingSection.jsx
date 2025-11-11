import React from "react";
import { FaComments, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const HelpingSection = () => {
  const whatsappNumber = "919392932943";
  const phoneNumber = "+919392932943";

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section
      className="relative bg-gray-900 text-white text-center py-24 px-6 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/izqq5ffwt/graduation-bg.jpg?updatedAt=1762254589000')",
      }}
    >
      {/* Background zoom animation */}
      <motion.div
        className="absolute inset-0 bg-black/70"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Helping Text */}
        <motion.p
          className="text-lg font-light mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Helping
        </motion.p>

        {/* Main heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          1 Million Students Like{" "}
          <span className="text-blue-400">You.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg font-light mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Go to Study Abroad.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={handleWhatsApp}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
          >
            <FaComments /> LIVE CHAT
          </motion.button>

          <motion.button
            onClick={handleCall}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
          >
            <FaPhoneAlt /> CALL NOW
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HelpingSection;
