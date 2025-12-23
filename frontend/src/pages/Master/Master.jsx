import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";

import managementImg from "../../assets/Masters1.jpg";
import csImg from "../../assets/Masters2.jpg";
import mbaImg from "../../assets/Masters3.jpg";
import irImg from "../../assets/Masters4.jpg";
import economicsImg from "../../assets/Masters5.jpg";
import psychologyImg from "../../assets/Masters6.jpg";
import ibImg from "../../assets/Masters7.jpg";
import biologyImg from "../../assets/Masters8.jpg";
import engImg from "../../assets/Masters9.jpg";
import healthImg from "../../assets/Masters10.jpg";

const masterSections = [
  {
    title: "Masters in Management & Leadership",
    img: managementImg,
    reverse: false,
    text: `A Master’s in Management & Leadership develops future-ready professionals capable of managing teams, driving organizational growth, 
    and solving complex business challenges. Students learn leadership frameworks, organizational behavior, global strategy, analytics, 
    and decision-making. This program is ideal for fresh graduates or early-career professionals who want to accelerate into managerial roles. 
    You gain hands-on experience through real business case studies, internships, industry simulations, and leadership labs. 
    The curriculum focuses on strategic thinking, communication skills, problem-solving, and ethical leadership—skills highly valued by global employers. 
    Graduates enter careers in project management, business development, HR leadership, consulting, and operations across various industries. 
    With global exposure, practical training, and a strong professional network, this degree opens pathways to high-impact leadership careers worldwide.`,
    points: [
      "Oregon State University, U.S.A",
      "Macquarie University, Australia",
      "University of South Australia, Australia",
      "University of East Anglia, UK",
      "Royal Roads University, Canada",
    ],
  },

  {
    title: "Masters in Computer Sciences",
    img: csImg,
    reverse: true,
    text: `A Master’s in Computer Science prepares students for the rapidly growing tech world by focusing on artificial intelligence, 
    cloud computing, cybersecurity, machine learning, robotics, and advanced programming concepts. Students gain experience through projects, 
    research labs, hackathons, and industry partnerships. The program equips you with skills to create scalable software, build secure systems, 
    and innovate new-age technologies. You learn to solve complex engineering problems and work with the latest tools in data engineering and AI. 
    CS graduates are in high demand across industries such as IT, fintech, healthcare, automation, gaming, and research institutes. 
    This degree is perfect for students who want to become software engineers, data scientists, AI specialists, researchers, or tech founders. 
    With global digital transformation accelerating, opportunities in computer science continue to expand worldwide.`,
    points: [
      "University of Southern Queensland, Australia",
      "Nottingham Trent University, UK",
      "American University, U.S.A",
      "Lakehead University, Canada",
      "Northumbria University, UK",
    ],
  },

  {
    title: "Masters in Business Administration (MBA)",
    img: mbaImg,
    reverse: false,
    text: `The MBA is one of the world’s most prestigious graduate degrees, designed for those looking to expand their business acumen and 
    leadership capabilities. Students explore deep concepts in finance, marketing, data analytics, HR, operations, innovation, and 
    entrepreneurship. MBA programs emphasize real-world business learning through internships, consulting projects, case competitions, 
    and networking events with global industry leaders. You develop strong managerial, analytical, and decision-making skills that prepare 
    you for senior roles. MBA graduates pursue careers in consulting, corporate management, marketing leadership, investment banking, 
    project management, and entrepreneurship. Organizations worldwide value MBA graduates for their problem-solving abilities and strategic mindset. 
    This degree is ideal for students who want rapid career growth and high-earning potential.`,
    points: [
      "Queensland University of Technology, Australia",
      "University of Massachusetts Lowell, U.S.A",
      "University of Glasgow, UK",
      "University of New Brunswick, Canada",
      "Colorado State University, U.S.A",
    ],
  },

  {
    title: "Masters in International Relations",
    img: irImg,
    reverse: true,
    text: `A Master’s in International Relations helps students understand diplomacy, global politics, international law, 
    foreign policy, and global economic systems. The program trains students to analyze global conflicts, international institutions, 
    and cross-country negotiations. You study issues like human rights, global trade, climate diplomacy, and international security. 
    Graduates work with governments, NGOs, policy think-tanks, embassies, intelligence agencies, and multinational organizations. 
    This degree develops strong analytical, research, communication, and negotiation skills. Students participate in diplomacy simulations, 
    internships, field visits, and research projects related to world affairs.  
    If you’re passionate about geopolitics, policy-making, or humanitarian work, this degree prepares you to influence global change.`,
    points: [
      "University of New South Wales, Australia",
      "University of Stirling, UK",
      "George Mason University, U.S.A",
      "Dallas Baptist University, U.S.A",
      "Swansea University, UK",
    ],
  },

  {
    title: "Masters in Economics",
    img: economicsImg,
    reverse: false,
    text: `A Master’s in Economics provides a deep understanding of how economies function, how policies influence markets, 
    and how businesses and governments make strategic decisions. Students learn econometrics, forecasting, economic modeling, 
    data analysis, and global trade systems. The program builds strong analytical and research skills needed in both public and 
    private sectors. Graduates pursue careers in banking, consulting, government policy, financial institutions, development agencies, 
    and economic research organizations. Economics students work on real datasets, analyze global market trends, and contribute 
    to solutions for financial growth and sustainability. This degree is perfect for students who enjoy data-driven decision-making 
    and want to influence economic and policy outcomes worldwide.`,
    points: [
      "American University, U.S.A",
      "Griffith University, Australia",
      "Nottingham Trent University, UK",
      "University of Birmingham, UK",
      "University of Adelaide, Australia",
    ],
  },

  {
    title: "Masters in Psychology",
    img: psychologyImg,
    reverse: true,
    text: `A Master’s in Psychology allows students to explore human behavior, emotions, mental health, and cognitive processes. 
    Courses include clinical psychology, counseling psychology, child psychology, neuroscience, behavioral science, and research methods. 
    Students gain hands-on training through supervised practice, therapy simulations, lab experiments, and internships. 
    Psychology graduates work in hospitals, clinics, schools, rehabilitation centers, corporate organizations, and research institutes. 
    The demand for mental health professionals is growing rapidly across the world. This degree helps you become a counselor, therapist, 
    behavioral analyst, or researcher. It is ideal for those passionate about helping individuals improve their mental well-being and life outcomes.`,
    points: [
      "Curtin University, Australia",
      "Griffith University, Australia",
      "University of Bristol, UK",
      "University of South Florida, U.S.A",
      "University of Regina, Canada",
    ],
  },

  {
    title: "Masters in International Business",
    img: ibImg,
    reverse: false,
    text: `A Master’s in International Business teaches you how to manage global operations, understand cross-cultural markets, 
    and expand businesses internationally. Students learn international trade, global supply chain, cross-border finance, and global leadership. 
    The program includes real case studies, global market research, international consulting projects, and corporate internships. 
    Graduates pursue roles in export management, business development, international marketing, logistics, and multinational companies. 
    This degree is perfect for students who want to travel, work abroad, and manage business operations on a global scale. 
    With the rise of international trade and globalization, the demand for international business professionals continues to grow.`,
    points: [
      "Nottingham Trent University, UK",
      "University of Birmingham, UK",
      "University of New South Wales, Australia",
      "Florida International University, U.S.A",
      "Arizona State University, U.S.A",
    ],
  },

  {
    title: "Masters in Biology",
    img: biologyImg,
    reverse: true,
    text: `A Master’s in Biology provides advanced knowledge in molecular biology, biotechnology, genetics, ecology, 
    and biomedical sciences. Students participate in research labs, experiments, field studies, and scientific investigations. 
    This degree prepares students for careers in healthcare, pharmaceuticals, environmental conservation, and academic research. 
    Biology graduates contribute to medical breakthroughs, drug discovery, genetic research, and climate solutions. 
    The program is ideal for students passionate about research, laboratory work, and scientific discovery. 
    With rapid advancements in biotech and healthcare, biology graduates enjoy excellent global career opportunities.`,
    points: [
      "University of South Florida, U.S.A",
      "Nottingham Trent University, UK",
      "University of Glasgow, UK",
      "University of Bristol, UK",
      "University of Regina, Canada",
    ],
  },

  {
    title: "Masters in Engineering & Technology",
    img: engImg,
    reverse: false,
    text: `This program offers advanced knowledge in engineering principles, sustainable technologies, robotics, automation, 
    and emerging technological innovations. Students explore mechanical, electrical, civil, and computer engineering specialization options. 
    You gain experience through lab experiments, internships, engineering projects, and research work. 
    Graduates work in industries such as aerospace, automotive, construction, IT, renewable energy, and manufacturing. 
    With a high global demand for engineers, this degree opens strong pathways in technical leadership and innovation-driven careers.`,
    points: [
      "George Mason University, U.S.A",
      "University of South Florida, U.S.A",
      "University of Adelaide, Australia",
      "University of Birmingham, UK",
      "Curtin University, Australia",
    ],
  },

  {
    title: "Masters in Health Sciences",
    img: healthImg,
    reverse: true,
    text: `A Master’s in Health Sciences focuses on improving public health, biomedical innovation, healthcare delivery, and research. 
    Students study public health systems, epidemiology, medical sciences, clinical practices, and global health issues. 
    Graduates work in hospitals, labs, research centers, government health departments, and international health organizations. 
    The program prepares you for careers in healthcare management, clinical research, medical analysis, and health innovation. 
    With the rising demand for healthcare professionals, this degree offers excellent opportunities worldwide.`,
    points: [
      "Newcastle University, UK",
      "University of Glasgow, UK",
      "University of Cincinnati, U.S.A",
      "Illinois State University, U.S.A",
      "Flinders University, Australia",
    ],
  },
];


