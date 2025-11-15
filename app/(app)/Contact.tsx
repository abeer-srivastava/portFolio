import { Button } from "@/components/ui/button";
import { Contact2Icon } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <section className="limelight z-10 flex flex-col items-center min-h-screen px-6 py-20 bg-inherit text-[#4c41bf] backdrop-blur-sm w-[60%] mt-20 rounded-2xl">

      {/* Heading */}
      <div className="flex flex-row justify-center items-baseline">
      <Contact2Icon size={34} className="text-indigo-700 mr-2"/>
      <h3 className="text-4xl font-semibold text-zinc-700 mb-3">
      Get in Touch</h3>
      </div>
      
      <p className="text-indigo-700 text-lg mb-5">
        Whether you want to collaborate, discuss a project, or just say hi — feel free to connect.
      </p>

      {/* Contact Cards Grid */}
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all mt-8  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-3xl">

        {/* Email */}
        <a 
          href="mailto:abeersrivastava16@gmail.com"
          className="group flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-105 transition-all shadow-lg backdrop-blur-lg"
        >
          <FaEnvelope className="text-4xl mb-3 group-hover:text-indigo-400 transition" />
          <h4 className="text-xl font-semibold text-zinc-700">Email</h4>
          <p className="text-zinc-700 text-sm mt-1">abeersrivastava16@gmail.com</p>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/abeer-srivastava-a90797290"
          target="_blank"
          className="group flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-105 transition-all shadow-lg backdrop-blur-lg"
        >
          <FaLinkedin className="text-4xl mb-3 group-hover:text-indigo-400 transition" />
          <h4 className="text-xl font-semibold text-zinc-700">LinkedIn</h4>
          <p className="text-zinc-700 text-sm mt-1">Connect with me</p>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/abeer-srivastava"
          target="_blank"
          className="group flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-105 transition-all shadow-lg backdrop-blur-lg"
        >
          <FaGithub className="text-4xl mb-3 group-hover:text-indigo-400 transition" />
          <h4 className="text-xl font-semibold text-zinc-700">GitHub</h4>
          <p className="text-zinc-700 text-sm mt-1">See my work</p>
        </a>

        {/* Twitter / X */}
        <a 
          href="https://x.com/"
          target="_blank"
          className="group flex flex-col items-center justify-center p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-105 transition-all shadow-lg backdrop-blur-lg"
        >
          <FaXTwitter className="text-4xl mb-3 group-hover:text-indigo-400 transition" />
          <h4 className="text-xl font-semibold text-zinc-700">Twitter</h4>
          <p className="text-zinc-700 text-sm mt-1">Follow for updates</p>
        </a>

      </div>
       <div className="mt-12 w-full max-w-xl p-8 bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200  hover:shadow-lg transition-all shadow-md">
        <h4 className="text-2xl font-semibold text-zinc-700 mb-4 text-center">Let’s Connect</h4>
        <p className="text-sm text-indigo-700 text-center mb-6">
          Share your email and message — I’ll get back to you soon.
        </p>

        <form className="space-y-4 bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-lg transition-all">
          
          {/* Email Input */}
          <div>
            <label className="block text-zinc-700 font-medium mb-1">Your Email</label>
            <input 
              type="email" 
              required
              placeholder="yourname@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-zinc-700 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-zinc-700 font-medium mb-1">Message</label>
            <textarea
              required
              rows={4}
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-zinc-700 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#4c41bf] text-black font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </Button>
        </form>
      </div>

    </section>
  );
}

export default Contact;
