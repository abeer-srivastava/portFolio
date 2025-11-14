"use client";
import { useScroll } from "framer-motion";
import { CharacterV2 } from "./ui/skiper-ui/skiper31";
import { useRef } from "react";

export default function Skiper31Demo3(){
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

    const macIcon = [
    "data:image/png;base64,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",
    "/mac/figma.png",
    "/mac/Framer.png",
    "/mac/Github.png",
    "/mac/Monog.png",
    "/mac/notion.png",
    "/mac/Pieces.png",
    "/mac/Postman.png",
    "/mac/vsCode.png",
  ];
  const iconCenterIndex = Math.floor(macIcon.length / 2);

  return (
   <div
      ref={targetRef}
      className="relative box-border flex h-[210vh] items-center justify-center gap-[2vw] overflow-hidden bg-[#f5f4f3] p-[2vw]"
    >
      <div
        className="font-geist w-full max-w-4xl text-center text-6xl font-bold uppercase tracking-tighter text-black"
        style={{
          perspective: "500px",
        }}
      >
        {macIcon.map((icon, index) => (
          <CharacterV2
            key={index}
            char={icon}
            index={index}
            centerIndex={iconCenterIndex}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}