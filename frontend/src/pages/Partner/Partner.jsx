import React from "react";
import "./Partner.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import banner from "../../assets/corporateBanner.png"

const Partner = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className="partner-banner">
        <div className="partner-banner-overlay">
          <h1>Become Our Partner</h1>
          <p>
            Collaborate with Edmium to help students reach their dream
            universities while earning great rewards.
          </p>
          <button
            onClick={() =>
              window.open("https://wa.me/919876543210", "_blank")
            }
          >
            Partner With Us
          </button>
        </div>
      </section>

      {/* Partner Content Section */}
      <section className="partner-section">
        <div className="partner-card">
          <img src={banner} alt="Good Pay Scale" />
          <div className="partner-text">
            <h3>GOOD PAY-SCALE</h3>
            <p>
              Earn a generous payout with each successful application of the
              student. Our partner counsellors have transparency in terms of
              payouts for every application. The payments are very fast and
              totally transparent.
            </p>
            <button>COMMUNICATE NOW</button>
          </div>
        </div>

        <div className="partner-card reverse">
          <img src="/images/processing.jpg" alt="Fastest Processing" />
          <div className="partner-text">
            <h3>FASTEST PROCESSING PROCEDURES</h3>
            <p>
              Students are contacted within a few hours after form submission.
              Our dedicated admission team processes the applications
              immediately to save time for both counsellors and students.
            </p>
          </div>
        </div>

        <div className="partner-card">
          <img src="/images/leads.jpg" alt="Maximize Leads" />
          <div className="partner-text">
            <h3>MAXIMIZE YOUR LEADS</h3>
            <p>
              Generate leads and connect with eligible candidates without any
              hassle. Our partner counsellors can help students find their
              perfect course based on academic background and English
              proficiency.
            </p>
          </div>
        </div>

        <div className="partner-card reverse">
          <img src="/images/scholarship.jpg" alt="Scholarship Info" />
          <div className="partner-text">
            <h3>SCHOLARSHIP INFORMATION</h3>
            <p>
              Help deserving students achieve their dreams by providing complete
              scholarship information. We make it easy for counsellors to guide
              students toward scholarships and financial aid opportunities.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Partner;
