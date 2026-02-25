import Hero from "@/components/Hero";
import About from "@/components/About";
import IntroVideo from "@/components/IntroVideo";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <IntroVideo />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
