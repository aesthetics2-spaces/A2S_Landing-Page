
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";



const headings = [
  "Design Your Dream Room",
  "Visualize Before You Build",
  "AI-Powered Interior Planning",
];

const LAUNCH_DATE = new Date("2026-02-15T00:00:00");

const Hero = () => {
  
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState({});
const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
const blob1X = useTransform(smoothX, v => v * 180);
const blob1Y = useTransform(smoothY, v => v * 180);

const blob2X = useTransform(smoothX, v => v * -260);
const blob2Y = useTransform(smoothY, v => v * 260);

const blob3X = useTransform(smoothX, v => v * 120);
const blob3Y = useTransform(smoothY, v => v * -120);


useEffect(() => {
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;

    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

  /* Rotate headings every 5s */
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((p) => (p + 1) % headings.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  /* Countdown */
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = LAUNCH_DATE - now;

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
<section className="relative min-h-[110vh] md:min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-light via-white to-primary/10 overflow-hidden">
  {/* Background blobs */}
  <motion.div
    style={{ x: blob1X, y: blob1Y }}
    className="absolute top-[20%] left-[10%] w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-3xl"
  />
  <motion.div
    style={{ x: blob2X, y: blob2Y }}
    className="absolute bottom-[15%] right-[10%] w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-secondary/25 via-primary/10 to-transparent rounded-full blur-3xl"
  />
  <motion.div
    style={{ x: blob3X, y: blob3Y }}
    className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-3xl"
  />

  {/* Pattern overlay */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.04)_1px,transparent_0)] bg-[size:24px_24px] opacity-40" />

  <div className="max-w-4xl text-center space-y-8 md:space-y-10 z-10">
    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="inline-block px-4 py-1 text-sm rounded-full bg-primary/10 text-primary"
    >
      ✨ Beta launching Feb 15th, 2026
    </motion.div>

    {/* Heading */}
    <div className="h-[110px] md:h-[120px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -70, opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-6xl font-extrabold leading-tight"
        >
          {headings[index]} <span className="text-accent">Within Your Budget</span>
        </motion.h1>
      </AnimatePresence>
    </div>

    {/* Description */}
    <motion.p
      initial={{ x: 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-base md:text-lg text-neutral max-w-2xl mx-auto"
    >
      Discover curated room designs, get AI-powered customization, and shop directly for every piece — without breaking the bank.
    </motion.p>

    {/* Countdown - force single row on mobile */}
    <motion.div
      className="flex justify-center gap-2 md:gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      {[
        { label: "Days", value: time.days },
        { label: "Hours", value: time.hours },
        { label: "Minutes", value: time.minutes },
        { label: "Seconds", value: time.seconds },
      ].map((item) => (
        <motion.div
          key={item.label}
          variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur border border-muted rounded-xl px-3 sm:px-6 py-3 min-w-[60px] sm:min-w-[90px]"
        >
          <div className="text-xl sm:text-2xl font-bold text-primary">{item.value ?? "--"}</div>
          <div className="text-xs sm:text-sm text-neutral">{item.label}</div>
        </motion.div>
      ))}
    </motion.div>

    {/* Email + Button */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto w-full">
      <motion.input
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-xl border border-muted outline-none focus:ring-2 focus:ring-primary/30 w-full"
      />
      <motion.button
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative overflow-hidden rounded-xl px-6 py-3 text-white bg-gradient-to-r from-primary to-accent shadow-lg group w-full sm:w-auto"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-secondary to-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
        <span className="relative z-10 flex items-center justify-center gap-2">
          Join Waitlist <ArrowRight size={18} />
        </span>
      </motion.button>
    </div>
  </div>
</section>

  );
};

export default Hero;
