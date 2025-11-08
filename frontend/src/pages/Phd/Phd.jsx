import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Phd.css";
import bannerImg from "../../assets/PhD_Banner.jpg";
import phdImg from "../../assets/Ph.D. Programs in Computer Science.jpg";

const Phd = () => {
  return (
    <div className="phd-container">
      <Navbar />

      <section
        className="phd-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="phd-hero-overlay">
          <div>
            <h1>Explore Top Ph.D. Programs</h1>
            <p>
              Advance your academic journey with world-leading research programs across top universities globally.
            </p>
            <button className="phd-hero-btn">Get Started</button>
          </div>
        </div>
      </section>

      <section className="phd-content">
        <div className="phd-section">
          <img src={phdImg} alt="Computer Science Ph.D." />
          <div className="text">
            <h2>Ph.D. Programs in Computer Science</h2>
            <p>
              Computer Science drives innovation in every field. A Ph.D. in Computer Science opens opportunities to develop groundbreaking technologies while blending theory with real-world applications.
            </p>
            <ul>
              <li>University of Waterloo, Canada</li>
              <li>University of Washington, U.S.A</li>
              <li>Columbia University, U.S.A</li>
              <li>California Institute of Technology, U.S.A</li>
              <li>Imperial College London, United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="phd-section reverse">
          <img src={phdImg} alt="Biology Ph.D." />
          <div className="text">
            <h2>Ph.D. Programs in Biology</h2>
            <p>
              Ph.D. in Biology focuses on advanced research across ecology, molecular biology, neuroscience, and genetics. Graduates become researchers and educators contributing to scientific discovery.
            </p>
            <ul>
              <li>University of California, U.S.A</li>
              <li>John Hopkins University, U.S.A</li>
              <li>University College London, United Kingdom</li>
              <li>University of Edinburgh, United Kingdom</li>
              <li>University of Toronto, Canada</li>
            </ul>
          </div>
        </div>

        <div className="phd-section">
          <img src={phdImg} alt="Physics Ph.D." />
          <div className="text">
            <h2>Ph.D. Programs in Physics</h2>
            <p>
              A Ph.D. in Physics explores areas like quantum mechanics, astrophysics, and particle physics. Candidates conduct deep research leading to innovations that shape the scientific world.
            </p>
            <ul>
              <li>Swiss Federal Institute of Technology, Switzerland</li>
              <li>Massachusetts Institute of Technology, U.S.A</li>
              <li>University of Edinburgh, United Kingdom</li>
              <li>Australian National University, Australia</li>
              <li>University of Auckland, New Zealand</li>
            </ul>
          </div>
        </div>

        <div className="phd-section reverse">
          <img src={phdImg} alt="Management Ph.D." />
          <div className="text">
            <h2>Ph.D. Programs in Management</h2>
            <p>
              A Ph.D. in Management prepares you for leadership and academic roles. Learn about organizational strategy, innovation, and decision-making while contributing to global business research.
            </p>
            <ul>
              <li>University of Pennsylvania, U.S.A</li>
              <li>University of Toronto, Canada</li>
              <li>Imperial College London, United Kingdom</li>
              <li>Cornell University, U.S.A</li>
              <li>California Institute of Technology, U.S.A</li>
            </ul>
          </div>
        </div>

        <div className="phd-section">
          <img src={phdImg} alt="Mechanical Engineering Ph.D." />
          <div className="text">
            <h2>Ph.D. Programs in Mechanical Engineering</h2>
            <p>
              Specialize in advanced fields such as robotics, thermodynamics, and nanotechnology. A Ph.D. in Mechanical Engineering allows you to design and innovate at the cutting edge of technology.
            </p>
            <ul>
              <li>Stanford University, U.S.A</li>
              <li>Georgia Institute of Technology, Canada</li>
              <li>Massachusetts Institute of Technology, U.S.A</li>
              <li>University of Manchester, United Kingdom</li>
              <li>Cranfield University, United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="phd-section reverse">
          <img src={phdImg} alt="Civil Engineering Ph.D." />
          <div className="text">
            <h2>Ph.D. Programs in Civil Engineering</h2>
            <p>
              Civil Engineering Ph.D. programs emphasize design, construction, and infrastructure innovation. Graduates lead research that improves safety, sustainability, and public development.
            </p>
            <ul>
              <li>University of British Columbia, Canada</li>
              <li>The University of Queensland, Australia</li>
              <li>University of Texas, U.S.A</li>
              <li>Purdue University, U.S.A</li>
              <li>University of New South Wales, Australia</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Phd;
