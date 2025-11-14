"use client";
import PillNav from "@/components/ui/PillNav";
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import Hero from "./(app)/Hero";
import About from "./(app)/About";
import { Crowd } from "@/components/canvasCrowd";
import Projects from "./(app)/Projects";
import Contact from "./(app)/Contact";
import Background from "@/components/background";

export default function Home() {
  const NavItems=[{label: "Home", href: "#home"}, {label: "About", href: "#about"}, {label: "Projects", href: "#projects"}, {label: "Contact", href: "#contact"}];
  return (
    <div className=" text-gray-100 limelight scroll-smooth flex flex-col justify-center items-center  ">
      {/* Navbar */}
      <Background/>
      <PillNav className="" items={NavItems} logo="/bolt.svg"></PillNav>

      {/* Hero Section */}
      <Hero></Hero>
      {/* About Section */}
     <About></About>
      {/* Projects Section */}
      <Projects></Projects>
      {/* Get in Touch */}
     <Contact></Contact>
      {/* Footer */}
     <Crowd></Crowd>
    </div>
  );
}
