"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import GradientText from "../../components/GradientText";
import GlitchText from "@/components/GlitchText";
import ScrambledText from "@/components/ScrambledText";
import { useRouter } from "next/navigation";
import { useNavigate } from "react-router-dom";

function Hero() {
  // const navigate=useNavigate();
  const router=useRouter();
  const handleResumeClick=()=>{
    router.push("/https://drive.google.com/file/d/1hwBwdHzakJ4z1I2bgMA0YFWkDcQuUwH0/view?usp=sharing")
  }
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
        <div className="flex flex-col leading-tight mt-5">
          <GlitchText
            speed={1}
            enableShadows
            enableOnHover
            className="limelight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
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
          <p className="text-zinc-700"><span className="text-[#4c41bf]">Full-Stack Developer </span><br />I passionate about building scalable
          applications, exploring AI/ML, and designing cloud-native
          solutions. <br /><span className="text-[#4c41bf]">I love turning ideas into reality through code.</span></p>
          
        </ScrambledText>
      {/* Image */}
      <div className="mt-0">
        <Image
          src="/images/me.jpg"
          alt="Abeer Srivastava"
          width={256}
          height={256}
          className="
            w-48 h-48  sm:w-60 sm:h-60 md:w-72 md:h-72 
            rounded-full shadow-2xl border-4 border-indigo-700/20 
            object-cover
          "
        />
      </div>
      </div>

      <div className="mt-10 flex flex-row justify-center gap-15 items-between space-x-3">
         <div>
           <Button onClick={() => router.push("/projects")} className="px-6 py-3 text-lg font-semibold  bg-[#4c41bf] hover:bg-indigo-700 rounded-2xl">
            View Projects
          </Button>
         </div>
          {/* https://drive.google.com/file/d/1hwBwdHzakJ4z1I2bgMA0YFWkDcQuUwH0/view?usp=sharing */}
          <div>
              <Button onClick={()=>handleResumeClick()} variant="default" className="px-6 py-3 text-[#4c41bf] text-lg font-semibold rounded-2xl bg-indigo-200 hover:bg-indigo-300">
              Download Resume
          </Button>
          </div>
          
        </div>
    </section>
  );
}

export default Hero;
