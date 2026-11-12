"use client";

import { motion } from "framer-motion";
import {
  Award,
  Layout,
  Server,
  Sparkles,
  Database,
  Cloud,
  CheckCircle2,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React.js", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "PHP", "REST APIs", "GraphQL", "BullMQ", "Redis", "Socket.io"],
  },
  {
    title: "AI & LLM",
    icon: Sparkles,
    skills: [
      "OpenAI API (GPT-4o)",
      "Google Gemini API",
      "Prompt design",
      "PDF text extraction",
      "AI job pipelines",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "DynamoDB", "PostgreSQL", "MySQL", "Supabase", "Typesense (search)"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "S3",
      "EC2",
      "RDS",
      "CloudFront",
      "Amplify",
      "CDK",
      "Docker",
    ],
  },
  {
    title: "Practices",
    icon: CheckCircle2,
    skills: ["Jest", "Git", "Agile", "Code Review", "Mentoring", "Production Debugging"],
  },
];

const familiarWith = ["Python", "FastAPI", "CI/CD pipelines (personal projects)"];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-primary-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/80 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            6+ Years in Production
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The tools I use to ship features end to end, from database and API
            to frontend, AI and deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-lg hover:border-primary-200/60 dark:hover:border-primary-800 transition-all duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/40">
                  <category.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          <span className="font-semibold">Familiar with:</span>{" "}
          {familiarWith.join(", ")}
        </p>
      </div>
    </section>
  );
};

export default Skills;
