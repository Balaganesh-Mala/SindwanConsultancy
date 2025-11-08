import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroForm from "../../components/HeroForm/HeroForm";
import "./Advising.css";
import bannerImg from "../../assets/bannerImage.jpg";
import guideImg from "../../assets/possibilities.jpg";

const Advising = () => {
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="advising-container">
      <Navbar />

      <section
        className="advising-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="advising-overlay">
          <h1>Comprehensive Admission Guidance</h1>
          <p>
            Associate with an expert counselor to get admission into the
            university of your dreams.
          </p>
          <button className="advising-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </section>

      <section className="advising-content">
        <div className="intro">
          <h2>Admission Guidance</h2>
          <h3>Take Those First Steps to Your Future Doubt Free</h3>
          <p>
            At Edmium, we give wings to your thoughts. Whether you are applying
            to the top schools or a first-time applicant, we are here to guide
            you through every step of the admission process. Our expert
            counselors simplify your journey and maximize your chances of
            success.
          </p>
        </div>

        <div className="advising-section">
          <img src={guideImg} alt="Right Fit" />
          <div className="text">
            <h3>The Right Fit</h3>
            <h2>Making the Right List of Universities</h2>
            <p>
              We understand your preferences and create the perfect university
              list using advanced search algorithms, academic evaluation, and
              financial background assessment.
            </p>
            <button className="find-btn">Find Out More</button>
          </div>
        </div>

        <div className="advising-section reverse">
          <img src={guideImg} alt="Essay Writing" />
          <div className="text">
            <h3>Your Perspective</h3>
            <h2>Pen Down a Compelling Essay</h2>
            <p>
              We help you bring your story to life — crafting a powerful essay
              that reflects your experiences and makes your application shine.
            </p>
            <button className="find-btn">Find Out More</button>
          </div>
        </div>

        <div className="advising-section">
          <img src={guideImg} alt="Application Process" />
          <div className="text">
            <h3>Your Roadmap to Success</h3>
            <h2>Submit a Flawless Application</h2>
            <p>
              We fine-tune every detail of your application, ensuring perfection
              before submission with feedback and multiple expert reviews.
            </p>
            <button className="find-btn">Find Out More</button>
          </div>
        </div>

        <div className="advising-section reverse">
          <img src={guideImg} alt="Financial Aid" />
          <div className="text">
            <h3>Your Money</h3>
            <h2>A Befitting Financial Aid</h2>
            <p>
              We evaluate your financial situation and help you explore
              available aid options to ensure clarity on costs and
              opportunities.
            </p>
            <button className="find-btn">Find Out More</button>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="form-section">
          <HeroForm closeForm={() => setShowForm(false)}/>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Advising;
