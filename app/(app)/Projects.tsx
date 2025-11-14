import { Code2, Github, ExternalLink, Cpu, LayoutDashboard, Brain, Network } from "lucide-react";
import { FaGithub, FaCode, FaLaptopCode } from "react-icons/fa6";

function Projects() {
  return (
    <section className="limelight z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 bg-inherit text-gray-700 backdrop-blur-sm transition-shadow p-4 w-[65%] h-auto mt-20 rounded-2xl">

      {/* Heading */}
      <div className="flex flex-row justify-center items-center mb-8">
        <FaLaptopCode size={34} className="text-indigo-700 mr-2" />
        <h3 className="text-zinc-900 text-4xl font-semibold">Projects</h3>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-6">

        {/* Project Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all">
          <h4 className="text-2xl font-semibold text-zinc-900 mb-3 flex items-center gap-2">
            <Code2 className="text-indigo-700" size={30} />  
            PixieDraw
          </h4>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
           A secure, anonymous messaging platform built with Next.js featuring AI-powered message suggestions, real-time inbox updates, and privacy-focused authentication using NextAuth, JWT, and email verification. <br /> 
           <span className="text-indigo-800">Stack: Turborepo, Next.js, NextAuth, WebSockets, Node.js, PostgreSQL, TypeScript.</span>
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/abeer-srivastava/EchoBox" className="flex items-center gap-2 text-indigo-700 font-medium hover:underline">
              <FaGithub /> Code
            </a>
            <a href="https://echo-box-theta.vercel.app/" className="flex items-center gap-2 text-indigo-700 font-medium hover:underline">
              <ExternalLink /> Demo(might be down due to clusture seizures)
            </a>
          </div>
        </div>

        {/* Project Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all">
          <h4 className="text-2xl font-semibold text-zinc-900 mb-3 flex items-center gap-2">
            <LayoutDashboard className="text-indigo-700" size={30} />
            EchoBox
          </h4>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            A secure, anonymous messaging platform built with Next.js featuring AI-powered message suggestions, real-time inbox updates, and privacy-focused authentication using NextAuth, JWT, and email verification.
            <br />
            <span className="text-indigo-800">Stack: Next.js, React, Tailwind, NextAuth, MongoDB, Resend, Gemini API, Zod.</span>
            
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/abeer-srivastava/pixieDraw" className="flex items-center gap-2 text-indigo-700 font-medium hover:underline">
              <FaGithub /> Code
            </a>
            <a href="#" className="flex items-center gap-2 text-indigo-700 font-medium hover:underline">
              <ExternalLink /> View(coming soon)
            </a>
          </div>
        </div>
        {/* project card */}
              <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all">
          <h4 className="text-2xl font-semibold text-zinc-900 mb-3 flex items-center gap-2">
            <Brain className="text-indigo-700" size={30} />
            SecondBrain
          </h4>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            A full-stack knowledge hub to save, tag, and share your digital content — from articles to tweets — with a clean UI and secure backend. <br /> Second Brain turns scattered information into an organized, searchable, and shareable personal workspace.
            <br />
            <span className="text-indigo-800">Stack: React, Vite, TypeScript,Node.js, Express, MongoDB,Zod.</span>
            
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/abeer-srivastava/SecondBrain" className="flex items-center gap-2 text-indigo-700 font-medium hover:underline">
              <FaGithub /> Code
            </a>
            <a href="#" className="flex items-center gap-2 text-indigo-700 font-medium hover:underline">
              <ExternalLink /> View(coming soon)
            </a>
          </div>
        </div>   
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all">
          <h4 className="text-2xl font-semibold text-zinc-900 mb-3 flex items-center gap-2">
            <Network className="text-indigo-700" size={30} />
            WavvyChat
          </h4>

          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            A modern, scalable chat application built using Turborepo, WebSockets, and Next.js — offering real-time messaging, private rooms, shared UI components, and full-stack TypeScript workflows.
            <br />
            <span className="text-indigo-800">Stack: Next.js, Tailwind, NextAuth, Express.js, Prisma ORM,WebSocket Server, Turborepo,PostgreSQL, Zod.</span>
            
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/abeer-srivastava/pixieDraw" className="flex items-center gap-2 text-indigo-700 font-medium hover:underline">
              <FaGithub /> Code
            </a>
            <a href="#" className="flex items-center gap-2 text-indigo-700 font-medium hover:underline">
              <ExternalLink /> View(coming soon)
            </a>
          </div>
        </div>
        {/* Add More Cards Easily */}
      </div>

      {/* Stats Section */}
      <div className="w-full mt-14">
        <h3 className="text-3xl font-semibold text-zinc-900 mb-6 flex justify-center items-center gap-2">
          <Cpu size={30} className="text-indigo-700" />  
          My Coding Stats
        </h3>

        {/* GitHub Stats */}
        {/* <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all">
          <h4 className="text-xl mb-4 text-zinc-900 font-semibold flex gap-2 items-center">
            <FaGithub className="text-indigo-700" /> GitHub Stats
          </h4>

          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=abeer-srivastava&show_icons=true&theme=transparent`} 
              alt="GitHub Stats"
              className="rounded-xl shadow-md"
            />

            <img 
              src={`https://github-readme-streak-stats.herokuapp.com?user=abeer-srivastava&theme=transparent`}
              alt="GitHub Streak"
              className="rounded-xl shadow-md"
            />
          </div>
        </div> */}

        {/* LeetCode Statistics */}
        <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all mt-8">
          <h4 className="text-xl mb-4 text-zinc-900 font-semibold flex items-center gap-3">
            <FaCode className="text-indigo-700" /> LeetCode Stats
          </h4>

          <div className="flex justify-center">
            <img
              src="https://leetcard.jacoblin.cool/_abeer16?theme=dark&font=Fira%20Code&ext=heatmap"
              alt="LeetCode Stats"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
        
      </div>

    </section>
  );
}

export default Projects;
