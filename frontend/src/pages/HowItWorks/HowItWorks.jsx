import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./HowItWorks.css";
import bannerImg from "../../assets/bannerImage.jpg";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import step4 from "../../assets/step4.png";
import step5 from "../../assets/step5.png";
import step6 from "../../assets/step6.png";
import step7 from "../../assets/step7.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";

const HowItWorks = () => {
  return (
    <div className="howitworks-container">
      <Navbar />

      <section
        className="howitworks-hero"
        style={{ backgroundImage: `url(https://ik.imagekit.io/izqq5ffwt/Screenshot%202025-11-06%20152724.png?updatedAt=1762423779051)` }}
      >
        <div className="hero-overlay">
          <div><h1>Get to Universities with Confidence</h1>
          <p>
            Edmium makes it easy to reach your dream university with clarity,
            guidance, and support every step of the way.
          </p>
          <button className="hero-btn">Get Started</button></div>
        </div>
      </section>

      <section className="steps-section">
        <div className="steps-wrapper">
          <div className="step">
            <img src={step1} alt="Step 1" />
            <p><span>1.</span> Create your free profile in seconds</p>
          </div>
          <div className="step">
            <img src={step2} alt="Step 2" />
            <p><span>2.</span> Our platform instantly matches you with best-fit universities</p>
          </div>
          <div className="step">
            <img src={step3} alt="Step 3" />
            <p><span>3.</span> Universities identify you as a great fit for admission</p>
          </div>
          <div className="step">
            <img src={step4} alt="Step 4" />
            <p><span>4.</span> Add universities you like and track your application progress</p>
          </div>
          <div className="step">
            <img src={step5} alt="Step 5" />
            <p><span>5.</span> Universities contact you for admission process</p>
          </div>
          <div className="step">
            <img src={step6} alt="Step 6" />
            <p><span>6.</span> Check all scholarships and apply for funds</p>
          </div>
          <div className="step">
            <img src={step7} alt="Step 7" />
            <p><span>7.</span> Get accepted. Begin your study abroad journey</p>
          </div>
        </div>
      </section>

      <section className="common-start">
        <h2>Choose a Common Starting Point</h2>
        <p>
          Whether you’re exploring universities, majors, or funding — find the perfect way to begin your journey.
        </p>

        <div className="cards-grid">
          <div className="card">
            <img src={card1} alt="University Suggestions" />
            <h3>Are You Looking for University Suggestions?</h3>
            <button>Create Account</button>
          </div>
          <div className="card">
            <img src={card2} alt="Shortlist" />
            <h3>Are You Ready to Make a Shortlist?</h3>
            <button>Get Started</button>
          </div>
          <div className="card">
            <img src={card3} alt="Career Path" />
            <h3>Are You Trying to Figure Out Your Career Path?</h3>
            <button>Start Now</button>
          </div>
          <div className="card">
            <img src={card4} alt="Scholarships" />
            <h3>Are You Trying to Figure Out How to Pay for University?</h3>
            <button>Explore Options</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
