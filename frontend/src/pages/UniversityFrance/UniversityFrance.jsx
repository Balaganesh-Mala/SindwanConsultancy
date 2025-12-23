import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import bannerImage from "../../assets/Banner7.jpg";

const UniversityFrance = () => {
  return (
    <>
      <Navbar />
      <HeroCountry
        countryName="France"
        bannerImage={bannerImage}
        description="Discover world-class education, culture, and career opportunities in France."
      />

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-700 leading-relaxed font-poppins">

        {/* WHY STUDY */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Why Study in France
        </h2>

        <p className="mb-4">
          France is one of the most sought-after study-abroad destinations, attracting thousands of
          international students every year. With world-class education, a rich cultural heritage,
          and a robust economy, France offers global career opportunities after graduation.
        </p>

        <p className="mb-6">
          For those lacking French proficiency, language lessons are included in many programs.
          France ranks second in Europe and fourth globally in the IT sector and is a leader in
          innovation and technology.
        </p>

        {/* FACTS */}
        <h3 className="text-[1.6rem] font-semibold text-[#0037ff] mb-3">
          Facts About France
        </h3>

        <p className="mb-6">
          France is home to world-renowned scientists, engineers, and thinkers. Its cultural
          diversity, education quality, and commitment to international students make it the
          third-most popular destination for higher education globally.
        </p>

        {/* INTAKES */}
        <h3 className="text-[1.6rem] font-semibold text-[#0037ff] mb-3">
          Intakes
        </h3>

        <p className="mb-6">
          France offers two main intakes — <strong>January</strong> and{" "}
          <strong>September</strong>. Applications usually start between{" "}
          <strong>February</strong> and <strong>March</strong>.
        </p>

        {/* UNIVERSITIES IN FRANCE */}
        <h3 className="text-[1.6rem] font-semibold text-[#0037ff] mb-3">
          Universities in France
        </h3>

        <p className="mb-6">
          France’s education system is among the best in Europe. With 35 universities ranked in the
          QS World Rankings — 11 of which are in the top 300 — France offers excellence in business,
          engineering, arts, and sciences.
        </p>

        {/* BEST STUDENT CITIES */}
        <h3 className="text-[1.6rem] font-semibold text-[#0037ff] mb-3">
          Best Student Cities in France
        </h3>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Paris</li>
          <li>Lille</li>
          <li>Montpellier</li>
          <li>Toulouse</li>
          <li>Lyon</li>
        </ul>

        {/* TOP 10 UNIVERSITIES TABLE */}
        <h3 className="text-[1.6rem] font-semibold text-[#0037ff] mb-4">
          Top 10 Universities in France
        </h3>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-[0.95rem] mb-8">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">France Rank</th>
              <th className="py-3 px-4">University Name</th>
              <th className="py-3 px-4">Global Rank</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["1", "Université PSL", "52"],
              ["2", "École Polytechnique", "68"],
              ["3", "Sorbonne University", "83"],
              ["4", "CentraleSupélec", "138"],
              ["5", "École Normale Supérieure de Lyon", "161"],
              ["6", "École des Ponts ParisTech", "242"],
              ["7", "Sciences Po Paris", "242"],
              ["8", "Université de Paris", "275"],
              ["9", "Université Paris 1 Panthéon-Sorbonne", "287"],
              ["10", "ENS Paris-Saclay", "291"],
            ].map(([fr, uni, gr], i) => (
              <tr
                key={i}
                className={`border-b ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4">{fr}</td>
                <td className="py-3 px-4">{uni}</td>
                <td className="py-3 px-4">{gr}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ENGINEERING UNIVERSITIES */}
        <h3 className="text-[1.6rem] font-semibold text-[#0037ff] mb-3">
          Top Engineering Universities in France
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>ESIEE Paris</li>
          <li>EPF Graduate School of Engineering</li>
          <li>Grenoble Institute of Technology</li>
          <li>École Polytechnique</li>
        </ul>

        {/* MBA COLLEGES */}
        <h3 className="text-[1.6rem] font-semibold text-[#0037ff] mb-3">
          Top MBA Colleges in France
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>INSEAD Business School</li>
          <li>HEC Paris</li>
          <li>Grenoble École de Management</li>
          <li>ESSEC Business School</li>
          <li>ESCP Business School</li>
          <li>KEDGE Business School</li>
          <li>NEOMA Business School</li>
          <li>EDHEC Business School</li>
          <li>Toulouse Business School</li>
          <li>Montpellier Business School</li>
        </ul>

        {/* WHAT TO STUDY */}
        <h3 className="text-[1.6rem] font-semibold text-[#0037ff] mb-3">
          What to Study in France
        </h3>
        <p className="mb-6">
          France offers diverse academic paths across Engineering, Business, Arts, Sciences, and
          Humanities. Public universities provide affordable tuition and globally recognized degrees.
        </p>

        {/* WHY STUDY IN FRANCE */}
        <h3 className="text-[1.6rem] font-semibold text-[#0037ff] mb-3">
          Why Study in France?
        </h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Open and welcoming for international students</li>
          <li>Hub for innovation and startups</li>
          <li>Excellent academic and research opportunities</li>
          <li>Affordable tuition and scholarships</li>
          <li>Vibrant cultural and professional experience</li>
        </ul>

        {/* JOBS IN FRANCE */}
        <h3 className="text-[1.6rem] font-semibold text-[#0037ff] mb-3">
          Jobs in France
        </h3>
        <p className="mb-6">
          France has strong job openings in aeronautics, automobiles, pharmaceuticals,
          energy, and cosmetics. Leading employers include L’Oréal, Sanofi, and PSA Peugeot Citroën.
          Students can also explore part-time jobs and platforms like Indeed, Erasmus, and StudentJob.
        </p>

      </div>

      <Footer />
    </>
  );
};

export default UniversityFrance;
