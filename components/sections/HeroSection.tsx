import React from "react";
import BrutalButton from "../brutal/BrutalButton";
import Image from "next/image";
import { Terminal, Code, Cpu, Database, Layout, Smartphone } from "lucide-react";

const Sticker = ({ children, className, rotate = 0, color = 'bg-brutal-white' }: { children: React.ReactNode, className: string, rotate?: number, color?: string }) => (
  <div 
    className={`absolute border-3 border-brutal-black shadow-[4px_4px_0_0_#000] p-3 ${color} ${className} flex items-center justify-center transition-transform hover:scale-110 cursor-default`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    {children}
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-brutal-yellow pt-26 md:pt-28 px-4 md:px-8 lg:px-8 relative overflow-hidden"
    >
      {/* Background Stickers */}
      <div className="absolute inset-0 pointer-events-none">
        <Sticker className="top-24 left-[10%]" rotate={-12} color="bg-brutal-blue">
          <Terminal size={32} strokeWidth={3} />
        </Sticker>
        <Sticker className="top-40 right-[15%]" rotate={8} color="bg-brutal-pink">
          <Code size={40} strokeWidth={3} />
        </Sticker>
        <Sticker className="bottom-64 left-[15%]" rotate={15} color="bg-brutal-green">
          <Database size={32} strokeWidth={3} />
        </Sticker>
        <Sticker className="bottom-48 right-[10%]" rotate={-10} color="bg-brutal-pink">
          <Layout size={36} strokeWidth={3} />
        </Sticker>
        <Sticker className="top-1/2 left-[5%]" rotate={5} color="bg-brutal-pink">
          <Cpu size={28} strokeWidth={3} />
        </Sticker>
        <Sticker className="top-1/4 right-[5%]" rotate={-5} color="bg-brutal-blue">
          <Smartphone size={32} strokeWidth={3} />
        </Sticker>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="border-5 border-brutal-black bg-brutal-white p-6 shadow-brutal hover:rotate-[1deg] transition-transform duration-300 ease-in-out relative">
              <h1 className="font-space-grotesk font-extrabold uppercase leading-none text-4xl md:text-6xl lg:text-7xl">
                HI, I&apos;M <br />
                <span className="bg-brutal-pink px-2 border-3 border-brutal-black inline-block my-2">ABEER</span> <br />
                <span className="text-brutal-blue">SRIVASTAVA</span>
              </h1>
            </div>

            <div className="border-4 border-brutal-black bg-brutal-black p-6 shadow-brutal-sm -rotate-1 hover:rotate-0 transition-transform duration-300 ease-in-out">
              <p className="text-brutal-white text-lg md:text-xl font-bold leading-relaxed">
                Full-Stack Developer building <span className="text-brutal-yellow">scalable</span>, <span className="text-brutal-green">AI-powered</span> products
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <BrutalButton variant="primary" href="#projects">
                VIEW PROJECTS
              </BrutalButton>
              <BrutalButton variant="secondary" href="https://drive.google.com/file/d/1hwBwdHzakJ4z1I2bgMA0YFWkDcQuUwH0/view?usp=sharing">
                RESUME
              </BrutalButton>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden md:flex items-center gap-3 mt-12">
              <div className="w-12 h-12 border-3 border-brutal-black bg-brutal-white flex items-center justify-center shadow-[4px_4px_0_0_#000]">
                <svg
                  className="w-6 h-6 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={3}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
              <span className="font-bold uppercase text-sm">Scroll to explore</span>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="border-5 border-brutal-black shadow-brutal-lg rotate-3 bg-brutal-black overflow-hidden w-64 h-64 md:w-96 md:h-96 hover:rotate-0 transition-transform duration-300 ease-in-out relative">
                <div className="absolute inset-0 bg-brutal-blue opacity-10 z-10 pointer-events-none" />
                <Image
                  src="/images/me.jpg"
                  alt="Abeer Srivastava"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-6 -right-6 bg-brutal-green border-4 border-brutal-black px-6 py-3 shadow-brutal-sm rotate-[-4deg] hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brutal-black rounded-full animate-pulse" />
                  <span className="font-bold uppercase text-sm">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// export default HeroSection;
