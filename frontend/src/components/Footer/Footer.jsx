import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <img
            src="https://ik.imagekit.io/izqq5ffwt/ChatGPT%20Image%20Nov%204,%202025,%2003_31_41%20PM.png"
            alt="Logo"
            className="footer-logo"
          />
          <p className="footer-company">Sindwan Consultancy</p>
          <p>
            Flat No:2, Siripuram Towers,
            <br /> Siripuram, Visakhapatnam,
            <br /> Andhra Pradesh – 530003
          </p>
          <div className="footer-social">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedinIn className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <Link to="/advising"><li>Advising</li></Link>
            <li>Education Loan</li>
            <Link to="/sop-services"><li>SOP services</li></Link>
            <li>Visa Guidance</li>
            <Link to="/roadmap"><li>Roadmap to Study Abroad & Finance Guide</li></Link>
            <li>Country Guide</li>
          </ul>
        </div>

        {/* Universities Section */}
        <div className="footer-section">
          <h3>Universities</h3>
          <ul>
            <li>
              <Link to="/usa">USA</Link>
            </li>
            <li>
              <Link to="/australia">Australia</Link>
            </li>
            <li>
              <Link to="/canada">Canada</Link>
            </li>
            <li>
              <Link to="/uk">UK</Link>
            </li>
            <li>
              <Link to="/germany">Germany</Link>
            </li>
            <li>
              <Link to="/new-zealand">New Zealand</Link>
            </li>
          </ul>
        </div>

        {/* Quicklinks Section */}
        <div className="footer-section">
          <h3>Quicklinks</h3>
          <ul>
            <li>
              <Link to="/how">How it Works</Link>
            </li>
            <Link to="/about"><li>About Us</li></Link>
            <li>Blog</li>
            <Link to="/advising"><li>Advising</li></Link>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      {/* Branches Section */}
      

      {/* Contact Section */}
      <div className="footer-contact">
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p>Siripuram, Visakhapatnam</p>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <p>+91 987654321</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>info@sindwanconsultancy.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Sindwan Consultancy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
