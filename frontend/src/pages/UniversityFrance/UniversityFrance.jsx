import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import bannerImage from "../../assets/bannerImage.jpg"
import "./UniversityFrance.css";

const UniversityFrance = () => {
  return (
    <>
      <Navbar />
      <HeroCountry
        countryName="France"
        bannerImage={bannerImage}
        description="Discover world-class education, culture, and career opportunities in France."
      />

      <section className="university-france">
        <div className="container">
          <h2>Why Study in France</h2>
          <p>
            France is one of the most sought-after study-abroad destinations, attracting thousands of
            international students every year. With world-class education, a rich cultural heritage,
            and a robust economy, France offers global career opportunities after graduation. The
            French government also provides accommodation assistance and scholarships for deserving
            students.
          </p>
          <p>
            For those lacking French proficiency, language lessons are included in many programs.
            France ranks second in Europe and fourth globally in the IT sector and is a leader in
            innovation and technology.
          </p>

          <h3>Facts About France</h3>
          <p>
            France is home to world-renowned scientists, engineers, and thinkers. Its cultural
            diversity, education quality, and commitment to international students make it the
            third-most popular destination for higher education globally. It is also the world’s
            sixth-largest economy.
          </p>

          <h3>Intakes</h3>
          <p>
            France offers two main intakes — <strong>January</strong> and <strong>September</strong>.
            Application processes usually start between <strong>February and March</strong> for most
            universities.
          </p>

          <h3>Universities in France</h3>
          <p>
            France’s education system is among the best in Europe. With 35 universities ranked in the
            QS World Rankings — 11 of which are in the top 300 — France provides both academic and
            professional excellence. Top programs include business, engineering, law, and arts.
          </p>

          <h3>Best Student Cities in France</h3>
          <ul>
            <li>Paris</li>
            <li>Lille</li>
            <li>Montpellier</li>
            <li>Toulouse</li>
            <li>Lyon</li>
          </ul>

          <h3>Top 10 Universities in France</h3>
          <table>
            <thead>
              <tr>
                <th>France Rank</th>
                <th>University Name</th>
                <th>Global Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Université PSL</td><td>52</td></tr>
              <tr><td>2</td><td>École Polytechnique</td><td>68</td></tr>
              <tr><td>3</td><td>Sorbonne University</td><td>83</td></tr>
              <tr><td>4</td><td>CentraleSupélec</td><td>138</td></tr>
              <tr><td>5</td><td>École Normale Supérieure de Lyon</td><td>161</td></tr>
              <tr><td>6</td><td>École des Ponts ParisTech</td><td>242</td></tr>
              <tr><td>7</td><td>Sciences Po Paris</td><td>242</td></tr>
              <tr><td>8</td><td>Université de Paris</td><td>275</td></tr>
              <tr><td>9</td><td>Université Paris 1 Panthéon-Sorbonne</td><td>287</td></tr>
              <tr><td>10</td><td>ENS Paris-Saclay</td><td>291</td></tr>
            </tbody>
          </table>

          <h3>Top Engineering Universities in France</h3>
          <ul>
            <li>ESIEE Paris</li>
            <li>EPF Graduate School of Engineering</li>
            <li>Grenoble Institute of Technology</li>
            <li>École Polytechnique</li>
          </ul>

          <h3>Top MBA Colleges in France</h3>
          <ul>
            <li>INSEAD Business School</li>
            <li>HEC Paris</li>
            <li>Grenoble École de Management</li>
            <li>ESSEC Business School</li>
            <li>ESCP Business School</li>
            <li>KEDGE Business School</li>
            <li>NEOMA Business School</li>
            <li>EDHEC Business School</li>
            <li>Toulouse Business School</li>
            <li>Montpellier Business School</li>
          </ul>

          <h3>What to Study in France</h3>
          <p>
            France offers diverse academic paths — from undergraduate to PhD levels. Programs cover
            Engineering, Business, Arts, Sciences, and Humanities. Many public universities offer
            affordable tuition with globally recognized degrees.
          </p>

          <h3>Why Study in France?</h3>
          <ul>
            <li>Open and welcoming for international students</li>
            <li>Hub for innovation and startups</li>
            <li>Excellent academic and research opportunities</li>
            <li>Affordable tuition and scholarships</li>
            <li>Vibrant cultural and professional experience</li>
          </ul>

          <h3>Jobs in France</h3>
          <p>
            France has a strong job market with opportunities in aeronautics, automobiles,
            pharmaceuticals, energy, and cosmetics. Leading corporations include L’Oréal, Sanofi, and
            PSA Peugeot Citroën. Students can explore part-time jobs and career platforms like Indeed,
            Erasmus, StudentJob, and JobInParis.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UniversityFrance;
