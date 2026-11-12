"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

type Experience = {
  company: string;
  position: string;
  period: string;
  location: string;
  description?: string[];
  projects?: { name: string; period: string; description: string[] }[];
};

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item, itemIndex) => (
      <li
        key={itemIndex}
        className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed flex items-start gap-2"
      >
        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Experience = () => {
  const experiences: Experience[] = [
    {
      company: "Pine Technologies",
      position: "Full Stack Developer",
      period: "Aug 2024 – Present",
      location: "Remote",
      projects: [
        {
          name: "Global CMS & Content API Platform",
          period: "Jul 2026 – Present",
          description: [
            "Develop features for a long-running PHP/MySQL CMS and REST APIs serving a public website and native mobile app across multiple countries and languages (Docker-based environments)",
            "Built page-level permissions scoped by content type, organisation and geography (region → country → area), reusing the existing access model",
            "Delivered a new block-based content type by reusing the existing page builder, with translations inheriting layout from the live master version",
            "Extend mobile app APIs for content, announcements and fitness challenge leaderboards and stats",
            "Work across publishing, translation workflows, Typesense search indexing and caching in a live production system",
          ],
        },
        {
          name: "ResearchCollab – AI Research Platform & Browser Extension (UAE client, in production)",
          period: "Sep 2024 – Dec 2025",
          description: [
            "Built AI features for a production research platform (Next.js, Node.js/Express, PostgreSQL/Supabase, Docker) using OpenAI GPT-4o-mini and Google Gemini 2.0/2.5, including paper analysis that turns uploaded PDFs into metadata, summaries and insights",
            "Built a Deep Research assistant that generates long-form research reports with Gemini 2.5 Pro, with saved history per user",
            "Built AI reference auto-import: extracts citations from text, finds papers via Semantic Scholar, Google Scholar and Crossref, and runs on BullMQ/Redis queues with live WebSocket progress",
            "Built Topic Explorer (AI news, web search, topic analysis), scheduled daily trend digests, and reusable AI prompt templates users run against their papers",
            "Built a cross-browser extension (Chrome, Firefox, Safari; React, Vite, Supabase) that saves Google Scholar papers as AI-processed PDFs, with Google OAuth and 2FA",
            "Cut real-time sync times by 50% using Supabase WebSockets",
          ],
        },
      ],
    },
    {
      company: "MicroInvesting",
      position: "Full Stack Developer (Contract)",
      period: "Oct 2023 – Jun 2024",
      location: "Remote (Australia)",
      description: [
        "Built an investing platform on AWS CDK enabling 1,000+ users to trade shares via the CacheInvest API",
        "Designed REST APIs on API Gateway for share switching and withdrawals",
      ],
    },
    {
      company: "Huntavino",
      position: "Full Stack Developer (Contract)",
      period: "Dec 2022 – Feb 2024",
      location: "Remote (Australia)",
      description: [
        "Built a winery management platform (React) and public event portal (Next.js), onboarding 50+ wineries with AWS Amplify auth, GraphQL APIs and hosting",
        "Reduced load times by 20% by optimising DynamoDB queries",
      ],
    },
    {
      company: "CloudHolter",
      position: "Full Stack Developer",
      period: "Nov 2021 – May 2024",
      location: "Remote (Australia)",
      description: [
        "Built a medical application used by 20+ clinics for 200+ daily patient check-ins (React, AWS Amplify, GraphQL, Lambda, DynamoDB, SNS/SQS)",
        "Cut reporting delays by 30% with Slack notifications for cardiologists",
        "Reached 85% Jest coverage on critical modules, reducing post-release bugs by 40%",
        "Mentored 2 junior developers in React/Node.js through code reviews",
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
                key={exp.company}
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

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-gray-600 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {exp.description && <Bullets items={exp.description} />}
                    {exp.projects && (
                      <div className="space-y-5">
                        {exp.projects.map((project) => (
                          <div key={project.name}>
                            <p className="text-sm font-semibold text-gray-800 dark:text-slate-200">
                              {project.name}
                            </p>
                            <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mb-2">
                              {project.period}
                            </p>
                            <Bullets items={project.description} />
                          </div>
                        ))}
                      </div>
                    )}
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
