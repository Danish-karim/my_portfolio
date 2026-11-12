import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

const description =
  "Senior Full Stack Developer with 6+ years shipping production web apps, APIs and AI features: React/Next.js, Node.js, PHP, AWS serverless and LLM integration (OpenAI, Gemini).";

export const metadata: Metadata = {
  title: "Danish Karim - Senior Full Stack Developer | Portfolio",
  description,
  openGraph: {
    title: "Danish Karim - Senior Full Stack Developer",
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danish Karim - Senior Full Stack Developer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;(s==='dark'||(!s&&d))&&document.documentElement.classList.add('dark');})();`,
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
