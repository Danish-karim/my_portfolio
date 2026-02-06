"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "I highly recommend Danish Karim as a full stack developer. Since joining Tech Alphalogix in 2017, he has showcased exceptional skills in JavaScript/TypeScript, React, Next.js, Node.js, and AWS Amplify. Danish's proficiency in both front-end and back-end development, coupled with his collaborative nature, make him an invaluable asset to our team. He consistently delivers high-quality work and is a pleasure to work with.",
    name: "Shaukat Hayat",
    role: "Co-Founder & CCO at Tech Alphalogix",
  },
  {
    quote:
      "I give my strongest recommendation for Danish, an outstanding full stack developer. I had the pleasure of working alongside Danish during multiple projects, and I can confidently say he is a skilled and dedicated professional in the field. Danish possesses an impressive ability to blend technical expertise with creative problem-solving. He has extensive experience in both front-end and back-end development, and he always demonstrates a deep understanding of the latest technologies and development methodologies.",
    name: "Saima Asad",
    role: "Senior Web Developer",
  },
  {
    quote:
      "Worked really well on the multiple projects he was involved with. He adapted well to change and was excellent at picking up new skills in the AWS infrastructure space that were required for AWS Amplify deployments.",
    name: "Jason",
    role: "Project Owner, CloudHolter · Upwork",
  },
  {
    quote:
      "Danish was able to help right there on the spot - jumped on the call, and with screen sharing was able to help us with the task!",
    name: "Vadym Vorobiov",
    role: "Project Owner · Upwork",
  },
  {
    quote:
      "Overall you have done a really good job, Thank you so much for your help, highly recommend your service, Thanks!",
    name: "Brian",
    role: "Project Owner · Fiverr",
  },
  {
    quote:
      "Expert in JS and jQuery! Fixed my JS file and counteroffered half the price of my initial offer! Understands the project and works with a realistic timeline and budget. Did more than I even asked, he fixed the bugs and also optimized it.",
    name: "Soney",
    role: "Project Owner · Fiverr",
  },
  {
    quote: "Good communication, great service.",
    name: "Jean F Beaulieu",
    role: "Project Owner · Fiverr",
  },
  {
    quote:
      "Great seller. Easily understood the request and completed with quality and on time. Well recommend.",
    name: "Kendo",
    role: "Project Owner · Fiverr",
  },
  {
    quote:
      "Sometimes it's hard to explain and communicate what we want a script/code to work, but this seller understands, is nice and smart. You just explained a bit, he understood everything!",
    name: "Farislui",
    role: "Project Owner · Fiverr",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    const updatePerPage = () => setPerPage(window.innerWidth >= 768 ? 2 : 1);
    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / perPage);
  const currentItems = testimonials.slice(
    currentSlide * perPage,
    currentSlide * perPage + perPage,
  );

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const goPrev = () =>
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Feedback from clients and colleagues I&apos;ve worked with
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Variable-height slide: no scroll, no wasted space; height animates smoothly */}
          <motion.div
            layout
            className="relative min-h-[200px] px-2 md:px-4"
            transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
          >
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonials"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-3 z-10 w-12 h-12 rounded-full bg-white shadow-xl border border-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonials"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-3 z-10 w-12 h-12 rounded-full bg-white shadow-xl border border-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="overflow-hidden px-1 md:px-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {currentItems.map((item, index) => (
                    <div
                      key={`${currentSlide}-${item.name}-${index}`}
                      className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
                    >
                      <Quote className="w-9 h-9 text-primary-400 mb-3" />
                      <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                      <div className="pt-4 border-t border-gray-100">
                        <p className="font-semibold text-gray-800">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === currentSlide
                    ? "w-8 bg-primary-600"
                    : "w-2 bg-primary-200 hover:bg-primary-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
