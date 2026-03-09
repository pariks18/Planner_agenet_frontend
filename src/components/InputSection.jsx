import { motion } from "framer-motion";
import { HiPaperAirplane, HiOutlineUser, HiOutlineLockClosed } from "react-icons/hi";

const ROLES = [
  "Site Manager",
  "Project Engineer",
  "Construction Manager",
  "Contractor",
  "Architect",
  "Quantity Surveyor",
];

export default function InputSection({
  role,
  setRole,
  password,
  setPassword,
  input,
  setInput,
  loading,
  onSubmit,
}) {
  const isValid =
    role.trim().length > 0 &&
    password.trim().length > 0 &&
    input.trim().length > 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.005 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8"
      >
        {/* Role & Password Row */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.4 }}
          >
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
              <HiOutlineUser className="h-4 w-4 text-cyan-400" />
              Your Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              disabled={loading}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <option value="">Select your role...</option>
              {ROLES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
              <HiOutlineLockClosed className="h-4 w-4 text-cyan-400" />
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={loading}
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            />
          </motion.div>
        </div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.4 }}
        >
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Project Description
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your construction project in detail..."
            disabled={loading}
            rows={5}
            className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
          />
        </motion.div>

        {/* Generate Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.4 }}
          whileHover={isValid && !loading ? { scale: 1.02, boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" } : {}}
          whileTap={isValid && !loading ? { scale: 0.98 } : {}}
          onClick={onSubmit}
          disabled={!isValid || loading}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25 transition disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <>
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </motion.svg>
              <span>Verifying & Generating...</span>
            </>
          ) : (
            <>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <HiPaperAirplane className="h-5 w-5" />
              </motion.span>
              <span>Generate Plan</span>
            </>
          )}
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

