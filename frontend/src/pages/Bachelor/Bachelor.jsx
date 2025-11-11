import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";

import bannerImg from "../../assets/Bachelor’s_Degrees_Banner.jpg";
import businessImg from "../../assets/business_profestional.png";
import architectureImg from "../../assets/professional2.png";
import engineeringImg from "../../assets/professional3.png";
import scienceImg from "../../assets/professional4.png";
import socialImg from "../../assets/professional5.png";
import appliedImg from "../../assets/professional6.png";

// ✅ Data Sections
const sections = [
  {
    title: "Business and Management",
    img: businessImg,
    reverse: false,
    text:
      "Business & Management teaches you everything about running a successful organization. Explore Project Management, Business Administration, Finance, Marketing, HR and learn how to manage teams and grow businesses globally.",
    points: [
      "University of Bristol, United Kingdom",
      "University of Glasgow, United Kingdom",
      "University of Arizona, U.S.A",
      "Baylor University, U.S.A",
      "Monash University, Australia",
      "Dalhousie University, Canada",
    ],
  },
  {
    title: "Arts, Design and Architecture",
    img: architectureImg,
    reverse: true,
    text:
      "Arts & Design degrees build creative thinkers. Architecture develops professionals to design inspiring spaces. Build visual, conceptual, and technical skills for creative industries.",
    points: [
      "University of Victoria, Canada",
      "Simon Fraser University, Canada",
      "University of New South Wales, Australia",
      "Nottingham Trent University, UK",
      "American University, U.S.A",
      "Baylor University, U.S.A",
    ],
  },
  {
    title: "Engineering and Technology",
    img: engineeringImg,
    reverse: false,
    text:
      "Engineering & Technology equips you to innovate and solve global problems. Learn mechanical, electrical, computing and advanced technologies for real-world industries.",
    points: [
      "Queensland University of Technology, Australia",
      "University of Birmingham, UK",
      "University of Vermont, U.S.A",
      "University of Surrey, UK",
      "University of Victoria, Canada",
    ],
  },
  {
    title: "Natural Sciences",
    img: scienceImg,
    reverse: true,
    text:
      "Natural Sciences explore biology, chemistry, physics and geology. Build research skills to innovate in biotechnology and environmental science.",
    points: [
      "University of Saskatchewan, Canada",
      "University of Surrey, UK",
      "Baylor University, U.S.A",
      "Macquarie University, Australia",
      "RMIT University, Australia",
    ],
  },
  {
    title: "Social Sciences",
    img: socialImg,
    reverse: false,
    text:
      "Social Sciences explore human behavior and systems. Learn sociology, psychology, economics, and political science to build impactful careers.",
    points: [
      "University of Tasmania, Australia",
      "University of South Australia",
      "The University of Huddersfield, UK",
      "University of Dundee, UK",
      "University of Utah, U.S.A",
    ],
  },
  {
    title: "Applied Sciences",
    img: appliedImg,
    reverse: true,
    text:
      "Applied Sciences focus on practical scientific applications like Forensic Science, Food Science, and Emergency Management.",
    points: [
      "University of Tasmania, Australia",
      "Curtin University, Australia",
      "University of South Florida, U.S.A",
      "University of Surrey, UK",
      "Newcastle University, UK",
    ],
  },
];

const Bachelor = () => {
  const [showForm, setShowForm] = useState(false);

  const openHeroForm = () => setShowForm(true);
  const closeHeroForm = () => setShowForm(false);

  return (
    <div className="font-poppins text-[#002b5c] bg-white">
      <Navbar />

      {/* ✅ HERO SECTION */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-[#002b5c]/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-4 max-w-2xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Top Bachelor’s Degrees
          </h1>
          <p className="text-base md:text-lg mb-6">
            Discover your path to a world-class education across leading fields worldwide.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={openHeroForm}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* ✅ CONTENT SECTIONS */}
      <section className="py-16 px-6 md:px-16">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${
              sec.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-10 mb-20 items-center`}
          >
            <img
              src={sec.img}
              alt={sec.title}
              className="w-full md:w-1/3 rounded-xl shadow-xl"
            />

            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#003b88] mb-4">
                {sec.title}
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">{sec.text}</p>

              <ul className="list-disc pl-5 text-blue-700">
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
            <HeroForm selectedTool={{ title: "Bachelor Programs" }} closeForm={closeHeroForm} />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Bachelor;
