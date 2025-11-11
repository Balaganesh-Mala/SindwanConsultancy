import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";

import bannerImg from "../../assets/bannerImage.jpg";
import AdvisingImage1 from "../../assets/Advising1.png";
import AdvisingImage2 from "../../assets/Advising2.png";
import AdvisingImage3 from "../../assets/Advising3.png";
import AdvisingImage4 from "../../assets/Advising4.png";

const sections = [
  {
    img: AdvisingImage1,
    tag: "The Right Fit",
    title: "Making the Right List of Universities",
    text: "We understand your preferences and create the perfect university list using advanced search algorithms, academic evaluation, and financial background assessment.",
  },
  {
    img: AdvisingImage2,
    tag: "Your Perspective",
    title: "Pen Down a Compelling Essay",
    text: "We help you bring your story to life — crafting a powerful essay that reflects your experiences and makes your application shine.",
  },
  {
    img: AdvisingImage3,
    tag: "Your Roadmap to Success",
    title: "Submit a Flawless Application",
    text: "We fine-tune every detail of your application, ensuring perfection before submission with feedback and multiple expert reviews.",
  },
  {
    img: AdvisingImage4,
    tag: "Your Money",
    title: "A Befitting Financial Aid",
    text: "We evaluate your financial situation and help you explore available aid options to ensure clarity on costs and opportunities.",
  },
];

const Advising = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);

  return (
    <div className="font-poppins bg-[#f9fbff] text-[#002b5b] overflow-x-hidden">

      <Navbar />

      {/* ✅ HERO SECTION */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-[#002b5b]/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-6 max-w-2xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Admission Guidance
          </h1>

          <p className="text-base md:text-lg mb-6">
            Associate with an expert counselor to get admission into the university of your dreams.
          </p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={openForm}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* ✅ INTRO SECTION */}
      <section className="w-[90%] max-w-4xl mx-auto py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#004f9f] mb-2"
        >
          Admission Guidance
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-[#0086cc] font-semibold mb-4"
        >
          Take Those First Steps to Your Future Doubt Free
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#003f7f] leading-7"
        >
          At Sindwan Consultancy, we give wings to your thoughts. Whether you are applying
          to the top schools or a first-time applicant, we guide you through every step of
          the admission process with clarity and confidence.
        </motion.p>
      </section>

      {/* ✅ MAIN ADVISING SECTIONS */}
      <section className="w-[90%] max-w-6xl mx-auto flex flex-col gap-16 pb-20">

        {sections.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={item.img}
              className="w-full md:w-1/3 rounded-2xl shadow-xl"
              alt="Advising"
            />

            <div className="flex-1">
              <h3 className="text-[#00aaff] uppercase text-sm font-semibold">
                {item.tag}
              </h3>

              <h2 className="text-2xl font-bold text-[#002b5b] mt-2 mb-3">
                {item.title}
              </h2>

              <p className="text-[#003f7f] leading-7 mb-4">{item.text}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openForm}
                className="border-2 border-[#00aaff] text-[#00aaff] px-4 py-2 rounded-full font-semibold hover:bg-[#00aaff] hover:text-white transition"
              >
                Find Out More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ✅ HERO FORM POPUP */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-lg"
          >
            <HeroForm
              selectedTool={{ title: "Advising – Inquiry" }}
              closeForm={() => setShowForm(false)}
            />
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default Advising;
