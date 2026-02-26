import React from 'react';
import BrutalSection from '../brutal/BrutalSection';
import BrutalCard from '../brutal/BrutalCard';

const certifications = [
  { name: 'Oracle OCI 2025 AI', provider: 'Oracle', color: 'green' as const },
  { name: 'Tata Cybersecurity', provider: 'Tata', color: 'pink' as const },
  { name: 'IBM Data Science', provider: 'IBM', color: 'blue' as const },
  { name: 'IBM Cloud', provider: 'IBM', color: 'blue' as const },
  { name: 'Google Cloud', provider: 'Google', color: 'white' as const },
  { name: 'Big Data Foundation', provider: 'IBM', color: 'pink' as const },
];

const CertificationsSection: React.FC = () => {
  return (
    <BrutalSection id="certifications" bgColor="white">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="border-5 border-brutal-black bg-brutal-blue p-4 inline-block">
          <h2 className="text-brutal-black font-space-grotesk font-bold uppercase">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <BrutalCard
              key={cert.name}
              bgColor={cert.color}
              rotate={index % 2 === 0 ? 0.5 : -0.5}
              className="text-center"
            >
              <div className="space-y-3">
                <div className="font-bold text-lg md:text-xl uppercase">
                  {cert.name}
                </div>
                <div className="text-sm font-jetbrains-mono opacity-80">
                  {cert.provider}
                </div>
              </div>
            </BrutalCard>
          ))}
        </div>
      </div>
    </BrutalSection>
  );
};

export default CertificationsSection;
