import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Master.css";
import managementImg from "../../assets/Masters1.png";
import csImg from "../../assets/Masters2.png";
import mbaImg from "../../assets/Masters3.png";
import irImg from "../../assets/Masters4.png";
import economicsImg from "../../assets/Masters6.png";
import psychologyImg from "../../assets/Masters7.png";
import ibImg from "../../assets/Masters8.png";
import biologyImg from "../../assets/Masters9.png";
import engImg from "../../assets/Masters10.png";
import healthImg from "../../assets/Masters11.png";

const Master = () => {
  return (
    <div className="masters-container">
      <Navbar />

      <section
        className="masters-hero"
        style={{ backgroundImage: `url(https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-11-06%20133715.png)` }}
      >
        <div className="hero-overlay">
          <div>
            <h1>Explore Top Master’s Degrees</h1>
            <p>
              Advance your education and career through globally recognized
              Master’s programs designed to shape leaders, innovators, and
              researchers across industries.
            </p>
            <button className="hero-btn">Get Started</button>
          </div>
        </div>
      </section>

      <section className="masters-content">
        <div className="masters-section">
          <img src={managementImg} alt="Masters in Management & Leadership" />
          <div className="text">
            <h2>Masters in Management & Leadership</h2>
            <p>
              Competitiveness and leadership continue to play a vital role in
              every international student’s life. Master’s in Management equips
              you with business knowledge and leadership skills to start a
              successful career.
            </p>
            <ul>
              <li>Oregon State University, U.S.A</li>
              <li>Macquarie University, Australia</li>
              <li>University of South Australia, Australia</li>
              <li>University of East Anglia, United Kingdom</li>
              <li>Royal Roads University, Canada</li>
            </ul>
          </div>
        </div>

        <div className="masters-section reverse">
          <img src={csImg} alt="Masters in Computer Sciences" />
          <div className="text">
            <h2>Masters in Computer Sciences</h2>
            <p>
              Computer Science master’s programs focus on innovation, artificial
              intelligence, and data-driven technologies — preparing you for
              careers in AI, software engineering, and research.
            </p>
            <ul>
              <li>University of Southern Queensland, Australia</li>
              <li>Nottingham Trent University, United Kingdom</li>
              <li>American University, U.S.A</li>
              <li>Lakehead University, Canada</li>
              <li>Northumbria University, United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="masters-section">
          <img src={mbaImg} alt="Masters in Business Administration" />
          <div className="text">
            <h2>Masters in Business Administration (MBA)</h2>
            <p>
              The MBA remains the most powerful business degree worldwide,
              covering finance, marketing, HR, and operations to build strategic
              leadership for modern enterprises.
            </p>
            <ul>
              <li>Queensland University of Technology, Australia</li>
              <li>University of Massachusetts Lowell, U.S.A</li>
              <li>University of Glasgow, United Kingdom</li>
              <li>University of New Brunswick, Canada</li>
              <li>Colorado State University, U.S.A</li>
            </ul>
          </div>
        </div>

        <div className="masters-section reverse">
          <img src={irImg} alt="Masters in International Relations" />
          <div className="text">
            <h2>Masters in International Relations</h2>
            <p>
              Understand global politics, diplomacy, and economics. This program
              builds skills for leadership in government, NGOs, and
              international organizations.
            </p>
            <ul>
              <li>University of New South Wales, Australia</li>
              <li>University of Stirling, United Kingdom</li>
              <li>George Mason University, U.S.A</li>
              <li>Dallas Baptist University, U.S.A</li>
              <li>Swansea University, United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="masters-section">
          <img src={economicsImg} alt="Masters in Economics" />
          <div className="text">
            <h2>Masters in Economics</h2>
            <p>
              Study how societies grow prosperous and why. A master’s in
              Economics opens doors in business, research, policy, and academia.
            </p>
            <ul>
              <li>American University, U.S.A</li>
              <li>Griffith University, Australia</li>
              <li>Nottingham Trent University, United Kingdom</li>
              <li>University of Birmingham, United Kingdom</li>
              <li>The University of Adelaide, Australia</li>
            </ul>
          </div>
        </div>

        <div className="masters-section reverse">
          <img src={psychologyImg} alt="Masters in Psychology" />
          <div className="text">
            <h2>Masters in Psychology</h2>
            <p>
              Deepen your understanding of human behavior and mental health.
              These programs prepare you for impactful roles in therapy,
              research, and counseling.
            </p>
            <ul>
              <li>Curtin University, Australia</li>
              <li>Griffith University, Australia</li>
              <li>University of Bristol, United Kingdom</li>
              <li>University of South Florida, U.S.A</li>
              <li>University of Regina, Canada</li>
            </ul>
          </div>
        </div>

        <div className="masters-section">
          <img src={ibImg} alt="Masters in International Business" />
          <div className="text">
            <h2>Masters in International Business</h2>
            <p>
              Learn how to expand businesses globally. This program builds
              cross-cultural management, trade, and negotiation skills for
              global success.
            </p>
            <ul>
              <li>Nottingham Trent University, United Kingdom</li>
              <li>University of Birmingham, United Kingdom</li>
              <li>University of New South Wales, Australia</li>
              <li>Florida International University, U.S.A</li>
              <li>Arizona State University, U.S.A</li>
            </ul>
          </div>
        </div>

        <div className="masters-section reverse">
          <img src={biologyImg} alt="Masters in Biology" />
          <div className="text">
            <h2>Masters in Biology</h2>
            <p>
              Explore the diversity of life, discover new species, and
              contribute to scientific research and medicine through biology
              master’s programs.
            </p>
            <ul>
              <li>University of South Florida, U.S.A</li>
              <li>Nottingham Trent University, Australia</li>
              <li>University of Glasgow, United Kingdom</li>
              <li>University of Bristol, United Kingdom</li>
              <li>University of Regina, Canada</li>
            </ul>
          </div>
        </div>

        <div className="masters-section">
          <img src={engImg} alt="Masters in Engineering & Technology" />
          <div className="text">
            <h2>Masters in Engineering & Technology</h2>
            <p>
              Pursue innovation and problem-solving through advanced engineering
              and technology programs that shape the world of tomorrow.
            </p>
            <ul>
              <li>George Mason University, U.S.A</li>
              <li>University of South Florida, U.S.A</li>
              <li>The University of Adelaide, Australia</li>
              <li>University of Birmingham, United Kingdom</li>
              <li>Curtin University, Australia</li>
            </ul>
          </div>
        </div>

        <div className="masters-section reverse">
          <img src={healthImg} alt="Masters in Health Sciences" />
          <div className="text">
            <h2>Masters in Health Sciences</h2>
            <p>
              Learn to innovate in healthcare systems, medical technology, and
              public health with advanced research-based health sciences
              degrees.
            </p>
            <ul>
              <li>Newcastle University, United Kingdom</li>
              <li>University of Glasgow, United Kingdom</li>
              <li>University of Cincinnati, U.S.A</li>
              <li>Illinois State University, U.S.A</li>
              <li>Flinders University, Australia</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Master;
