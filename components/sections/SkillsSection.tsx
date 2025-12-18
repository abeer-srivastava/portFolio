import React from 'react';
import BrutalSection from '../brutal/BrutalSection';
import BrutalCard from '../brutal/BrutalCard';

interface SkillCategory {
  title: string;
  skills: string[];
  bgColor: 'lime' | 'blue' | 'pink' | 'white';
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
    bgColor: 'lime',
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
    <BrutalSection id="skills" bgColor="white">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="border-5 border-brutal-black bg-brutal-lime p-4 inline-block">
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

        {/* Additional Tools & Technologies */}
        <div className="mt-12">
          <BrutalCard bgColor="gray" rotate={0} hover={true}>
            <h3 className="font-bold text-xl uppercase mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Git',
                'GitHub',
                'Docker',
                'Vercel',
                'Turborepo',
                'Prisma ORM',
                'NextAuth',
                'Zod',
                'Resend',
                'Gemini API',
              ].map((tool) => (
                <div
                  key={tool}
                  className="px-3 py-2 bg-brutal-white border-2 border-brutal-black font-bold text-sm uppercase hover:-translate-y-1 transition-transform duration-brutal hover:bg-brutal-lime"
                >
                  {tool}
                </div>
              ))}
            </div>
          </BrutalCard>
        </div>
      </div>
    </BrutalSection>
  );
};

export default SkillsSection;
