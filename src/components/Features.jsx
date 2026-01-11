import { motion } from "framer-motion";
import { Search, Layers, CreditCard, Cpu, Share2, Star } from "lucide-react";

const features = [
  { id: 1, name: "Smart Room Gallery", icon: Search, desc: "Browse curated room designs organized by room type, style, and budget range (₹50K-₹5L+).", delay: 0.1 },
  { id: 2, name: "Material Intelligence Engine", icon: Layers, desc: "Click any design to reveal complete product breakdowns with real prices and direct shopping links.", delay: 0.25 },
  { id: 3, name: "Budget Filter + Style Selector", icon: CreditCard, desc: "Instantly narrow down designs to your exact budget and preferred aesthetic. No irrelevant options.", delay: 0.5 },
  { id: 4, name: "AI Design Consultant", icon: Cpu, desc: "Chat with our AI to customize any design. Ask for cheaper alternatives, different colors, or style modifications. 10 free credits daily.", delay: 0.75 },
  { id: 5, name: "Save & Share Designs", icon: Share2, desc: "Save your favorite designs to personal boards and share via WhatsApp for quick feedback.", delay: 1 },
  { id: 6, name: "Premium Features Waitlist", icon: Star, desc: "Get early access to AR room visualization, Vastu scoring, and 3D walkthroughs by joining the priority list.", delay: 1.25 },
];

export default function Features() {
    const getInitialPosition = (index) => {
  const pos = index % 3;

  if (pos === 0) return { x: -80, y: -80 }; // left
  if (pos === 1) return { x: 0, y: -80 };   // center
  return { x: 80, y: -80 };                 // right
};

  return (
    <section id="features" className="py-28 px-6 bg-light">

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-neutral"
          >
            Everything You Need to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Design Smart
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-neutral"
          >
            Our beta release includes powerful features to help you discover, customize, and shop your perfect room design.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
<motion.div
  key={feature.id}
  initial={{
    opacity: 0,
    ...getInitialPosition(feature.id - 1),
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    y: 0,
  }}
  transition={{
    duration: 0.8,
    delay: feature.delay,
    ease: [0.22, 1, 0.36, 1], // smooth premium easing
  }}
  viewport={{ once: true, amount: 0.3 }}
  className="
    group relative cursor-pointer rounded-3xl
    border border-white/20
    bg-white/10
    backdrop-blur-xl
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
    overflow-hidden p-8
    flex flex-col items-center text-center
    transition-all duration-300
    hover:bg-white/20
    hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
  "
>

                {/* Icon (always visible) */}
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>

                {/* Name (always visible) */}
                <h3 className="text-xl font-bold text-neutral mb-2">{feature.name}</h3>

                {/* Description (hide on hover) */}
                <p className="text-sm text-neutral/80 transition-opacity duration-300 group-hover:opacity-0">
                  {feature.desc}
                </p>

                {/* Hover button (slide from bottom) */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-end pb-8 opacity-0 group-hover:opacity-100"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="px-6 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn more →
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
