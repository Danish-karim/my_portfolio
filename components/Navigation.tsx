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
  { name: "Resume", href: "#resume", id: "resume" },
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
  const dropdownRefDesktop = useRef<HTMLDivElement>(null);
  const dropdownRefMobile = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const outsideDesktop = !dropdownRefDesktop.current?.contains(target);
      const outsideMobile = !dropdownRefMobile.current?.contains(target);
      if (outsideDesktop && outsideMobile) setIsHireDropdownOpen(false);
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
          ? "bg-white/98 dark:bg-slate-900/98 backdrop-blur-md border-b border-gray-200/80 dark:border-slate-700/80 shadow-sm"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo only - clean left side */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent tracking-tight"
            >
              Danish Karim
            </a>
          </div>

          {/* Desktop: nav pill with links + theme at the end (one clear block) */}
          <div className="hidden lg:flex lg:items-center lg:min-w-0 lg:flex-1 lg:justify-center lg:max-w-4xl">
            <div className="flex items-center gap-0.5 rounded-xl bg-gray-100/90 dark:bg-slate-800/90 px-1.5 py-1 ring-1 ring-gray-200/60 dark:ring-slate-600/60">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-xs font-medium whitespace-nowrap rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-white dark:bg-slate-700 text-primary-600 dark:text-primary-400 font-semibold shadow-sm"
                      : "text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-slate-700/60"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              {/* Theme as last item in pill - same row, reads as "preference" */}
              <span className="w-px h-4 mx-0.5 bg-gray-300 dark:bg-slate-600 flex-shrink-0" aria-hidden />
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1"
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
          </div>

          {/* Right: Hire Me only - theme is with logo on left */}
          <div className="hidden lg:flex lg:items-center lg:flex-shrink-0">
            <div className="relative" ref={dropdownRefDesktop}>
              <button
                onClick={() => setIsHireDropdownOpen(!isHireDropdownOpen)}
                className="flex items-center gap-1.5 px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg font-semibold text-sm hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-200 shadow-sm whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              >
                Hire Me
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isHireDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isHireDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 py-1 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-600 z-50">
                  {hireLinks.map((link) => {
                    const Icon = link.Icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsHireDropdownOpen(false)}
                        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg mx-1 transition-colors"
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

          {/* Tablet: compact nav + theme. Mobile: Hire Me + menu */}
          <div className="flex lg:hidden items-center gap-2">
            <div className="hidden md:flex items-center gap-0.5 rounded-lg bg-gray-100 dark:bg-slate-800 px-1.5 py-1">
              <a href="#contact" className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-md">
                Contact
              </a>
              <a href="#resume" className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-md">
                Resume
              </a>
              <span className="w-px h-4 bg-gray-300 dark:bg-slate-600" aria-hidden />
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-md text-gray-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors"
                aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="relative" ref={dropdownRefMobile}>
                <button
                  onClick={() => setIsHireDropdownOpen(!isHireDropdownOpen)}
                  className="flex items-center gap-1 px-3 py-2 bg-primary-600 text-white rounded-lg font-semibold text-sm hover:bg-primary-700 whitespace-nowrap"
                >
                  Hire Me
                  <ChevronDown className={`w-4 h-4 ${isHireDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {isHireDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 py-1 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-600 z-50">
                    {hireLinks.map((link) => {
                      const Icon = link.Icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsHireDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-slate-700 rounded-lg mx-1"
                        >
                          <Icon size={16} color={link.color} />
                          {link.name}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
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

      {/* Mobile / Tablet Navigation drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
          <div className="px-4 py-4 space-y-0.5">
            {/* Theme toggle row - clear placement at top of menu */}
            <div className="flex items-center justify-between py-3 mb-2 border-b border-gray-200 dark:border-slate-700">
              <span className="text-sm font-medium text-gray-600 dark:text-slate-400">
                Appearance
              </span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-label={
                  theme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
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
