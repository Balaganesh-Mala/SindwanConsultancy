import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.1;
      setScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    // Mobile toggle only
    if (window.innerWidth < 768) {
      setActiveDropdown(activeDropdown === menu ? null : menu);
    }
  };

  const closeMenu = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  const isActive = (path) =>
    currentPath === path
      ? "text-blue-700 border-b-2 border-blue-600 pb-1"
      : "hover:text-blue-600";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
          <img
            src="https://ik.imagekit.io/izqq5ffwt/ChatGPT%20Image%20Nov%204,%202025,%2003_31_41%20PM.png"
            alt="website logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <h1
            className={`text-xl font-bold ${
              scrolled ? "text-blue-700" : "text-white"
            }`}
          >
            Sindwan Consultancy
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-8 font-medium items-center ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <Link
            to="/"
            className={`transition-all duration-200 ${isActive("/")}`}
            onClick={closeMenu}
          >
            Home
          </Link>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("courses")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("courses")}
              className={`flex items-center transition-all duration-200 ${
                activeDropdown === "courses"
                  ? "text-blue-700 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600"
              }`}
            >
              Courses <FaChevronDown className="ml-1 text-sm" />
            </button>

            {activeDropdown === "courses" && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-44 py-2 text-gray-700 border border-gray-100">
                {["bachelors", "masters", "phd"].map((item) => (
                  <Link
                    key={item}
                    to={`/${item}`}
                    onClick={closeMenu}
                    className="block px-4 py-2 hover:bg-blue-100 hover:text-blue-700 transition-all"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/advising"
            className={`transition-all duration-200 ${isActive("/advising")}`}
            onClick={closeMenu}
          >
            Advising
          </Link>

          {/* Universities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("universities")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("universities")}
              className={`flex items-center transition-all duration-200 ${
                activeDropdown === "universities"
                  ? "text-blue-700 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600"
              }`}
            >
              Universities <FaChevronDown className="ml-1 text-sm" />
            </button>

            {activeDropdown === "universities" && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-56 py-2 text-gray-700 border border-gray-100">
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
                    to={`/${country.toLowerCase().replace(/ /g, "-")}`}
                    onClick={closeMenu}
                    className="block px-4 py-2 hover:bg-blue-100 hover:text-blue-700 transition-all"
                  >
                    {country}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Work With Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("work")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => toggleDropdown("work")}
              className={`flex items-center transition-all duration-200 ${
                activeDropdown === "work"
                  ? "text-blue-700 border-b-2 border-blue-600 pb-1"
                  : "hover:text-blue-600"
              }`}
            >
              Work With Us <FaChevronDown className="ml-1 text-sm" />
            </button>

            {activeDropdown === "work" && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-56 py-2 text-gray-700 border border-gray-100">
                {["partner", "mentor", "counsellor"].map((link) => (
                  <Link
                    key={link}
                    to={`/${link}`}
                    onClick={closeMenu}
                    className="block px-4 py-2 hover:bg-blue-100 hover:text-blue-700 transition-all"
                  >
                    {`Become A ${
                      link.charAt(0).toUpperCase() + link.slice(1)
                    }`}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/how"
            className={`transition-all duration-200 ${isActive("/how")}`}
            onClick={closeMenu}
          >
            How It Works
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl ${
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

          <Link
            to="/"
            onClick={closeMenu}
            className={`transition-all duration-200 ${isActive("/")}`}
          >
            Home
          </Link>

          {/* Courses Mobile */}
          <div>
            <button
              onClick={() => toggleDropdown("courses")}
              className="w-full flex justify-between items-center font-semibold hover:text-blue-600"
            >
              Courses <FaChevronDown />
            </button>

            {activeDropdown === "courses" && (
              <ul className="pl-4 space-y-1 mt-2">
                {["bachelors", "masters", "phd"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item}`}
                      onClick={closeMenu}
                      className="hover:text-blue-600"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to="/advising"
            onClick={closeMenu}
            className={`transition-all duration-200 ${isActive("/advising")}`}
          >
            Advising
          </Link>

          {/* Universities Mobile */}
          <div>
            <button
              onClick={() => toggleDropdown("universities")}
              className="w-full flex justify-between items-center font-semibold hover:text-blue-600"
            >
              Universities <FaChevronDown />
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
                      to={`/${country.toLowerCase().replace(/ /g, "-")}`}
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

          {/* Work With Us Mobile */}
          <div>
            <button
              onClick={() => toggleDropdown("work")}
              className="w-full flex justify-between items-center font-semibold hover:text-blue-600"
            >
              Work With Us <FaChevronDown />
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

          <Link
            to="/how"
            onClick={closeMenu}
            className={`transition-all duration-200 ${isActive("/how")}`}
          >
            How It Works
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
