import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import bannerImg from "../../assets/bannerImage.jpg";
import HeroForm from "../../components/HeroForm/HeroForm";
import Footer from "../../components/Footer/Footer";
import "./SOPServices.css";

const SOPServices = () => {
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 200);
  };
  return (
    <div className="sop-page">
      <Navbar />

      <section
        className="advising-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="advising-overlay">
          <h1>SOP SERVICES</h1>
          <button className="advising-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </section>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md"
            onClick={() => setShowForm(false)}
          />
          <div className="relative z-10 w-full max-w-lg px-4">
            <HeroForm closeForm={() => setShowForm(false)} />
          </div>
        </div>
      )}

      <div className="sop-container">
        <section className="sop-section">
          <h2>What is an SOP?</h2>
          <p>
            SOP stands for <strong>Statement of Purpose</strong> and is an
            integral part of the application process apart from your academic
            qualifications and English scores. It is vital for applications to
            universities abroad—especially in the{" "}
            <strong>U.S.A, U.K, Australia, Canada, New Zealand</strong> and{" "}
            <strong>Singapore</strong>.
          </p>
        </section>

        <section className="sop-section">
          <h2>What is the Purpose of an SOP?</h2>
          <p>
            As the name suggests, the SOP states your purpose for choosing a
            particular <strong>course, university,</strong> and{" "}
            <strong>country</strong>. It expresses your academic background,
            career goals, and expectations from the program.
          </p>
          <p>
            While a college essay focuses broadly on your personal journey, an
            SOP specifically highlights your academic, professional, and career
            aspirations.
          </p>
        </section>

        <section className="sop-section">
          <h2>Why choose Edmium SOP Services?</h2>
          <p>
            At Edmium, we help students craft{" "}
            <strong>personalized and impactful SOPs</strong> that strengthen
            their university applications. With our deep understanding of
            admission requirements, we ensure your SOP reflects your goals,
            strengths, and academic aspirations clearly and persuasively.
          </p>
        </section>

        <section className="sop-section">
          <h2>Areas of Focus while Preparing an SOP</h2>
          <ul>
            <li>Avoid grammatical and spelling errors.</li>
            <li>Proofread multiple times for clarity and correctness.</li>
            <li>Keep your content concise and relevant.</li>
            <li>Be honest and authentic about your goals.</li>
            <li>
              Clearly state how your chosen course aligns with your career path.
            </li>
            <li>
              Highlight academic and professional achievements meaningfully.
            </li>
            <li>
              Ensure your SOP reflects a genuine passion for growth and
              learning.
            </li>
          </ul>
        </section>

        <section className="sop-section">
          <p>
            A well-written SOP can significantly enhance your admission chances
            even without perfect grades. Conversely, a poorly written SOP can
            reduce your chances despite strong academic performance.
          </p>
          <p>
            Always dedicate ample time to write it thoughtfully, avoid
            plagiarism, and ensure originality—universities use plagiarism
            checkers to validate authenticity.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default SOPServices;
