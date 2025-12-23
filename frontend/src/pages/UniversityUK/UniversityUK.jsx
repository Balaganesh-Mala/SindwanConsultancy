import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import ukBanner from "../../assets/Banner5.jpg";

const UniversityUK = () => {
  return (
    <>
      <Navbar />
      <HeroCountry bannerImage={ukBanner} countryName={"UK"} />

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-700 leading-relaxed font-poppins">

        {/* WHY STUDY IN UK */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Why Study in the UK
        </h2>

        <p className="mb-6">
          One of the most popular study destinations, the UK enjoys a proud
          tradition of education with universities dating back to the 12th and
          13th centuries. Known for its language, history, culture, and
          innovation, the UK has an average student retention rate of 82%.
          With a comprehensive support system for international students,
          studying in the UK is a life-changing experience.
        </p>

        {/* FACTS */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Facts About Studying in the UK
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Choose from over 50,000 courses across 25+ subject areas.</li>
          <li>UK courses are shorter, saving tuition and accommodation costs.</li>
        </ul>

        {/* INTAKES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Intakes
        </h2>

        <p className="mb-6">
          There are two intakes – <strong>January/February</strong> and{" "}
          <strong>September/October</strong>. Students who miss the September
          intake can apply for January. September intake offers the largest
          variety of programs.
        </p>

        {/* TOP 5 UNIVERSITIES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Top 5 Universities in the UK
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>University of Cambridge</li>
          <li>University of Oxford</li>
          <li>Imperial College London</li>
          <li>Loughborough University</li>
          <li>Lancaster University</li>
        </ul>

        {/* TOP 10 TABLE */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Top 10 Universities in the UK
        </h2>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-[0.95rem] mb-8">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">University Name</th>
              <th className="py-3 px-4">National Ranking</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["University of Oxford", "1"],
              ["University of Cambridge", "2"],
              ["Imperial College London", "3"],
              ["University College London", "4"],
              ["London School of Economics and Political Science", "5"],
              ["University of Edinburgh", "6"],
              ["King’s College London", "7"],
              ["University of Manchester", "8"],
              ["University of Warwick", "9"],
              ["University of Bristol", "10"],
            ].map(([uni, rank], i) => (
              <tr
                key={i}
                className={`border-b ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4">{uni}</td>
                <td className="py-3 px-4">{rank}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* DUOLINGO ACCEPTED */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Duolingo Accepted Universities
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Anglia Ruskin University</li>
          <li>Bangor University</li>
          <li>University of Bristol</li>
          <li>Brunel University</li>
          <li>University of Glasgow</li>
          <li>University of Birmingham</li>
          <li>Queen’s University Belfast</li>
          <li>Middlesex University</li>
          <li>University of Stirling</li>
          <li>Plymouth University</li>
        </ul>

        {/* COURSE DURATION */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Popular Courses & Duration
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Bachelors:</strong> 3–4 years</li>
          <li><strong>Masters:</strong> 1–2 years</li>
          <li><strong>Doctoral:</strong> 3 years (average)</li>
        </ul>

        {/* AFFORDABLE UNIVERSITIES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Affordable Universities in the UK
        </h2>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-[0.95rem] mb-8">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">University</th>
              <th className="py-3 px-4">Tuition Fee (Approx.)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Staffordshire University", "£10,500"],
              ["Teesside University", "£10,250"],
              ["Harper Adams University", "£11,000"],
              ["Leeds Trinity University", "£11,000"],
              ["University of Cumbria", "£10,500"],
            ].map(([uni, fee], i) => (
              <tr
                key={i}
                className={`border-b ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4">{uni}</td>
                <td className="py-3 px-4">{fee}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* WHY STUDY IN UK */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Why Study in the UK?
        </h2>

        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Top-ranked universities with global recognition</li>
          <li>Scholarships and grants available</li>
          <li>Multicultural environment</li>
          <li>Learn standard British English</li>
          <li>Experience the UK's rich heritage and innovation</li>
        </ul>

        {/* JOB OPPORTUNITIES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Job Opportunities
        </h2>

        <p className="mb-10">
          The UK boasts the sixth-largest economy in the world with low unemployment
          (around 4%). Major industries include finance, engineering, healthcare,
          education, and marketing. International students gain valuable experience
          and global exposure.
        </p>

        {/* COUNTRY LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-8">
          {[
            ["Study in USA", "/usa"],
            ["Study in Canada", "/canada"],
            ["Study in Australia", "/australia"],
            ["Study in Germany", "/germany"],
            ["Study in France", "/france"],
            ["Study in Ireland", "/ireland"],
          ].map(([label, link], i) => (
            <a
              key={i}
              href={link}
              className="py-3 px-4 bg-gray-100 hover:bg-blue-600 hover:text-white transition rounded-lg shadow text-blue-700 font-medium text-center"
            >
              {label}
            </a>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
};

export default UniversityUK;
