import React from 'react';
import BrutalSection from '../brutal/BrutalSection';
import BrutalButton from '../brutal/BrutalButton';

const contactLinks = [
  {
    label: '📧 EMAIL',
    href: 'mailto:abeersrivastava16@gmail.com',
    variant: 'primary' as const,
  },
  {
    label: '💼 LINKEDIN',
    href: 'https://www.linkedin.com/in/abeer-srivastava-a90797290',
    variant: 'secondary' as const,
  },
  {
    label: '💻 GITHUB',
    href: 'https://github.com/abeer-srivastava',
    variant: 'secondary' as const,
  },
  {
    label: '📄 RESUME',
    href: 'https://drive.google.com/file/d/1hwBwdHzakJ4z1I2bgMA0YFWkDcQuUwH0/view?usp=sharing',
    variant: 'danger' as const,
  },
];

const ContactSection: React.FC = () => {
  return (
    <BrutalSection id="contact" bgColor="green">
      <div className="space-y-12 text-center">
        {/* Section Header */}
        <div className="space-y-6">
          <div className="border-5 border-brutal-black bg-brutal-black p-6 inline-block">
            <h2 className="text-brutal-white font-space-grotesk font-bold uppercase text-3xl md:text-5xl">
              LET&apos;S BUILD SOMETHING
            </h2>
          </div>

          <p className="text-lg md:text-xl font-bold max-w-2xl mx-auto">
            Whether you want to collaborate, discuss a project, or just say hi — feel free to connect.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {contactLinks.map((link) => (
            <BrutalButton
              key={link.label}
              variant={link.variant}
              href={link.href}
              download={link.label.includes('RESUME')}
            >
              {link.label}
            </BrutalButton>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t-4 border-brutal-black">
          <p className="font-jetbrains-mono text-sm md:text-base">
            © 2025 Abeer Srivastava. Built with Next.js, TypeScript & Neo-Brutalism.
          </p>
          <p className="font-bold text-xs md:text-sm mt-2 uppercase">
            Not interested in fluff. Interested in engineering that works.
          </p>
        </div>
      </div>
    </BrutalSection>
  );
};

export default ContactSection;
