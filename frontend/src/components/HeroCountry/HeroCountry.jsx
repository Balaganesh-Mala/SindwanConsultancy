import React from "react";
import "./HeroCountry.css";



const HeroCountry = ({ countryName, bannerImage }) => {
  return (
    <section
      className="hero-country"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>
            Study in <span>{countryName}</span>
          </h1>
          <p>Your gateway to world-class education and global opportunities.</p>
        </div>

        <form className="hero-form">
          <h3>Fill Details for Free Counselling</h3>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Mobile" required />
          <select required>
            <option value="">Select Field of Study</option>
            <option>Engineering</option>
            <option>Business</option>
            <option>Computer Science</option>
            <option>Medical</option>
          </select>
          <select required>
            <option value="">Select Nearest Edmium Office</option>
            <option>Hyderabad</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
            <option>Delhi</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default HeroCountry;
