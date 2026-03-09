import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span className="rounded-lg bg-cyan-500/20 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
            Beta
          </span>
          <span className="text-lg font-semibold text-white">
            Construction Planning Agent
          </span>
        </motion.div>
      </div>
    </header>
  );
}

