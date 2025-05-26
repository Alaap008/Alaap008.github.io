import React from "react";
import Hero from "./components/Hero";
import ResumeCard from "./components/ResumeCard";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
  <div className="pt-20">
      <Hero />
      <ResumeCard />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    </>
  );
}
