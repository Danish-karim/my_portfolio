"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "CloudHolter - Medical Application",
      description:
        "Scalable medical application serving 20+ clinics and 200+ daily patient check-ins. Integrated Slack notifications reducing reporting delays by 30%. Achieved 85% unit test coverage reducing bugs by 40%.",
      image:
        "/images/projects/CRD/screencapture-devv2-cardiacrhythmdiagnostics-dashboard-2024-04-24-10_44_46.png",
      category: "Full Stack",
      technologies: [
        "React.js",
        "AWS Amplify",
        "Lambda",
        "DynamoDB",
        "SNS/SQS",
        "Jest",
      ],
      liveUrl: "https://admin.cardiacrhythmdiagnostics.com/",
      githubUrl: "#",
      period: "Nov 2021 – May 2024",
    },
    {
      title: "ResearchCollab - Research Platform",
      description:
        "Research collaboration web app with Next.js and cross-browser extension. Enhanced real-time collaboration with Supabase WebSockets, cutting sync times by 50%.",
      image:
        "/images/projects/ResearchCollab/screencapture-research-collab-frontend-onrender-collaboration-2025-04-20-00_35_04.png",
      category: "Full Stack",
      technologies: ["Next.js", "React.js", "Vite", "Supabase", "WebSockets"],
      liveUrl: "https://app.researchcollab.ai/",
      githubUrl: "#",
      period: "Sep 2024 – Dec 2025",
    },
    {
      title: "MicroInvesting - Investment Platform",
      description:
        "Architected investing platform using AWS CDK, enabling 1,000+ users to trade shares via CacheInvest API. Designed RESTful APIs with 95% uptime for share switching/withdrawals.",
      image: "/images/projects/microinvesting/3.png",
      category: "Full Stack",
      technologies: [
        "AWS CDK",
        "API Gateway",
        "RESTful APIs",
        "CacheInvest API",
      ],
      liveUrl: "",
      githubUrl: "#",
      period: "Oct 2023 – Dec 2024",
    },
    {
      title: "Huntavino - Winery Management",
      description:
        "Winery management platform with React.js and user-facing event portal using Next.js. Onboarded 50+ wineries with AWS Amplify. Optimized DynamoDB queries reducing load times by 20%.",
      image:
        "/images/projects/winery%20management%20and%20user%20websie/screencapture-dev-d3hkunjm2hdgb0-amplifyapp-events-2023-12-17-12_46_26.png",
      category: "Full Stack",
      technologies: ["React.js", "Next.js", "AWS Amplify", "DynamoDB"],
      liveUrl: "",
      githubUrl: "#",
      period: "Dec 2022 – Feb 2024",
    },
    {
      title: "Dimoora - Freelance Marketplace",
      description:
        "Built a comprehensive freelance marketplace with services, reviews, and secure payments. Optimized backend performance, reducing API response time by 40% through indexing and caching.",
      image: "/images/projects/tours%20website/GSO_Home_v14.png",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MySQL"],
      liveUrl: "",
      githubUrl: "#",
      period: "2021",
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-gradient-to-br from-primary-50 to-white"
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of my recent work and projects
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-primary-50 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center py-16 px-6 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <FolderOpen className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No projects found
            </h3>
            <p className="text-gray-600 max-w-md mb-6">
              There are no projects in the &quot;{selectedCategory}&quot;
              category yet. Try selecting another filter to view available
              projects.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
            >
              View All Projects
            </button>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="text-xs text-primary-600 font-medium mb-2">
                      {project.period}
                    </p>
                  )}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
