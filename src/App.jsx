import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import ResumeCard from "./components/ResumeCard";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MotionSection from "./components/MotionSection";

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main className="relative z-10 overflow-hidden pt-20">
        <Hero />
        <MotionSection delay={0.05}>
          <About />
        </MotionSection>
        <MotionSection delay={0.1}>
          <Experience />
        </MotionSection>
        <MotionSection delay={0.15}>
          <Skills />
        </MotionSection>
        <MotionSection delay={0.2}>
          <Portfolio />
        </MotionSection>
        <MotionSection delay={0.25}>
          <ResumeCard />
        </MotionSection>
        <MotionSection delay={0.3}>
          <Contact />
        </MotionSection>
        <Footer />
      </main>
    </div>
  );
}