const Master = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="font-poppins text-[#002b4d] bg-white">
      <Navbar />

      {/* ✅ HERO SECTION */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-11-06%20133715.png)",
        }}
      >
        <div className="absolute inset-0 bg-[#003366]/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white max-w-3xl px-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Top Master’s Degrees
          </h1>
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            Advance your education and career through globally recognized
            Master’s programs designed to shape leaders, innovators, and researchers.
          </p>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => setShowForm(true)}
            className="bg-white text-[#003366] px-6 py-2 rounded-full font-semibold hover:bg-[#003366] hover:text-white transition"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* ✅ CONTENT SECTIONS */}
      <section className="py-16 px-6 md:px-16 max-w-6x1 mx-auto">
        {masterSections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${
              sec.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-10 mb-20`}
          >
            <img
              src={sec.img}
              alt={sec.title}
              className="w-full md:w-1/3 rounded-xl shadow-xl"
            />

            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-[#003366] mb-4">
                {sec.title}
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">{sec.text}</p>

              <ul className="list-disc pl-5 text-[#003366] font-medium">
                {sec.points.map((p, idx) => (
                  <li key={idx} className="mb-1">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />

      {/* ✅ HERO FORM MODAL */}
      {showForm && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg"
          >
            <HeroForm
              selectedTool={{ title: "Master Programs" }}
              closeForm={() => setShowForm(false)}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Master;
