import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-10 pt-10 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="mb-3 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-300">
          AI-powered construction planning
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Turn project descriptions into{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            actionable task schedules
          </span>
        </h1>
        <p className="mt-4 text-sm text-slate-300 sm:text-base">
          Describe your construction project and let the planner agent break it
          down into ordered tasks with resource-aware scheduling.
        </p>
      </motion.div>
    </section>
  );
}

