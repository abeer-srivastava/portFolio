"use client";

import { useEffect, useState } from "react";
import PillNav from "@/components/ui/PillNav";
import { Crowd } from "@/components/canvasCrowd";
import Background from "@/components/background";

import Hero from "./(app)/Hero";
import About from "./(app)/About";
import Projects from "./(app)/Projects";
import Contact from "./(app)/Contact";
import { Preloader } from "@/components/preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader when window loads, with a fallback timeout
    const onLoad = () => setLoading(false);

    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        // already loaded
        setTimeout(() => setLoading(false), 2000);
        return;
      }

      window.addEventListener("load", onLoad);
      const fallback = setTimeout(() => setLoading(false), 2500); // fallback

      return () => {
        window.removeEventListener("load", onLoad);
        clearTimeout(fallback);
      };
    }
  }, []);

  const NavItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main
      className="
        relative w-full min-h-screen overflow-x-hidden
        text-gray-100 limelight scroll-smooth 
        flex flex-col items-center
      "
    >
      {/* show preloader as an overlay while loading */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/80 flex items-center justify-center">
          <Preloader />
        </div>
      )}

      <Background />
      <header className="w-full flex justify-center z-40 pt-6 h-10 mb-10">
        <PillNav items={NavItems} logo="/bolt.svg" />
      </header>

      <section id="home" className="w-full flex justify-center z-30">
        <Hero />
      </section>

      <section id="about" className="w-full flex justify-center z-30">
        <About />
      </section>

      <section id="projects" className="w-full flex justify-center z-30">
        <Projects />
      </section>

      <section id="contact" className="w-full flex justify-center z-30">
        <Contact />
      </section>
      <div className="relative bottom-0 left-0 w-full h-full pointer-events-none z-10">
        <Crowd />
      </div>
    </main>
  );
}
