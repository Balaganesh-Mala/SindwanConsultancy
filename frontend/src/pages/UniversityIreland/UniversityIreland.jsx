import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import bannerImage from "../../assets/Banner9.jpg";

const UniversityIreland = () => {
  return (
    <>
      <Navbar />

      <HeroCountry countryName="Ireland" bannerImage={bannerImage} />

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12 text-gray-700 leading-relaxed font-poppins">

        {/* WHY STUDY */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Why Study in Ireland
          </h2>

          <p className="mb-4">
            One in ten full-time students in Ireland is an international student,
            which explains Irish institutions’ excellence. The Irish government
            monitors the quality of education via the National Framework of 
            Qualifications (NFQ), ensuring consistent quality across universities.
          </p>
        </section>

        {/* FACTS */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Facts about Ireland
          </h2>

          <p className="mb-4">
            Ireland ranks among the top 10 countries in Global Peace Indices, 
            making it one of the safest nations in the world. Irish people are 
            warm, friendly, and welcoming. Festivals such as St. Patrick’s Day 
            and Galway Oyster Festival enhance student life.
          </p>
        </section>

        {/* INTAKES */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Intakes
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Autumn / Semester 1: September – December</li>
            <li>Spring / Semester 2: January – May</li>
          </ul>
        </section>

        {/* TOP UNIVERSITIES */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Top Universities in Ireland
          </h2>

          <p className="mb-4">
            Ireland offers a range of world-class universities, combining 
            historical legacy with modern innovation.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Trinity College Dublin</li>
            <li>University College Dublin (UCD)</li>
            <li>University College Cork (UCC)</li>
            <li>University of Galway</li>
            <li>Dublin City University (DCU)</li>
            <li>University of Limerick (UL)</li>
            <li>Technological University Dublin (TU Dublin)</li>
          </ul>
        </section>

        {/* AFFORDABLE OPTIONS */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Affordable Options
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Dublin Business School</li>
            <li>University of Limerick</li>
            <li>Griffith College Dublin</li>
            <li>National University of Ireland</li>
            <li>Trinity College Dublin</li>
          </ul>
        </section>

        {/* POPULAR PROGRAMS */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Popular Programs
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Computer Science</li>
            <li>Engineering</li>
            <li>Business & Management</li>
            <li>Arts & Humanities</li>
            <li>Health Sciences</li>
          </ul>
        </section>

        {/* WHY CHOOSE IRELAND */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Why Choose Ireland?
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>High-Quality Education</li>
            <li>Great Career Opportunities</li>
            <li>Post-Study Work Visa Options</li>
            <li>Safe and Welcoming Country</li>
            <li>Rich Cultural Heritage</li>
          </ul>
        </section>

        {/* JOBS */}
        <section className="mb-12">
          <h2 className="text-[1.8rem] font-bold text-[#0037ff] mb-4">
            Top Employers in Ireland
          </h2>

          <p className="mb-4">
            Ireland hosts top global companies such as Apple, Google, Facebook,
            Microsoft, and Ryanair — giving graduates excellent career opportunities.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>IrishJobs.ie</li>
            <li>Jobs.ie</li>
            <li>Monster.ie</li>
            <li>RecruitIreland.com</li>
          </ul>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default UniversityIreland;
