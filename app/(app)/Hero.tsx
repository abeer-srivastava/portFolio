"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import GradientText from "../../components/GradientText";
import GlitchText from "@/components/GlitchText";
import ScrambledText from "@/components/ScrambledText";

function Hero() {
  return (
    <section className="
      min-h-screen 
      w-[60%] 
      flex flex-col items-center justify-center
      text-center px-6 py-20
      bg-inherit text-[#D6E6F2]
      backdrop-blur-sm
      transition-shadow rounded-2xl
    ">
      {/* Text Container */}
      <div className="max-w-4xl flex flex-col items-center gap-4">
        
        {/* Main Heading */}
        <div className="flex flex-col leading-tight mt-20">
          <GlitchText
            speed={1}
            enableShadows
            enableOnHover
            className="limelight text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold"
          >
            Hi, I'm Abeer
          </GlitchText>

          <GlitchText
            speed={1}
            enableShadows
            enableOnHover
            className="limelight text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold"
          >
            Srivastava
          </GlitchText>
        </div>

        {/* Subtitle */}
        <ScrambledText
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 max-w-3xl"
          radius={120}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          <p className="text-zinc-700"><span className="text-indigo-700">Full-Stack Developer </span><br />I passionate about building scalable
          applications, exploring AI/ML, and designing cloud-native
          solutions. I love turning ideas into reality through code.</p>
          
        </ScrambledText>
      {/* Image */}
      <div className="mt-2">
        <Image
          src="/images/me.jpg"
          alt="Abeer Srivastava"
          width={256}
          height={256}
          className="
            w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 
            rounded-full shadow-xl border-4 border-white/20 
            object-cover
          "
        />
      </div>
      </div>

      <div className="mt-10 flex gap-4">
          <Button className="px-6 py-3 text-lg font-semibold rounded-xl bg-indigo-500 hover:bg-indigo-600">
            View Projects
          </Button>
          <Button variant="default" className="px-6 py-3 text-indigo-700 text-lg font-semibold rounded-xl bg-indigo-200 hover:bg-indigo-300">
            Download Resume
          </Button>
        </div>
    </section>
  );
}

export default Hero;
