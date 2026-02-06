"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const hireLinks = [
  { name: "Fiverr", url: "https://www.fiverr.com/s/XLAwzQD" },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01d311f220d3e561f1?mp_source=share",
  },
];

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Testimonials", href: "#testimonials", id: "testimonials" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHireDropdownOpen, setIsHireDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsHireDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 150;
      let current = "home";

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          current = navItems[i].id;
          break;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
            >
              Danish Karim
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-primary-600 font-semibold"
                      : "text-gray-700 hover:text-primary-600"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="ml-4 relative" ref={dropdownRef}>
              <button
                onClick={() => setIsHireDropdownOpen(!isHireDropdownOpen)}
                className="flex items-center gap-1 px-5 py-2 bg-primary-600 text-white rounded-lg font-semibold text-sm hover:bg-primary-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Hire Me
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isHireDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isHireDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 py-1 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  {hireLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsHireDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-primary-600 font-semibold bg-primary-50 rounded-lg"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 pt-3 space-y-2">
              {hireLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg font-semibold text-center transition-colors duration-200 hover:opacity-90"
                  style={{
                    backgroundColor:
                      link.name === "Fiverr" ? "#1dbf73" : "#14a800",
                    color: "white",
                  }}
                >
                  Hire on {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
