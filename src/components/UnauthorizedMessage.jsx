import { motion } from "framer-motion";

export default function UnauthorizedMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md rounded-2xl border border-red-500/40 bg-red-500/10 px-6 py-5 text-center text-sm text-red-100 shadow-lg backdrop-blur"
    >
      <p className="font-semibold mb-1">Access denied</p>
      <p className="text-red-100/80">
        The provided role and password are not authorized to generate plans.
        Please check your credentials or contact the administrator.
      </p>
    </motion.div>
  );
}

