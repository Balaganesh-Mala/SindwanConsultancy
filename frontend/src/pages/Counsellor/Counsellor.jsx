import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import counsellorBanner from "../../assets/counsellorBanner.png";
import counsellor1 from "../../assets/counsellor1.png";
import counsellor2 from "../../assets/counsellor2.png";
import counsellor3 from "../../assets/counsellor3.png";

import counsellorCard1 from "../../assets/counsellorCard1.png";
import counsellorCard2 from "../../assets/counsellorCard2.png";
import counsellorCard3 from "../../assets/counsellorCard3.png";
import counsellorCard4 from "../../assets/counsellorCard4.png";
import counsellorCard5 from "../../assets/counsellorCard5.png";

const whyCards = [
  {
    title: "Huge Industry Compensations",
    img: counsellor1,
  },
  {
    title: "Travel Abroad to Universities",
    img: counsellor2,
  },
  {
    title: "Great Incentives",
    img: counsellor3,
  },
];

const helpCards = [
  {
    title: "Shortlist Universities",
    text: "Use our extensive database to find the best university matches for students.",
    img: counsellorCard1,
  },
  {
    title: "Advanced Tools for Best Match",
    text: "AI-based tools to match students with the best admission options.",
    img: counsellorCard2,
  },
  {
    title: "Apply Online",
    text: "Apply to 700+ universities using our centralized platform.",
    img: counsellorCard3,
  },
  {
    title: "Get Up-to-Date Information",
    text: "Access the latest updates about universities and visa guidelines.",
    img: counsellorCard4,
  },
  {
    title: "Multiple Applications in One Place",
    text: "Manage all university applications under one dashboard.",
    img: counsellorCard5,
  },
];

const Counsellor = () => {
  return (
    <div className="font-poppins text-gray-800">
      <Navbar />

      {/* ✅ Banner Section */}
      <section
        className="relative h-[350px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            `url(${counsellorBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Become a Counsellor with Sindwan Consultancy
          </h1>
          <p className="text-base md:text-lg">
            Help students achieve their dream of studying abroad.
          </p>
        </motion.div>
      </section>

      {/* ✅ Why Section */}
      <section className="py-14 px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold mb-10"
        >
          Why Become a Counsellor with Sindwan Consultancy?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {whyCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={card.img}
                className="h-52 w-full object-cover"
                alt={card.title}
              />
              <h3 className="py-4 px-3 font-semibold text-lg">{card.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ How Helps Section */}
      <section className="py-14 px-4 bg-gray-100 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold mb-10"
        >
          How Sindwan Consultancy Helps Counsellors?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {helpCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md pb-5"
            >
              <img
                src={card.img}
                className="h-48 w-full object-cover rounded-t-xl"
                alt={card.title}
              />
              <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-600 px-4 mt-2 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Info Section */}
      <section className="py-14 px-4 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-semibold max-w-3xl mx-auto mb-6"
        >
          Becoming a counsellor might be tiresome at times, but with Sindwan Consultancy, it
          becomes simpler and rewarding.
        </motion.h3>

        <ul classname="text-left max-w-2xl mx-auto space-y-3 text-gray-700">
          <li>AI-based matching tools for best university fit.</li>
          <li>Huge global university database.</li>
          <li>Powerful online platform to manage students.</li>
          <li>Travel abroad opportunities.</li>
          <li>Great compensations and incentives.</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default Counsellor;
