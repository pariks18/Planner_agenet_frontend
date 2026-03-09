import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center py-10">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="h-10 w-10 rounded-full border-4 border-cyan-400 border-t-transparent"
      />
    </div>
  );
}

