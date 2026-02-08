import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SeasonalEffects from "@/components/SeasonalEffects";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danish Karim - Senior Full Stack Developer | Portfolio",
  description:
    "Senior Full Stack Developer with 6+ years of experience specializing in MERN stack and AWS Amplify. Building scalable web applications and delivering robust solutions.",
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
          <SeasonalEffects />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
