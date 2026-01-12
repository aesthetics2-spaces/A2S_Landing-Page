import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Sparkles, Bot, Home } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const headings = [
  "Design Your Dream Room",
  "Visualize Before You Build",
  "AI-Powered Interior Planning",
];

const heroImages = [
  "/hero2.avif",
  "/hero3.avif",
  "/hero2.png",
  "/hero3.jpg",
];

const LAUNCH_DATE = new Date("2026-02-15T00:00:00");

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [time, setTime] = useState({});

  /* Mouse parallax */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const blob1X = useTransform(smoothX, (v) => v * 180);
  const blob1Y = useTransform(smoothY, (v) => v * 180);

  /* Mouse move */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* Rotate heading */
  useEffect(() => {
    const i = setInterval(
      () => setIndex((p) => (p + 1) % headings.length),
      5000
    );
    return () => clearInterval(i);
  }, []);

  /* Rotate images */
  useEffect(() => {
    const i = setInterval(
      () => setImageIndex((p) => (p + 1) % heroImages.length),
      4000
    );
    return () => clearInterval(i);
  }, []);

  /* Countdown */
  useEffect(() => {
    const timer = setInterval(() => {
      const diff = LAUNCH_DATE - new Date();
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const leftContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const leftItem = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingBadge = {
    animate: {
      y: [0, -12, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingBadgeMobile = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
   <section className="relative min-h-screen flex items-center px-4 sm:px-6 
bg-gradient-to-br from-light via-white to-primary/10 
overflow-x-hidden md:overflow-hidden pt-16 md:pt-0">

      {/* Background blob */}
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="absolute top-[10%] md:top-[20%] left-[5%] md:left-[10%] w-[200px] h-[200px] md:w-[380px] md:h-[380px] bg-primary/20 rounded-full blur-2xl md:blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        {/* LEFT — TEXT */}
        <motion.div
          variants={leftContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8 order-2 md:order-1"
        >
<motion.span
  variants={leftItem}
  className="inline items-center justify-center
             px-4 sm:px-6 py-1
             text-xs sm:text-sm
             rounded-full
             bg-primary/10 text-primary"
>
  ✨ Beta launching Feb 15th, 2026
</motion.span>


          <motion.div variants={leftItem} className="min-h-[100px] sm:min-h-[140px] overflow-hidden  md:min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight"
              >
                {headings[index]}{" "}
                <span className="text-accent">Within Your Budget</span>
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={leftItem}
            className="text-sm sm:text-base md:text-lg text-neutral max-w-xl"
          >
            Discover curated room designs, get AI-powered customization, and shop
            directly for every piece — without breaking the bank.
          </motion.p>

          <motion.div variants={leftItem} className="flex flex-col sm:flex-row gap-3">
            <input
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-muted text-sm sm:text-base"
            />
            <button className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-primary to-accent flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap">
              Join Waitlist <ArrowRight size={18} />
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT — IMAGE + FLOATING CLOUD BADGES */}
        <div className="relative w-full overflow-visible order-1 md:order-2 mb-12 md:mb-0">
          {/* Desktop Badges */}
          {/* CLOUD: Top Left */}
          <motion.div
            variants={floatingBadge}
            animate="animate"
            className="hidden md:flex absolute -top-12 -left-14 z-20
              px-7 py-4 bg-blue-100 border border-primary/20 backdrop-blur-xl
              shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-primary rounded-3xl
              rotate-[-3deg] items-center gap-3"
          >
            <Sparkles size={26} className="text-accent" />
            <span className="text-base font-semibold whitespace-nowrap">
              Design Your Space
            </span>
          </motion.div>

          {/* CLOUD: Bottom Left */}
          <motion.div
            variants={floatingBadge}
            animate="animate"
            transition={{ delay: 1 }}
            className="hidden md:flex absolute -bottom-14 -left-16 z-20
              px-7 py-4 bg-blue-100 border border-primary/20 backdrop-blur-xl
              shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-primary rounded-3xl
              rotate-[2deg] items-center gap-3"
          >
            <Bot size={26} className="text-accent" />
            <span className="text-base font-semibold whitespace-nowrap">
              AI Consultancy
            </span>
          </motion.div>

          {/* CLOUD: Bottom Right */}
          <motion.div
            variants={floatingBadge}
            animate="animate"
            transition={{ delay: 2 }}
            className="hidden md:flex absolute -bottom-12 -right-16 z-20
              px-7 py-4 bg-blue-100 border border-primary/20 backdrop-blur-xl
              shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-primary rounded-3xl
              rotate-[-2deg] items-center gap-3"
          >
            <Home size={26} className="text-accent" />
            <span className="text-base font-semibold whitespace-nowrap">
              Find Your Property
            </span>
          </motion.div>

          {/* Mobile Badges - Same style as desktop but responsive */}
          {/* CLOUD: Top Left Mobile */}
          <motion.div
            variants={floatingBadgeMobile}
            animate="animate"
            className="md:hidden absolute top-6 left-0 z-20
              px-4 py-2.5 bg-blue-100 border border-primary/20 backdrop-blur-md
              shadow-[0_12px_30px_rgba(0,0,0,0.12)] text-primary rounded-2xl
              rotate-[-2deg] flex items-center gap-2"
          >
            <Sparkles size={18} className="text-accent flex-shrink-0" />
            <span className="text-sm font-semibold whitespace-nowrap">
              Design Your Space
            </span>
          </motion.div>

          {/* CLOUD: Bottom Left Mobile */}
          <motion.div
            variants={floatingBadgeMobile}
            animate="animate"
            transition={{ delay: 1 }}
            className="md:hidden absolute -bottom-7 left-0 z-20
              px-4 py-2.5 bg-blue-100 border border-primary/20 backdrop-blur-md
              shadow-[0_12px_30px_rgba(0,0,0,0.12)] text-primary rounded-2xl
              rotate-[1deg] flex items-center gap-2"
          >
            <Bot size={18} className="text-accent flex-shrink-0" />
            <span className="text-sm font-semibold whitespace-nowrap">
              AI Assistance
            </span>
          </motion.div>

          {/* CLOUD: Bottom Right Mobile */}
          <motion.div
            variants={floatingBadgeMobile}
            animate="animate"
            transition={{ delay: 2 }}
            className="md:hidden absolute -bottom-8 -right-3 z-20
              px-4 py-2.5 bg-blue-100 border border-primary/20 backdrop-blur-md
              shadow-[0_12px_30px_rgba(0,0,0,0.12)] text-primary rounded-2xl
              rotate-[-1deg] flex items-center gap-2"
          >
            <Home size={18} className="text-accent flex-shrink-0" />
            <span className="text-sm font-semibold whitespace-nowrap">
              Find Your Property
            </span>
          </motion.div>

          {/* Image container */}
          <div className="relative mt-[50px] w-full h-[250px] sm:h-[320px] md:h-[420px] 
                rounded-2xl overflow-hidden shadow-xl bg-neutral-900 md:mt-0">
            <AnimatePresence mode="sync">
              <motion.img
                key={imageIndex}
                src={heroImages[imageIndex]}
                alt="Product preview"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "100%" }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;