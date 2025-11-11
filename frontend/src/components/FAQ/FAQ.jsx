import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What services does Sindwan Consultancy provide?",
    answer:
      "We offer study abroad counseling, university shortlisting, SOP/LOR assistance, visa guidance, profile evaluation, and full admission support for students applying to the U.S., U.K., Canada, Australia, and more.",
  },
  {
    question: "Is Sindwan Consultancy's counseling free?",
    answer:
      "Yes. Our initial counseling and profile evaluation are completely free. We guide you through the entire application process without any hidden charges.",
  },
  {
    question: "How long does the admission process take?",
    answer:
      "The admission timeline depends on the country and university. Typically, students receive offers within 2–8 weeks after submitting their applications.",
  },
  {
    question: "Do you help with SOP, LOR, and Resume writing?",
    answer:
      "Yes. We create personalized SOPs, LORs, and professional resumes that strengthen your application and increase your chances of getting admitted.",
  },
  {
    question: "Can you help me get scholarships?",
    answer:
      "Absolutely! We identify scholarship opportunities based on your academic background and help you apply for both university and external scholarships.",
  },
  {
    question: "Do you assist with visa applications?",
    answer:
      "Yes. Our visa experts guide you through document preparation, financial planning, mock interviews, and end-to-end visa submission.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4f9ff] py-16 px-6 md:px-12 font-poppins">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-[#003366] text-center mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-lg shadow-md p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question Row */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#003366]">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                >
                  <FaChevronDown className="text-gray-600" />
                </motion.div>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-700 mt-3 leading-6"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
