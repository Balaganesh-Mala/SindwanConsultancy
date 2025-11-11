import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";

import step1 from "../../assets/step2.png";
import step2 from "../../assets/step1.png";
import step3 from "../../assets/step3.png";
import step4 from "../../assets/step4.png";
import step5 from "../../assets/step5.png";
import step6 from "../../assets/step6.png";
import step7 from "../../assets/step7.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";

const steps = [
  { img: step1, text: "Create your free profile in seconds" },
  { img: step2, text: "Our platform instantly matches you with best-fit universities" },
  { img: step3, text: "Universities identify you as a great fit for admission" },
  { img: step4, text: "Add universities and track your application progress" },
  { img: step5, text: "Universities contact you for admission process" },
  { img: step6, text: "Check all scholarships and apply for funds" },
  { img: step7, text: "Get accepted. Begin your study abroad journey" },
];

const cards = [
  { img: card1, title: "Are You Looking for University Suggestions?" },
  { img: card2, title: "Are You Ready to Make a Shortlist?" },
  { img: card3, title: "Are You Trying to Figure Out Your Career Path?" },
  { img: card4, title: "Are You Trying to Figure Out How to Pay for University?" },
];

const HowItWorks = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="font-poppins text-[#002b5c] bg-white">
      <Navbar />

      {/* ✅ HERO SECTION */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-11-06%20152724.png?updatedAt=1762423779051')",
        }}
      >
        <div className="absolute inset-0 bg-[#003366]/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Get to Universities with Confidence
          </h1>
          <p className="text-base md:text-lg mb-6">
            Sindwan Consultancy makes it easy to reach your dream university with clarity,
            guidance, and support every step of the way.
          </p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* ✅ STEPS SECTION */}
      <section className="px-6 md:px-16 py-16 bg-[#f4f9ff]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <img
                src={step.img}
                alt="step"
                className="w-20 mx-auto mb-3"
              />
              <p className="text-[#003b88] font-medium">
                <span className="text-blue-600 font-bold mr-1">{index + 1}.</span>
                {step.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ✅ COMMON STARTING CARDS SECTION */}
      <section className="py-20 px-6 md:px-16 text-center bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003b88] mb-3">Choose a Common Starting Point</h2>
        <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
          Whether you’re exploring universities, majors, or funding — find the perfect way to begin your journey.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-[#f4f9ff] rounded-xl shadow-lg p-6 hover:-translate-y-2 transition"
            >
              <img
                src={card.img}
                alt="card"
                className="w-full rounded-lg mb-4"
              />
              <h3 className="text-[#004aad] font-semibold text-lg mb-4 min-h-[60px]">
                {card.title}
              </h3>

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md font-semibold text-white"
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}

        </div>
      </section>

      <Footer />

      {/* ✅ HERO FORM POPUP */}
      {showForm && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg"
          >
            <HeroForm
              selectedTool={{ title: "How It Works – Inquiry" }}
              closeForm={() => setShowForm(false)}
            />
          </motion.div>
        </motion.div>
      )}

    </div>
  );
};

export default HowItWorks;
