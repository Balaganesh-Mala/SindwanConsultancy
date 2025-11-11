import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import mentor1 from "../../assets/mentor1.png";
import mentor2 from "../../assets/mentor2.png";
import mentor3 from "../../assets/mentor3.png";
import mentor4 from "../../assets/mentor4.png";

const mentorCards = [
  {
    title: "GENEROUS INDUSTRY COMPENSATIONS",
    text: "You earn great incentives per student without interfering in your existing job. A strong income opportunity with high transparency.",
    image: mentor1,
  },
  {
    title: "TRAINING AND CERTIFICATION",
    text: "Complete simple online training, earn certification, and guide students effectively. Become a certified global mentor.",
    image: mentor2,
  },
  {
    title: "MAKING EASY MONEY ONLINE",
    text: "Earn money from home while helping students. Work flexibly and make a global impact.",
    image: mentor3,
  },
  {
    title: "IMPACT OTHERS’ LIVES",
    text: "Help students achieve dreams by sharing your experience. Inspire future leaders.",
    image: mentor4,
  },
];

const Mentor = () => {
  return (
    <>
      <Navbar />

      {/* ✅ Banner Section */}
      <section
        className="relative h-[380px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-11-06%20154426.png')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="relative text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Become a Mentor
          </h1>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            Join our network of mentors helping students shape their education
            journey. Share your knowledge, earn rewards, and inspire futures.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
            onClick={() => window.open("https://wa.me/919876543210", "_blank")}
          >
            Join as Mentor
          </motion.button>
        </motion.div>
      </section>

      {/* ✅ Mentor Section */}
      <section className="bg-[#f9f8f6] py-16 px-4 md:px-16 flex flex-col gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-semibold text-gray-800"
        >
          WHY BECOME A MENTOR?
        </motion.h2>

        <div className="flex flex-col gap-14">
          {mentorCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } bg-white shadow-md rounded-xl overflow-hidden gap-6 p-6`}
            >
              {/* ✅ Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg"
              />

              {/* ✅ Text */}
              <div className="flex flex-col justify-center md:w-1/2 bg-white p-4 rounded-xl shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Mentor;
