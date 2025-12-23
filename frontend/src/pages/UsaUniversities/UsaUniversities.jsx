import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import bannerImage from "../../assets/abroadBanner.jpg";

const UsaUniversities = () => {
  return (
    <>
      <Navbar />
      <HeroCountry bannerImage={bannerImage} countryName={"USA"} />

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-700 leading-relaxed font-poppins">

        {/* -------- WHY STUDY IN USA -------- */}
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-6">
          Why Study in the USA
        </h2>
        <p className="mb-6 text-[1.05rem]">
          Studying in the USA opens you up to opportunities and exposes you to
          different cultures, education systems, learning to build networks, and
          improving your overall profile. We are Study in USA consultants and
          guide Study abroad for Indian students. You can also study abroad in
          the UK, Germany, and Canada.
        </p>

        {/* -------- INTAKE -------- */}
        <h3 className="text-2xl font-semibold mt-10 mb-2">Intake</h3>
        <p>
          Universities and Colleges in the US have three intakes — Spring
          (January), Fall (September), and Summer (May). Fall (Aug/Sep) is the
          major intake.
        </p>

        {/* -------- PROCESS FLOW -------- */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          USA Process Flow
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pre-requisite Exams: GRE / GMAT / SAT / TOEFL / IELTS</li>
          <li>Professional Presentation: SOP / LOR / Resume</li>
          <li>Program & University Shortlisting</li>
          <li>Application Forwarding & Processing</li>
          <li>Visa Processing: Mock Interview & Final Documentation</li>
        </ul>

        {/* -------- WHY CHOOSE -------- */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Why Choose Edmium
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>20+ Years of Experience</li>
          <li>Internationally Trained Counselors</li>
          <li>1000+ University Profiles</li>
          <li>11 Billion+ in Scholarships</li>
        </ul>

        {/* -------- UNIVERSITIES IN USA -------- */}
        <h2 className="text-center text-3xl font-bold text-blue-600 mt-16 mb-6">
          Universities in the USA
        </h2>
        <p className="mb-6">
          The USA is one of the top destinations attracting international
          students globally. It hosts over 1 million students due to its
          world-class education, innovation, and flexible learning structure.
        </p>

        {/* -------- TOP UNIVERSITIES -------- */}
        <h3 className="text-2xl font-semibold mt-10 mb-2">
          Top Universities in the USA
        </h3>
        <p className="mb-6">
          Harvard University, MIT, Stanford University, and Caltech are among
          the top universities according to the QS rankings.
        </p>

        {/* -------- TABLE -------- */}
        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-[0.95rem]">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">University</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["1", "Harvard University"],
              ["2", "Stanford University"],
              ["3", "MIT"],
              ["4", "University of California, Berkeley"],
              ["5", "UCLA"],
              ["6", "Yale University"],
              ["7", "Columbia University"],
              ["8", "Princeton University"],
              ["9", "New York University (NYU)"],
              ["10", "University of Pennsylvania"],
            ].map(([rank, name], index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4">{rank}</td>
                <td className="py-3 px-4">{name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* -------- IVY LEAGUE -------- */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Ivy League Universities
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Princeton University</li>
          <li>Harvard University</li>
          <li>Columbia University</li>
          <li>Yale University</li>
          <li>University of Pennsylvania</li>
          <li>Dartmouth College</li>
          <li>Brown University</li>
          <li>Cornell University</li>
        </ul>

        {/* -------- AFFORDABLE UNIVERSITIES -------- */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Affordable Universities for International Students
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>The City University of New York – $17,400 USD</li>
          <li>California State University, Long Beach – $8,151 USD</li>
          <li>Alcorn State University – $6,888 USD</li>
          <li>Minot State University – $6,809 USD</li>
          <li>South Texas College – $4,200 USD</li>
        </ul>

        {/* -------- ONLINE UNIVERSITIES -------- */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Online Universities in the USA
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>University of Arizona Global Campus</li>
          <li>Southern New Hampshire University</li>
          <li>Strayer University</li>
          <li>Purdue University Global</li>
          <li>Capella University</li>
        </ul>

        {/* -------- STUDY ABROAD SIMILAR -------- */}
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          Study Abroad Similar to USA
        </h3>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            "Study in Canada",
            "Study in Germany",
            "Study in Australia",
            "Study in New Zealand",
            "Study in UK",
            "Study in Sweden",
            "Study in France",
            "Study in Ireland",
          ].map((item, i) => (
            <li
              key={i}
              className="bg-gray-100 border border-gray-200 text-center py-3 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default UsaUniversities;
