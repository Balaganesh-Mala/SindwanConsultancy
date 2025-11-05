import React from "react";
import "./Counsellor.css";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"; // Make sure you already have Footer component

const Counsellor = () => {
  return (
    <div className="counsellor-container">
      <Navbar/>
      {/* Banner Section */}
      <div className="counsellor-banner">
        <div className="banner-overlay">
          <h1>Become a Counsellor with Edmium</h1>
          <p>Help students achieve their dream of studying abroad.</p>
        </div>
      </div>

      {/* Why Become Section */}
      <section className="why-section">
        <h2>Why Become a Counsellor with Edmium?</h2>
        <div className="why-grid">
          <div className="why-card">
            <img src="https://www.edmium.com/wp-content/uploads/2020/10/travelling-abroud.jpg" alt="Compensations" />
            <h3>Huge Industry Compensations</h3>
          </div>
          <div className="why-card">
            <img src="/images/travel.jpg" alt="Travel Abroad" />
            <h3>Travel Abroad to Universities</h3>
          </div>
          <div className="why-card">
            <img src="/images/incentives.jpg" alt="Incentives" />
            <h3>Great Incentives</h3>
          </div>
        </div>
      </section>

      {/* How Helps Section */}
      <section className="help-section">
        <h2>How Edmium Helps Counsellors?</h2>
        <div className="help-grid">
          <div className="help-card">
            <img src="/images/university1.jpg" alt="Shortlist" />
            <h3>Shortlist Universities</h3>
            <p>
              Use our extensive database to find the best university matches for students’ profiles.
            </p>
          </div>
          <div className="help-card">
            <img src="/images/tools.jpg" alt="Advanced Tools" />
            <h3>Advanced Tools for Best Match</h3>
            <p>
              Our AI tools evaluate university options and help you find the best admission fit.
            </p>
          </div>
          <div className="help-card">
            <img src="/images/apply.jpg" alt="Apply Online" />
            <h3>Apply Online</h3>
            <p>
              Apply for admissions to 700+ partner universities through our centralized system.
            </p>
          </div>
          <div className="help-card">
            <img src="/images/news.jpg" alt="Information" />
            <h3>Get Up-to-Date Information</h3>
            <p>
              Get the latest news about universities, courses, and country guidelines for students.
            </p>
          </div>
          <div className="help-card">
            <img src="/images/multiple.jpg" alt="Multiple Applications" />
            <h3>Multiple Applications in One Place</h3>
            <p>
              Manage applications to different universities efficiently under one dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h3>
          Becoming a counsellor might be tiresome at times, but at Edmium, it’s not as tedious as it looks.
        </h3>
        <ul>
          <li>AI-based matching tools for best university fit.</li>
          <li>Enormous database of universities worldwide.</li>
          <li>Advanced online platform to manage students efficiently.</li>
          <li>Travel abroad opportunities for counsellors.</li>
          <li>Substantial industry compensations and incentives.</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default Counsellor;
