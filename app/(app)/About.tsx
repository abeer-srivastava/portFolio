import { FaGraduationCap, FaUser } from "react-icons/fa6";
import { BriefcaseBusiness } from "lucide-react";

function About() {
  return (
    <section
      className="
    min-h-screen 
      w-full md:w-[80%] lg:w-[70%] xl:w-[60%]
      mx-auto
      flex flex-col items-center justify-center
      text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20
      bg-inherit text-[#D6E6F2]
      backdrop-blur-md
      transition-shadow  rounded-4xl border-2 border-[#4c41bf]/20
      mt-5
      "
    >
      {/* Heading */}
      <div className="flex items-center gap-3 mb-10">
        <FaUser className="text-[#4c41bf]" size={30} />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
          About Me
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full">
        
       {/* LEFT SIDE — Intro + Bio */}
<div
  className="
    bg-white/70 backdrop-blur-xl 
    p-6 sm:p-8 
    rounded-3xl shadow-lg border border-gray-200
    space-y-6
  "
>
  <h3 className="text-2xl font-bold text-zinc-900">Who I Am</h3>

  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
    I'm <b className="text-[#4c41bf]">Abeer Srivastava</b>, a 
    <b className="text-[#4c41bf]"> Full-Stack Developer</b> who loves building 
    scalable, real-time and cloud-native applications that solve meaningful problems.
  </p>

  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
    My journey into tech started with curiosity—breaking things, fixing them,
    and wondering *why* they worked in the first place. Over the years, that
    curiosity turned into a passion for engineering systems that are not just
    functional, but thoughtful, elegant, and built to last.
  </p>

  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
    I enjoy working at the intersection of 
    <b className="text-[#4c41bf]  "> clean architecture</b>,
    <b className="text-[#4c41bf]"> developer experience</b>, and 
    <b className="text-[#4c41bf]"> performance</b>.  
    Whether it’s designing APIs, crafting intuitive UI flows, or optimizing
    backend services, I love transforming ideas into smooth, reliable 
    and production-ready systems.
  </p>
  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
    Beyond code, I value clarity, craftsmanship, and the belief that every product 
    is a story—one that deserves to be built with intention and impact.
  </p>
</div>

        {/* RIGHT SIDE — Tech + Education + Leadership */}
        <div className="space-y-6">

          {/* Tech Stack */}
          <div className="
            bg-white/70 backdrop-blur-xl 
            p-6 sm:p-8 
            rounded-3xl shadow-lg border border-gray-200
          ">
            <h3 className="text-xl font-semibold text-zinc-900 mb-4">
              Technologies I Work With
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "JavaScript", "TypeScript", "Python", "C++",
                "React.js", "Next.js", "Tailwind", "Node.js",
                "Express.js", "MongoDB", "PostgreSQL", "MySQL",
                "AWS", "GCP", "WebSockets"
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3 py-1.5 text-sm font-medium 
                    rounded-lg 
                    bg-gradient-to-r from-indigo-500/10 to-indigo-600/10
                    text-indigo-900 
                    shadow-sm border border-indigo-200/30
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="
            bg-white/70 backdrop-blur-xl 
            p-6 sm:p-7 
            rounded-3xl shadow-lg border border-gray-200
          ">
            <div className="flex items-center gap-3 mb-3">
              <FaGraduationCap className="text-[#4c41bf]" size={26} />
              <h3 className="text-xl font-semibold text-zinc-900">Education</h3>
            </div>

            <p className="font-semibold text-base sm:text-lg text-zinc-900">
              B.Tech – Computer Science & Engineering
            </p>

            <p className="text-gray-900 text-sm sm:text-base mt-1">
              Shri Ramswaroop Memorial College of Engineering & Management  
            </p>

            <p className="text-gray-500 text-sm mt-1">
              2022 – Present • GPA: <span className="text-indigo-700 font-semibold">8.6 / 10</span>
            </p>
          </div>

          {/* Leadership */}
          <div className="
            bg-white/70 backdrop-blur-xl 
            p-6 sm:p-7 
            rounded-3xl shadow-lg border border-gray-200
          ">
            <div className="flex items-center gap-3 mb-3">
              <BriefcaseBusiness className="text-[#4c41bf]" size={26} />
              <h3 className="text-xl font-semibold text-zinc-900">Leadership</h3>
            </div>

            <p className="font-semibold text-base sm:text-lg text-zinc-900">
              Technical Member – CSI SRMCEM
            </p>

            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mt-3 space-y-1">
              <li>Organized & assisted in <b className="text-indigo-700">5+ workshops</b></li>
              <li>Built MERN event platform for registrations</li>
              <li>Helped <b className="text-indigo-700">200+ students</b> with sessions</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-[#4c41bf] font-medium text-base sm:text-lg">
        I love building systems that feel effortless — even when the engineering isn’t.
      </p>
    </section>
  );
}

export default About;
