import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import bannerImage from "../../assets/Banner8.jpg";

const UniversitySweden = () => {
  return (
    <>
      <Navbar />
      <HeroCountry countryName="Sweden" bannerImage={bannerImage} />

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-700 leading-relaxed font-poppins">

        {/* WHY STUDY IN SWEDEN */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Why Study in Sweden?
          </h2>

          <p className="mb-4">
            Higher education in Sweden is among the best in the world. The Nordic country
            emphasizes group and independent study rather than lectures. Freedom and responsibility
            are key values that support student development.
          </p>

          <p>
            Every year, more international students enroll at Swedish universities and colleges,
            drawn by its academic excellence and innovative culture.
          </p>
        </section>

        {/* FACTS ABOUT SWEDEN */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Facts About Sweden
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Free education for EU/EEA, Nordic countries, and Switzerland students.</li>
            <li>Ph.D. programs are free for all international students.</li>
            <li>Non-EU/EEA students pay €7,500 – €25,500 per year depending on the program.</li>
            <li>Business and Architecture programs are the most expensive.</li>
          </ul>
        </section>

        {/* INTAKE */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Intake
          </h2>

          <p>
            The <strong>Autumn Intake</strong> (August–September) is the primary intake in Sweden.
            Applications open in December and results are announced by April.
          </p>
        </section>

        {/* TOP UNIVERSITIES */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Top Universities in Sweden
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Uppsala University</li>
            <li>KTH Royal Institute of Technology</li>
            <li>Lund University</li>
            <li>University of Gothenburg</li>
            <li>Jonkoping University</li>
            <li>Hanken School of Economics</li>
          </ul>
        </section>

        {/* RANKING TABLE */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Best Universities in Sweden (Global Rankings)
          </h2>

          <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden text-left text-[0.95rem]">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="py-3 px-4">University</th>
                <th className="py-3 px-4">Global Rank</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Karolinska Institute", "36"],
                ["Lund University", "103"],
                ["Stockholm University", "183"],
                ["Chalmers University of Technology", "201"],
                ["KTH Royal Institute of Technology", "201"],
                ["Swedish University of Agricultural Sciences", "351"],
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
        </section>

        {/* POPULAR COURSES */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Popular Courses
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Computer Science</li>
            <li>Engineering</li>
            <li>Arts</li>
            <li>Environmental Studies</li>
            <li>Cultural Studies</li>
          </ul>
        </section>

        {/* WHY STUDY IN SWEDEN AGAIN */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Why Study in Sweden?
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>High-quality and unconventional education</li>
            <li>Innovative, sustainable, and tech-forward country</li>
            <li>Diverse and welcoming culture</li>
            <li>Easy and transparent application system</li>
            <li>Degrees recognized globally</li>
          </ul>
        </section>

        {/* JOBS */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Jobs in Sweden
          </h2>

          <p className="mb-4">
            Sweden is home to global companies like <strong>Volvo, IKEA, H&M, Spotify</strong>,
            providing great opportunities for internships and full-time jobs.
          </p>

          <p>
            The government actively supports international talent by simplifying work permit
            processes and improving access to employment.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default UniversitySweden;
