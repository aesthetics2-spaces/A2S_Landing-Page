import { motion, AnimatePresence } from "framer-motion";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const quotes = [
  {
    text: "Your home should tell the story of who you are, and be a collection of what you love.",
    author: "Nate Berkus",
  },
  {
    text: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
  },
  {
    text: "A room should never allow the eye to settle in one place. It should smile at you and create fantasy.",
    author: "Juan Montoya",
  },
];

export default function Footer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#1F2937] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
        {/* Quotes */}
        <div className="text-center max-w-4xl mx-auto min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Text reveal */}
              <motion.p
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-2xl md:text-4xl font-light italic leading-relaxed text-white"
              >
                “{quotes[index].text}”
              </motion.p>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="block mt-6 text-sm text-white/60"
              >
                — {quotes[index].author}
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="origin-left my-20 h-px bg-white/20"
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src="./logo.png" className="w-10 h-10 object-contain" />
            <span className="text-lg font-semibold">
              Aesthetics to Spaces
            </span>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[Twitter, Instagram, Linkedin, Mail].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
                href="#"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-16 text-center text-sm text-white/50">
          © 2026 Aesthetics to Spaces. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
