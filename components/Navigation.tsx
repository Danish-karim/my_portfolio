"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { SiFi, SiUpwork } from "@icons-pack/react-simple-icons";
import { useTheme } from "@/components/ThemeProvider";

const hireLinks = [
  {
    name: "Fiverr",
    url: "https://www.fiverr.com/s/XLAwzQD",
    Icon: SiFi,
    color: "#1DBF73",
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01d311f220d3e561f1?mp_source=share",
    Icon: SiUpwork,
    color: "#14a800",
  },
];

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Intro Video", href: "#intro-video", id: "intro-video" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Testimonials", href: "#testimonials", id: "testimonials" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
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
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent dark:bg-transparent"
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
          <div className="hidden md:flex md:items-center md:gap-5 md:min-w-0">
            <div className="ml-8 flex items-center gap-5 flex-shrink-0 min-w-0">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-2.5 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 rounded-md hover:bg-gray-100 dark:hover:bg-slate-800/50 ${
                    activeSection === item.id
                      ? "text-primary-600 dark:text-primary-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Theme toggle - pill style for clear placement */}
              <div className="flex items-center rounded-full border border-gray-200 dark:border-slate-600 bg-gray-50/80 dark:bg-slate-800/80 p-0.5">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-slate-700 shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                  aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                  title={theme === "light" ? "Dark mode" : "Light mode"}
                >
                  {theme === "light" ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                </button>
              </div>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsHireDropdownOpen(!isHireDropdownOpen)}
                  className="flex items-center gap-1.5 px-5 py-2 bg-primary-600 text-white rounded-lg font-semibold text-sm hover:bg-primary-700 transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                >
                  Hire Me
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isHireDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isHireDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 py-1 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 z-50">
                    {hireLinks.map((link) => {
                      const Icon = link.Icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsHireDropdownOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          <Icon size={18} color={link.color} />
                          {link.name}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile: menu button only (theme toggle moved inside menu) */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
          <div className="px-4 py-4 space-y-0.5">
            {/* Theme toggle row - clear placement at top of menu */}
            <div className="flex items-center justify-between py-3 mb-2 border-b border-gray-200 dark:border-slate-700">
              <span className="text-sm font-medium text-gray-600 dark:text-slate-400">Appearance</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              >
                {theme === "light" ? (
                  <>
                    <Moon className="w-4 h-4" />
                    Dark
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4" />
                    Light
                  </>
                )}
              </button>
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium whitespace-nowrap rounded-lg transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-primary-600 dark:text-primary-400 font-semibold bg-primary-50 dark:bg-slate-800"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-4 mt-4 border-t border-gray-200 dark:border-slate-700 space-y-2">
              {hireLinks.map((link) => {
                const Icon = link.Icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-colors duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: link.color,
                      color: "white",
                    }}
                  >
                    <Icon size={20} color="white" />
                    Hire on {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
