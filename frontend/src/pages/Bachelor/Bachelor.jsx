import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";

import bannerImg from "../../assets/Bachelor’s_Degrees_Banner.jpg";
import businessImg from "../../assets/bachelors1.jpg";
import architectureImg from "../../assets/bachelors2.jpg";
import engineeringImg from "../../assets/bachelors3.jpg";
import scienceImg from "../../assets/bachelors4.jpg";
import socialImg from "../../assets/bachelors5.jpg";
import appliedImg from "../../assets/bachelors6.jpg";

// ✅ Data Sections
const sections = [
  {
    title: "Business and Management",
    img: businessImg,
    reverse: false,
    text: `Business & Management programs prepare you to lead teams, make strategic decisions, and manage organizations effectively. 
    These degrees focus on real-world business operations such as finance, marketing, economics, HR, entrepreneurship, and corporate strategy. 
    Students learn how markets function, how companies grow, and how global business environments shape decision-making. 
    You gain hands-on skills through case studies, industry projects, internships, and leadership development programs. 
    This field builds strong analytical thinking, problem-solving abilities, and managerial confidence required in top companies worldwide. 
    Graduates can explore careers in multinational corporations, startups, consulting firms, banking, and government sectors. 
    With business degrees being globally recognized, you can pursue jobs across continents with strong earning potential. 
    The program is ideal for students who want leadership roles or aim to build their own startups. 
    Business schools abroad also offer networking opportunities with global leaders and industry experts. 
    You learn to manage teams, design business strategies, and navigate international markets with ease. 
    Business & Management provides a flexible and diverse career foundation for long-term growth. 
    It remains one of the most sought-after fields for students aiming for global career success.`,
    points: [
      "University of Bristol, United Kingdom",
      "University of Glasgow, United Kingdom",
      "University of Arizona, U.S.A",
      "Baylor University, U.S.A",
      "Monash University, Australia",
      "Dalhousie University, Canada",
    ],
  },

  {
    title: "Arts, Design and Architecture",
    img: architectureImg,
    reverse: true,
    text: `Arts, Design & Architecture programs nurture creativity, innovation, and visual communication skills. 
    Students learn how to think creatively, design meaningful experiences, and build visually appealing solutions. 
    These fields include graphic design, interior design, fine arts, fashion, animation, and user experience design. 
    Architecture programs teach the art and science of building functional, sustainable, and inspiring spaces. 
    You gain strong conceptual, technical, and practical skills through studio work, digital tools, and real-world design projects. 
    Creative industries are rapidly evolving, offering global opportunities in gaming, digital media, advertising, architecture firms, and product design. 
    Students learn modern design technologies such as AutoCAD, Rhino, Figma, Adobe Suite, and 3D modeling tools. 
    The programs also build your portfolio, which is essential for global design careers. 
    You collaborate with industry experts, artists, and architects throughout the program. 
    Creativity combined with technical mastery opens doors to top creative roles worldwide. 
    These fields are perfect for students who want to express ideas visually and make an impact through innovative design. 
    Arts & Architecture degrees ensure a rewarding and dynamic global career path.`,
    points: [
      "University of Victoria, Canada",
      "Simon Fraser University, Canada",
      "University of New South Wales, Australia",
      "Nottingham Trent University, UK",
      "American University, U.S.A",
      "Baylor University, U.S.A",
    ],
  },

  {
    title: "Engineering and Technology",
    img: engineeringImg,
    reverse: false,
    text: `Engineering & Technology programs train students to innovate, design, and develop real-world solutions. 
    Students explore mechanical, electrical, civil, computer, electronics, and emerging technologies like AI, robotics, and renewable energy. 
    These programs combine theoretical knowledge with practical experiments, labs, and industry collaborations. 
    Engineering graduates are problem-solvers capable of building future-ready technologies and infrastructure. 
    You gain strong analytical, mathematical, and technical skills highly valued across industries. 
    The demand for engineers is universal, offering excellent career opportunities worldwide. 
    Universities abroad provide cutting-edge labs, research facilities, and internship placements with global companies. 
    You learn how to design systems, troubleshoot complex problems, and build sustainable innovations. 
    Engineering careers span aerospace, automotive, IT, healthcare, construction, energy, and manufacturing sectors. 
    Students also develop project management and teamwork skills essential for global engineering roles. 
    This field is ideal for students who enjoy innovation, technology, and building meaningful solutions. 
    Engineering & Technology degrees open doors to high-paying and impactful global careers.`,
    points: [
      "Queensland University of Technology, Australia",
      "University of Birmingham, UK",
      "University of Vermont, U.S.A",
      "University of Surrey, UK",
      "University of Victoria, Canada",
    ],
  },

  {
    title: "Natural Sciences",
    img: scienceImg,
    reverse: true,
    text: `Natural Sciences explore the foundations of life, matter, and the universe through biology, chemistry, physics, and earth sciences. 
    These programs build strong scientific reasoning, laboratory skills, and research expertise. 
    Students learn how natural systems work and how scientific principles solve modern challenges. 
    Fields like biotechnology, genetics, environmental science, and microbiology are rapidly growing worldwide. 
    Natural Sciences degrees prepare students for careers in healthcare, pharmaceuticals, research, and environmental conservation. 
    You work on experiments, laboratory projects, and scientific investigations throughout your program. 
    Universities abroad offer advanced labs, fieldwork opportunities, and access to industry research. 
    Students learn how to analyze data, conduct experiments, and contribute to scientific discovery. 
    You also explore global issues like climate change, renewable energy, and environmental protection. 
    This field is ideal for students passionate about exploring nature, conducting research, and understanding scientific principles. 
    Natural Sciences open pathways to advanced research, medical careers, and specialized scientific professions. 
    It is a field that drives global innovation and scientific progress.`,
    points: [
      "University of Saskatchewan, Canada",
      "University of Surrey, UK",
      "Baylor University, U.S.A",
      "Macquarie University, Australia",
      "RMIT University, Australia",
    ],
  },

  {
    title: "Social Sciences",
    img: socialImg,
    reverse: false,
    text: `Social Sciences explore how individuals, communities, and societies function and interact. 
    These programs cover psychology, sociology, economics, political science, anthropology, and international relations. 
    Students learn how human behavior, culture, and government systems shape the world. 
    These programs build analytical, communication, and problem-solving skills needed in global careers. 
    Social Sciences prepare students for roles in policy-making, counselling, development studies, media, NGOs, and government sectors. 
    You study real-world issues such as mental health, inequality, public policy, and global diplomacy. 
    Universities abroad provide research labs, fieldwork opportunities, and interaction with experts and policymakers. 
    Students gain strong ethical understanding and the ability to work with diverse populations. 
    The field encourages critical thinking, empathy, and leadership skills. 
    Social Sciences are ideal for students who want to improve society and influence positive change. 
    Graduates can pursue careers in counselling, public administration, corporate consulting, and community development. 
    This field offers versatile and impactful career opportunities worldwide.`,
    points: [
      "University of Tasmania, Australia",
      "University of South Australia",
      "The University of Huddersfield, UK",
      "University of Dundee, UK",
      "University of Utah, U.S.A",
    ],
  },

  {
    title: "Applied Sciences",
    img: appliedImg,
    reverse: true,
    text: `Applied Sciences focus on using scientific principles to solve practical, real-world problems. 
    These programs include forensic science, food science, environmental technology, emergency management, and biotechnology. 
    Students learn hands-on techniques in laboratories, field environments, and industry settings. 
    Applied Science programs teach practical problem-solving skills used in healthcare, agriculture, safety, and industrial processes. 
    You gain knowledge in chemical analysis, food safety, evidence examination, and disaster response systems. 
    Universities abroad provide world-class labs, research centers, and internships with leading organizations. 
    These degrees prepare students for careers in hospitals, research labs, government agencies, and private industries. 
    Students also learn advanced instrumentation, laboratory safety, and scientific reporting. 
    The field is ideal for students who enjoy solving practical challenges through science and experimentation. 
    Applied Sciences graduates are in high demand due to their technical expertise and hands-on skills. 
    This field offers versatile and high-impact career options across many industries. 
    Applied Sciences is perfect for students who want a career rooted in scientific application rather than theory.`,
    points: [
      "University of Tasmania, Australia",
      "Curtin University, Australia",
      "University of South Florida, U.S.A",
      "University of Surrey, UK",
      "Newcastle University, UK",
    ],
  },
];

