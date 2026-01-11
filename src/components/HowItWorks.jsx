import { motion } from "framer-motion";
import { Search, Sparkles, MessageSquare, ShoppingCart } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discover",
    desc: "Browse our curated gallery of room designs filtered by style, room type, and budget range.",
    icon: Search,
    align: "left",
  },
  {
    id: 2,
    title: "Breakdown",
    desc: "Click any design to see the complete product breakdown with exact prices and shopping links.",
    icon: Sparkles,
    align: "right",
  },
  {
    id: 3,
    title: "Customize",
    desc: "Chat with our AI Design Consultant to adjust any design to perfectly match your budget and taste.",
    icon: MessageSquare,
    align: "left",
  },
  {
    id: 4,
    title: "Shop",
    desc: "Buy every piece directly through our curated partner links. One click, perfect room.",
    icon: ShoppingCart,
    align: "right",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 overflow-hidden bg-gradient-to-br from-light via-accent/10 to-primary/20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20 overflow-hidden">
          <motion.h2
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" ,x: 0, opacity: 1}}
             
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-neutral-900"
          >
            How{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              A2S
            </span>{" "}
            Works
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-neutral-600"
          >
            From inspiration to reality in four simple steps. Meet Priya, who transformed her living room in just one afternoon.
          </motion.p>
        </div>

        {/* Steps container */}
        <div className="relative">
          {/* Center vertical line - only for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30 -translate-x-1/2 z-0" />

          {/* Steps */}
          <div className="space-y-20 relative z-10">
            {steps.map((step) => {
              const isLeft = step.align === "left";
              const Icon = step.icon;

              return (
<motion.div
  key={step.id}
  initial={{ x: isLeft ? -120 : 120, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.4 }}
  className="relative flex flex-col md:flex-row items-center justify-center"
>

                  {/* Desktop left content */}
                  <div className="hidden md:flex flex-1 items-center justify-end md:pr-12">
                    {isLeft && (
                      <div className="flex items-center gap-6 max-w-md">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                            <Icon className="text-primary" size={28} />
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-neutral-900">{step.title}</h3>
                          </div>
                          <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Desktop right content */}
<div className="hidden md:flex flex-1 items-center justify-start md:pl-12">
  {!isLeft && (
    <div className="flex items-center gap-6 max-w-md">
      {/* Move Icon to the end */}
      <div className="text-right">
        <div className="flex items-center justify-end gap-3 mb-2">
          <h3 className="text-xl font-semibold text-neutral-900">{step.title}</h3>
        </div>
        <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
      </div>
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Icon className="text-primary" size={28} />
        </div>
      </div>
    </div>
  )}
</div>
                  {/* Center number for desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent text-white text-lg font-bold flex items-center justify-center shadow-lg">
                      {step.id}
                    </div>
                  </div>

                  {/* Mobile stacked view (step-by-step, no number, no line) */}
                  <div className="flex flex-col md:hidden items-center gap-4 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
