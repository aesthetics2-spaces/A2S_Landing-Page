import { motion } from "framer-motion";
import { Lock, Box, Scan, Eye, Users, TrendingUp, Cpu, Shield, Wrench } from "lucide-react";

const features = [
  { phase: "Phase 2", title: "AR Room Visualization", desc: "See furniture and designs in your actual room using augmented reality.", icon: Scan },
  { phase: "Phase 2", title: "Vastu Scoring", desc: "Get traditional Vastu compliance scores and improvement suggestions.", icon: Box },
  { phase: "Phase 2", title: "3D Visualization", desc: "Walk through your designed spaces in full 3D before purchasing.", icon: Eye },
  { phase: "Phase 3", title: "Vendor Marketplace", desc: "Connect with interior designers, contractors, and material vendors.", icon: Users },
  { phase: "Phase 3", title: "AI Valuation & Forecasting", desc: "AI-powered property price predictions and investment insights.", icon: TrendingUp },
  { phase: "Phase 4", title: "IoT Energy Management", desc: "Smart home energy tracking and optimization recommendations.", icon: Cpu },
  { phase: "Phase 4", title: "Blockchain Property Transfer", desc: "Secure, transparent property ownership using blockchain.", icon: Shield },
  { phase: "Phase 4", title: "Predictive Maintenance", desc: "AI-powered forecasting for home repairs and maintenance needs.", icon: Wrench },
  { phase: "Phase 4", title: "Tenant Screening", desc: "Comprehensive tenant profile evaluation for property owners.", icon: Users },
];

export default function UpcomingFeatures() {
  return (
    <section id="upcoming" className="py-20 px-6 bg-gradient-to-b from-light to-primary/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-neutral-900"
          >
            Coming Soon
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              The Future of A2S
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl mx-auto text-neutral-600"
          >
            Join the waitlist to get early access to these game-changing features as they launch.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="
                  group relative rounded-3xl
                  border border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                  overflow-hidden p-8
                  flex flex-col items-center text-center
                  transition-all duration-300
                  hover:bg-white/20
                  hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                  cursor-not-allowed
                "
              >
                {/* Lock Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-20">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-xl">
                    <Lock className="text-white" size={28} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 group-hover:blur-sm transition-all duration-300 w-full">
                  {/* Top Row: Icon left, Phase right */}
                  <div className="w-full flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-md">
                      <Icon className="text-primary" size={20} />
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                      {item.phase}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
