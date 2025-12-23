import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import bannerImg from "../../assets/Bachelor’s_Degrees_Banner.jpg";
import permit1 from "../../assets/permit1.jpg"
import permit2 from "../../assets/permit2.jpg"
import permit3 from "../../assets/permit3.jpg"
import permit4 from "../../assets/permit4.jpg"
import permit5 from "../../assets/permit5.jpg"
import permit6 from "../../assets/permit6.jpg"




const useCounter = (end, duration) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!duration) return; // Don't animate until triggered

    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setValue(end);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return value;
};

const EuropeWorkPermit = () => {
  const [showForm, setShowForm] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const counterRef = useRef(null);

  const openHeroForm = () => setShowForm(true);
  const closeHeroForm = () => setShowForm(false);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.disconnect(); // Trigger only once
          }
        });
      },
      { threshold: 0.35 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, []);


  const count1 = useCounter(1000, startCount ? 1500 : 0);
  const count2 = useCounter(600, startCount ? 1500 : 0);
  const count3 = useCounter(500, startCount ? 1500 : 0);

  const countries = [
    { id: "01", name: "POLAND", img: permit1 },
    { id: "02", name: "BELARUS", img: permit2 },
    { id: "03", name: "UKRAINE", img: permit3 },
    { id: "04", name: "SERBIA", img: permit4},
    { id: "05", name: "LITHUANIA", img: permit5 },
    { id: "06", name: "CZECH REPUBLIC", img: permit6},
  ];

  return (
    <>
      <Navbar />
      <div>

        
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
              Discover your path to a world-class education across leading fields worldwide.
            </p>
          </motion.div>
        </section>

        
        <section className="max-w-6xl mx-auto px-5 mt-16">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            className="text-2xl font-bold text-blue-800 mb-6"
          >
            YOUR GATEWAY TO GLOBAL EMPLOYMENT
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {countries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .5, delay: i * .1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow hover:shadow-xl p-4 transition cursor-pointer"
              >
                <p className="text-blue-600 font-semibold">{item.id}</p>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <img
                  src={item.img}
                  className="w-full h-40 object-cover rounded-lg mt-3"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============================================= */}
        {/* OUR STORY */}
        {/* ============================================= */}
        <section className="max-w-6xl mx-auto px-5 my-20 grid md:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <h2 className="text-2xl font-bold text-blue-800 mb-3">
              OUR STORY: EMPOWERING YOUR GLOBAL CAREER
            </h2>

            <p className="text-gray-700 mb-4">
              Since our establishment, Path Future has helped thousands...
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ 100% Verified Jobs</li>
              <li>✔ Fast Documentation</li>
              <li>✔ Employer Coordination</li>
              <li>✔ No Hidden Charges</li>
            </ul>

            <button
              onClick={openHeroForm}
              className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              CONNECT NOW
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="bg-blue-700 text-white p-6 rounded-2xl shadow-xl"
          >
            <h3 className="font-semibold mb-4">OUR TIMELINE</h3>
            <ul className="space-y-4 text-sm">
              <li>📌 First Establishment — 2018</li>
              <li>📌 First Big Expansion — 2020</li>
              <li>📌 Reached 600+ Applicants</li>
              <li>📌 Became Top Europe Agency</li>
            </ul>
          </motion.div>
        </section>


        <div className="relative -mt-5">
          <svg
            viewBox="0 0 1440 80"
            className="w-full block leading-none"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            <path
              d="M0,40 C200,80 400,0 720,40 C1040,80 1240,0 1440,40 L1440 80 L0 80 Z"
              fill="#124ae5ff"
            />
          </svg>

          {/* Fix overlap */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#144CEB]" />
        </div>
        
        <section className="bg-blue-700 text-white py-16" ref={counterRef}>
          <div className="max-w-5xl mx-auto text-center">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              className="text-2xl font-bold mb-8"
            >
              WHAT WE ACHIEVED
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">

              <div>
                <p className="text-4xl font-bold">{count1}+</p>
                <p>Job Placements</p>
              </div>

              <div>
                <p className="text-4xl font-bold">{count2}+</p>
                <p>Active Applicants</p>
              </div>

              <div>
                <p className="text-4xl font-bold">{count3}+</p>
                <p>Verified Job Offers</p>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* HOW IT WORKS */}
        {/* ============================================= */}
        <section className="max-w-5xl mx-auto px-5 py-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: .5 }}
            className="text-center text-2xl font-bold text-blue-800 mb-10"
          >
            HOW IT WORKS
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {["Initial Consultation", "Offer Management", "Preparation", "Deployment"].map(
              (item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: .7, y: 60 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: .5, delay: i * .15 }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  }}
                  className="bg-blue-600 text-white text-center py-6 rounded-xl shadow-lg cursor-pointer"
                >
                  <p className="text-2xl font-bold mb-2">0{i + 1}</p>
                  <p className="font-medium">{item}</p>
                </motion.div>
              )
            )}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-5">
            WANT TO START A PROJECT?
          </h2>
          <button
            onClick={openHeroForm}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            LET'S TALK
          </button>
        </section>

      </div>

      <Footer />

      {/* ============================================= */}
      {/* MODAL FORM */}
      {/* ============================================= */}
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
            <HeroForm closeForm={closeHeroForm} />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default EuropeWorkPermit;
