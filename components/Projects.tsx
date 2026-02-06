"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  FolderOpen,
  ChevronDown,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

type Project = {
  title: string;
  description?: string;
  challenge?: string;
  solution?: string;
  result?: string;
  image: string;
  images?: string[];
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  period?: string;
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: "CloudHolter - Medical Application",
      challenge:
        "Clinics needed a faster way to process patient data and alert specialists for critical cardiac cases.",
      solution:
        "I built a secure, cloud-based platform for real-time patient monitoring with Slack alerts and a scalable admin for 20+ clinics.",
      result:
        "Reduced critical reporting delays by 30% and cut bugs by 40% through rigorous testing, helping cardiologists make faster decisions.",
      image:
        "/images/projects/CRD/screencapture-devv2-cardiacrhythmdiagnostics-dashboard-2024-04-24-10_44_46.png",
      images: [
        "/images/projects/CRD/screencapture-devv2-cardiacrhythmdiagnostics-dashboard-2024-04-24-10_44_46.png",
        "/images/projects/CRD/screencapture-dev-cardiacrhythmdiagnostics-login-2024-04-24-10_48_36.png",
        "/images/projects/CRD/screencapture-devv2-cardiacrhythmdiagnostics-admin-cardiologists-2024-04-24-10_45_36.png",
        "/images/projects/CRD/screencapture-devv2-cardiacrhythmdiagnostics-admin-checkout-2024-04-24-10_45_10.png",
        "/images/projects/CRD/screencapture-devv2-cardiacrhythmdiagnostics-admin-management-overview-2024-04-24-10_46_58.png",
        "/images/projects/CRD/screencapture-devv2-cardiacrhythmdiagnostics-clinics-2024-04-24-10_45_56.png",
        "/images/projects/CRD/screencapture-devv2-cardiacrhythmdiagnostics-equipment-2024-04-24-10_46_24.png",
        "/images/projects/CRD/screencapture-devv2-cardiacrhythmdiagnostics-holtercase-9518fc6b-d078-41ef-81de-74e4640fa779-2024-04-24-10_47_29.png",
      ],
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
      challenge:
        "Research teams were struggling with scattered notes and slow collaboration across tools.",
      solution:
        "I built a Next.js web app and cross-browser extension with real-time collaboration via Supabase WebSockets.",
      result:
        "Cut sync times by 50% so teams can collaborate in real time and keep knowledge in one place.",
      image:
        "/images/projects/ResearchCollab/screencapture-research-collab-frontend-onrender-collaboration-2025-04-20-00_35_04.png",
      images: [
        "/images/projects/ResearchCollab/screencapture-research-collab-frontend-onrender-dashboard-2025-04-20-00_33_00.png",
        "/images/projects/ResearchCollab/screencapture-research-collab-frontend-onrender-collaboration-2025-04-20-00_35_04.png",
        "/images/projects/ResearchCollab/screencapture-research-collab-frontend-onrender-knowledge-bank-2025-04-20-00_34_32.png",
        "/images/projects/ResearchCollab/screencapture-research-collab-frontend-onrender-manage-projects-2025-04-20-00_33_37.png",
        "/images/projects/ResearchCollab/screencapture-research-collab-frontend-onrender-account-2025-04-20-00_36_02.png",
      ],
      category: "Full Stack",
      technologies: ["Next.js", "React.js", "Vite", "Supabase", "WebSockets"],
      liveUrl: "https://app.researchcollab.ai/",
      githubUrl: "#",
      period: "Sep 2024 – Dec 2025",
    },
    {
      title:
        "Cross-Browser Research Collaboration Extension | Chrome, Firefox, Edge",
      challenge:
        "Researchers wanted to capture and organize sources without leaving their browser.",
      solution:
        "I built a cross-browser extension (Chrome, Firefox, Edge) with quick access to projects, collaborators, and real-time updates from the toolbar.",
      result:
        "Streamlined research workflows with fast performance and one-click access to active projects and teammates.",
      image: "/images/projects/ResearcgCollab%20Browser%20extension/2.png",
      images: [
        "/images/projects/ResearcgCollab%20Browser%20extension/1.png",
        "/images/projects/ResearcgCollab%20Browser%20extension/2.png",
        "/images/projects/ResearcgCollab%20Browser%20extension/3.png",
        "/images/projects/ResearcgCollab%20Browser%20extension/4.png",
      ],
      category: "Frontend",
      technologies: [
        "Browser Extension",
        "Cross Browser & Device Compatibility",
        "React",
        "Tailwind CSS",
        "Supabase",
      ],
      liveUrl: "",
      githubUrl: "#",
      period: "Sep 2024 – Dec 2025",
    },
    {
      title: "MicroInvesting - Investment Platform",
      challenge:
        "The business needed a reliable platform for users to trade shares and manage investments at scale.",
      solution:
        "I architected an investing platform with AWS CDK and RESTful APIs integrated with CacheInvest for share switching and withdrawals.",
      result:
        "Enabled 1,000+ users to trade with 95% uptime and a stable, scalable foundation for growth.",
      image: "/images/projects/microinvesting/3.png",
      images: [
        "/images/projects/microinvesting/1.png",
        "/images/projects/microinvesting/2.png",
        "/images/projects/microinvesting/3.png",
        "/images/projects/microinvesting/4.png",
        "/images/projects/microinvesting/5.png",
      ],
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
      challenge:
        "Wineries needed one place to manage operations and promote events to customers.",
      solution:
        "I built a winery management platform (React) and a user-facing event portal (Next.js) on AWS Amplify.",
      result:
        "Onboarded 50+ wineries and reduced load times by 20% so staff and customers get a smoother experience.",
      image:
        "/images/projects/winery%20management%20and%20user%20websie/screencapture-dev-d3hkunjm2hdgb0-amplifyapp-events-2023-12-17-12_46_26.png",
      images: [
        "/images/projects/winery%20management%20and%20user%20websie/screencapture-dev-d3hkunjm2hdgb0-amplifyapp-events-2023-12-17-12_46_26.png",
        "/images/projects/winery%20management%20and%20user%20websie/screencapture-dev-dn8k4emw1dosm-amplifyapp-home-2023-12-17-12_55_41.png",
        "/images/projects/winery%20management%20and%20user%20websie/screencapture-dev-dn8k4emw1dosm-amplifyapp-regions-2023-12-17-12_56_46.png",
        "/images/projects/winery%20management%20and%20user%20websie/screencapture-master-d37agnqt2gmdl8-amplifyapp-2024-04-24-10_37_36.png",
      ],
      category: "Full Stack",
      technologies: ["React.js", "Next.js", "AWS Amplify", "DynamoDB"],
      liveUrl: "",
      githubUrl: "#",
      period: "Dec 2022 – Feb 2024",
    },
    {
      title: "Dimoora - Freelance Marketplace",
      challenge:
        "The client needed a trustworthy marketplace for freelancers with services, reviews, and secure payments.",
      solution:
        "I built a full marketplace with service listings, reviews, and payment flows, and optimized the backend with indexing and caching.",
      result:
        "Reduced API response time by 40%, improving search and checkout so both freelancers and clients have a faster experience.",
      image: "/images/projects/tours%20website/GSO_Home_v14.png",
      images: [
        "/images/projects/tours%20website/GSO_Home_v14.png",
        "/images/projects/tours%20website/Web%20capture_23-7-2022_161227_.jpeg",
      ],
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

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = filteredProjects.length > visibleCount;

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(6);
  }, [selectedCategory]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      setModalImageIndex(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Use main image first, then rest; dedupe so the same path never appears twice
  const projectImages = selectedProject
    ? [...new Set([selectedProject.image, ...(selectedProject.images || [])])]
    : [];

  const getProjectTeaser = (project: Project, maxLength = 90) => {
    const text =
      project.result ||
      project.challenge ||
      project.solution ||
      project.description ||
      "";
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

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
            Real problems solved, with measurable results for businesses
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
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProjects.map((project, index) => (
                <motion.button
                  key={project.title}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-left w-full"
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
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {project.title}
                    </h3>
                    {project.period && (
                      <p className="text-xs text-primary-600 font-medium mb-2">
                        {project.period}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 leading-snug line-clamp-2">
                      {getProjectTeaser(project)}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>

            {hasMore && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mt-12"
              >
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  Load More Projects
                  <ChevronDown className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </>
        )}

        {/* Project detail modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal header with close */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 flex-shrink-0">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
                        {selectedProject.category}
                      </span>
                      {selectedProject.period && (
                        <span className="text-xs text-gray-500">
                          {selectedProject.period}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close"
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Image gallery */}
                <div className="relative bg-gray-100 flex-shrink-0">
                  <div className="relative h-64 md:h-80 w-full">
                    <Image
                      src={
                        projectImages[modalImageIndex] ?? selectedProject.image
                      }
                      alt={`${selectedProject.title} screenshot ${modalImageIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {projectImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalImageIndex((i) =>
                            i === 0 ? projectImages.length - 1 : i - 1,
                          );
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalImageIndex((i) =>
                            i === projectImages.length - 1 ? 0 : i + 1,
                          );
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {projectImages.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalImageIndex(i);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              i === modalImageIndex
                                ? "bg-primary-600"
                                : "bg-white/80 hover:bg-white"
                            }`}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Scrollable details */}
                <div className="flex-1 overflow-y-auto p-6 space-y-5">
                  {selectedProject.challenge &&
                    selectedProject.solution &&
                    selectedProject.result && (
                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-semibold text-primary-700 mb-1">
                            Challenge
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {selectedProject.challenge}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-700 mb-1">
                            Solution
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {selectedProject.solution}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold text-primary-700 mb-1">
                            Result
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            {selectedProject.result}
                          </p>
                        </div>
                      </div>
                    )}
                  {(!selectedProject.challenge ||
                    !selectedProject.solution ||
                    !selectedProject.result) &&
                    selectedProject.description && (
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {selectedProject.description}
                      </p>
                    )}
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4 flex-wrap pt-2">
                    {selectedProject.liveUrl &&
                      selectedProject.liveUrl !== "#" && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    {selectedProject.githubUrl &&
                      selectedProject.githubUrl !== "#" && (
                        <a
                          href={selectedProject.githubUrl}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
