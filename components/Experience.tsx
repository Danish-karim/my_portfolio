"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "ResearchCollab",
      position: "Full Stack Developer",
      period: "Sep 2024 – Dec 2025",
      location: "Remote (UAE)",
      description: [
        "Built a research collaboration web app (Next.js) and cross-browser extension (React.js, Vite, Supabase)",
        "Enhanced real-time collaboration with Supabase WebSockets, cutting sync times by 50%",
      ],
    },
    {
      company: "CloudHolter",
      position: "Full Stack Developer",
      period: "Nov 2021 – May 2024",
      location: "Remote (Australia)",
      description: [
        "Engineered a scalable medical application serving 20+ clinics and 200+ daily patient check-ins using React.js, AWS Amplify, and serverless architecture",
        "Slashed reporting delays by 30% by integrating Slack notifications for cardiologists",
        "Mentored 2 junior developers in React/Node.js, improving team productivity by 25%",
        "Achieved 85% unit test coverage (Jest) for critical modules, reducing post-deployment bugs by 40%",
      ],
    },
    {
      company: "MicroInvesting",
      position: "Full Stack Developer",
      period: "Oct 2023 – Dec 2024",
      location: "Remote (Australia)",
      description: [
        "Architected an investing platform using AWS CDK, enabling 1,000+ users to trade shares via CacheInvest API",
        "Designed RESTful APIs (API Gateway) with 95% uptime, streamlining share switching/withdrawals",
      ],
    },
    {
      company: "Huntavino",
      position: "Full Stack Developer",
      period: "Dec 2022 – Feb 2024",
      location: "Remote (Australia)",
      description: [
        "Developed a winery management platform (React.js) and user-facing event portal (Next.js), onboarding 50+ wineries",
        "Optimized DynamoDB queries to reduce load times by 20%",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 md:py-32 bg-white dark:bg-slate-900"
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
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Building scalable applications and delivering impactful solutions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 dark:from-primary-900 dark:via-primary-600 dark:to-primary-900 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-gradient-to-br from-white to-primary-50 dark:from-slate-800 dark:to-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-1">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <Briefcase className="w-6 h-6 text-primary-400" />
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mt-1">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
