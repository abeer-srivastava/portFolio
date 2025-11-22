import { motion } from "framer-motion";
import { useLoop } from "../components/ui/skiper-ui/skiper62";

export const Preloader = () => {
  const { key } = useLoop(1600);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white relative overflow-hidden">

      {/* Pixel-grid gradient background */}
      <div className="absolute inset-0 opacity-30 bg-[url('/your-pixel-pattern.svg')] bg-cover" />

      {/* Soft blue blur lights */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-300 blur-[120px] opacity-40 -top-20 -left-20" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-300 blur-[130px] opacity-40 bottom-0 right-0" />

      {/* Loader Card */}
      <motion.div
        key={key}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 p-10 md:p-14 rounded-3xl backdrop-blur-2xl bg-white/40 shadow-xl flex flex-col items-center"
      >
        {/* Profile image pulse animation */}
          <div className="flex space-x-2 m-2.5">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i + key}
            initial={{ height: 10, opacity: 0.4 }}
            animate={{ height: 40, opacity: 1 }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.12,
            }}
            className="w-2 bg-indigo-400 rounded"
          />
        ))}
      </div>
        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="text-2xl font-semibold tracking-wide text-indigo-900"
        >
          Preparing Portfolio…
        </motion.p>
      </motion.div>
    </div>
  );
};
