import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";

import bannerImg from "../../assets/PhD_Banner.jpg";
import phdImg from "../../assets/Ph.D. Programs in Computer Science.jpg";
import phdImg1 from "../../assets/phd1.png"
import phdImg2 from "../../assets/phd2.png"
import phdImg3 from "../../assets/phd3.png"
import phdImg4 from "../../assets/phd4.png"
import phdImg5 from "../../assets/phd5.png"
import phdImg6 from "../../assets/phd6.png"

const phdPrograms = [
  {
    title: "Ph.D. Programs in Computer Science",
    text: `Computer Science drives innovation in every field. A Ph.D. in Computer Science opens opportunities to develop groundbreaking technologies while blending theory with real-world applications.`,
    points: [
      "University of Waterloo, Canada",
      "University of Washington, U.S.A",
      "Columbia University, U.S.A",
      "California Institute of Technology, U.S.A",
      "Imperial College London, UK",
    ],
    img: phdImg1,
    reverse: false,
  },
  {
    title: "Ph.D. Programs in Biology",
    text: `Ph.D. in Biology focuses on advanced research across ecology, molecular biology, neuroscience, and genetics. Graduates become researchers and educators contributing to scientific discovery.`,
    points: [
      "University of California, U.S.A",
      "John Hopkins University, U.S.A",
      "University College London, UK",
      "University of Edinburgh, UK",
      "University of Toronto, Canada",
    ],
    img: phdImg2,
    reverse: true,
  },
  {
    title: "Ph.D. Programs in Physics",
    text: `A Ph.D. in Physics explores quantum mechanics, astrophysics, and particle physics — leading to innovations that shape the scientific world.`,
    points: [
      "ETH Zurich, Switzerland",
      "MIT, U.S.A",
      "University of Edinburgh, UK",
      "Australian National University, Australia",
      "University of Auckland, New Zealand",
    ],
    img: phdImg3,
    reverse: false,
  },
  {
    title: "Ph.D. Programs in Management",
    text: `A Ph.D. in Management prepares you for leadership and academic roles. Learn strategy, innovation, and decision-making through advanced global business research.`,
    points: [
      "University of Pennsylvania, U.S.A",
      "University of Toronto, Canada",
      "Imperial College London, UK",
      "Cornell University, U.S.A",
      "California Institute of Technology, U.S.A",
    ],
    img: phdImg4,
    reverse: true,
  },
  {
    title: "Ph.D. Programs in Mechanical Engineering",
    text: `Specialize in robotics, thermodynamics, and nanotechnology. Lead the future of engineering innovation with advanced research.`,
    points: [
      "Stanford University, U.S.A",
      "Georgia Institute of Technology, U.S.A",
      "MIT, U.S.A",
      "University of Manchester, UK",
      "Cranfield University, UK",
    ],
    img: phdImg5,
    reverse: false,
  },
  {
    title: "Ph.D. Programs in Civil Engineering",
    text: `Civil Engineering Ph.D. programs emphasize infrastructure innovation, sustainability, and public development through high-impact research.`,
    points: [
      "University of British Columbia, Canada",
      "University of Queensland, Australia",
      "University of Texas, U.S.A",
      "Purdue University, U.S.A",
      "University of New South Wales, Australia",
    ],
    img: phdImg6,
    reverse: true,
  },
];

const Phd = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="font-poppins bg-[#f9fbff] text-[#002b5b]">
      <Navbar />

      {/* ✅ HERO SECTION */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-[#002b5b]/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white max-w-3xl px-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Top Ph.D. Programs
          </h1>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            Advance your academic journey with world-leading research programs across top global universities.
          </p>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => setShowForm(true)}
            className="bg-[#00aaff] hover:bg-[#0086cc] px-6 py-2 rounded-full font-semibold transition text-white"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* ✅ CONTENT SECTIONS */}
      <section className="w-[90%] max-w-6xl mx-auto py-16 flex flex-col gap-16">
        {phdPrograms.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col gap-8 ${
              item.reverse ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full md:w-[45%] rounded-2xl shadow-xl"
            />

            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">{item.title}</h2>

              <p className="text-[#003f7f] mb-4 leading-relaxed">
                {item.text}
              </p>

              <ul className="list-disc pl-6 text-[#004f9f]">
                {item.points.map((p, i) => (
                  <li key={i} className="mb-1 leading-relaxed">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />

      {/* ✅ HERO FORM MODAL */}
      {showForm && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-lg"
          >
            <HeroForm
              selectedTool={{ title: "Ph.D. Programs" }}
              closeForm={() => setShowForm(false)}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Phd;
