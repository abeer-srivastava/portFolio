"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import GradientText from "../../components/GradientText";
import GlitchText from "@/components/GlitchText";
import ScrambledText from "@/components/ScrambledText";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();
  
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1hwBwdHzakJ4z1I2bgMA0YFWkDcQuUwH0/view?usp=sharing", "_blank");
  };

  return (
    <section className="
      min-h-screen 
      w-full md:w-[80%] lg:w-[70%] xl:w-[60%]
      mx-auto
      flex flex-col items-center justify-center
      text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20
      bg-inherit text-[#D6E6F2]
      backdrop-blur-md
      transition-shadow rounded-4xl border-2 border-[#4c41bf]/20
      mt-5
    ">
      <div className="max-w-4xl w-full flex flex-col items-center gap-3 sm:gap-4 md:gap-6">
        
        {/* Main Heading */}
        <div className="flex flex-col leading-tight mt-2 sm:mt-3 md:mt-5">
          <GlitchText
            speed={1}
            enableShadows
            enableOnHover
            className="limelight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold"
          >
            Hi, I'm Abeer
          </GlitchText>

          <GlitchText
            speed={1}
            enableShadows
            enableOnHover
            className="limelight text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold"
          >
            Srivastava
          </GlitchText>
        </div>

        {/* Image - Moved up for better mobile flow */}
        <div className="mt-4 sm:mt-6 md:mt-8 mb-0 sm:mb-1 md:mb-2">
          <Image
            src="/images/me.jpg"
            alt="Abeer Srivastava"
            width={256}
            height={256}
            className="
              w-full h-full max-w-[256px]
              rounded-full shadow-2xl border-4 border-indigo-700/20 
              object-cover
            "
          />
        </div>

        {/* Subtitle */}
        <ScrambledText
          className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-700 max-w-3xl px-2 mb-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent"
          radius={120}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          <p className="text-zinc-700 leading-relaxed">
            <span className="text-[#4c41bf]">Full-Stack Developer</span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            I passionate about building scalable applications, exploring AI/ML, and designing cloud-native solutions.
            <br />
            <span className="text-[#4c41bf]">I love turning ideas into reality through code.</span>
          </p>
        </ScrambledText>
      </div>

      {/* Buttons */}
      <div className="mt-3 sm:mt-6 md:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none px-4 ">
        <Button 
          onClick={() => router.push("/projects")} 
          className="
            w-full sm:w-auto
            px-6 py-3 
            text-base sm:text-lg 
            font-semibold 
            bg-[#4c41bf] hover:bg-indigo-700 
            rounded-2xl
            transition-all
            h-full
          "
        >
          View Projects
        </Button>
        
        <Button 
          onClick={handleResumeClick} 
          variant="default" 
          className="
            w-full sm:w-auto
            px-6 py-3 
            text-[#4c41bf] 
            text-base sm:text-lg 
            font-semibold 
            rounded-2xl 
            bg-indigo-200 hover:bg-indigo-300
            transition-all h-full
          "
        >
          Download Resume
        </Button>
      </div>
    </section>
  );
}

export default Hero;