import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import germanyBanner from "../../assets/bannerImage.jpg";

import "./UniversityGermany.css";

const UniversityGermany = () => {
  return (
    <>
      <Navbar />
      <HeroCountry countryName="Germany" bannerImage={germanyBanner} />
      <section className="germany-content container">
        <h2>Why Study in Germany</h2>
        <p>
          Germany has strong ties with the industrial and corporate world, offering
          promising career opportunities to its alumni. A reputed destination for
          science and research, Germany’s education system provides state-of-the-art
          universities, art colleges, and universities of applied sciences. Most
          universities are state-owned and offer education at little to no cost.
        </p>

        <h2>Facts About Studying in Germany</h2>
        <ul>
          <li>
            <strong>Affordability:</strong> Public universities offer free tuition.
            Students can work part-time to cover living expenses.
          </li>
          <li>
            <strong>Flexible Payments:</strong> Private universities offer flexible
            payment plans, allowing students to earn while they learn.
          </li>
        </ul>

        <h2>Intakes</h2>
        <p>
          The main intake in Germany is <strong>Winter (September/October)</strong>,
          ending in February/March. Application deadlines usually fall in mid-July.
          The <strong>Summer Intake (April)</strong> is also available in some universities.
        </p>

        <h2>Top Universities in Germany</h2>
        <ul className="two-column">
          <li>Technical University of Munich</li>
          <li>Technical University of Berlin</li>
          <li>RWTH Aachen University</li>
          <li>University of Stuttgart</li>
          <li>University of Freiburg</li>
          <li>Free University of Berlin</li>
          <li>Karlsruhe Institute of Technology</li>
          <li>University of Duisburg-Essen</li>
          <li>Ruprecht-Karls University Heidelberg</li>
          <li>Albert-Ludwigs-University Freiburg</li>
        </ul>

        <h2>Top MBA Universities</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>University / Business School</th>
                <th>Tuition Fee</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ESMT Berlin</td>
                <td>€43,500</td>
                <td>12 Months</td>
              </tr>
              <tr>
                <td>Frankfurt School of Finance & Management</td>
                <td>€39,000</td>
                <td>12 Months</td>
              </tr>
              <tr>
                <td>WHU - Otto Beisheim School of Management</td>
                <td>€40,500</td>
                <td>12 Months</td>
              </tr>
              <tr>
                <td>Berlin School of Economics and Law</td>
                <td>€19,800</td>
                <td>15 Months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Free & Affordable Universities</h2>
        <ul className="two-column">
          <li>University of Cologne</li>
          <li>Ludwig Maximilians University Munich</li>
          <li>Goethe University Frankfurt</li>
          <li>RWTH Aachen University</li>
          <li>University of Münster</li>
          <li>Ruhr University Bochum</li>
          <li>Universität Hamburg</li>
          <li>Technical University Munich</li>
        </ul>

        <h2>Best Cities for International Students</h2>
        <ul>
          <li>
            <strong>Berlin:</strong> Top-ranked universities, multicultural environment, and networking opportunities.
          </li>
          <li>
            <strong>Munich:</strong> Affordable tuition fees and world-famous Oktoberfest.
          </li>
          <li>
            <strong>Hamburg:</strong> Major financial and industrial hub with high education standards.
          </li>
          <li>
            <strong>Bonn:</strong> Cultural events and great job opportunities for graduates.
          </li>
        </ul>

        <h2>Degree Options</h2>
        <ul>
          <li><strong>Bachelors:</strong> 6–8 semesters focusing on core subjects.</li>
          <li><strong>Masters:</strong> 2–4 semesters to specialize or deepen knowledge.</li>
          <li><strong>Doctoral:</strong> 2–5 years of independent research and dissertation.</li>
        </ul>

        <h2>Why Choose Germany?</h2>
        <ul>
          <li>Top Quality Education</li>
          <li>Cultural Diversity</li>
          <li>Hands-on Learning</li>
          <li>Intellectual Growth</li>
          <li>Safe & Welcoming Environment</li>
        </ul>

        <h2>Job Opportunities</h2>
        <p>
          Germany has one of the lowest unemployment rates in Europe and a robust job
          market, especially in the automotive, tech, and manufacturing sectors.
          Major companies include Volkswagen, BMW, Siemens, and Bosch.
        </p>

        <h3 className="study-abroad-title">Explore Other Countries</h3>
        <div className="country-links">
          <a href="/canada">Study in Canada</a>
          <a href="/usa">Study in USA</a>
          <a href="/australia">Study in Australia</a>
          <a href="/newzealand">Study in New Zealand</a>
          <a href="/sweden">Study in Sweden</a>
          <a href="/uk">Study in UK</a>
          <a href="/france">Study in France</a>
          <a href="/ireland">Study in Ireland</a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UniversityGermany;
