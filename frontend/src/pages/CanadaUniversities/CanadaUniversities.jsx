import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import canadaBanner from "../../assets/Banner3.jpg";

const CanadaUniversities = () => {
  return (
    <>
      <Navbar />
      <HeroCountry countryName="Canada" bannerImage={canadaBanner} />

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-700 leading-relaxed font-poppins">

        {/* WHY STUDY */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Why Study in Canada
        </h2>

        <p className="mb-6">
          Canada has become a booming hub for international students who wish to study and settle abroad.
          Ranked among the top ten countries to live in, Canada offers world-class education at affordable
          tuition rates along with globally recognized degrees and excellent quality of life.
        </p>

        {/* FACTS */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Facts About Canada
        </h2>

        <p className="mb-6">
          Canada offers high academic quality at reasonable fees and hosts over 70,000 international
          students every year. It provides safe environments, cultural diversity, and strong employment
          opportunities for graduates.
        </p>

        {/* INTAKES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Intakes
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Fall (September)</li>
          <li>Winter (January)</li>
          <li>Summer (April/May)</li>
        </ul>

        {/* TOP UNIVERSITIES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Top Universities in Canada
        </h2>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-sm mb-10">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">University</th>
              <th className="py-3 px-4">Province</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["University of Toronto", "Ontario"],
              ["McGill University", "Quebec"],
              ["University of British Columbia", "British Columbia"],
            ].map(([uni, province], i) => (
              <tr
                key={i}
                className={`border-b ${i % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4">{uni}</td>
                <td className="py-3 px-4">{province}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* LOW FEE COLLEGES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Low Fee Colleges in Canada
        </h2>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-sm mb-10">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">College</th>
              <th className="py-3 px-4">Province</th>
              <th className="py-3 px-4">Tuition Fee (CAD)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Fanshawe College", "Ontario", "7160"],
              ["Seneca College", "Ontario", "9236"],
              ["Bow Valley College", "Alberta", "11505"],
            ].map(([college, province, fee], i) => (
              <tr
                key={i}
                className={`border-b ${i % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4">{college}</td>
                <td className="py-3 px-4">{province}</td>
                <td className="py-3 px-4">{fee}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      <Footer />
    </>
  );
};

export default CanadaUniversities;
