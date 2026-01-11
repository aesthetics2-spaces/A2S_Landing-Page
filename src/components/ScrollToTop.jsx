import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-neutral text-white shadow-xl flex items-center justify-center"
    >
      {/* Progress Ring */}
      <svg className="absolute w-full h-full rotate-[-90deg]">
        <motion.circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="3"
          style={{ pathLength: progress }}
        />
        <defs>
          <linearGradient id="grad" gradientUnits="userSpaceOnUse">
            <stop stopColor="#46B5D1" />
            <stop offset="1" stopColor="#004E64" />
          </linearGradient>
        </defs>
      </svg>

      {/* Arrow */}
      <ArrowUp className="relative z-10" size={20} />
    </motion.button>
  );
}
