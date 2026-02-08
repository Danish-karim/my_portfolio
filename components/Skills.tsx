"use client";

import { motion } from "framer-motion";
import { Award, Layers } from "lucide-react";

const getExpertiseLabel = (level: number) => {
  if (level >= 90)
    return {
      label: "Expert",
      badgeClass: "bg-primary-600 dark:bg-primary-500 text-white",
    };
  if (level >= 80)
    return {
      label: "Advanced",
      badgeClass:
        "bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300",
    };
  return {
    label: "Proficient",
    badgeClass:
      "bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-300",
  };
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Redux", level: 88 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 93 },
        { name: "Webpack", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Express.js", level: 90 },
        { name: "Python", level: 80 },
        { name: "FastAPI", level: 80 },
        { name: "RESTful APIs", level: 95 },
        { name: "GraphQL", level: 85 },
        { name: "MongoDB", level: 90 },
        { name: "DynamoDB", level: 88 },
        { name: "PostgreSQL", level: 85 },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS Amplify", level: 92 },
        { name: "AWS Lambda", level: 88 },
        { name: "AWS EC2/S3/RDS", level: 85 },
        { name: "CloudFront", level: 82 },
        { name: "Docker", level: 80 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Git/GitHub", level: 95 },
        { name: "Jest", level: 88 },
      ],
    },
  ];

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
            6+ Years · Production-Ready Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Deep mastery across the full stack, from UI to infrastructure. Built
            and shipped applications serving thousands of users in production.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary-200/60 dark:hover:border-primary-800 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/30 dark:to-primary-900/20 group-hover:to-primary-50/50 dark:group-hover:to-primary-900/30 transition-colors duration-300" />
              <div className="relative p-6 md:p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-primary-100 transition-colors duration-300">
                    <Layers className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                      {category.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {category.skills.filter((s) => s.level >= 90).length}{" "}
                      expert · {category.skills.length} technologies
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  {category.skills.map((skill, skillIndex) => {
                    const { label, badgeClass } = getExpertiseLabel(
                      skill.level,
                    );
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: categoryIndex * 0.15 + skillIndex * 0.05,
                        }}
                        className="flex items-center justify-between gap-4 py-2.5 border-b border-slate-100 dark:border-slate-700 last:border-0"
                      >
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-semibold px-2.5 py-1 rounded-md ${badgeClass}`}
                          >
                            {label}
                          </span>
                          <span className="text-slate-400 dark:text-slate-500 text-sm tabular-nums w-10 text-right">
                            {skill.level}%
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
