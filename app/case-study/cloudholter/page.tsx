import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "CloudHolter Case Study | Danish Karim",
  description:
    "How I built a full-stack Holter case management platform on AWS for a cardiac rhythm diagnostics provider, replacing spreadsheets and email with one auditable workflow.",
};

export default function CloudHolterCaseStudyPage() {
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
            CloudHolter
          </h1>
          <p className="text-lg text-gray-600 dark:text-slate-400">
            Medical Application · Nov 2021 – May 2024
          </p>
          <a
            href="https://admin.cardiacrhythmdiagnostics.com/"
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
            src="/images/projects/CRD/screencapture-devv2-cardiacrhythmdiagnostics-dashboard-2024-04-24-10_44_46.png"
            alt="CloudHolter dashboard"
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
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
              A cardiac rhythm diagnostics business was scaling the number of
              clinics and Holter studies. Case tracking relied on spreadsheets
              and email: referrals and EDF files arrived in inboxes, report
              uploads were manual, and cardiologist allocation and billing were
              disconnected. There was no single view of which devices were
              where, which cases were at which step, or what was ready for
              invoicing. The goal was to replace that with a single, reliable,
              and auditable workflow that could grow with the business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary-500 rounded-full" />
              My approach
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-slate-300 leading-relaxed list-none pl-0">
              <li className="flex gap-3">
                <span className="font-semibold text-primary-600 dark:text-primary-400 shrink-0">
                  Discovery:
                </span>
                <span>
                  Mapped the real-world flow (clinic onboarding → equipment
                  allocation → checkout → referral → EDF upload → report upload
                  → analysis/sign-off → invoicing and Medicare).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary-600 dark:text-primary-400 shrink-0">
                  Architecture:
                </span>
                <span>
                  Chose AWS Amplify (AppSync GraphQL, Cognito, S3, Lambda) for
                  auth, API, and file-driven automation; React + TypeScript +
                  Ant Design for a consistent, role-aware UI.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary-600 dark:text-primary-400 shrink-0">
                  Workflow engine:
                </span>
                <span>
                  Modelled Holter cases with clear statuses and used S3 event
                  triggers to advance cases when referrals, EDFs, or reports
                  were uploaded, keeping data and status in sync.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary-600 dark:text-primary-400 shrink-0">
                  Roles and UX:
                </span>
                <span>
                  Separate experiences for Admin, Management, Cardiac Tech,
                  Cardiologist, and Clinic staff so each role sees the right
                  list and actions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary-600 dark:text-primary-400 shrink-0">
                  Billing and compliance:
                </span>
                <span>
                  In-app clinic and cardiologist invoicing and Medicare
                  batch/reconciliation so finance doesn&apos;t depend on
                  spreadsheets.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary-600 dark:text-primary-400 shrink-0">
                  Reliability:
                </span>
                <span>
                  GraphQL subscriptions for live status updates, file audit
                  trails, and Cypress E2E tests for critical paths (checkout,
                  referral upload, EDF upload, invoicing).
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary-500 rounded-full" />
              Business impact
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-slate-300 leading-relaxed list-disc pl-6">
              <li>
                One system for the full Holter lifecycle instead of email +
                spreadsheets.
              </li>
              <li>
                Clear visibility of case status and equipment for admins and
                clinics.
              </li>
              <li>
                Faster resolution of &quot;where is this case?&quot; thanks to
                real-time updates.
              </li>
              <li>
                Billing and Medicare handled in-app, with less manual
                reconciliation.
              </li>
              <li>
                Foundation to add more clinics and users without
                re-architecting.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary-500 rounded-full" />
              Built with
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Ant Design",
                "AWS Amplify",
                "AppSync (GraphQL)",
                "Cognito",
                "Lambda",
                "S3",
                "Cypress E2E",
                "HealthLink / Medical Objects",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-3 py-1.5 rounded-lg"
                >
                  {tech}
                </span>
              ))}
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
