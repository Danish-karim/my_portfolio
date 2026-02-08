"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl opacity-20 dark:opacity-10"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-300 dark:bg-primary-800 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary-400 dark:bg-primary-700 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1.5 shadow-xl overflow-hidden">
              <Image
                src="/images/profile/profile-pic%20(11).png"
                alt="Danish Karim"
                width={256}
                height={256}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight"
          >
            <span className="text-gray-800 dark:text-slate-100">
              I build{" "}
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent">
                scalable web apps
              </span>{" "}
              that help businesses improve efficiency and scale
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-slate-400 mb-1 font-medium"
          >
            Danish Karim · Senior Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            6+ years delivering secure, high-performance systems so your
            business can scale with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://www.fiverr.com/s/XLAwzQD"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Hire on Fiverr
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01d311f220d3e561f1?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#14a800] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:bg-[#108a00]"
            >
              Hire on Upwork
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-500 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-slate-700 transform hover:scale-105 transition-all duration-200"
            >
              Get a Free Project Quote
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-500 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-slate-700 transform hover:scale-105 transition-all duration-200"
            >
              See Proof of Impact
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