const Bachelor = () => {
  const [showForm, setShowForm] = useState(false);

  const openHeroForm = () => setShowForm(true);
  const closeHeroForm = () => setShowForm(false);

  return (
    <div className="font-poppins text-[#002b5c] bg-white">
      <Navbar />

      {/* ✅ HERO SECTION */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-[#002b5c]/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-4 max-w-2xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Top Bachelor’s Degrees
          </h1>
          <p className="text-base md:text-lg mb-6">
            Discover your path to a world-class education across leading fields
            worldwide.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={openHeroForm}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* ✅ CONTENT SECTIONS */}
      <section className="py-16 px-6 md:px-16">
        {sections.map((sec, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`flex flex-col ${
              sec.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } gap-10 mb-20 items-center`}
          >
            {/* IMAGE */}
            <div className="w-full md:w-1/3 h-72 bg-gray-100 rounded-xl shadow-xl overflow-hidden flex items-center justify-center">
              <img
                src={sec.img}
                alt={sec.title}
                className="w-full h-100 object-cover"
              />
            </div>

            {/* TEXT */}
            <div className="md:w-[55%]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#003b88] mb-4">
                {sec.title}
              </h2>

              <p className="text-gray-700 mb-5 leading-relaxed">{sec.text}</p>

              <ul className="list-disc pl-5 text-blue-700 space-y-1">
                {sec.points.map((p, idx) => (
                  <li key={idx} className="text-sm md:text-base">
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
              selectedTool={{ title: "Bachelor Programs" }}
              closeForm={closeHeroForm}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Bachelor;
