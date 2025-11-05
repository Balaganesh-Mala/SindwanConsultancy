import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import canadaBanner from "../../assets/bannerImage.jpg";
import "./CanadaUniversities.css";

const CanadaUniversities = () => {
  return (
    <>
      <Navbar />
      <HeroCountry countryName="Canada" bannerImage={canadaBanner} />

      <section className="country-content">
        <div className="container">
          <h2>Why Study in Canada</h2>
          <p>
            Canada has become a booming hub for international students who wish
            to study and settle abroad. Ranked among the top ten countries to
            live in, Canada offers world-class education at affordable tuition
            rates...
          </p>

          <h2>Facts about Canada</h2>
          <p>
            Canada offers high academic quality at reasonable fees and hosts
            over 70,000 international students...
          </p>

          <h2>Intakes</h2>
          <ul>
            <li>Fall (September)</li>
            <li>Winter (January)</li>
            <li>Summer (April/May)</li>
          </ul>

          <h2>Top Universities in Canada</h2>
          <table>
            <thead>
              <tr>
                <th>University</th>
                <th>Province</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>University of Toronto</td>
                <td>Ontario</td>
              </tr>
              <tr>
                <td>McGill University</td>
                <td>Quebec</td>
              </tr>
              <tr>
                <td>University of British Columbia</td>
                <td>British Columbia</td>
              </tr>
            </tbody>
          </table>

          <h2>Low Fee Colleges in Canada</h2>
          <table>
            <thead>
              <tr>
                <th>College</th>
                <th>Province</th>
                <th>Tuition Fee (CAD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fanshawe College</td>
                <td>Ontario</td>
                <td>7160</td>
              </tr>
              <tr>
                <td>Seneca College</td>
                <td>Ontario</td>
                <td>9236</td>
              </tr>
              <tr>
                <td>Bow Valley College</td>
                <td>Alberta</td>
                <td>11505</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CanadaUniversities;
