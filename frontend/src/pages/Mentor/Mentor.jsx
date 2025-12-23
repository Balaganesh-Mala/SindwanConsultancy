import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import mentor1 from "../../assets/mentor1.png";
import mentor2 from "../../assets/mentor2.jpg";
import mentor3 from "../../assets/mentor3.jpg";
import mentor4 from "../../assets/mentor4.jpg";

const mentorCards = [
  {
    title: "GENEROUS INDUSTRY COMPENSATION",
    text: `Sindwan Consultancy offers one of the most rewarding earning opportunities in the education consulting industry. 
    As a mentor, you receive impressive incentives for every student who benefits from your guidance. 
    The earning model is designed to be transparent, performance-based, and easy to understand. 
    You can continue your existing job or studies without any conflict, as mentorship requires flexible hours. 
    This system allows you to earn consistently by supporting students through various stages of their decision-making journey. 
    Every interaction you have with a student adds value to their future and contributes to your financial growth. 
    The more students you help, the more you earn—it’s a simple and fair process. 
    We ensure timely payouts, structured income opportunities, and complete clarity in the commission system. 
    Our team provides full support in understanding earnings, incentive cycles, and payout procedures. 
    With increasing demand for educational guidance, your income potential grows year after year. 
    This model is perfect for professionals, graduates, homemakers, and freelancers looking for stable part-time earnings. 
    You become part of a trusted system where every minute you invest creates both impact and income. 
    Sindwan Consultancy ensures your efforts are always recognized and rewarded. 
    This collaborative earning structure helps you build long-term financial stability. 
    A respected and transparent financial pathway makes this mentorship program truly exceptional.`,
    image: mentor1,
  },

  {
    title: "TRAINING & GLOBAL CERTIFICATION",
    text: `Our training and certification program equips you with everything needed to guide students effectively. 
    We provide easy-to-understand modules covering university selection, course mapping, documentation essentials, scholarships, and timelines. 
    The training is completely online and self-paced, allowing you to learn whenever you have time. 
    Whether you're a beginner or already experienced, you will gain valuable insights into global education systems. 
    After successful completion, you receive an official Sindwan Mentor Certification recognized within our global network. 
    This certification adds credibility to your profile and establishes you as a trusted mentor. 
    It also boosts your confidence while interacting with students and parents. 
    You will learn how to evaluate student profiles, suggest universities, and guide them with accuracy. 
    The program includes real-life case studies and examples to improve your decision-making skills. 
    You also get access to updated admission trends, career pathways, and international academic requirements. 
    Our experts will assist you whenever you need support or clarity. 
    This structured training ensures you are fully prepared before taking up mentorship responsibilities. 
    By the end, you become skilled at understanding needs, analyzing profiles, and offering the right guidance. 
    Certification also enhances your earning potential and opens new professional opportunities. 
    Your growth as a certified mentor becomes part of a fulfilling career journey.`,
    image: mentor2,
  },

  {
    title: "EARN MONEY ONLINE WITH FLEXIBILITY",
    text: `One of the greatest advantages of our mentorship program is complete flexibility. 
    You can mentor students from home, office, or even while traveling—no physical presence required. 
    All sessions, communications, and updates happen online through simple tools. 
    This allows you to earn without disturbing your routine or lifestyle. 
    Whether you can give one hour a day or ten hours a week, your contribution still generates income. 
    We provide a student dashboard where you can track leads, progress, and guidance status. 
    This makes it easy to assist students without complicated systems. 
    You are free to choose your schedule based on your comfort and availability. 
    Our team ensures you always have the resources required to guide students effectively. 
    You can connect with students via phone, chat, or video call as per your convenience. 
    The role is designed for people who prefer remote opportunities with meaningful work. 
    You become part of a digital ecosystem where guidance is seamless and impactful. 
    The more flexible and consistent you are, the more you earn. 
    This approach allows anyone—professionals, homemakers, students—to make steady income effortlessly. 
    It’s a modern earning opportunity that blends convenience, purpose, and financial growth.`,
    image: mentor3,
  },

  {
    title: "CREATE REAL IMPACT",
    text: `Being a mentor is not just about earning—it’s about shaping futures. 
    Students often feel confused about courses, countries, and career choices. 
    Your experience provides clarity, confidence, and direction that they truly need. 
    Every conversation you have can change the way a student thinks about their future. 
    You help them avoid mistakes and choose the right academic path. 
    Your guidance enables them to make better decisions that align with long-term goals. 
    This creates a positive impact not only on students but also on their families. 
    Many students lack access to proper information, and your mentorship fills that gap. 
    You become a role model who inspires discipline, ambition, and global thinking. 
    The transformation you create in students stays with them for life. 
    The satisfaction of helping someone achieve their dream is priceless. 
    Your mentorship creates opportunities for students to study in top universities worldwide. 
    You play a key role in improving their confidence, communication, and decision-making skills. 
    This impact-driven work makes the mentorship experience deeply rewarding. 
    Through your support, you help build future professionals, leaders, and global achievers.`,
    image: mentor4,
  },
];

const Mentor = () => {
  return (
    <>
      <Navbar />

      {/* ⭐ Banner Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-11-06%20154426.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative text-center text-white px-6 max-w-3xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Become a Mentor with Sindwan Consultancy
          </h1>

          <p className="text-sm md:text-base mb-6 leading-relaxed opacity-90">
            Join our global network of mentors guiding students through their
            international education journey. Share your experience, empower
            students, and earn through meaningful work.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-lg font-semibold shadow-lg"
            onClick={() => window.open("https://wa.me/919876543210", "_blank")}
          >
            Join as Mentor
          </motion.button>
        </motion.div>
      </section>

      {/* ⭐ Mentor Benefits Section */}
      <section className="bg-[#f9f8f6] m-auto px-15">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-14"
        >
          Why Become a Mentor?
        </motion.h2>

        <div className="flex flex-col gap-14">
          {mentorCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } bg-white shadow-lg rounded-xl overflow-hidden gap-6 p-6`}
            >
              {/* IMAGE */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full md:w-1/2 h-100 object-cover "
              />

              {/* TEXT */}
              <div className="flex flex-col justify-center md:w-1/2 bg-white p-4 rounded-xl">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
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
