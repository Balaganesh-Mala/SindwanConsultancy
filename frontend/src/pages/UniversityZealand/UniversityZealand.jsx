import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import newzealandBannerImage from "../../assets/Banner1.jpg";

const UniversityZealand = () => {
  return (
    <>
      <Navbar />

      <HeroCountry
        countryName="New Zealand"
        bannerImage={newzealandBannerImage}
      />

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-700 leading-relaxed font-poppins">

        {/* WHY STUDY */}
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-6">
          Why Study in New Zealand?
        </h2>

        <p className="mb-6">
          Employers worldwide regard New Zealand institutions with respect.
          They have a strong reputation for excellent teaching standards,
          smaller class sizes, and practical learning opportunities that
          balance theory and hands-on experience.
        </p>

        {/* FACTS */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Facts about New Zealand
        </h3>
        <p>
          New Zealand has eight major universities, four of which feature among
          the world’s top 350 according to the Times Higher Education ranking —
          an impressive achievement for a country of its size.
        </p>

        {/* INTAKES */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Intakes</h3>
        <p>
          Main intakes are in <strong>January</strong> and{" "}
          <strong>July</strong>, with some universities also offering{" "}
          <strong>September</strong> and <strong>November</strong> options.
        </p>

        {/* TOP UNIVERSITIES */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Top Universities in New Zealand
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>University of Auckland</li>
          <li>University of Otago</li>
          <li>University of Canterbury</li>
          <li>Victoria University of Wellington</li>
          <li>University of Waikato</li>
        </ul>

        {/* MBA TABLE */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Best Universities for MBA
        </h3>

        <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-[0.95rem]">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-3 px-4">University</th>
              <th className="py-3 px-4">Tuition Fee (NZD)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Victoria University of Wellington", "58,000"],
              ["University of Otago", "57,960"],
              ["University of Auckland", "67,097"],
              ["University of Waikato", "55,000"],
              ["Massey University", "50,430"],
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

        {/* CHEAPEST UNIVERSITIES */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Cheapest Universities in New Zealand
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>University of Waikato — 22,840 NZD/year</li>
          <li>Victoria University of Wellington — 20,990 NZD/year</li>
          <li>University of Otago — 16,410 NZD/year</li>
          <li>Lincoln University — 21,025 NZD/year</li>
          <li>Auckland University of Technology — 23,190 NZD/year</li>
        </ul>

        {/* POPULAR STUDY AREAS */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Popular Study Areas
        </h3>
        <p>
          Engineering, Business, Computer Science, Medicine, and Environmental
          Sciences are among the most popular and respected fields in
          New Zealand.
        </p>

        {/* WHY CHOOSE */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">
          Why Choose New Zealand?
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Study at globally recognized universities</li>
          <li>Get world-class education at affordable cost</li>
          <li>Safe, friendly, and multicultural environment</li>
          <li>Plenty of post-study work opportunities</li>
          <li>Scholarships for deserving international students</li>
        </ul>

        {/* JOBS */}
        <h3 className="text-2xl font-semibold mt-10 mb-3">Jobs in New Zealand</h3>
        <p className="mb-6">
          The job market is strong, with high demand in fields like engineering,
          IT, healthcare, construction, and business services. Students can work
          part-time while studying and explore full-time roles after graduation.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default UniversityZealand;
