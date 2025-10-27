"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ThreeBackground />
      <Navbar />
      <Hero />
      <About />
      <PortfolioShowcase />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
