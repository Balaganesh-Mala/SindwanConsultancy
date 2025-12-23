import { motion } from "framer-motion";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCity,
  FaBook,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";

const HeroForm = ({ closeForm }) => {
  return (
    <>
      {/* ✅ Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-[rgba(0,30,60,0.18)] backdrop-blur-md z-[1000]"
        onClick={closeForm}
      />

      {/* ✅ Form Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-gradient-to-br from-white to-[#e6f0ff] rounded-2xl shadow-2xl 
          w-[90%] max-w-[420px] p-6 z-[1001]"
      >
        {/* Close Button */}
        <button
          onClick={closeForm}
          className="absolute top-3 right-3 bg-blue-900 text-white 
            rounded-full p-2 hover:bg-blue-600 transition"
        >
          <FaTimes size={16} />
        </button>

        {/* Title */}
        <h2 className="text-center text-blue-900 font-bold text-xl md:text-2xl mb-5">
          Get Expert Advice at Zero Cost – Book Now!
        </h2>

        {/* Form Fields */}
        <form className="flex flex-col gap-3">
          {/* Field */}
          <div className="flex items-center bg-white border border-slate-300 
            rounded-lg px-3 py-2 focus-within:border-blue-600 transition">
            <FaUser className="text-blue-600 mr-3" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none bg-transparent text-blue-900 text-sm"
            />
          </div>

          <div className="flex items-center bg-white border border-slate-300 
            rounded-lg px-3 py-2 focus-within:border-blue-600 transition">
            <FaPhone className="text-blue-600 mr-3" />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full outline-none bg-transparent text-blue-900 text-sm"
            />
          </div>

          <div className="flex items-center bg-white border border-slate-300 
            rounded-lg px-3 py-2 focus-within:border-blue-600 transition">
            <FaEnvelope className="text-blue-600 mr-3" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full outline-none bg-transparent text-blue-900 text-sm"
            />
          </div>

          <div className="flex items-center bg-white border border-slate-300 
            rounded-lg px-3 py-2 focus-within:border-blue-600 transition">
            <FaCity className="text-blue-600 mr-3" />
            <input
              type="text"
              placeholder="City"
              className="w-full outline-none bg-transparent text-blue-900 text-sm"
            />
          </div>

          {/* Select Fields */}
          <div className="flex items-center bg-white border border-slate-300 
            rounded-lg px-3 py-2 focus-within:border-blue-600 transition">
            <FaBook className="text-blue-600 mr-3" />
            <select className="w-full bg-transparent outline-none text-blue-900 text-sm">
              <option>Select Field of Study</option>
              <option>Engineering</option>
              <option>Medical</option>
              <option>Business</option>
              <option>Arts</option>
            </select>
          </div>

          <div className="flex items-center bg-white border border-slate-300 
            rounded-lg px-3 py-2 focus-within:border-blue-600 transition">
            <FaGlobe className="text-blue-600 mr-3" />
            <select className="w-full bg-transparent outline-none text-blue-900 text-sm">
              <option>Preferred Study Destination</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Germany</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg py-3 font-semibold 
              hover:bg-blue-700 active:scale-95 transition mt-2"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default HeroForm;
