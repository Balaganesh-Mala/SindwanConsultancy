import { motion } from "framer-motion";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCity,
  FaBook,
  FaGlobe,
  FaShieldAlt,
  FaTimes,
} from "react-icons/fa";
import "./HeroForm.css"

const HeroForm = ({ closeForm }) => {
  return (
    <>
      <div className="form-overlay" onClick={closeForm}></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="form-container"
      >
        <button onClick={closeForm} className="close-btn">
          <FaTimes />
        </button>

        <h2 className="form-title">Get Expert Advice at Zero Cost - Book Now!</h2>

        <form className="form-grid">
          <div className="form-field">
            <FaUser className="form-icon" />
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="form-field">
            <FaPhone className="form-icon" />
            <input type="tel" placeholder="Mobile Number" />
          </div>
          <div className="form-field">
            <FaEnvelope className="form-icon" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-field">
            <FaCity className="form-icon" />
            <input type="text" placeholder="City" />
          </div>
          <div className="form-field">
            <FaBook className="form-icon" />
            <select>
              <option>Select Field of Study</option>
              <option>Engineering</option>
              <option>Medical</option>
              <option>Business</option>
              <option>Arts</option>
            </select>
          </div>
          <div className="form-field">
            <FaGlobe className="form-icon" />
            <select>
              <option>Preferred Study Destination</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Germany</option>
            </select>
          </div>

          <button type="submit" className="blue-btn submit-btn">
            Submit
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default HeroForm;
