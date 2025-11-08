import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

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

  const handleNavClick = (path) => {
    navigate(path);
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
        <div onClick={() => handleNavClick("/")} className="cursor-pointer flex items-center space-x-3">
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
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex space-x-8 font-medium items-center transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <button onClick={() => handleNavClick("/")} className="hover:text-blue-600">
            Home
          </button>

          <div className="relative">
            <button onClick={() => toggleDropdown("courses")} className="flex items-center hover:text-blue-600">
              Courses <FaChevronDown className="ml-1 text-sm" />
            </button>
            {activeDropdown === "courses" && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-40 py-2 text-gray-700">
                <button onClick={() => handleNavClick("/bachelors")} className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                  Bachelors
                </button>
                <button onClick={() => handleNavClick("/masters")} className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                  Masters
                </button>
                <button onClick={() => handleNavClick("/phd")} className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                  PhDs
                </button>
              </div>
            )}
          </div>

          <button onClick={() => handleNavClick("/advising")} className="hover:text-blue-600">
            Advising
          </button>

          <div className="relative">
            <button onClick={() => toggleDropdown("universities")} className="flex items-center hover:text-blue-600">
              Universities <FaChevronDown className="ml-1 text-sm" />
            </button>
            {activeDropdown === "universities" && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-56 py-2 text-gray-700">
                {["USA", "Australia", "Canada", "Germany", "UK", "New Zealand", "France", "Sweden", "Ireland"].map(
                  (country) => (
                    <button
                      key={country}
                      onClick={() =>
                        handleNavClick(`/${country.toLowerCase().replace(" ", "-")}`)
                      }
                      className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {country}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => toggleDropdown("work")} className="flex items-center hover:text-blue-600">
              Work With Us <FaChevronDown className="ml-1 text-sm" />
            </button>
            {activeDropdown === "work" && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-48 py-2 text-gray-700">
                <button onClick={() => handleNavClick("/partner")} className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                  Become A Partner
                </button>
                <button onClick={() => handleNavClick("/mentor")} className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                  Become A Mentor
                </button>
                <button onClick={() => handleNavClick("/counsellor")} className="block w-full text-left px-4 py-2 hover:bg-blue-50 hover:text-blue-600">
                  Become A Counsellor
                </button>
              </div>
            )}
          </div>

          <button onClick={() => handleNavClick("/how")} className="hover:text-blue-600">
            How It Works
          </button>
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
    </nav>
  );
};

export default Navbar;
