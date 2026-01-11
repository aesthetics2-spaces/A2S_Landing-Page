import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target;

      // Hide cursor on inputs or marked elements
      if (
        target.closest("input, textarea, select, button") ||
        target.closest("[data-cursor-hide]")
      ) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
      animate={{
        x: pos.x - 12,
        y: pos.y - 12,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.6,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.6,
      }}
    >
      {/* Outer ring */}
      <div className="w-10 h-10 rounded-full border border-accent/60 flex items-center justify-center">
        {/* Inner dot */}
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
    </motion.div>
  );
}
