import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";

import bannerImg from "../../assets/bannerImage.jpg";
import AdvisingImage1 from "../../assets/Advising1.jpg";
import AdvisingImage2 from "../../assets/Advising2.jpg";
import AdvisingImage3 from "../../assets/Advising3.jpg";
import AdvisingImage4 from "../../assets/Advising4.jpg";

const sections = [
  {
    img: AdvisingImage1,
    tag: "The Right Fit",
    title: "Making the Right List of Universities",
    text: `Choosing the right university can define your entire academic and career journey. 
    We take the time to understand your profile in detail — your academic background, goals, 
    preferred countries, career aspirations, and budget considerations. Using intelligent 
    search tools, global ranking insights, program compatibility analysis, and historical 
    admission patterns, we create a personalized and strategic university list for you. 
    Our goal is to match you with institutions where you will thrive academically, 
    culturally, and financially. You receive a balanced mix of safe, moderate, and competitive 
    universities tailored specifically to your strengths.`,
  },

  {
    img: AdvisingImage2,
    tag: "Your Perspective",
    title: "Pen Down a Compelling Essay",
    text: `Your essay is the heart of your application — it reflects who you are beyond scores and grades. 
    We help you craft a compelling, authentic, and impactful essay that highlights your experiences, 
    achievements, challenges, motivations, and future ambitions. Our expert reviewers refine your 
    narrative to ensure clarity, emotional depth, and strong storytelling. Whether it's a Statement 
    of Purpose (SOP), Personal Essay, or Motivation Letter, we polish every detail while keeping your 
    voice intact. The result is a powerful essay that stands out and captures the attention of 
    admissions committees.`,
  },

  {
    img: AdvisingImage3,
    tag: "Your Roadmap to Success",
    title: "Submit a Flawless Application",
    text: `A strong application is more than just filling forms — it's the perfect blend of accuracy, 
    presentation, and timely submission. Our team guides you through every requirement, from 
    documentation to deadlines. We thoroughly review transcripts, résumés, essays, letters of 
    recommendation, and test scores to ensure they meet each university’s expectations. Multiple 
    levels of expert review help eliminate errors and improve clarity. We make your application 
    polished, structured, and professional. With our support, you submit a flawless, competitive 
    application that highlights your full potential.`,
  },

  {
    img: AdvisingImage4,
    tag: "Your Money",
    title: "A Befitting Financial Aid",
    text: `Finances play a crucial role in studying abroad, and we ensure you explore every available 
    opportunity. Our advisors assess your financial background and guide you through merit-based 
    scholarships, need-based aid, assistantships, tuition waivers, and external funding options. 
    We help you understand cost structures, compare program expenses, and plan an affordable study 
    pathway. Your investment should bring maximum value — which is why our guidance focuses on smart 
    financial planning, transparency, and long-term benefits. We ensure you're empowered to make 
    informed, confident financial decisions.`,
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
