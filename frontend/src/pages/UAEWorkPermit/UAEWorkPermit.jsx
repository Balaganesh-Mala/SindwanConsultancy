// UAEWorkPermit.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";
import {Link} from "react-router-dom"
import Banner from "../../assets/work-permit-banner.jpg"

import WorkPermit1 from "../../assets/workPermit1.jpg"
import WorkPermit2 from "../../assets/workPermit2.jpg"
import WorkPermit3 from "../../assets/workPermit3.jpg"

// Local uploaded banner (developer/user-provided file)
const bannerImg = Banner;

/**
 * useCounter - counts from 0 to `end` over `duration` ms.
 * starts only when `start` becomes true.
 */
const useCounter = (end, start = false, duration = 1400) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const ratio = Math.min(progress / duration, 1);
      setValue(Math.floor(ratio * end));
      if (ratio < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, start, duration]);
  return value;
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" },
  }),
};

const UAEWorkPermit = () => {
  const [showForm, setShowForm] = useState(false);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  // parallax
  const [bgY, setBgY] = useState(0);
  useEffect(() => {
    let raf = null;
    const handleScroll = () => {
      // subtle parallax: slower than scroll
      const y = window.scrollY * 0.25;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setBgY(y));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // counters in view
  const counterRef = useRef(null);
  const [countersInView, setCountersInView] = useState(false);
  useEffect(() => {
    if (!counterRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountersInView(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(counterRef.current);
    return () => obs.disconnect();
  }, []);

  const c1 = useCounter(1000, countersInView, 1600);
  const c2 = useCounter(600, countersInView, 1600);
  const c3 = useCounter(500, countersInView, 1600);

  const permitCards = [
    {
      id: "01",
      title: "STANDARD WORK PERMIT",
      text: "The most common permit for employees of a company in the UAE, typically employer-sponsored.",
      img: WorkPermit1,
    },
    {
      id: "02",
      title: "RESIDENCY VISA",
      text: "Perfect for independent professionals and entrepreneurs who wish to work in multiple client settings.",
      img: WorkPermit2,
    },
    {
      id: "04",
      title: "GOLDEN VISA",
      text: "Long-term residency visa (5-10 years) for high-skilled professionals, investors and entrepreneurs.",
      img: WorkPermit3,
    },
  ];

  const openings = [
    {
      title: "CONSTRUCTION",
      items: [
        "Construction Helper",
        "Mason",
        "Tiler",
        "Steel Fixer",
        "Carpenter",
      ],
    },
    {
      title: "HOSPITALITY",
      items: ["Chef", "Waiter / Waitress", "Kitchen Helper", "Cook", "Barista"],
    },
    {
      title: "BLUE COLLAR",
      items: ["AC Technician", "Plumber", "Electrician", "Welder", "Painter"],
    },
    {
      title: "WHITE COLLAR",
      items: [
        "Receptionist",
        "Cashier",
        "Sales Coordinator",
        "Back Office",
        "HR Executive",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* HERO / BANNER with PARALLAX */}
        <section
          className="relative h-[56vh] md:h-[64vh] lg:h-[72vh] flex items-center justify-center overflow-hidden"
          aria-label="Hero banner"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bannerImg})`,
              transform: `translate3d(0, ${bgY * -0.08}px, 0)`,
              filter: "brightness(.55)",
            }}
          />
          <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 text-center px-6 max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wide leading-tight">
              WORK PERMIT FOR{" "}
              <span className="ml-3 inline-block bg-white/10 px-3 py-1 rounded-lg text-white">
                UAE
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-base lg:text-lg text-white/90 max-w-2xl mx-auto">
              Get guidance on the right permit, visa options and job placements
              to help you migrate professionally.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={openForm}
                className="bg-white text-blue-700 px-5 py-3 rounded-md font-semibold shadow"
                aria-label="Schedule a meeting"
              >
                SCHEDULE A MEETING
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-transparent border border-white/30 text-white px-5 py-3 rounded-md"
                aria-label="Open vacancies"
              >
                OPEN VACANCIES
              </motion.button>
            </div>
          </motion.div>
        </section>

        {/* WAVE DIVIDER */}
        <div className="-mt-6">
          <svg
            viewBox="0 0 1440 80"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C200,0 400,80 720,40 C1040,0 1240,80 1440,40 L1440 80 L0 80 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* TYPES OF WORK PERMITS */}
        <section className="max-w-6xl mx-auto px-6 py-10 bg-white">
          <div className="flex items-start justify-between mb-6">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-blue-700 tracking-wide"
            >
              TYPES OF WORK PERMITS{" "}
              <span className="ml-2 text-white bg-blue-600 px-2 rounded">
                IN THE UAE
              </span>
            </motion.h2>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={openForm}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow"
              aria-label="schedule meeting"
            >
              SCHEDULE A MEETING
            </motion.button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {permitCards.map((c, i) => (
              <motion.article
                key={c.id}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                whileHover={{
                  rotateY: 6,
                  rotateX: -4,
                  scale: 1.03,
                  boxShadow: "0 18px 40px rgba(10, 20, 50, 0.12)",
                }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-500 font-semibold">
                      0{c.id}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold text-blue-700">
                      {c.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 flex-1">{c.text}</p>

                <div className="mt-4 rounded-md overflow-hidden">
                  <img
                    loading="lazy"
                    src={c.img}
                    alt={c.title}
                    className="w-full h-44 object-cover rounded-lg"
                  />
                </div>

                <Link to="/permit" className="mt-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow"
                    aria-label={`Know more about ${c.title}`}
                  >
                    Know More
                  </motion.button>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>

        {/* WAVE DIVIDER */}
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

        {/* ACHIEVEMENTS SECTION */}
        <section className="py-12 bg-gradient-to-b from-blue-700 to-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden p-8"
              ref={counterRef}
            >
              <div className="grid md:grid-cols-3 gap-8 items-center text-center">
                <div>
                  <p className="text-4xl md:text-5xl font-extrabold">{c1}+</p>
                  <p className="uppercase mt-2 text-sm tracking-wide">
                    Candidate Placed
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-extrabold">{c2}+</p>
                  <p className="uppercase mt-2 text-sm tracking-wide">
                    Satisfied Associates
                  </p>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-extrabold">{c3}+</p>
                  <p className="uppercase mt-2 text-sm tracking-wide">
                    Vacancies Overseas
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CURRENT OPENINGS */}
        <section className="max-w-6xl mx-auto px-6 py-12 bg-white">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-blue-700 tracking-wide mb-8 text-center"
          >
            CURRENT OPENINGS IN UAE
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid md:grid-cols-4 gap-6"
          >
            {openings.map((col, idx) => (
              <motion.div
                key={col.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-xl shadow p-4 border"
              >
                <h4 className="text-blue-700 font-bold mb-3">{col.title}</h4>
                <ul className="text-sm text-gray-700 space-y-2 mb-4">
                  {col.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1" aria-hidden>
                        ✓
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* WAVE DIVIDER */}
        <div className="-mt-6">
          <svg
            viewBox="0 0 1440 80"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C200,0 400,80 720,40 C1040,0 1240,80 1440,40 L1440 80 L0 80 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>

        {/* HOW IT WORKS */}
        <section className="max-w-6xl mx-auto px-6 py-12 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-4 border-blue-600 rounded-2xl p-8 bg-white"
          >
            <h3 className="text-center text-2xl font-bold text-blue-700 mb-8">
              HOW IT WORKS
            </h3>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                "Initial Consultation & Visa Assistance",
                "Offer Management",
                "Pre-departure & Deployment",
                "Ongoing Support",
              ].map((label, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 220 }}
                  className="bg-white shadow rounded-xl p-6 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                    0{i + 1}
                  </div>
                  <p className="text-sm text-gray-700 font-semibold">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 leading-tight">
              LET'S CREATE THE BEST EXPERIENCE FOR <br />
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded mt-3">
                CAREER GROWTH.
              </span>
            </h2>

            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={openForm}
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold"
              >
                LET'S TALK
              </motion.button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* HERO FORM MODAL */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HeroForm closeForm={closeForm} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UAEWorkPermit;
