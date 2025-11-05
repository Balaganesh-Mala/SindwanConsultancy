import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import bannerImage from "../../assets/bannerImage.jpg"
import "./UniversitySweden.css";

const UniversitySweden = () => {
  return (
    <>
      <Navbar />
      <HeroCountry
        countryName="Sweden"
        bannerImage={bannerImage}
      />

      <div className="sweden-container">
        <section className="sweden-section">
          <h2>Why Study in Sweden?</h2>
          <p>
            Higher education in Sweden is among the best in the world. The
            Nordic country emphasizes group and independent study rather than
            lectures. Freedom and responsibility are key values that support the
            development of students.
          </p>
          <p>
            Every year, more international students enroll at Swedish
            universities and colleges, drawn by its academic excellence and
            innovative spirit.
          </p>
        </section>

        <section className="sweden-section">
          <h2>Facts About Sweden</h2>
          <ul>
            <li>
              Free education for EU/EEA, Nordic countries, and Switzerland
              students.
            </li>
            <li>
              Ph.D. programs are free for all international students,
              regardless of nationality.
            </li>
            <li>
              Non-EU/EEA students pay tuition fees between €7,500 – €25,500 per
              year depending on the program.
            </li>
            <li>
              Business and Architecture are among the most expensive programs.
            </li>
          </ul>
        </section>

        <section className="sweden-section">
          <h2>Intake</h2>
          <p>
            The <strong>Autumn Intake</strong> (August–September) is the primary
            intake in Sweden. Applications open in December and results are
            announced by April.
          </p>
        </section>

        <section className="sweden-section">
          <h2>Top Universities in Sweden</h2>
          <ul className="uni-list">
            <li>Uppsala University</li>
            <li>KTH Royal Institute of Technology</li>
            <li>Lund University</li>
            <li>University of Gothenburg</li>
            <li>Jonkoping University</li>
            <li>Hanken School of Economics</li>
          </ul>
        </section>

        <section className="sweden-section">
          <h2>Best Universities in Sweden According to International Rankings</h2>
          <table className="rank-table">
            <thead>
              <tr>
                <th>University</th>
                <th>Global Rank</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Karolinska Institute</td>
                <td>36</td>
              </tr>
              <tr>
                <td>Lund University</td>
                <td>103</td>
              </tr>
              <tr>
                <td>Stockholm University</td>
                <td>183</td>
              </tr>
              <tr>
                <td>Chalmers University of Technology</td>
                <td>201</td>
              </tr>
              <tr>
                <td>KTH Royal Institute of Technology</td>
                <td>201</td>
              </tr>
              <tr>
                <td>Swedish University of Agricultural Sciences</td>
                <td>351</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="sweden-section">
          <h2>Popular Courses</h2>
          <ul>
            <li>Computer Science</li>
            <li>Engineering</li>
            <li>Arts</li>
            <li>Environmental Studies</li>
            <li>Cultural Studies</li>
          </ul>
        </section>

        <section className="sweden-section">
          <h2>Why Study in Sweden?</h2>
          <ul>
            <li>High quality and unconventional education</li>
            <li>Highly innovative and sustainable country</li>
            <li>Experience true diversity and openness</li>
            <li>Easy and transparent application process</li>
            <li>Globally recognized degrees</li>
          </ul>
        </section>

        <section className="sweden-section">
          <h2>Jobs in Sweden</h2>
          <p>
            Sweden is home to global companies like <strong>Volvo, IKEA, H&M,</strong> and{" "}
            <strong>Spotify</strong>. International students have great
            opportunities for internships and full-time jobs, even without full
            Swedish language proficiency.
          </p>
          <p>
            The government supports international talent by reducing barriers
            for work permits and local employment.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default UniversitySweden;
