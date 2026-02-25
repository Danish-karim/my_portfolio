"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const YOUTUBE_VIDEO_ID = "oUV_tk8VSAM";
const EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`;

const IntroVideo = () => {
  return (
    <section
      id="intro-video"
      className="py-20 md:py-32 bg-gradient-to-b from-primary-50/50 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <Play className="w-4 h-4" aria-hidden />
            Watch my intro
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800 dark:text-slate-100">
              Skills, expertise & projects{" "}
            </span>
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              in 2 minutes
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            A quick overview of what I do, the tech I use, and the impact I
            deliver for clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative group"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl shadow-primary-900/20 dark:shadow-black/40 ring-1 ring-gray-200 dark:ring-slate-700/50">
            {/* 16:9 responsive container */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={EMBED_URL}
                title="Introduction video - Skills, expertise and projects"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            {/* Subtle gradient overlay at bottom for polish */}
            <div
              className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-b-2xl"
              aria-hidden
            />
          </div>
          <div className="absolute -inset-1 rounded-[1.25rem] bg-gradient-to-r from-primary-500/20 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-gray-500 dark:text-slate-500 mt-6"
        >
          Prefer to talk?{" "}
          <a
            href="#contact"
            className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
          >
            Get a free project quote
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default IntroVideo;
