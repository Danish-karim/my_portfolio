"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks like React, Next.js, and Vue.js. Responsive, fast, and user-friendly.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Robust server-side solutions with Node.js, Python, and cloud services. Scalable APIs and database design.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Deployment and management on AWS, Azure, and Google Cloud. CI/CD pipelines and DevOps practices.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Speed optimization, code splitting, and caching strategies to ensure lightning-fast load times.",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
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
              Services I Offer
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your development needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-primary-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
