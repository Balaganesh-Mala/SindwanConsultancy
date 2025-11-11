import React from "react";
import { motion } from "framer-motion";

const HeroCountry = ({ countryName, bannerImage }) => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Study in <span className="text-blue-400">{countryName}</span>
          </h1>
          <p className="mt-3 text-lg text-gray-200">
            Your gateway to world-class education and global opportunities.
          </p>
        </motion.div>

        {/* FORM SECTION */}
        <motion.form
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 flex flex-col gap-3"
        >
          <h3 className="text-xl font-semibold text-center text-white mb-2">
            Free Counselling Form
          </h3>

          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:bg-white/30 transition"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:bg-white/30 transition"
          />

          <input
            type="text"
            placeholder="Mobile"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-200 outline-none focus:bg-white/30 transition"
          />

          <select
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white outline-none focus:bg-white/30 transition"
          >
            <option value="">Select Field of Study</option>
            <option>Engineering</option>
            <option>Business</option>
            <option>Computer Science</option>
            <option>Medical</option>
          </select>

          <select
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white outline-none focus:bg-white/30 transition"
          >
            <option value="">Select Nearest Edmium Office</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Delhi</option>
          </select>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-lg"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default HeroCountry;
