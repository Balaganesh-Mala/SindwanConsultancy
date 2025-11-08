import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import bannerImage from "../../assets/abroadBanner.jpg"
import "./UsaUniversities.css";

const UsaUniversities = () => {
  return (
    <>
      <Navbar />
      <HeroCountry bannerImage={bannerImage} countryName={'USA'}/>

      <div className="usa-container">
        <h2>Why Study in the USA</h2>
        <p>
          Studying in the USA opens you up to opportunities and exposes you to
          different cultures, education systems, learning to build networks, and
          improving your overall profile. We are Study in USA consultants and
          guide Study abroad for Indian students. You can also study abroad in
          the UK, Germany, and Canada.
        </p>

        <h3>Intake</h3>
        <p>
          Universities and Colleges in the US have three intakes — Spring
          (January), Fall (September), and Summer (May). Fall (Aug/Sep) is the
          major intake.
        </p>

        <h3>USA Process Flow</h3>
        <ul>
          <li>Pre-requisite Exams: GRE / GMAT / SAT / TOEFL / IELTS</li>
          <li>Professional Presentation: SOP / LOR / Resume</li>
          <li>Program & University Shortlisting</li>
          <li>Application Forwarding & Processing</li>
          <li>Visa Processing: Mock Interview & Final Documentation</li>
        </ul>

        <h3>Why Choose Edmium</h3>
        <ul>
          <li>20+ Years of Experience</li>
          <li>Internationally Trained Counselors</li>
          <li>1000+ University Profiles</li>
          <li>11 Billion+ in Scholarships</li>
        </ul>

        <h2>Universities in the USA</h2>
        <p>
          The USA is one of the top destinations attracting international
          students globally. It hosts over 1 million students due to its
          world-class education, innovation, and flexible learning structure.
        </p>

        <h3>Top Universities in the USA</h3>
        <p>
          Harvard University, MIT, Stanford University, and Caltech are among
          the top universities according to the QS rankings.
        </p>

        <table className="usa-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Harvard University</td></tr>
            <tr><td>2</td><td>Stanford University</td></tr>
            <tr><td>3</td><td>Massachusetts Institute of Technology (MIT)</td></tr>
            <tr><td>4</td><td>University of California, Berkeley</td></tr>
            <tr><td>5</td><td>University of California, Los Angeles (UCLA)</td></tr>
            <tr><td>6</td><td>Yale University</td></tr>
            <tr><td>7</td><td>Columbia University</td></tr>
            <tr><td>8</td><td>Princeton University</td></tr>
            <tr><td>9</td><td>New York University (NYU)</td></tr>
            <tr><td>10</td><td>University of Pennsylvania</td></tr>
          </tbody>
        </table>

        <h3>Ivy League Universities</h3>
        <ul>
          <li>Princeton University</li>
          <li>Harvard University</li>
          <li>Columbia University</li>
          <li>Yale University</li>
          <li>University of Pennsylvania</li>
          <li>Dartmouth College</li>
          <li>Brown University</li>
          <li>Cornell University</li>
        </ul>

        <h3>Affordable Universities for International Students</h3>
        <ul>
          <li>The City University of New York – $17,400 USD</li>
          <li>California State University, Long Beach – $8,151 USD</li>
          <li>Alcorn State University – $6,888 USD</li>
          <li>Minot State University – $6,809 USD</li>
          <li>South Texas College – $4,200 USD</li>
        </ul>

        <h3>Online Universities in the USA</h3>
        <ul>
          <li>University of Arizona Global Campus</li>
          <li>Southern New Hampshire University</li>
          <li>Strayer University</li>
          <li>Purdue University Global</li>
          <li>Capella University</li>
        </ul>

        <h3>Study Abroad Similar to USA</h3>
        <ul className="study-links">
          <li>Study in Canada</li>
          <li>Study in Germany</li>
          <li>Study in Australia</li>
          <li>Study in New Zealand</li>
          <li>Study in UK</li>
          <li>Study in Sweden</li>
          <li>Study in France</li>
          <li>Study in Ireland</li>
        </ul>
      </div>

      <Footer />
    </>
  );
};

export default UsaUniversities;
