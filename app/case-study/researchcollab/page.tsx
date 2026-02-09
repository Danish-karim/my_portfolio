import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "ResearchCollab Case Study | Danish Karim",
  description:
    "Full-stack collaborative research platform (Next.js, Node, Redis, Socket.IO) with real-time sync, AI research assistant, and a cross-browser extension for capturing papers and highlights.",
};

export default function ResearchCollabCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <header className="mb-12">
          <span className="inline-block bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Case Study
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 mb-2">
            ResearchCollab
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Research Platform · Sep 2024 – Dec 2025
          </p>
          <a
            href="https://app.researchcollab.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mt-4"
          >
            <ExternalLink className="w-4 h-4" />
            View live
          </a>
        </header>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-800 mb-12">
          <Image
            src="/images/projects/ResearchCollab/screencapture-research-collab-frontend-onrender-collaboration-2025-04-20-00_35_04.png"
            alt="ResearchCollab collaboration view"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary-500 rounded-full" />
              The challenge
            </h2>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-4">
              Research teams were spending too much time switching between
              tools: PDFs in one place, notes in another, bookmarks and
              highlights scattered across the browser. Collaboration was slow;
              edits and updates didn&apos;t sync in real time, so people
              duplicated work or missed the latest version. Capturing papers
              from Google Scholar and saving highlights from the web required
              multiple manual steps. The client needed a single, reliable
              platform where researchers could:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-slate-300 leading-relaxed list-disc pl-6">
              <li>
                Store and organize papers, notes, and bookmarks in one place
              </li>
              <li>Sync changes in real time across devices and team members</li>
              <li>
                Capture content from the browser (Scholar, Search, YouTube)
                without leaving the page
              </li>
              <li>
                Use AI to speed up literature review and drafting (outlines,
                search, content inclusion)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary-500 rounded-full" />
              Solution
            </h2>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed mb-6">
              I designed and built <strong>ResearchCollab</strong> as a
              full-stack collaborative research platform with three parts: a{" "}
              <strong>Next.js web app</strong>, a{" "}
              <strong>Node.js/Express backend</strong>, and a{" "}
              <strong>cross-browser extension</strong> (Chrome, Firefox,
              Safari).
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2 mt-6">
              Web app (research-collab)
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-slate-300 leading-relaxed list-disc pl-6 mb-6">
              <li>
                <strong>Workspaces and projects</strong>: Teams organize work in
                workspaces with projects and folders; role-based access and
                organizations support multi-team use.
              </li>
              <li>
                <strong>Real-time collaboration</strong>: Socket.IO powers live
                note and document updates, so edits and activity sync
                immediately across clients.
              </li>
              <li>
                <strong>PDF pipeline</strong>: Upload and import PDFs; backend
                uses BullMQ + Redis for processing and Semantic Scholar
                integration so users can add papers from search results.
              </li>
              <li>
                <strong>Research Assistant</strong>: AI-guided flow: topic →
                outline → information search → content inclusion → final review,
                with web search and source management.
              </li>
              <li>
                <strong>Collective Mind & Topic Explorer</strong>: Deeper paper
                discovery and topic exploration using external APIs and
                structured data.
              </li>
              <li>
                <strong>Security</strong>: CSP, CSRF protection, rate limiting,
                input sanitization (e.g. DOMPurify), and secure token handling.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2 mt-6">
              Backend (research-collab-backend)
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-slate-300 leading-relaxed list-disc pl-6 mb-6">
              <li>
                <strong>REST API</strong> for auth (including 2FA), workspaces,
                projects, files, notes, bookmarks, reminders, subscriptions
                (Stripe), and integrations (e.g. Zotero/Mendeley).
              </li>
              <li>
                <strong>Redis</strong> for caching and <strong>BullMQ</strong>{" "}
                for background jobs (PDF processing, research assistant steps).
              </li>
              <li>
                <strong>Socket.IO</strong> with origin checks and room-based
                events for real-time notes and document updates.
              </li>
              <li>
                <strong>Supabase</strong> for database and auth;{" "}
                <strong>Sentry</strong> and <strong>PostHog</strong> for
                monitoring and product analytics.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-2 mt-6">
              Browser extension
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-slate-300 leading-relaxed list-disc pl-6">
              <li>
                <strong>Capture from the web</strong>: Save papers from Google
                Scholar (AI-processed), bookmark pages from Google Search and
                YouTube, and highlight text on any page and save as notes.
              </li>
              <li>
                <strong>Auth</strong>: Email/password with 2FA and Google OAuth
                (Supabase).
              </li>
              <li>
                <strong>Organization</strong>: Content is tied to the
                user&apos;s selected project and folders so the web app and
                extension stay in sync.
              </li>
            </ul>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed mt-6">
              Together, this gives researchers one place to capture, organize,
              and collaborate with real-time sync and AI-assisted workflows.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary-500 rounded-full" />
              Result
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-slate-300 leading-relaxed list-disc pl-6">
              <li>
                <strong>Unified workspace</strong>: Papers, notes, bookmarks,
                and highlights live in one platform with workspaces, projects,
                and folders, reducing context switching.
              </li>
              <li>
                <strong>Real-time sync</strong>: Socket.IO and Redis replaced
                polling for notes and documents; teams see updates immediately,
                cutting perceived sync delay and duplicate work.
              </li>
              <li>
                <strong>Faster capture</strong>: The browser extension lets
                users save from Scholar, Search, and YouTube and turn highlights
                into notes without leaving the page.
              </li>
              <li>
                <strong>Scalable processing</strong>: BullMQ and Redis handle
                PDF and research-assistant jobs in the background so the app
                stays responsive as usage grows.
              </li>
              <li>
                <strong>Security and reliability</strong>: Hardening (CSP, CSRF,
                rate limits, sanitization) and monitoring (Sentry, PostHog)
                support safe, auditable use by teams and organizations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary-500 rounded-full" />
              Built with
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-semibold text-gray-700 dark:text-slate-400 block mb-1">
                  Frontend
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js 14",
                    "React 18",
                    "TypeScript",
                    "Tailwind",
                    "Radix UI",
                    "Redux Toolkit",
                    "Socket.IO client",
                    "i18n",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700 dark:text-slate-400 block mb-1">
                  Backend
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express",
                    "TypeScript",
                    "Supabase (DB + Auth)",
                    "Redis",
                    "BullMQ",
                    "Socket.IO",
                    "Stripe",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700 dark:text-slate-400 block mb-1">
                  Browser extension
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Vite",
                    "TypeScript",
                    "Chrome / Firefox / Safari (Manifest V3)",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-semibold text-gray-700 dark:text-slate-400 block mb-1">
                  AI / DevOps / QA
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Google Gemini",
                    "Semantic Scholar API",
                    "Sentry",
                    "PostHog",
                    "CSP",
                    "CSRF",
                    "Rate limiting",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-700">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>
        </div>
      </article>
    </main>
  );
}
