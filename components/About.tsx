"use client";

import { motion } from "framer-motion";
import { Code, Users, Rocket, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, number: "6+", label: "Years Experience" },
    { icon: Users, number: "10+", label: "Projects Delivered" },
    { icon: Rocket, number: "4+", label: "Companies Worked With" },
    { icon: Award, number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-slate-900">
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
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Senior Full Stack Developer with 6+ years of experience specializing
            in MERN stack and AWS Amplify
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-slate-100">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-slate-400 leading-relaxed">
              <p>
                I&apos;m a Senior Full Stack Developer with 6+ years of
                experience building scalable web applications and collaborating
                with technical teams. I specialize in MERN stack development and
                AWS Amplify, delivering robust solutions that optimize
                performance and maintain hands-on coding contributions.
              </p>
              <p>
                Throughout my career, I&apos;ve engineered scalable medical
                applications serving 20+ clinics, developed winery management
                platforms, architected investing platforms, and built research
                collaboration tools. My work focuses on creating applications
                that not only meet business requirements but also exceed
                performance expectations.
              </p>
              <p>
                I&apos;m passionate about mentoring junior developers, achieving
                high test coverage, and implementing best practices. I&apos;m
                also expanding my backend toolkit. I&apos;ve completed Python
                fundamentals and successfully migrated an application from
                Node.js to FastAPI, demonstrating my ability to adapt and
                deliver across different technology stacks.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-white dark:from-slate-800 dark:to-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary-600 mb-4" />
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-700 dark:to-primary-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">My Mission</h3>
          <p className="text-lg md:text-xl leading-relaxed opacity-95">
            To deliver high-quality, scalable solutions that exceed client
            expectations. I&apos;m committed to optimizing performance,
            achieving high test coverage, and mentoring the next generation of
            developers. My goal is to build applications that make a real impact
            while maintaining code quality and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
