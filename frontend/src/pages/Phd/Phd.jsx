import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";

import bannerImg from "../../assets/PhD_Banner.jpg";
import phdImg from "../../assets/Ph.D. Programs in Computer Science.jpg";
import phdImg1 from "../../assets/phd1.jpg"
import phdImg2 from "../../assets/phd2.jpg"
import phdImg3 from "../../assets/phd3.jpg"
import phdImg4 from "../../assets/phd4.jpg"
import phdImg5 from "../../assets/phd5.jpg"
import phdImg6 from "../../assets/phd6.jpg"

const phdPrograms = [
  {
    title: "Ph.D. Programs in Computer Science",
    text: `A Ph.D. in Computer Science equips researchers to create the next generation of intelligent and high-performance systems. 
    Students explore cutting-edge fields such as artificial intelligence, deep learning, quantum computing, robotics, cybersecurity, 
    big data infrastructure, and advanced algorithm design. The program blends theoretical foundations with real-world applications, 
    allowing scholars to contribute to emerging technologies that shape global industries. Doctoral candidates work on high-impact 
    research projects, publish in top journals, collaborate with leading scientists, and contribute to major technological breakthroughs. 
    Graduates move into roles as university professors, research scientists, CTOs, AI engineers, and innovators in major tech companies. 
    This program is ideal for individuals passionate about creating transformative digital solutions and advancing the future of computing.`,
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
    text: `A Ph.D. in Biology focuses on advanced investigation of living systems across molecular biology, neuroscience, genetics, ecology, 
    microbiology, and biotechnology. Students conduct laboratory-based research, publish scientific papers, and work alongside distinguished 
    faculty to solve global biological challenges. Research areas include disease mechanisms, genome editing, drug development, biodiversity 
    conservation, and environmental sustainability. Doctoral researchers gain expertise in experimental design, scientific communication, 
    and advanced analytical techniques. Graduates pursue careers as university professors, research scientists, biotech innovators, 
    pharmaceutical specialists, and environmental consultants. This degree is perfect for those driven by scientific curiosity and a desire 
    to make meaningful contributions to health, medicine, and environmental science.`,
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
    text: `A Ph.D. in Physics enables students to investigate the fundamental laws of the universe through advanced research in quantum mechanics, 
    astrophysics, condensed matter physics, particle physics, and cosmology. Scholars work with complex simulations, high-energy accelerators, 
    telescopes, and specialized research laboratories. The program emphasizes deep theoretical understanding merged with experimental inquiry. 
    Doctoral candidates contribute to groundbreaking discoveries that influence technology, space exploration, and scientific innovation. 
    Graduates pursue careers in academia, national research labs, aerospace agencies, quantum computing companies, and advanced scientific institutions. 
    This degree is ideal for students who are passionate about exploring the mysteries of matter, energy, and the universe at its deepest level.`,
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
    text: `A Ph.D. in Management prepares scholars for leadership in academic research, teaching, and high-level organizational strategy. 
    Students specialize in areas such as organizational behavior, strategic management, entrepreneurship, international business, 
    leadership theory, human resources, and innovation management. The program emphasizes analytical thinking, qualitative and quantitative 
    research methods, and theoretical development. Candidates publish scholarly work, contribute to global business research, and collaborate 
    with corporate executives and business leaders. Graduates become university professors, consultants, policy advisors, or leaders in 
    research-driven corporations. This program is ideal for individuals who want to explore how businesses operate and influence the global economy.`,
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
    text: `A Ph.D. in Mechanical Engineering allows students to explore cutting-edge innovations in robotics, thermal science, fluid mechanics, 
    nanotechnology, manufacturing systems, aerospace engineering, and energy sustainability. Scholars design experiments, work with 
    advanced simulations, and develop engineering solutions with global applications. The program emphasizes creative problem-solving, 
    innovation, and technical leadership. Graduates become engineering researchers, university faculty, R&D specialists, robotics engineers, 
    and technical directors in leading industries. This program is ideal for students who want to push technological boundaries and play a 
    role in shaping the future of engineering.`,
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
    text: `A Ph.D. in Civil Engineering focuses on advanced research in infrastructure development, structural engineering, transportation systems, 
    water resources, geotechnical engineering, and sustainable construction. Students work on real-world projects addressing climate change, 
    urban development, smart cities, and resilient infrastructure. The program builds expertise in design, simulation, materials research, 
    and project assessment. Graduates become university professors, infrastructure consultants, government researchers, and senior engineers 
    in global construction and engineering firms. This program is perfect for students who want to improve society by building safer, 
    sustainable, and future-ready infrastructure.`,
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
              className="w-full md:w-[40%] h-100 rounded-2xl shadow-xl"
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
