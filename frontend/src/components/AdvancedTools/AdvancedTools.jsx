import React, { useState } from "react";
import { motion } from "framer-motion";

import possibilitiesImage from "../../assets/possibilities.jpg";
import find from "../../assets/find.jpg";
import HeroForm from "../HeroForm/HeroForm";

const tools = [
  {
    title: "What Are My Possibilities?",
    description:
      "Get a personalized assessment of your chances of admission to top global universities.",
    image: possibilitiesImage,
  },
  {
    title: "My Score Evaluation",
    description:
      "Find the best-fit universities worldwide based on your academic profile and career goals.",
    image: find,
  },
  {
    title: "Careers & Courses",
    description:
      "Explore future-ready careers and discover the courses that lead you to them.",
    image:
      "https://ik.imagekit.io/izqq5ffwt/ChatGPT%20Image%20Nov%204,%202025,%2004_05_45%20PM.png?updatedAt=1762252586368",
  },
];

const AdvancedTools = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="bg-white py-20 text-center font-poppins relative overflow-hidden">

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-4xl font-bold text-blue-900 mb-14 tracking-wide"
      >
        Advanced Tools Designed for Your Success
      </motion.h2>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.06, y: -8 }}
            className="flex flex-col items-center bg-white border border-gray-100 shadow-md hover:shadow-2xl rounded-2xl p-7 transition-all duration-500"
          >
            <img
              src={tool.image}
              alt={tool.title}
              className="w-44 h-44 object-contain mb-5"
            />

            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              {tool.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed px-3">
              {tool.description}
            </p>

            
          </motion.div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-16">
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setShowForm(true)}
          className="bg-blue-700 text-white text-lg font-semibold px-12 py-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300"
        >
          See Your Chances
        </motion.button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-lg"
          >
            <HeroForm closeForm={() => setShowForm(false)} selectedTool={null} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AdvancedTools;
