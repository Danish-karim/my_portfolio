"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Zap, Sparkles, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Web Apps",
      description:
        "React/Next.js frontends on Node.js or PHP backends, built end to end from database and API to UI and deployment.",
    },
    {
      icon: Sparkles,
      title: "AI & LLM Features",
      description:
        "OpenAI and Gemini integrations that ship in production: document analysis, research assistants, background AI job pipelines and prompt templates.",
    },
    {
      icon: Database,
      title: "APIs & Backend",
      description:
        "REST and GraphQL APIs for web and mobile apps, with Redis/BullMQ queues, real-time updates over WebSockets, and search with Typesense.",
    },
    {
      icon: Cloud,
      title: "AWS Serverless",
      description:
        "Lambda, API Gateway, DynamoDB, S3, Amplify and CDK: infrastructure that scales with usage and stays cheap to run.",
    },
    {
      icon: Wrench,
      title: "Extending Live Systems",
      description:
        "New features on long-running production codebases (permissions, content types, translations) shipped without disrupting existing users.",
    },
    {
      icon: Zap,
      title: "Performance & Quality",
      description:
        "Faster queries and page loads, test coverage on critical modules, and code reviews that keep a codebase healthy as it grows.",
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
              What I Can Do for You
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            For teams hiring and for clients with a project
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
