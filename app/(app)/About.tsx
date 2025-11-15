import GlitchText from "@/components/GlitchText";
import { BriefcaseBusiness } from "lucide-react";
import { FaGraduationCap, FaUser } from "react-icons/fa6";


function About() {
  return (
    <section className="limelight z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 bg-inherit text-gray-700 backdrop-blur-sm transition-shadow p-4 w-[60%] h-auto mt-20 rounded-2xl">
     <div className="flex flex-row justify-baseline items-baseline">       
        <FaUser size={30} className="text-[#4c41bf] font-bold mx-1"/>
        <h3 className="text-zinc-900 text-4xl font-semibold mb-6 my-2">
        About Me
        </h3>

     </div>

      <div className="text-lg bg-inherit rounded-xl p-6 max-w-3xl mx-auto text-gray-700  space-y-6 leading-relaxed backdrop-blur-md transition-shadow ">
        {/* Intro */}
        <p >
          I'm <b className="text-indigo-800">Abeer Srivastava</b>, a passionate <b className="text-indigo-800">Full-Stack Developer</b> focused on
          building scalable, real-time, and cloud-native applications. I love turning
          complex ideas into clean, efficient, and user-focused digital solutions.
        </p>

        {/* What I Do */}
        <p>
          I specialize in <b className="text-indigo-800">Full-Stack Development</b>, <b className="text-indigo-800">Cloud Computing</b>, and exploring <b className="text-indigo-800">AI/ML</b> 
          to build smarter and more efficient products. My experience includes <b className="text-indigo-800">secure backends,
          intuitive UIs, real-time collaboration features, and AI-powered systems.</b>
        </p>

        {/* Tech Stack Card */}
        {/* Tech Stack Marquee Card */}
<div className="bg-white/70 rounded-xl p-6 shadow-sm">
  <h4 className="text-xl font-semibold text-zinc-900 mb-4 text-center">
    Technologies I Work With
  </h4>

            {/* Marquee */}
            <div className="marquee w-full">
              <div className=" marquee-content text-gray-700 font-medium text-lg space-x-10 ">
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">JavaScript</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">TypeScript</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Python</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">C++</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">SQL</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">React.js</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Next.js</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">TailwindCSS</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Framer Motion</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Node.js</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Express.js</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">WebSockets</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">REST APIs</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">MongoDB</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">PostgreSQL</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">MySQL</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">AWS</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Google Cloud</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">IBM Cloud</span>

                {/* Duplicate for infinite looping */}
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">JavaScript</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">TypeScript</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Python</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">C++</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">SQL</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">React.js</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Next.js</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">TailwindCSS</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Framer Motion</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Node.js</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Express.js</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">WebSockets</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">REST APIs</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">MongoDB</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">PostgreSQL</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">MySQL</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">AWS</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">Google Cloud</span>
                <span className="px-4 py-1 rounded-md bg-linear-to-r from-indigo-500/20 to-indigo-500/30  text-indigo-900 shadow-md">IBM Cloud</span>
              </div>
            </div>
          </div>


        {/* Education Card */}
        {/* Education + Experience Section */}
<div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* Education Card */}
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-semibold text-zinc-900 mb-3 flex items-center gap-2">
        <FaGraduationCap size={35} className="text-[#4c41bf] " /> Education
      </h4>

      <div className="space-y-1 text-gray-700">
        <p className="font-semibold text-lg">
          B.Tech – Computer Science & Engineering
        </p>
        <p className="text-gray-600 text-sm">
          Shri Ramswaroop Memorial College of Engineering & Management  
          <span className="block text-gray-500 text-xs">(2022 – Present)</span>
        </p>
        <p className="text-gray-500 text-sm mt-2">
          GPA: <span className="font-semibold text-indigo-700">8.6 / 10.0</span>
        </p>
      </div>
    </div>

    {/* Experience Card */}
    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-semibold text-zinc-900 mb-3 flex flex-1 flex-row justify-baseline items-center gap-2">
        <BriefcaseBusiness  strokeWidth={3} size={34} className="text-[#4c41bf]"/> Leadership
      </h4>

      <div className="space-y-1 text-gray-700">
        <p className="font-semibold text-lg">
          Technical Member – Computer Society of India (CSI) SRMCEM
        </p>

        <p className="text-gray-600 text-sm leading-relaxed">
          <ul>
          <li>Conducted and assisted in <span className="font-semibold text-indigo-800">5+ technical workshops</span>.</li>  
          <li>Built a MERN-based event registration platform.</li>  
          <li>Impacted <span className="font-semibold text-indigo-700">200+ students</span> through hands-on sessions.</li>
          </ul>
        </p>
      </div>
    </div>

  </div>


        {/* Closing Line */}
        <p className="text-[#4c41bf] text-lg">
          I love solving problems that matter and crafting systems that feel effortless — even when the engineering behind them isn’t.
        </p>
      </div>
    </section>
  );
}

export default About;
