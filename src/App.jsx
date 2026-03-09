import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InputSection from "./components/InputSection";
import LoadingSpinner from "./components/LoadingSpinner";
import UnauthorizedMessage from "./components/UnauthorizedMessage";
import { generatePlan } from "./data/mockData";
import { verifyAuth } from "./data/mockAuth";

export default function App() {
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const outputRef = useRef(null);

  const handleSubmit = async () => {
    if (!input.trim() || !role.trim() || !password.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      // Step 1: Verify user at backend
      const { authorized } = await verifyAuth(role.trim(), password.trim());

      if (!authorized) {
        setResult({ unauthorized: true });
        setLoading(false);
        return;
      }

      // Step 2: Generate plan (only for authorized users)
      const data = await generatePlan(input.trim(), role.trim());
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({ error: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (result) {
      outputRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 font-sans"
    >
      <Navbar />
      <main className="pb-24">
        <Hero />
        <InputSection
          role={role}
          setRole={setRole}
          password={password}
          setPassword={setPassword}
          input={input}
          setInput={setInput}
          loading={loading}
          onSubmit={handleSubmit}
        />

        <section
          ref={outputRef}
          className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8"
        >
          <AnimatePresence mode="wait">
            {loading && <LoadingSpinner />}
            {result?.unauthorized && !loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center"
              >
                <UnauthorizedMessage />
              </motion.div>
            )}
            {result &&
              !result.error &&
              !result.unauthorized &&
              !loading &&
              Array.isArray(result.schedule) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4 }}
                  className="mt-8 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm"
                >
                  <h2 className="mb-4 text-xl font-semibold text-white">
                    Generated Task Schedule
                  </h2>
                  <table className="min-w-full divide-y divide-white/10 text-sm">
                    <thead>
                      <tr className="text-left text-slate-300">
                        <th className="px-4 py-2 font-medium">Task ID</th>
                        <th className="px-4 py-2 font-medium">Task Name</th>
                        <th className="px-4 py-2 font-medium">Day</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {result.schedule.map((item, index) => (
                        <tr key={index} className="text-slate-200">
                          <td className="px-4 py-2">{item.task_id}</td>
                          <td className="px-4 py-2">{item.task_name}</td>
                          <td className="px-4 py-2">{item.day}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              )}
            {result?.error && !result.unauthorized && (
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center text-red-400"
              >
                {result.error}
              </motion.p>
            )}
          </AnimatePresence>
        </section>
      </main>
    </motion.div>
  );
}

