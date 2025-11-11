import React, { useState } from "react";
import { motion } from "framer-motion";

import possibilitiesImage from "../../assets/possibilities.jpg";
import find from "../../assets/find.jpg";
import HeroForm from "../HeroForm/HeroForm";

const tools = [
  {
    title: "WHAT ARE MY POSSIBILITIES?",
    description: "Check your chances of getting into top Universities",
    button: "SEE YOUR CHANCE",
    image: `${possibilitiesImage}`,
  },
  {
    title: "MY SCORE CARD",
    description: "Look for Universities that best suit your interests",
    button: "FIND YOUR FIT",
    image: `${find}`,
  },
  {
    title: "CAREERS AND COURSES",
    description: "Find your interests and courses that take you there",
    button: "START NOW",
    image:
      "https://ik.imagekit.io/izqq5ffwt/ChatGPT%20Image%20Nov%204,%202025,%2004_05_45%20PM.png?updatedAt=1762252586368",
  },
];

const AdvancedTools = () => {
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
    <section className="bg-white py-16 text-center font-poppins relative">

      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-3xl font-semibold text-blue-900 mb-12 tracking-wide"
      >
        ADVANCED TOOLS CUSTOMIZED FOR YOU
      </motion.h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center bg-white shadow-md hover:shadow-xl rounded-xl p-6 transition-all duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <img
              src={tool.image}
              alt={tool.title}
              className="w-48 h-48 object-contain mb-6"
            />
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              {tool.title}
            </h3>
            <p className="text-gray-600 text-sm mb-5 px-4">
              {tool.description}
            </p>

            <motion.button
              onClick={() => handleOpenForm(tool)}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
            >
              {tool.button}
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
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

export default AdvancedTools;
