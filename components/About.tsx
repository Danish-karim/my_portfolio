"use client";

import { motion } from "framer-motion";
import { Code, Building2, Grape, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, number: "6+", label: "Years shipping production apps" },
    { icon: Building2, number: "20+", label: "Clinics on a medical platform I built" },
    { icon: Grape, number: "50+", label: "Wineries onboarded" },
    { icon: TrendingUp, number: "1,000+", label: "Investors trading on a platform I built" },
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
            Senior Full Stack Developer specialising in React/Next.js, Node.js,
            AWS serverless and LLM integration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
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
                I&apos;m a Senior Full Stack Developer with 6+ years shipping
                production web apps, APIs and AI features for remote teams in
                Australia and the UAE, including products used by 20+ clinics,
                50+ wineries and 1,000+ investors.
              </p>
              <p>
                I specialise in React/Next.js, Node.js, AWS serverless and LLM
                integration (OpenAI, Gemini). Recently I&apos;ve built AI
                research features (PDF analysis, long-form research reports,
                citation import) and extended a multi-country PHP/MySQL CMS and
                the APIs behind its mobile app.
              </p>
              <p>
                I own features end to end, from database and API to frontend and
                deployment, and ship changes safely into live systems. I also
                mentor junior developers through code reviews.
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

      </div>
    </section>
  );
};

export default About;
