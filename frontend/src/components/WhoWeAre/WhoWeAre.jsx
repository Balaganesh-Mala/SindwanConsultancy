import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    // if same dropdown clicked again, close it
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  const closeMenu = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div>
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <img
              src="https://ik.imagekit.io/izqq5ffwt/ChatGPT%20Image%20Nov%204,%202025,%2003_31_41%20PM.png"
              alt="website logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <h1
              className={`text-1xl font-bold transition-colors duration-300 ${
                scrolled ? "text-blue-700" : "text-white"
              }`}
            >
              Sindwan Consultancy
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-8 font-medium items-center transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <Link to="/" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>
            Home
          </Link>

          {/* Courses Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("courses")}
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              Courses <FaChevronDown className="ml-1 text-sm" />
            </button>
            {activeDropdown === "courses" && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-40 py-2 text-gray-700">
                <Link to="/bachelors" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600" onClick={closeMenu}>
                  Bachelors
                </Link>
                <Link to="/masters" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600" onClick={closeMenu}>
                  Masters
                </Link>
                <Link to="/phd" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600" onClick={closeMenu}>
                  PhDs
                </Link>
              </div>
            )}
          </div>

          <Link to="/advising" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>
            Advising
          </Link>

          {/* Universities Dropdown */}
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
                  <Link
                    key={country}
                    to={`/${country.toLowerCase().replace(" ", "-")}`}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                    onClick={closeMenu}
                  >
                    {country}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Work With Us Dropdown */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown("work")}
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              Work With Us <FaChevronDown className="ml-1 text-sm" />
            </button>
            {activeDropdown === "work" && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-48 py-2 text-gray-700">
                <Link to="/partner" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600" onClick={closeMenu}>
                  Become A Partner
                </Link>
                <Link to="/mentor" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600" onClick={closeMenu}>
                  Become A Mentor
                </Link>
                <Link to="/counsellor" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600" onClick={closeMenu}>
                  Become A Counsellor
                </Link>
              </div>
            )}
          </div>

          <Link to="/how" className="hover:text-blue-600 transition-colors" onClick={closeMenu}>
            How It Works
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl transition-colors duration-300 ${
            scrolled ? "text-blue-700" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white flex flex-col space-y-4 px-6 py-4 font-medium text-gray-800 shadow-lg">
          <Link to="/" onClick={closeMenu} className="hover:text-blue-600">
            Home
          </Link>

          {/* Courses Dropdown */}
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
                  <Link to="/bachelors" onClick={closeMenu} className="hover:text-blue-600">
                    Bachelors
                  </Link>
                </li>
                <li>
                  <Link to="/masters" onClick={closeMenu} className="hover:text-blue-600">
                    Masters
                  </Link>
                </li>
                <li>
                  <Link to="/phd" onClick={closeMenu} className="hover:text-blue-600">
                    PhDs
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/advising" onClick={closeMenu} className="hover:text-blue-600">
            Advising
          </Link>

          {/* Universities Dropdown */}
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
                    <Link
                      to={`/${country.toLowerCase().replace(" ", "-")}`}
                      onClick={closeMenu}
                      className="hover:text-blue-600"
                    >
                      {country}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Work With Us Dropdown */}
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
                  <Link to="/partner" onClick={closeMenu} className="hover:text-blue-600">
                    Become A Partner
                  </Link>
                </li>
                <li>
                  <Link to="/mentor" onClick={closeMenu} className="hover:text-blue-600">
                    Become A Mentor
                  </Link>
                </li>
                <li>
                  <Link to="/counsellor" onClick={closeMenu} className="hover:text-blue-600">
                    Become A Counsellor
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <Link to="/how" onClick={closeMenu} className="hover:text-blue-600">
            How It Works
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
