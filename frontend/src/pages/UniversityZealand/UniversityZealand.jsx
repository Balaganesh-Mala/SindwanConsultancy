import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import newzealandBannerImage from "../../assets/bannerImage.jpg"
import "./UniversityZealand.css";

const UniversityZealand = () => {
  return (
    <>
      <Navbar />
      <HeroCountry
        countryName="New Zealand"
        bannerImage={newzealandBannerImage}
      />

      <section className="university-zealand">
        <div className="container">
          <h2>Why Study in New Zealand?</h2>
          <p>
            Employers worldwide regard New Zealand institutions with respect. They have a strong reputation for
            excellent teaching standards, smaller class sizes, and practical learning opportunities that
            balance theory and hands-on experience.
          </p>

          <h3>Facts about New Zealand</h3>
          <p>
            New Zealand has eight major universities, four of which feature among the world’s top 350 according
            to the Times Higher Education ranking — an impressive achievement for a country of its size.
          </p>

          <h3>Intakes</h3>
          <p>
            Main intakes are in <strong>January</strong> and <strong>July</strong>, with some universities also
            offering <strong>September</strong> and <strong>November</strong> options.
          </p>

          <h3>Top Universities in New Zealand</h3>
          <ul>
            <li>University of Auckland</li>
            <li>University of Otago</li>
            <li>University of Canterbury</li>
            <li>Victoria University of Wellington</li>
            <li>University of Waikato</li>
          </ul>

          <h3>Best Universities for MBA</h3>
          <table>
            <thead>
              <tr>
                <th>University</th>
                <th>Tuition Fee (NZD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Victoria University of Wellington</td>
                <td>58,000</td>
              </tr>
              <tr>
                <td>University of Otago</td>
                <td>57,960</td>
              </tr>
              <tr>
                <td>University of Auckland</td>
                <td>67,097</td>
              </tr>
              <tr>
                <td>University of Waikato</td>
                <td>55,000</td>
              </tr>
              <tr>
                <td>Massey University</td>
                <td>50,430</td>
              </tr>
            </tbody>
          </table>

          <h3>Cheapest Universities in New Zealand</h3>
          <ul>
            <li>University of Waikato — 22,840 NZD/year</li>
            <li>Victoria University of Wellington — 20,990 NZD/year</li>
            <li>University of Otago — 16,410 NZD/year</li>
            <li>Lincoln University — 21,025 NZD/year</li>
            <li>Auckland University of Technology — 23,190 NZD/year</li>
          </ul>

          <h3>Popular Study Areas</h3>
          <p>
            Engineering, Business, Computer Science, Medicine, and Environmental Sciences are among the most
            popular and respected fields in New Zealand.
          </p>

          <h3>Why Choose New Zealand?</h3>
          <ul>
            <li>Study at globally recognized universities</li>
            <li>Get world-class education at affordable cost</li>
            <li>Safe, friendly, and multicultural environment</li>
            <li>Plenty of post-study work opportunities</li>
            <li>Scholarships for deserving international students</li>
          </ul>

          <h3>Jobs in New Zealand</h3>
          <p>
            The job market is strong, with high demand in fields like engineering, IT, healthcare, construction,
            and business services. Students can work part-time while studying and explore full-time roles after
            graduation.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default UniversityZealand;
