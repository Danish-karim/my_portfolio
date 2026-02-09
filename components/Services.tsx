"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "I build web applications that work on every device and load quickly, so your customers have a smooth experience and you can convert more visitors into leads or sales.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "I design APIs and data systems that scale with your business, so you can add users and features without rewriting everything or hitting performance limits.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "I ensure your application is reliable and can handle growth, so you never lose a customer due to downtime or slow performance.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "I improve speed and reduce load times so your site keeps users engaged, ranks better in search, and costs less to run at scale.",
    },
  ];

  return (
    <section
      id="services"
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
              Services I Offer
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Solutions that help your business run better and grow
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
              className="bg-gradient-to-br from-white to-primary-50 dark:from-slate-800 dark:to-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-primary-100 dark:bg-primary-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-slate-100">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
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
