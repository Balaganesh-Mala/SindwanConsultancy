import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const lenders = [
  { name: "PNB", logo: "/logos/pnb.png", type: "Indian" },
  { name: "Poonawalla", logo: "/logos/poonawalla.png", type: "NBFC" },
  { name: "Avanse", logo: "/logos/avanse.png", type: "NBFC" },
  { name: "Saraswat Bank", logo: "/logos/saraswat.png", type: "Indian" },
  { name: "MPOWER", logo: "/logos/mpower.png", type: "International" },
  { name: "Prodigy", logo: "/logos/prodigy.png", type: "International" },
  { name: "Credila", logo: "/logos/credila.png", type: "NBFC" },
];

const accordionData = [
  {
    title: "NBFC",
    content: [
      { label: "Loan type", value: "Collateral & Non-Collateral" },
      { label: "Maximum amount", value: "70 Lakhs" },
      { label: "Interest rate", value: "8 - 10%" },
      { label: "Processing fee", value: "No processing fee" },
      { label: "Time to sanction", value: "72 hours" },
    ],
  },
  {
    title: "Indian Bank",
    content: [
      { label: "Loan type", value: "Collateral" },
      { label: "Maximum amount", value: "1 Crore" },
      { label: "Interest rate", value: "7 - 9%" },
      { label: "Processing fee", value: "Up to ₹10,000" },
      { label: "Time to sanction", value: "5-7 days" },
    ],
  },
  {
    title: "International Lender",
    content: [
      { label: "Loan type", value: "Non-Collateral" },
      { label: "Maximum amount", value: "USD 100,000" },
      { label: "Interest rate", value: "8 - 12%" },
      { label: "Processing fee", value: "Varies by country" },
      { label: "Time to sanction", value: "1 week" },
    ],
  },
];

const Accordion = ({ title, content, isOpen, onClick }) => (
  <div className="w-full">
    <button
      onClick={onClick}
      className={`w-full text-left px-5 py-3 font-semibold text-gray-800 bg-blue-50 hover:bg-blue-100 transition flex justify-between items-center`}
    >
      {title}
      <span>{isOpen ? "▲" : "▼"}</span>
    </button>
    {isOpen && (
      <div className="bg-blue-50 border-l-4 border-blue-400 px-6 py-4 text-sm text-gray-700">
        {content.map((item, i) => (
          <div key={i} className="flex justify-between py-1">
            <span>{item.label}</span>
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

const LoanPartnersSection = () => {
  const [openIndex, setOpenIndex] = React.useState(0);
  const scrollRef = useRef(null);

  // Infinite horizontal scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1;
    const maxScroll = scrollContainer.scrollWidth / 2;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= maxScroll) scrollAmount = 0;
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(autoScroll);
    };

    requestAnimationFrame(autoScroll);
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-8 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
        Our <span className="text-blue-600">Loan Partners</span>
      </h2>

      {/* Logos Infinite Scroll */}
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-hidden w-full max-w-6xl pb-6"
      >
        {[...lenders, ...lenders].map((lender, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="min-w-[180px] bg-white shadow-md rounded-lg border border-gray-100 flex flex-col items-center justify-center p-4"
          >
            <img
              src={lender.logo}
              alt={lender.name}
              className="w-28 h-16 object-contain mb-2"
            />
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                lender.type === "Indian"
                  ? "bg-blue-100 text-blue-600"
                  : lender.type === "NBFC"
                  ? "bg-green-100 text-green-600"
                  : "bg-purple-100 text-purple-600"
              }`}
            >
              {lender.type}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Accordion Section */}
      <div className="w-full max-w-4xl mt-10 space-y-3">
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition font-semibold"
      >
        Get Loan Offers
      </motion.button>
    </section>
  );
};

export default LoanPartnersSection;
