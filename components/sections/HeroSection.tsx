import React from "react";
import BrutalButton from "../brutal/BrutalButton";
import Image from "next/image";
const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
       className="min-h-screen flex items-center justify-center bg-brutal-white pt-26 md:pt-28 px-4 md:px-8 lg:px-8 relative overflow-hidden"
    >
      {" "}
      {/* Geometric Background Elements */}{" "}
        <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brutal-lime border-4 border-brutal-black rotate-12" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-brutal-pink border-4 border-brutal-black -rotate-6" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-brutal-blue border-4 border-brutal-black rotate-45" />
        <div className="absolute bottom-24 left-88 w-20 h-20 bg-brutal-lime border-4 border-brutal-black -rotate-12" />
        <div className="absolute top-120 left-80 w-10 h-16 bg-brutal-pink border-4 border-brutal-black rotate-12" />
       
        <div className="absolute bottom-80 left-15 w-24 h-24 bg-brutal-pink border-4 border-brutal-black rotate-12" />
        <div className="absolute bottom-156 right-68 w-25 h-48 bg-brutal-pink border-4 border-brutal-black -rotate-12" />
        <div className="absolute top-56 left-40 w-32 h-32 bg-brutal-blue border-4 border-brutal-black rotate-12" />
        <div className="absolute top-24 right-153 w-32 h-32 bg-brutal-lime border-4 border-brutal-black rotate-12" />
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {" "}
          {/* Left Side - Text Content */}{" "}
          <div className="space-y-8">
            {" "}
            {/* Name */}{" "}
            <div className="border-5 border-brutal-black bg-brutal-white p-6
             shadow-brutal hover:rotate-[1.5deg]  hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300 ease-in-out relative">
              {" "}
              <h1 className="font-space-grotesk font-bold uppercase leading-none">
                {" "}
                HI, I&apos;M <br />{" "}
                <span className="text-brutal-blue">ABEER</span> <br />{" "}
                <span className="text-brutal-pink">SRIVASTAVA</span>{" "}
              </h1>{" "}
            </div>{" "}
            {/* Tagline */}{" "}
            <div className="border-4 border-brutal-black bg-brutal-black p-6 shadow-brutal-sm -rotate-1 hover:-rotate-1 hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300 ease-in-out relative">
              {" "}
              <p className="text-brutal-white text-lg md:text-xl font-bold leading-relaxed">
                {" "}
                <span className="text-brutal-pink">Full-Stack Developer building scalable</span>,<span className="text-brutal-lime"> AI-powered products</span>{" "}
              </p>{" "}
            </div>{" "}
            {/* CTAs */}{" "}
            <div className="flex flex-wrap gap-4">
              {" "}
              <BrutalButton variant="primary" href="#projects">
                {" "}
                VIEW PROJECTS{" "}
              </BrutalButton>{" "}
              <BrutalButton variant="secondary" href="https://drive.google.com/file/d/1hwBwdHzakJ4z1I2bgMA0YFWkDcQuUwH0/view?usp=sharing" download>
                {" "}
                DOWNLOAD RESUME{" "}
              </BrutalButton>{" "}
            </div>{" "}
            {/* Scroll Indicator */}{" "}
            <div className="hidden md:flex items-center gap-3 mt-12">
              {" "}
              <div className="w-12 h-12 border-3 border-brutal-black flex items-center justify-center">
                {" "}
                <svg
                  className="w-6 h-6 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={3}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />{" "}
                </svg>{" "}
              </div>{" "}
              <span className="font-bold uppercase text-sm mx-2 ">
                Scroll to explore
              </span>{" "}
            </div>{" "}
          </div>{" "}
          {/* Right Side - Profile Image */}{" "}
          <div className="flex justify-center lg:justify-end">
            {" "}
            <div className="relative">
              {" "}
              {/* Main Image Container */}{" "}
              <div className="border-5 border-brutal-black shadow-brutal-lg rotate-2 bg-brutal-black overflow-hidden w-64 h-64 md:w-90 md:h-90 hover:rotate-0 transition-transform duration-300 ease-in-out relative">
                {" "}
                <div className="w-full h-full bg-linear-to-br from-brutal-lime via-brutal-blue to-brutal-pink opacity-20" />{" "}
                {/* Placeholder for actual image */}{" "}
                <div className="absolute inset-0 flex items-center justify-center">
                  {" "}
                  <span className="font-jetbrains-mono content-center font-bold text-4xl md:text-6xl text-brutal-black">
                    <Image src="/images/me.jpg" alt="Abeer Srivastava" width={400} height={200} className="mx-auto my-auto "/>
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              {/* Status Badge */}{" "}
              <div className="absolute -bottom-4 -right-4 bg-brutal-lime border-4 border-brutal-black px-4 py-2 shadow-brutal-sm">
                {" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <div className="w-3 h-3 bg-brutal-black rounded-full animate-pulse" />{" "}
                  <span className="font-bold uppercase text-xs">
                    Available for work
                  </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default HeroSection;
