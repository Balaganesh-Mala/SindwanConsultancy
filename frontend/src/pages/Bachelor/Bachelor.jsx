import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Bachelor.css";
import bannerImg from "../../assets/Bachelor’s_Degrees_Banner.jpg";
import businessImg from "../../assets/business_profestional.png";
import architectureImg from "../../assets/professional2.png";
import engineeringImg from "../../assets/professional3.png";
import scienceImg from "../../assets/professional4.png";
import socialImg from "../../assets/professional5.png";
import appliedImg from "../../assets/professional6.png";

const Bachelor = () => {
  return (
    <div className="bachelor-container">
      <Navbar />

      <section
        className="bachelor-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="hero-overlay">
          <div><h1>Explore Top Bachelor’s Degrees</h1>
          <p>
            Discover your path to a world-class education across leading fields and universities worldwide.
          </p>
          <button className="hero-btn">Get Started</button></div>
        </div>
      </section>

      <section className="bachelor-content">
        <div className="bachelor-section">
          <img src={businessImg} alt="Business and Management" />
          <div className="text">
            <h2>Business and Management</h2>
            <p>
              Business & Management teaches you everything about running a successful organization. You’ll explore
              subdisciplines like Project Management, Business Administration, Finance, Marketing, and Human Resource Management.
              Learn how to manage teams, analyze performance, and grow businesses globally.
            </p>
            <ul>
              <li>University of Bristol, United Kingdom</li>
              <li>University of Glasgow, United Kingdom</li>
              <li>University of Arizona, U.S.A</li>
              <li>Baylor University, U.S.A</li>
              <li>Monash University, Australia</li>
              <li>Dalhousie University, Canada</li>
            </ul>
          </div>
        </div>

        <div className="bachelor-section reverse">
          <img src={architectureImg} alt="Arts, Design and Architecture" />
          <div className="text">
            <h2>Arts, Design and Architecture</h2>
            <p>
              Arts and Design degrees build creative thinkers who express ideas through various forms. Architecture programs
              prepare professionals to design functional and inspiring spaces. Develop your visual, technical, and conceptual skills
              for careers in art, design, and architecture.
            </p>
            <ul>
              <li>University of Victoria, Canada</li>
              <li>Simon Fraser University, Canada</li>
              <li>University of New South Wales, Australia</li>
              <li>Nottingham Trent University, United Kingdom</li>
              <li>American University, U.S.A</li>
              <li>Baylor University, U.S.A</li>
            </ul>
          </div>
        </div>

        <div className="bachelor-section">
          <img src={engineeringImg} alt="Engineering and Technology" />
          <div className="text">
            <h2>Engineering and Technology</h2>
            <p>
              Engineering and Technology degrees teach you to innovate and solve real-world problems. From mechanical systems to
              advanced computer technologies, develop technical expertise to create sustainable solutions for industries worldwide.
            </p>
            <ul>
              <li>Queensland University of Technology, Australia</li>
              <li>University of Birmingham, United Kingdom</li>
              <li>University of Vermont, U.S.A</li>
              <li>University of Surrey, United Kingdom</li>
              <li>University of Victoria, Canada</li>
            </ul>
          </div>
        </div>

        <div className="bachelor-section reverse">
          <img src={scienceImg} alt="Natural Sciences" />
          <div className="text">
            <h2>Natural Sciences</h2>
            <p>
              Natural Sciences explore the principles governing our world—biology, chemistry, physics, and geology.
              Learn to conduct experiments, analyze results, and innovate across research, biotechnology, and environmental sciences.
            </p>
            <ul>
              <li>University of Saskatchewan, Canada</li>
              <li>University of Surrey, United Kingdom</li>
              <li>Baylor University, U.S.A</li>
              <li>Macquarie University, Australia</li>
              <li>RMIT University, Australia</li>
            </ul>
          </div>
        </div>

        <div className="bachelor-section">
          <img src={socialImg} alt="Social Sciences" />
          <div className="text">
            <h2>Social Sciences</h2>
            <p>
              Social Sciences examine society, behavior, and relationships through subjects like Sociology, Psychology,
              Economics, and Political Science. Gain critical insight into human systems and prepare for impactful careers in
              governance, research, and communication.
            </p>
            <ul>
              <li>University of Tasmania, Australia</li>
              <li>University of South Australia, Australia</li>
              <li>The University of Huddersfield, United Kingdom</li>
              <li>University of Dundee, United Kingdom</li>
              <li>University of Utah, U.S.A</li>
            </ul>
          </div>
        </div>

        <div className="bachelor-section reverse">
          <img src={appliedImg} alt="Applied Sciences" />
          <div className="text">
            <h2>Applied Sciences</h2>
            <p>
              Applied Sciences focus on real-world applications of scientific knowledge. Explore disciplines like Forensic Science,
              Food Sciences, and Emergency Management, designed to equip you with practical skills for diverse industries.
            </p>
            <ul>
              <li>University of Tasmania, Australia</li>
              <li>Curtin University, Australia</li>
              <li>University of South Florida, U.S.A</li>
              <li>University of Surrey, United Kingdom</li>
              <li>Newcastle University, United Kingdom</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bachelor;
