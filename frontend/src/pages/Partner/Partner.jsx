import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import partner1 from "../../assets/partner1.png";
import partner2 from "../../assets/partner2.png";
import partner3 from "../../assets/partner3.png";
import partner4 from "../../assets/partner4.png";

const cards = [
  {
    title: "GOOD PAY-SCALE",
    text: `Earn a highly rewarding payout for every successful student application you refer. 
    Our partner counsellors enjoy a transparent commission structure, timely settlements, and 
    performance-based incentives. The more students you assist, the higher your earnings grow. 
    With our smooth and reliable payout system, your hard work is always valued and compensated.`,
    image: partner1,
  },

  {
    title: "FASTEST PROCESSING PROCEDURES",
    text: `We ensure your leads are never left waiting. Students are contacted within hours of 
    submitting the form, and our team immediately begins profile evaluation. Our streamlined 
    system minimizes delays, speeds up application workflows, and enhances student satisfaction — 
    helping you maintain trust and credibility with every referral.`,
    image: partner2,
  },

  {
    title: "MAXIMIZE YOUR LEADS",
    text: `We help you connect with the most suitable and eligible students based on their academic 
    background, interests, and language proficiency. Our intelligent profiling system ensures 
    high-quality conversions and targeted support. With better matching and better guidance, 
    you can grow your network faster and increase your success rate effortlessly.`,
    image: partner3,
  },

  {
    title: "SCHOLARSHIP INFORMATION",
    text: `Stay updated with verified scholarship opportunities across universities and programs. 
    We help you guide students in securing the best possible financial aid based on merit, need, 
    course selection, and eligibility. Accurate information means better decision-making — enabling 
    you to help students reduce costs and access global education with confidence.`,
    image: partner4,
  },
];


const Partner = () => {
  return (
    <>
      <Navbar />

      {/* ✅ Banner Section */}
      <section
        className="relative h-[380px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-11-06%20152724.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Become Our Partner
          </h1>
          <p className="text-sm md:text-base mb-5 leading-relaxed">
            Collaborate with Edmium to help students reach their dream
            universities while earning great rewards.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white rounded-lg font-semibold transition"
          >
            Partner With Us
          </motion.button>
        </motion.div>
      </section>

      {/* ✅ Partner Info Cards */}
      <section className="bg-[#f9f8f6] py-16 px-4 md:px-16">
        <div className="flex flex-col gap-14">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } bg-white shadow-md rounded-xl overflow-hidden gap-6 md:gap-10 p-6`}
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg"
              />

              {/* Content */}
              <div className="flex flex-col justify-center md:w-1/2 bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  {card.text}
                </p>

                {card.button && (
                  <motion.button
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg w-max"
                  >
                    {card.button}
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Partner;
