import React from "react";
import "./Mentor.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Mentor = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className="mentor-banner">
        <div className="mentor-banner-overlay">
          <h1>Become a Mentor</h1>
          <p>
            Join our network of mentors helping students shape their global
            education journey. Share your knowledge, earn rewards, and inspire
            futures.
          </p>
          <button
            onClick={() =>
              window.open("https://wa.me/919876543210", "_blank")
            }
          >
            Join as Mentor
          </button>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="mentor-section">
        <h2 className="mentor-heading">WHY BECOME A MENTOR?</h2>

        <div className="mentor-card">
          <img src="/images/mentor-pay.jpg" alt="Industry Compensation" />
          <div className="mentor-text">
            <h3>GENEROUS INDUSTRY COMPENSATIONS</h3>
            <p>
              You not only gain an education goodwill but also earn great
              incentives for your effort per student. It is a good income
              opportunity that doesn’t interfere with your existing profession.
            </p>
          </div>
        </div>

        <div className="mentor-card reverse">
          <img src="/images/mentor-training.jpg" alt="Training and Certification" />
          <div className="mentor-text">
            <h3>TRAINING AND CERTIFICATION</h3>
            <p>
              Complete a simple online training and earn our certification to
              guide students better. Become a Certified Mentor and gain global
              recognition for your contribution.
            </p>
          </div>
        </div>

        <div className="mentor-card">
          <img src="/images/mentor-online.jpg" alt="Making Money Online" />
          <div className="mentor-text">
            <h3>MAKING EASY MONEY ONLINE</h3>
            <p>
              Generate income and make a difference in students' lives from the
              comfort of your home. Work flexibly while mentoring aspiring
              international students.
            </p>
          </div>
        </div>

        <div className="mentor-card reverse">
          <img src="/images/mentor-impact.jpg" alt="Impact Others Lives" />
          <div className="mentor-text">
            <h3>IMPACT OTHERS’ LIVES</h3>
            <p>
              Help others achieve their dreams by sharing your experience and
              knowledge. Create a strong difference in their lives and nurture
              them to be future leaders.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Mentor;
