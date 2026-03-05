"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

const RESUME_URL = "/danish_karim_latest.pdf";
const RESUME_FILENAME = "Danish_Karim_Resume.pdf";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 md:py-32 bg-white dark:bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
            <FileText className="w-4 h-4" aria-hidden />
            CV / Resume
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800 dark:text-slate-100">View or </span>
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              download my resume
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            Full experience, skills, and education in one document. Open in a new
            tab to view or download for your records.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
          >
            <ExternalLink className="w-5 h-5" aria-hidden />
            View Resume
          </a>
          <a
            href={RESUME_URL}
            download={RESUME_FILENAME}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-500 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-slate-700 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900"
          >
            <Download className="w-5 h-5" aria-hidden />
            Download PDF
          </a>
        </motion.div>

        {/* Embedded PDF viewer - clean, simple preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative"
        >
          {/* Soft card with accent line - full dark/light support */}
          <div className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg shadow-gray-200/60 dark:shadow-xl dark:shadow-black/30 ring-1 ring-gray-200/80 dark:ring-slate-600/80">
            {/* Minimal preview bar - distinct in light and dark */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-600">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-slate-500" aria-hidden />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-slate-500" aria-hidden />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-slate-500" aria-hidden />
              </div>
              <span className="text-xs font-medium text-gray-500 dark:text-slate-200 ml-2 tracking-wide">
                Resume preview
              </span>
            </div>
            {/* PDF container - scrollbar clipped so only preview area is visible */}
            <div
              className="resume-preview-hide-scrollbar relative w-full overflow-hidden bg-gray-100 dark:bg-slate-900"
              style={{ height: "min(75vh, 820px)" }}
            >
              <iframe
                src={`${RESUME_URL}#toolbar=0&navpanes=0`}
                title="Danish Karim - Resume"
                className="absolute left-0 top-0 h-full border-0 max-w-none"
                style={{ width: "calc(100% + 24px)" }}
              />
            </div>
          </div>
          {/* Subtle gradient accent at top - visible in light and dark */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 dark:from-primary-400 dark:via-primary-500 dark:to-primary-400 opacity-90"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
