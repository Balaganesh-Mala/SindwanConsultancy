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

const Footer = () => {
  return (
    <footer className="bg-[#002E6E] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">

          {/* ABOUT SECTION */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://ik.imagekit.io/izqq5ffwt/ChatGPT%20Image%20Nov%204,%202025,%2003_31_41%20PM.png"
              alt="Sindwan Consultancy Logo"
              className="w-14 h-14 mb-3"
            />

            <p className="font-semibold text-xl mb-2">
              Sindwan Consultancy
            </p>

            <p className="text-sm opacity-90 leading-relaxed mb-4">
              Your trusted partner in overseas education, career guidance,
              university admissions & global consulting solutions.
            </p>

            <p className="text-sm leading-relaxed opacity-90">
              Flat No:2, Siripuram Towers, <br />
              Siripuram, Visakhapatnam, <br />
              Andhra Pradesh – 530003
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="bg-[#0054A8] p-2 rounded-full hover:bg-blue-600 transition cursor-pointer"
                  >
                    <Icon size={20} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/sop-services" className="hover:text-blue-300">
                  SOP / LOR Assistance
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="hover:text-blue-300">
                  Financial Planning Guide
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-blue-300">
                  Admissions Support
                </Link>
              </li>
              <li>
                <Link to="/counselling" className="hover:text-blue-300">
                  Career Counselling
                </Link>
              </li>
            </ul>
          </div>

          {/* UNIVERSITIES */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Top Destinations</h3>
            <ul className="space-y-2 text-sm opacity-90">
              {["USA", "Australia", "Canada", "UK", "Germany", "New Zealand"].map(
                (country) => (
                  <li key={country}>
                    <Link
                      to={`/${country.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-blue-300"
                    >
                      {country}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/how" className="hover:text-blue-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/advising" className="hover:text-blue-300">
                  Advising
                </Link>
              </li>
              <li className="hover:text-blue-300 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-blue-300 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-blue-300 cursor-pointer">FAQ</li>
            </ul>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          <div className="flex items-center gap-3 opacity-90">
            <FaMapMarkerAlt className="text-blue-300" />
            <p className="text-sm">Siripuram, Visakhapatnam, India</p>
          </div>

          <div className="flex items-center gap-3 opacity-90">
            <FaPhoneAlt className="text-blue-300" />
            <a href="tel:+91987654321" className="text-sm hover:text-blue-300">
              +91 987654321
            </a>
          </div>

          <div className="flex items-center gap-3 opacity-90">
            <FaEnvelope className="text-blue-300" />
            <a
              href="mailto:info@sindwanconsultancy.com"
              className="text-sm hover:text-blue-300"
            >
              info@sindwanconsultancy.com
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/20 mt-10 pt-4 text-center">
          <p className="text-xs opacity-80">
            © {new Date().getFullYear()} Sindwan Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
