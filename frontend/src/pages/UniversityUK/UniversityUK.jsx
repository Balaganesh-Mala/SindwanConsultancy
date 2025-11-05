import React from "react";
import "./UniversityUK.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import ukBanner from "../../assets/bannerImage.jpg"; // your UK banner image

const UniversityUK = () => {
  return (
    <>
      <Navbar />
      <HeroCountry
        bannerImage={ukBanner}
        countryName={'UK'}
      />

      <div className="uk-page container">
        <h2>Why Study in the UK</h2>
        <p>
          One of the most popular study destinations, the UK enjoys a proud tradition of education
          with universities rooting back to the 12th and 13th centuries. Known for its language,
          history, culture, and innovation, the UK has an average student retention rate of 82%.
          With a comprehensive support system for international students, studying in the UK is a
          life-changing experience.
        </p>

        <h2>Facts About Studying in the UK</h2>
        <ul>
          <li>Choose from over 50,000 courses across 25+ subject areas.</li>
          <li>UK courses are shorter, saving tuition and accommodation costs.</li>
        </ul>

        <h2>Intakes</h2>
        <p>
          There are two intakes – <strong>January/February</strong> and
          <strong>September/October</strong>. Students who miss the September intake can apply for
          January. September intake offers a larger variety of programs.
        </p>

        <h2>Top 5 Universities in the UK</h2>
        <ul className="two-column">
          <li>University of Cambridge</li>
          <li>University of Oxford</li>
          <li>Imperial College London</li>
          <li>Loughborough University</li>
          <li>Lancaster University</li>
        </ul>

        <h2>Top 10 Universities in the UK</h2>
        <table className="uk-table">
          <thead>
            <tr>
              <th>University Name</th>
              <th>National Ranking</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>University of Oxford</td><td>1</td></tr>
            <tr><td>University of Cambridge</td><td>2</td></tr>
            <tr><td>Imperial College London</td><td>3</td></tr>
            <tr><td>University College London</td><td>4</td></tr>
            <tr><td>London School of Economics and Political Science</td><td>5</td></tr>
            <tr><td>University of Edinburgh</td><td>6</td></tr>
            <tr><td>King’s College London</td><td>7</td></tr>
            <tr><td>University of Manchester</td><td>8</td></tr>
            <tr><td>University of Warwick</td><td>9</td></tr>
            <tr><td>University of Bristol</td><td>10</td></tr>
          </tbody>
        </table>

        <h2>Duolingo Accepted Universities</h2>
        <ul className="two-column">
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

        <h2>Popular Courses & Duration</h2>
        <ul>
          <li><strong>Bachelors:</strong> 3–4 years</li>
          <li><strong>Masters:</strong> 1–2 years</li>
          <li><strong>Doctoral:</strong> 3 years (average)</li>
        </ul>

        <h2>Affordable Universities in the UK</h2>
        <table className="uk-table">
          <thead>
            <tr>
              <th>University</th>
              <th>Tuition Fee (Approx.)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Staffordshire University</td><td>£10,500</td></tr>
            <tr><td>Teesside University</td><td>£10,250</td></tr>
            <tr><td>Harper Adams University</td><td>£11,000</td></tr>
            <tr><td>Leeds Trinity University</td><td>£11,000</td></tr>
            <tr><td>University of Cumbria</td><td>£10,500</td></tr>
          </tbody>
        </table>

        <h2>Why Study in the UK?</h2>
        <ul>
          <li>Top-ranked universities with global recognition</li>
          <li>Scholarships and grants available</li>
          <li>Multicultural environment</li>
          <li>Learn standard British English</li>
          <li>Experience the UK's rich heritage and innovation</li>
        </ul>

        <h2>Job Opportunities</h2>
        <p>
          The UK boasts the sixth-largest economy in the world with low unemployment (around 4%).
          Major industries include finance, engineering, healthcare, education, and marketing.
          International students can gain valuable experience and global exposure.
        </p>

        <div className="country-links">
          <a href="/usa">Study in USA</a>
          <a href="/canada">Study in Canada</a>
          <a href="/australia">Study in Australia</a>
          <a href="/germany">Study in Germany</a>
          <a href="/france">Study in France</a>
          <a href="/ireland">Study in Ireland</a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UniversityUK;
