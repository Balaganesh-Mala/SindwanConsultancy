import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroCountry from "../../components/HeroCountry/HeroCountry";
import bannerImage from "../../assets/bannerImage.jpg"
import "./UniversityIreland.css";

const UniversityIreland = () => {
  return (
    <div className="ireland-container">
      <Navbar />

      <HeroCountry
        countryName="Ireland"
        bannerImage={bannerImage}
      />

      <section className="ireland-content">
        <div className="content-wrapper">
          <h2>Why Study in <span>Ireland</span></h2>
          <p>
            One in ten full-time students in Ireland is an international student, 
            which explains Irish institutions’ excellence. The Irish government 
            monitors the quality of education via the National Framework of 
            Qualifications (NFF). This means irrespective of the university you enroll in, 
            the quality of education remains uniform.
          </p>

          <h3>Facts about Ireland</h3>
          <p>
            Ireland ranks among the top 10 countries in Global Peace Indices, 
            making it one of the safest nations in the world. Irish people are 
            known for being warm, friendly, and welcoming. Festivals like 
            St. Patrick’s Day, Galway Oyster Festival, and Fleadh Traditional 
            Music Festival add vibrant culture to student life.
          </p>

          <h3>Intakes</h3>
          <ul>
            <li>Autumn/Semester 1: Starts early September – December</li>
            <li>Spring/Semester 2: Starts late January – May</li>
          </ul>

          <h3>Top Universities in Ireland</h3>
          <p>
            Ireland offers a range of world-class universities, combining 
            historical legacy with modern innovation.
          </p>
          <ul className="uni-list">
            <li>Trinity College Dublin</li>
            <li>University College Dublin (UCD)</li>
            <li>University College Cork (UCC)</li>
            <li>University of Galway</li>
            <li>Dublin City University (DCU)</li>
            <li>University of Limerick (UL)</li>
            <li>Technological University Dublin (TU Dublin)</li>
          </ul>

          <h3>Affordable Options</h3>
          <ul>
            <li>Dublin Business School</li>
            <li>University of Limerick</li>
            <li>Griffith College Dublin</li>
            <li>National University of Ireland</li>
            <li>Trinity College Dublin</li>
          </ul>

          <h3>Popular Programs</h3>
          <ul>
            <li>Computer Science</li>
            <li>Engineering</li>
            <li>Business & Management</li>
            <li>Arts & Humanities</li>
            <li>Health Sciences</li>
          </ul>

          <h3>Why Choose Ireland?</h3>
          <ul>
            <li>High-Quality Education</li>
            <li>Career Opportunities</li>
            <li>Post-Study Work Visa</li>
            <li>Safe and Welcoming Country</li>
            <li>Rich Cultural Heritage</li>
          </ul>

          <h3>Top Employers in Ireland</h3>
          <p>
            Ireland hosts top global companies like Apple, Google, Facebook, 
            Microsoft, and Ryanair — providing world-class career opportunities 
            for graduates.
          </p>

          <ul className="job-sites">
            <li>IrishJobs.ie</li>
            <li>Jobs.ie</li>
            <li>Monster.ie</li>
            <li>RecruitIreland.com</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UniversityIreland;
