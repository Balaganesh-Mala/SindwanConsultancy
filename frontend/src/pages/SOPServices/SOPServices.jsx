import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";

import bannerImg from "../../assets/bannerImage.jpg";

const sections = [
  {
    title: "What is an SOP?",
    content: (
      <>
        SOP stands for <strong>Statement of Purpose</strong> and is an integral
        part of the application process apart from your academic qualifications
        and English scores. It is vital for applications to universities abroad—
        especially in the <strong>U.S.A, U.K, Australia, Canada, New Zealand</strong>{" "}
        and <strong>Singapore</strong>.
      </>
    ),
  },
  {
    title: "What is the Purpose of an SOP?",
    content: (
      <>
        As the name suggests, the SOP states your purpose for choosing a
        particular <strong>course, university,</strong> and{" "}
        <strong>country</strong>. It expresses your academic background, career
        goals, and expectations from the program.
        <br />
        <br />
        While a college essay focuses broadly on your personal journey, an SOP
        specifically highlights your academic, professional, and career
        aspirations.
      </>
    ),
  },
  {
    title: "Why choose Sindwan Consultancy SOP Services?",
    content: (
      <>
        At <strong>Sindwan Consultancy</strong>, we help students craft{" "}
        <strong>personalized and impactful SOPs</strong> that strengthen their
        university applications. With our deep understanding of admission
        requirements, we ensure your SOP reflects your goals, strengths, and
        academic aspirations clearly and persuasively.
      </>
    ),
  },
  {
    title: "Areas of Focus while Preparing an SOP",
    list: [
      "Avoid grammatical and spelling errors.",
      "Proofread multiple times for clarity and correctness.",
      "Keep your content concise and relevant.",
      "Be honest and authentic about your goals.",
      "State how your chosen course aligns with your career path.",
      "Highlight academic and professional achievements meaningfully.",
      "Ensure your SOP reflects genuine passion for growth and learning.",
    ],
  },
  {
    title: "",
    content: (
      <>
        A well-written SOP can significantly enhance your admission chances even
        without perfect grades. Conversely, a poorly written SOP can reduce your
        chances despite strong academic performance.
        <br />
        <br />
        Always dedicate ample time, avoid plagiarism, and ensure originality.
        Universities actively use plagiarism checkers for verification.
      </>
    ),
  },
];

const SOPServices = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white text-[#003366] font-poppins">
      <Navbar />

      {/* ✅ HERO SECTION */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-[#002b5b]/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">SOP Services</h1>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* ✅ SOP CONTENT */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        {sections.map((item, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {item.title && (
              <h2 className="text-xl md:text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-3">
                {item.title}
              </h2>
            )}

            {item.content && (
              <p className="text-gray-700 leading-7">{item.content}</p>
            )}

            {item.list && (
              <ul className="list-disc ml-6 text-gray-700 leading-7">
                {item.list.map((li, idx) => (
                  <li key={idx}>{li}</li>
                ))}
              </ul>
            )}
          </motion.section>
        ))}
      </div>

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
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg px-4"
          >
            <HeroForm
              selectedTool={{ title: "SOP Services Inquiry" }}
              closeForm={() => setShowForm(false)}
            />
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

export default SOPServices;
