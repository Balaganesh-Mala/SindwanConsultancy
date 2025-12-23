import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import australiaBanner from "../../assets/educationBanner.jpg";

const UniversityAustralia = () => {
  return (
    <>
      <Navbar />
      <HeroCountry countryName="Australia" bannerImage={australiaBanner} />

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-700 leading-relaxed font-poppins">

        {/* WHY STUDY */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Why Study in Australia
        </h2>

        <p className="mb-4">
          Australia promotes innovation, creativity and independent thinking for students who study at their universities. With thousands of courses available, international students experience a challenging, fun, and rewarding education.
        </p>

        <p className="mb-6">
          Many Indian students choose Australia for its world-class education, post-study work opportunities, and excellent quality of living.
        </p>

        {/* FACTS */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Facts About Australia
        </h2>

        <p className="mb-6">
          Whatever course you choose, you’ll be assured of exceptional academic standards and support systems. Australia offers multiple academic intakes throughout the year.
        </p>

        {/* INTAKE */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Intake
        </h2>

        <p className="mb-6">
          Australia has two primary intakes — <strong>February</strong> and <strong>July</strong>. Some universities also offer multiple intakes in <strong>September</strong> and <strong>November</strong>. Students are advised to begin applications at least six months early.
        </p>

        {/* UNIVERSITIES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Universities in Australia
        </h2>

        <p className="mb-4">
          Australia is among the top study destinations with eight universities ranked in the QS Top 100. Students can study at globally recognized universities and colleges with high-quality academic and research programs.
        </p>

        <p className="mb-6">
          Australia has 43 universities, with 37 among the top 1000 globally. Every state includes at least one major university campus.
        </p>

        {/* TOP 10 UNIVERSITIES TABLE */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Top 10 Universities in Australia
        </h2>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-sm mb-10">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">University Name</th>
              <th className="py-3 px-4">National Ranking</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["University of Melbourne", "1"],
              ["University of Sydney", "2"],
              ["Australian National University", "3"],
              ["University of Queensland", "4"],
              ["Monash University", "5"],
              ["University of New South Wales", "6"],
              ["University of Adelaide", "7"],
              ["University of Western Australia", "8"],
              ["University of Technology Sydney", "9"],
              ["University of Canberra", "10"],
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

        {/* INTERNATIONAL STUDENTS TABLE */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Top Ranked Universities by International Student Percentage
        </h2>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-sm mb-10">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">University Name</th>
              <th className="py-3 px-4">Global Rank</th>
              <th className="py-3 px-4">International Students</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["University of Melbourne", "31", "48%"],
              ["University of Sydney", "51", "43%"],
              ["Australian National University", "59", "47%"],
              ["University of Queensland", "62", "38%"],
              ["Monash University", "64", "43%"],
              ["University of New South Wales", "67", "44%"],
              ["University of Adelaide", "118", "29%"],
              ["University of Western Australia", "139", "29%"],
              ["University of Technology Sydney", "160", "36%"],
              ["University of Canberra", "184", "35%"],
            ].map(([uni, rank, percent], i) => (
              <tr
                key={i}
                className={`border-b ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4">{uni}</td>
                <td className="py-3 px-4">{rank}</td>
                <td className="py-3 px-4">{percent}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* MBA UNIVERSITIES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Top Universities in Australia for MBA
        </h2>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-sm mb-10">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">University</th>
              <th className="py-3 px-4">Global Rank</th>
              <th className="py-3 px-4">National Rank</th>
              <th className="py-3 px-4">Location</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["Melbourne Business School", "26", "1", "Melbourne"],
              ["UNSW", "42", "2", "Sydney"],
              ["Monash Business School", "90", "3", "Melbourne"],
              ["University of Queensland", "111–120", "4", "Brisbane"],
              ["Macquarie Business School", "131–140", "5", "Sydney"],
            ].map(([uni, gr, nr, loc], i) => (
              <tr
                key={i}
                className={`border-b ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4">{uni}</td>
                <td className="py-3 px-4">{gr}</td>
                <td className="py-3 px-4">{nr}</td>
                <td className="py-3 px-4">{loc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* MS UNIVERSITIES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Top Universities in Australia for MS
        </h2>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-sm mb-10">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">University Name</th>
              <th className="py-3 px-4">National Ranking</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["University of Melbourne", "1"],
              ["University of Sydney", "2"],
              ["University of Queensland", "3"],
              ["Monash University", "4"],
              ["University of New South Wales", "5"],
              ["Australian National University", "6"],
              ["University of Adelaide", "7"],
              ["University of Western Australia", "8"],
              ["University Technology Sydney", "10"],
              ["Curtin University", "11"],
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

        {/* WHAT TO STUDY */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          What to Study in Australia
        </h2>

        <p className="mb-4">
          Australia offers three main types of degrees — Bachelor, Master, and Doctoral programs.
        </p>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-sm mb-10">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">Degree Type</th>
              <th className="py-3 px-4">Duration</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["Bachelors Degree - General", "3 Years"],
              ["Bachelors Degree - Professional", "4 Years"],
              ["Bachelor Degree + Honors", "3–4 + 1 Year"],
              ["Masters by Coursework", "1–2 Years"],
              ["Masters Extended", "3–4 Years"],
              ["Masters by Research", "1–2 Years"],
              ["Doctoral Degree", "3–5 Years"],
              ["Doctoral Degree (Professional)", "3–5 Years"],
            ].map(([degree, duration], i) => (
              <tr
                key={i}
                className={`border-b ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4">{degree}</td>
                <td className="py-3 px-4">{duration}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* COST */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Cost of Studying in Australia
        </h2>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-sm mb-10">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">Level of Program</th>
              <th className="py-3 px-4">Fees (AUD)</th>
            </tr>
          </thead>

          <tbody>
            {[
              ["School", "7,800 – 30,000"],
              ["ELICOS", "300 per week"],
              ["Undergraduate Program", "20,000 – 40,000"],
              ["Postgraduate Program", "20,000 – 50,000"],
              ["Doctoral Programs", "18,000 – 42,000"],
            ].map(([prog, fee], i) => (
              <tr
                key={i}
                className={`border-b ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4">{prog}</td>
                <td className="py-3 px-4">{fee}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* JOBS */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Jobs in Australia
        </h2>

        <p className="mb-6">
          Australia is a hub of research and technology. Major innovations such as penicillin, IVF, 
          and Wi-Fi originated here. Graduates from Australian universities are highly valued globally 
          with excellent job opportunities and rewarding career paths.
        </p>

      </div>

      <Footer />
    </>
  );
};

export default UniversityAustralia;
