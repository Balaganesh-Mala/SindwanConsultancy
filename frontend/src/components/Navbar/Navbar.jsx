import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.1;
      setScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div >
          <a href="/" className="flex items-center space-x-3"><img
            src="https://ik.imagekit.io/izqq5ffwt/ChatGPT%20Image%20Nov%204,%202025,%2003_31_41%20PM.png"
            alt="website logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <h1
            className={`text-2xl font-bold transition-colors duration-300 ${
              scrolled ? "text-blue-700" : "text-white"
            }`}
          >
            Sindwan Consultancy
          </h1></a>
        </div>

        <div
          className={`hidden md:flex space-x-8 font-medium items-center transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <a href="/" className="hover:text-blue-600 transition-colors">
            Home
          </a>

          <div className="relative group">
            <button
              onClick={() => toggleDropdown("courses")}
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              Courses <FaChevronDown className="ml-1 text-sm" />
            </button>
            {activeDropdown === "courses" && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-40 py-2 text-gray-700">
                <a
                  href="#bachelors"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Bachelors
                </a>
                <a
                  href="#masters"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Masters
                </a>
                <a
                  href="#phd"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  PhDs
                </a>
              </div>
            )}
          </div>

          <a href="#advising" className="hover:text-blue-600 transition-colors">
            Advising
          </a>

          <div className="relative group">
            <button
              onClick={() => toggleDropdown("universities")}
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              Universities <FaChevronDown className="ml-1 text-sm" />
            </button>
            {activeDropdown === "universities" && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-56 py-2 text-gray-700">
                {[
                  "USA",
                  "Australia",
                  "Canada",
                  "Germany",
                  "UK",
                  "New Zealand",
                  "France",
                  "Sweden",
                  "Ireland",
                ].map((country) => (
                  <a
                    key={country}
                    href={`/${country.toLowerCase().replace(" ", "-")}`}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {country}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              onClick={() => toggleDropdown("work")}
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              Work With Us <FaChevronDown className="ml-1 text-sm" />
            </button>
            {activeDropdown === "work" && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-48 py-2 text-gray-700">
                <a
                  href="/partner"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Become A Partner
                </a>
                <a
                  href="/mentor"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Become A Mentor
                </a>
                <a
                  href="/counsellor"
                  className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                >
                  Become A Counsellor
                </a>
              </div>
            )}
          </div>

          <a href="#how" className="hover:text-blue-600 transition-colors">
            How It Works
          </a>
        </div>

        <button
          className={`md:hidden text-2xl transition-colors duration-300 ${
            scrolled ? "text-blue-700" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white flex flex-col space-y-4 px-6 py-4 font-medium text-gray-800 shadow-lg">
          <a href="#hero" onClick={() => setOpen(false)} className="hover:text-blue-600">
            Home
          </a>

          <div>
            <button
              onClick={() => toggleDropdown("courses")}
              className="w-full flex justify-between items-center font-semibold hover:text-blue-600"
            >
              Courses <FaChevronDown className="ml-2" />
            </button>
            {activeDropdown === "courses" && (
              <ul className="pl-4 space-y-1 mt-2">
                <li>
                  <a href="#bachelors" className="hover:text-blue-600">
                    Bachelors
                  </a>
                </li>
                <li>
                  <a href="#masters" className="hover:text-blue-600">
                    Masters
                  </a>
                </li>
                <li>
                  <a href="#phd" className="hover:text-blue-600">
                    PhDs
                  </a>
                </li>
              </ul>
            )}
          </div>

          <a href="#advising" onClick={() => setOpen(false)} className="hover:text-blue-600">
            Advising
          </a>

          <div>
            <button
              onClick={() => toggleDropdown("universities")}
              className="w-full flex justify-between items-center font-semibold hover:text-blue-600"
            >
              Universities <FaChevronDown className="ml-2" />
            </button>
            {activeDropdown === "universities" && (
              <ul className="pl-4 space-y-1 mt-2">
                {[
                  "USA",
                  "Australia",
                  "Canada",
                  "Germany",
                  "UK",
                  "New Zealand",
                  "France",
                  "Sweden",
                  "Ireland",
                ].map((country) => (
                  <li key={country}>
                    <a
                      href={`/${country.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-blue-600"
                    >
                      {country}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown("work")}
              className="w-full flex justify-between items-center font-semibold hover:text-blue-600"
            >
              Work With Us <FaChevronDown className="ml-2" />
            </button>
            {activeDropdown === "work" && (
              <ul className="pl-4 space-y-1 mt-2">
                <li>
                  <a href="/partner" className="hover:text-blue-600">
                    Become A Partner
                  </a>
                </li>
                <li>
                  <a href="/mentor" className="hover:text-blue-600">
                    Become A Mentor
                  </a>
                </li>
                <li>
                  <a href="/counsellor" className="hover:text-blue-600">
                    Become A Counsellor
                  </a>
                </li>
              </ul>
            )}
          </div>

          <a href="#how" onClick={() => setOpen(false)} className="hover:text-blue-600">
            How It Works
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;