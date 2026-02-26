import React from 'react';
import BrutalSection from '../brutal/BrutalSection';
import BrutalCard from '../brutal/BrutalCard';
import BrutalTerminal from '../brutal/BrutalTerminal';
import Sticker from '../brutal/Sticker';
import { Coffee, GraduationCap, Lightbulb, Trophy } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
  bgColor: 'green' | 'blue' | 'pink' | 'white';
}

const skillCategories: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
    bgColor: 'white',
  },
  {
    title: 'FRONTEND',
    skills: ['React.js', 'Next.js', 'TailwindCSS', 'Framer Motion'],
    bgColor: 'green',
  },
  {
    title: 'BACKEND',
    skills: ['Node.js', 'Express.js', 'WebSockets', 'REST APIs'],
    bgColor: 'blue',
  },
  {
    title: 'CLOUD & DATA',
    skills: ['AWS', 'GCP', 'IBM Cloud', 'MongoDB', 'PostgreSQL', 'MySQL'],
    bgColor: 'pink',
  },
];

const SkillsSection: React.FC = () => {
  return (
    <BrutalSection id="skills" bgColor="white" className="relative overflow-hidden">
      <Sticker className="bottom-20 left-[5%]" rotate={12} color="bg-brutal-yellow">
        <GraduationCap size={24} strokeWidth={3} />
      </Sticker>
      <Sticker className="top-40 right-[2%]" rotate={-15} color="bg-brutal-blue">
        <Trophy size={24} strokeWidth={3} />
      </Sticker>
      <Sticker className="bottom-1/2 left-[2%]" rotate={8} color="bg-brutal-pink">
        <Lightbulb size={24} strokeWidth={3} />
      </Sticker>
      <Sticker className="top-[70%] right-[10%]" rotate={-5} color="bg-brutal-green">
        <Coffee size={24} strokeWidth={3} />
      </Sticker>
      <div className="space-y-12">
        {/* Section Header */}
        <div className="border-5 border-brutal-black bg-brutal-green p-4 inline-block">
          <h2 className="text-brutal-black font-space-grotesk font-bold uppercase">
            Technical Skills
          </h2>
        </div>

        {/* Skills Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            // Create asymmetric rotation
            const rotations = [0.5, -1, 1.5, -0.5];
            const rotation = rotations[index % rotations.length];

            return (
              <BrutalCard
                key={category.title}
                bgColor={category.bgColor}
                rotate={rotation}
                className="h-full"
              >
                <h3 className="font-bold text-lg md:text-xl uppercase mb-4 pb-3 border-b-3 border-brutal-black">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 font-jetbrains-mono text-sm md:text-base"
                    >
                      <span className="w-2 h-2 bg-brutal-black flex-shrink-0" />
                      <span className="font-bold">{skill}</span>
                    </li>
                  ))}
                </ul>
              </BrutalCard>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Terminal Section */}
          <div className="lg:col-span-2">
            <BrutalTerminal 
              commands={[
                { cmd: "whoami", output: "abeer-srivastava (Full-Stack Engineer)" },
                { cmd: "ls passions/", output: "scalable-systems/ ai-integration/ clean-code/ performance-opt/" },
                { cmd: "git commit -m 'build the future'", output: "[main 4f2e8a1] 10 files changed, 452 insertions(+)" }
              ]}
            />
          </div>

          {/* Additional Tools & Technologies */}
          <div className="h-full">
            <BrutalCard bgColor="gray" rotate={1} hover={true} className="h-full">
              <h3 className="font-bold text-xl uppercase mb-4">Core Tools</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Git',
                  'Docker',
                  'Vercel',
                  'Turborepo',
                  'Prisma',
                  'Zod',
                  'Gemini',
                  'Github',
                  'Gitlab',
                  'Postman',
                  'Figma',
                  'Framer Motion',
                  'TailwindCSS',
                  'WebSockets',
                  'REST APIs',
                  'AWS',
                  'GCP',
                  'MySQL',
                ].map((tool) => (
                  <div
                    key={tool}
                    className="px-3 py-1 bg-brutal-white border-2 border-brutal-black font-bold text-xs uppercase hover:-translate-y-1 transition-transform duration-brutal hover:bg-brutal-green"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </BrutalCard>
          </div>
        </div>
      </div>
    </BrutalSection>
  );
};

export default SkillsSection;


// export default SkillsSection;
