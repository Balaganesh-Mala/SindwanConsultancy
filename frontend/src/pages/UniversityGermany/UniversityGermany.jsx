import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import germanyBanner from "../../assets/Banner4.jpg";

const UniversityGermany = () => {
  return (
    <>
      <Navbar />
      <HeroCountry countryName="Germany" bannerImage={germanyBanner} />

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-700 leading-relaxed font-poppins">

        {/* WHY STUDY */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Why Study in Germany
        </h2>
        <p className="mb-6">
          Germany has strong ties with the industrial and corporate world,
          offering promising career opportunities to its alumni. A reputed
          destination for science and research, Germany’s education system 
          provides state-of-the-art universities, art colleges, and universities 
          of applied sciences. Most universities are state-owned and offer 
          education at little to no cost.
        </p>

        {/* FACTS */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Facts About Studying in Germany
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Affordability:</strong> Public universities offer free tuition.
            Students can work part-time to cover living expenses.
          </li>
          <li>
            <strong>Flexible Payments:</strong> Private universities offer flexible 
            payment plans, allowing students to earn while they learn.
          </li>
        </ul>

        {/* INTAKES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Intakes
        </h2>
        <p className="mb-6">
          The main intake is <strong>Winter (September/October)</strong>, ending
          in February/March. Deadlines are mid-July. The 
          <strong> Summer Intake (April)</strong> is also available in some universities.
        </p>

        {/* TOP UNIVERSITIES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Top Universities in Germany
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-6 mb-6">
          <li>Technical University of Munich</li>
          <li>Technical University of Berlin</li>
          <li>RWTH Aachen University</li>
          <li>University of Stuttgart</li>
          <li>University of Freiburg</li>
          <li>Free University of Berlin</li>
          <li>Karlsruhe Institute of Technology</li>
          <li>University of Duisburg-Essen</li>
          <li>Heidelberg University</li>
          <li>Albert-Ludwigs-University Freiburg</li>
        </ul>

        {/* MBA UNIVERSITIES TABLE */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Top MBA Universities
        </h2>
        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-[0.95rem] mb-8">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">University / Business School</th>
              <th className="py-3 px-4">Tuition Fee</th>
              <th className="py-3 px-4">Duration</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["ESMT Berlin", "€43,500", "12 Months"],
              ["Frankfurt School of Finance & Management", "€39,000", "12 Months"],
              ["WHU - Otto Beisheim School of Management", "€40,500", "12 Months"],
              ["Berlin School of Economics and Law", "€19,800", "15 Months"],
            ].map(([u, fee, dur], i) => (
              <tr
                key={i}
                className={`border-b ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-100 transition`}
              >
                <td className="py-3 px-4">{u}</td>
                <td className="py-3 px-4">{fee}</td>
                <td className="py-3 px-4">{dur}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* FREE & AFFORDABLE UNIVERSITIES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Free & Affordable Universities
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc pl-6 mb-6">
          <li>University of Cologne</li>
          <li>Ludwig Maximilians University Munich</li>
          <li>Goethe University Frankfurt</li>
          <li>RWTH Aachen University</li>
          <li>University of Münster</li>
          <li>Ruhr University Bochum</li>
          <li>Universität Hamburg</li>
          <li>Technical University Munich</li>
        </ul>

        {/* BEST CITIES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Best Cities for International Students
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Berlin:</strong> Multicultural, top-ranked universities, 
            and excellent networking.
          </li>
          <li>
            <strong>Munich:</strong> Strong engineering hub and world-famous Oktoberfest.
          </li>
          <li>
            <strong>Hamburg:</strong> Financial and industrial center with high standards.
          </li>
          <li>
            <strong>Bonn:</strong> Cultural scene and strong career opportunities.
          </li>
        </ul>

        {/* DEGREE OPTIONS */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Degree Options
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Bachelors:</strong> 6–8 semesters focusing on core subjects.</li>
          <li><strong>Masters:</strong> 2–4 semesters to specialize or deepen learning.</li>
          <li><strong>Doctoral:</strong> 2–5 years of research and dissertation.</li>
        </ul>

        {/* WHY CHOOSE GERMANY */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Why Choose Germany?
        </h2>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Top Quality Education</li>
          <li>Cultural Diversity</li>
          <li>Hands-on Learning</li>
          <li>Intellectual Growth</li>
          <li>Safe & Welcoming Environment</li>
        </ul>

        {/* JOB OPPORTUNITIES */}
        <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
          Job Opportunities
        </h2>
        <p className="mb-6">
          Germany has one of the lowest unemployment rates in Europe. 
          Major industries include automotive, tech, engineering, and manufacturing.
          Top companies include Volkswagen, BMW, Siemens, and Bosch.
        </p>

        {/* OTHER COUNTRIES */}
        <h3 className="text-[1.6rem] font-semibold text-[#0037ff] mb-4">
          Explore Other Countries
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
          {[
            ["Study in Canada", "/canada"],
            ["Study in USA", "/usa"],
            ["Study in Australia", "/australia"],
            ["Study in New Zealand", "/newzealand"],
            ["Study in Sweden", "/sweden"],
            ["Study in UK", "/uk"],
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

export default UniversityGermany;
