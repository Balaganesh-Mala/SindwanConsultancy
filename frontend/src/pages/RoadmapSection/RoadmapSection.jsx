import React from "react";
import { motion } from "framer-motion";
import Accordion from "../Accordion/Accordion.jsx";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import counsellorBanner from "../../assets/roadmapBanner.jpg";
import FAQ from "../../components/FAQ/FAQ.jsx";


const steps = [
  {
    number: "1",
    text: "Check Profile Eligibility",
    color: "bg-blue-100 text-blue-600",
  },
  {
    number: "2",
    text: "Get Multiple Loan Offers",
    color: "bg-orange-100 text-orange-600",
  },
  {
    number: "3",
    text: "Submit Your Documents",
    color: "bg-red-100 text-red-600",
  },
  {
    number: "4",
    text: "Get Fastest Loan Approval",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    number: "5",
    text: "Consult Expert For Best Offer",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    number: "6",
    text: "Secure Disbursement",
    color: "bg-green-100 text-green-600",
  },
];

const RoadmapSection = () => {
  return (
    <>
      <Navbar />
      <section
        className="relative h-[350px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${counsellorBanner})`,
        }}
      ></section>
      <section className="w-full py-16 bg-white flex flex-col items-center px-4 md:px-8">
        {/* Title */}

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 relative inline-block">
            Roadmap To Your <span className="text-blue-600">Loan Approval</span>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-300 opacity-70"></div>
          </h2>
        </div>

        {/* Steps */}
        <div className="w-full max-w-3xl flex flex-col items-center space-y-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 w-full md:w-3/4"
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${step.color} border border-gray-200 shadow-sm`}
              >
                {step.number}
              </div>
              <p className="text-gray-800 text-base md:text-lg font-medium">
                {step.text}
              </p>
            </motion.div>
          ))}

          {/* Dotted connector line */}
          <div className="absolute left-5 md:left-8 top-5 bottom-5 border-l-2 border-dashed border-gray-300"></div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all font-semibold"
        >
          Let’s Get Started
        </motion.button>
      </section>
      <Accordion />
      <FAQ />
      <Footer />
    </>
  );
};

export default RoadmapSection;
