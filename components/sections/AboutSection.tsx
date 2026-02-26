import React from 'react';
import BrutalSection from '../brutal/BrutalSection';
import BrutalCard from '../brutal/BrutalCard';
import { Coffee, GraduationCap, Trophy, Lightbulb } from 'lucide-react';
import Sticker from '../brutal/Sticker';

const AboutSection: React.FC = () => {
  return (
    <BrutalSection id="about" bgColor="gray" className="relative overflow-hidden">
      {/* Background Stickers */}
      <Sticker className="top-20 right-[5%]" rotate={12} color="bg-brutal-yellow">
        <Coffee size={24} strokeWidth={3} />
      </Sticker>
      <Sticker className="bottom-40 left-[2%]" rotate={-15} color="bg-brutal-blue">
        <GraduationCap size={24} strokeWidth={3} />
      </Sticker>
      <Sticker className="top-1/2 right-[2%]" rotate={8} color="bg-brutal-pink">
        <Trophy size={24} strokeWidth={3} />
      </Sticker>
      <Sticker className="bottom-[10%] right-[10%]" rotate={-5} color="bg-brutal-green">
        <Lightbulb size={24} strokeWidth={3} />
      </Sticker>

      <div className="space-y-12 relative z-20">
        {/* Section Header */}
        <div className="border-5 border-brutal-black bg-brutal-black p-4 inline-block">
          <h2 className="text-brutal-white font-space-grotesk font-bold uppercase">
            About Me
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Bio - Takes 2 columns */}
          <div className="lg:col-span-2">
            <BrutalCard bgColor="white" rotate={-0.5}>
              <h3 className="font-bold text-2xl md:text-3xl uppercase mb-6 border-b-4 border-brutal-black pb-4">
                Who I Am
              </h3>

              <div className="space-y-4 text-base md:text-lg leading-relaxed">
                <p>
                  I&apos;m <strong className="font-bold">Abeer Srivastava</strong>, a{' '}
                  <strong className="font-bold">Full-Stack Developer</strong> who loves building
                  scalable, real-time and cloud-native applications that solve meaningful problems.
                </p>

                <p>
                  My journey into tech started with curiosity—breaking things, fixing them,
                  and wondering <em>why</em> they worked in the first place. Over the years, that
                  curiosity turned into a passion for engineering systems that are not just
                  functional, but thoughtful, elegant, and built to last.
                </p>

                <p>
                  I enjoy working at the intersection of{' '}
                  <strong className="font-bold">clean architecture</strong>,{' '}
                  <strong className="font-bold">developer experience</strong>, and{' '}
                  <strong className="font-bold">performance</strong>. Whether it&apos;s designing APIs,
                  crafting intuitive UI flows, or optimizing backend services, I love transforming
                  ideas into smooth, reliable and production-ready systems.
                </p>

                <p>
                  Beyond code, I value clarity, craftsmanship, and the belief that every product
                  is a story—one that deserves to be built with intention and impact.
                </p>
              </div>

              <div className="mt-8 p-4 bg-brutal-green border-3 border-brutal-black">
                <p className="font-bold uppercase text-sm md:text-base text-center">
                  I love building systems that feel effortless — even when the engineering isn&apos;t.
                </p>
              </div>
            </BrutalCard>
          </div>

          {/* Stats & Quick Facts */}
          <div className="space-y-6">
            {/* Stats Callout */}
            <BrutalCard bgColor="green" rotate={1} hover={true}>
              <h3 className="font-bold text-xl uppercase mb-4">Quick Stats</h3>
              <div className="space-y-3 font-jetbrains-mono">
                <div className="flex justify-between items-center border-b-2 border-brutal-black pb-2">
                  <span className="font-bold">Projects:</span>
                  <span className="text-2xl font-bold">4+</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-brutal-black pb-2">
                  <span className="font-bold">GPA:</span>
                  <span className="text-2xl font-bold">8.6/10</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-brutal-black pb-2">
                  <span className="font-bold">Workshops:</span>
                  <span className="text-2xl font-bold">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Coffee:</span>
                  <span className="text-2xl font-bold">∞</span>
                </div>
              </div>
            </BrutalCard>

            {/* Focus Areas */}
            <BrutalCard bgColor="white" rotate={-1.5} hover={true}>
              <h3 className="font-bold text-lg uppercase mb-4">Focus Areas</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brutal-black shrink-0 mt-1" />
                  <span className="font-bold text-sm">Cloud-native architectures</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brutal-black shrink-0 mt-1" />
                  <span className="font-bold text-sm">AI/ML integration</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brutal-black shrink-0 mt-1" />
                  <span className="font-bold text-sm">System design & performance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brutal-black shrink-0 mt-1" />
                  <span className="font-bold text-sm">Full-stack TypeScript</span>
                </div>
              </div>
            </BrutalCard>
          </div>
        </div>

        {/* Education & Leadership Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <BrutalCard bgColor="white" rotate={0.5}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brutal-pink border-3 border-brutal-black flex items-center justify-center">
                <span className="text-brutal-white font-bold text-xl">🎓</span>
              </div>
              <h3 className="font-bold text-xl uppercase">Education</h3>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-lg">B.Tech – Computer Science & Engineering</p>
              <p className="text-base">Shri Ramswaroop Memorial College of Engineering & Management</p>
              <p className="text-sm font-jetbrains-mono">
                2022 – Present • GPA: <span className="font-bold text-brutal-pink">8.6 / 10</span>
              </p>
            </div>
          </BrutalCard>

          {/* Leadership */}
          <BrutalCard bgColor="white" rotate={-0.5}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-brutal-blue border-3 border-brutal-black flex items-center justify-center">
                <span className="text-brutal-black font-bold text-xl">💼</span>
              </div>
              <h3 className="font-bold text-xl uppercase">Leadership</h3>
            </div>

            <p className="font-bold text-lg mb-3">Technical Member – CSI SRMCEM</p>
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-brutal-black font-bold">▸</span>
                <span>Organized & assisted in <strong>5+ workshops</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brutal-black font-bold">▸</span>
                <span>Built MERN event platform for registrations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brutal-black font-bold">▸</span>
                <span>Helped <strong>200+ students</strong> with sessions</span>
              </li>
            </ul>
          </BrutalCard>
        </div>
      </div>
    </BrutalSection>
  );
};

export default AboutSection;
