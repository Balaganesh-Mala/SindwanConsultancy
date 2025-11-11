import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";

import managementImg from "../../assets/Masters1.png";
import csImg from "../../assets/Masters2.png";
import mbaImg from "../../assets/Masters3.png";
import irImg from "../../assets/Masters4.png";
import economicsImg from "../../assets/Masters6.png";
import psychologyImg from "../../assets/Masters7.png";
import ibImg from "../../assets/Masters8.png";
import biologyImg from "../../assets/Masters9.png";
import engImg from "../../assets/Masters10.png";
import healthImg from "../../assets/Masters11.png";

const masterSections = [
  {
    title: "Masters in Management & Leadership",
    img: managementImg,
    reverse: false,
    text:
      "Competitiveness and leadership play a vital role in every international student’s life. A Master's in Management equips you with business and leadership skills.",
    points: [
      "Oregon State University, U.S.A",
      "Macquarie University, Australia",
      "University of South Australia, Australia",
      "University of East Anglia, UK",
      "Royal Roads University, Canada",
    ],
  },
  {
    title: "Masters in Computer Sciences",
    img: csImg,
    reverse: true,
    text:
      "Computer Science master’s programs focus on AI, innovation and data-driven technologies — preparing you for careers in AI, software engineering, and research.",
    points: [
      "University of Southern Queensland, Australia",
      "Nottingham Trent University, UK",
      "American University, U.S.A",
      "Lakehead University, Canada",
      "Northumbria University, UK",
    ],
  },
  {
    title: "Masters in Business Administration (MBA)",
    img: mbaImg,
    reverse: false,
    text:
      "The MBA remains the most powerful graduate degree worldwide, covering finance, marketing, HR, and operations.",
    points: [
      "Queensland University of Technology, Australia",
      "University of Massachusetts Lowell, U.S.A",
      "University of Glasgow, UK",
      "University of New Brunswick, Canada",
      "Colorado State University, U.S.A",
    ],
  },
  {
    title: "Masters in International Relations",
    img: irImg,
    reverse: true,
    text:
      "Study global politics, diplomacy, and world systems. Prepare for careers in government, NGOs, and international organizations.",
    points: [
      "University of New South Wales, Australia",
      "University of Stirling, UK",
      "George Mason University, U.S.A",
      "Dallas Baptist University, U.S.A",
      "Swansea University, UK",
    ],
  },
  {
    title: "Masters in Economics",
    img: economicsImg,
    reverse: false,
    text:
      "Economics teaches how societies grow, how policies shape markets, and opens doors in business, research, and academia.",
    points: [
      "American University, U.S.A",
      "Griffith University, Australia",
      "Nottingham Trent University, UK",
      "University of Birmingham, UK",
      "University of Adelaide, Australia",
    ],
  },
  {
    title: "Masters in Psychology",
    img: psychologyImg,
    reverse: true,
    text:
      "Explore human behavior and mental health. Become an expert in therapy, counseling, and psychological research.",
    points: [
      "Curtin University, Australia",
      "Griffith University, Australia",
      "University of Bristol, UK",
      "University of South Florida, U.S.A",
      "University of Regina, Canada",
    ],
  },
  {
    title: "Masters in International Business",
    img: ibImg,
    reverse: false,
    text:
      "Learn cross-cultural management, international trade, and skills needed to grow businesses globally.",
    points: [
      "Nottingham Trent University, UK",
      "University of Birmingham, UK",
      "University of New South Wales, Australia",
      "Florida International University, U.S.A",
      "Arizona State University, U.S.A",
    ],
  },
  {
    title: "Masters in Biology",
    img: biologyImg,
    reverse: true,
    text:
      "Explore biodiversity, research cutting-edge biology, and contribute to medicine and environmental science.",
    points: [
      "University of South Florida, U.S.A",
      "Nottingham Trent University, UK",
      "University of Glasgow, UK",
      "University of Bristol, UK",
      "University of Regina, Canada",
    ],
  },
  {
    title: "Masters in Engineering & Technology",
    img: engImg,
    reverse: false,
    text:
      "Shape the world with innovation, advanced engineering, and technological breakthroughs.",
    points: [
      "George Mason University, U.S.A",
      "University of South Florida, U.S.A",
      "University of Adelaide, Australia",
      "University of Birmingham, UK",
      "Curtin University, Australia",
    ],
  },
  {
    title: "Masters in Health Sciences",
    img: healthImg,
    reverse: true,
    text:
      "Advance healthcare innovation through master programs in public health, medical science, and biomedical research.",
    points: [
      "Newcastle University, UK",
      "University of Glasgow, UK",
      "University of Cincinnati, U.S.A",
      "Illinois State University, U.S.A",
      "Flinders University, Australia",
    ],
  },
];

const Master = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="font-poppins text-[#002b4d] bg-white">
      <Navbar />

      {/* ✅ HERO SECTION */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-11-06%20133715.png)",
        }}
      >
        <div className="absolute inset-0 bg-[#003366]/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white max-w-3xl px-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Top Master’s Degrees
          </h1>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            Advance your education and career through globally recognized
            Master’s programs designed to shape leaders, innovators, and researchers.
          </p>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => setShowForm(true)}
            className="bg-white text-[#003366] px-6 py-2 rounded-full font-semibold hover:bg-[#003366] hover:text-white transition"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* ✅ CONTENT SECTIONS */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto">
        {masterSections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${
              sec.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-10 mb-20`}
          >
            <img
              src={sec.img}
              alt={sec.title}
              className="w-full md:w-1/3 rounded-xl shadow-xl"
            />

            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">
                {sec.title}
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">{sec.text}</p>

              <ul className="list-disc pl-5 text-[#003366] font-medium">
                {sec.points.map((p, idx) => (
                  <li key={idx} className="mb-1">
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
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg"
          >
            <HeroForm
              selectedTool={{ title: "Master Programs" }}
              closeForm={() => setShowForm(false)}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Master;
