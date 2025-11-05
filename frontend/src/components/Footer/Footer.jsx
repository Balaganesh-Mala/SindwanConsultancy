import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <img
            src="https://ik.imagekit.io/izqq5ffwt/ChatGPT%20Image%20Nov%204,%202025,%2003_31_41%20PM.png"
            alt="Logo"
            className="footer-logo"
          />
          <p className="footer-company">Edmium</p>
          <p>Flat No:2, Siripuram Towers,<br /> Siripuram, Visakhapatnam,<br /> Andhra Pradesh – 530003</p>
          <div className="footer-social">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedinIn className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Advising</li>
            <li>Education Loan</li>
            <li>SOP Services</li>
            <li>Visa Guidance</li>
            <li>Finance Guide</li>
            <li>Country Guide</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Universities</h3>
          <ul>
            <li>USA</li>
            <li>Australia</li>
            <li>Canada</li>
            <li>UK</li>
            <li>Germany</li>
            <li>New Zealand</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quicklinks</h3>
          <ul>
            <li>How it Works</li>
            <li>About Us</li>
            <li>Advising</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      <div className="footer-branches">
        <h3>Our Branches</h3>
        <div className="branches-grid">
          <div><strong>Whitefield, Bangalore</strong><br />411Floor, Brigade IRV Center<br />Whitefield Road, Bangalore 560066</div>
          <div><strong>Vijayawada</strong><br />Flat No:301, Hafeez Plaza<br />Sailara Hospital Road, Vijayawada 520010</div>
          <div><strong>Guntur</strong><br />3rd Floor, NDR Complex<br />Lakshmipuram Main Road, Guntur 522007</div>
          <div><strong>Madhapur, Hyderabad</strong><br />Tulip Gardens, Flat No G5, Vittal Rao Nagar, Hyderabad 500081</div>
        </div>
      </div>

      <div className="footer-contact">
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <p>Siripuram, Visakhapatnam</p>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <p>+91 9392932943</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>info@edmium.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Edmium. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
