/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you'd send this to a backend
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#E0F7FA] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-3xl animate-pulse" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center z-10"
      >
        {/* Icon */}
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2 
          }}
          className="inline-flex items-center justify-center w-20 h-20 mb-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-200"
        >
          <Mail className="w-10 h-10 text-white" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
          Something Amazing <br />
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent pb-2">
            Is Coming Soon
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 font-medium max-w-lg mx-auto mb-12 leading-relaxed">
          We're crafting an exceptional experience just for you. Join our waitlist to be the first to know when we launch.
        </p>

        {/* Signup Form */}
        <div className="max-w-md mx-auto mb-8">
          <form 
            onSubmit={handleSubmit}
            className="relative flex items-center p-2 bg-white rounded-3xl shadow-xl shadow-cyan-100/50 border border-white"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-2xl hover:opacity-90 transition-all active:scale-95 shadow-md shadow-cyan-200"
            >
              {isSubmitted ? 'Joined!' : 'Notify Me'}
            </button>
          </form>
          
          {isSubmitted && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-emerald-600 font-semibold"
            >
              Thanks! We'll be in touch soon.
            </motion.p>
          )}
        </div>

        {/* Footer Text */}
        <p className="text-slate-500 text-sm font-medium">
          No spam, ever. Unsubscribe at any time.
        </p>
      </motion.div>

      {/* Subtle floating elements */}
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-[15%] w-4 h-4 rounded-full bg-cyan-400/20 hidden md:block"
      />
      <motion.div 
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 left-[15%] w-6 h-6 rounded-full bg-blue-400/20 hidden md:block"
      />
    </div>
  );
}
