import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is A2S (Aesthetics to Spaces)?",
    answer: `A2S is a platform that helps you design your dream room within your budget. 
    We provide curated room designs with complete product breakdowns, affiliate shopping links, 
    and an AI design consultant to customize designs to your exact needs.`,
  },
  {
    question: "When does the beta launch?",
    answer: `Our beta launches on February 15th, 2026! Join the waitlist now to be among the first 
    to experience A2S and get exclusive early access benefits.`,
  },
  {
    question: "Is the beta free to use?",
    answer: `Yes! The beta is completely free. You'll get access to our room gallery, product breakdowns, 
    budget filters, and 10 free AI consultation credits per day.`,
  },
  {
    question: "How does the AI Design Consultant work?",
    answer: `Our AI Design Consultant lets you chat about any design you're viewing. Ask questions like 
    'Can you suggest a cheaper sofa?' or 'What would this look like in blue?' and get personalized 
    recommendations. Beta users get 10 free credits daily.`,
  },
  {
    question: "What are affiliate links and how do they work?",
    answer: `When you click on a product in our designs, you'll be directed to purchase from trusted 
    partner retailers like Amazon, Pepperfry, or Urban Ladder. We earn a small commission at no extra cost 
    to you—this is how we keep A2S free!`,
  },
  {
    question: "Can I save and share designs?",
    answer: `Absolutely! You can save your favorite designs to personal boards and share them via WhatsApp 
    or direct links with friends and family.`,
  },
  {
    question: "What features are coming after the beta?",
    answer: `We're working on exciting features like AR/VR room visualization, Vastu scoring, 3D walkthroughs, 
    a vendor marketplace connecting you with designers and contractors, and much more!`,
  },
  {
    question: "How can I earn extra AI credits?",
    answer: `You can earn bonus AI credits by inviting friends to join A2S, providing feedback on designs, 
    and participating in our community activities.`,
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-neutral mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Questions
          </span>
        </motion.h2>
        <motion.p
          className="text-lg text-neutral max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Everything you need to know about A2S and our upcoming beta launch
        </motion.p>
      </motion.div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
         <motion.div
  key={index}
  layout
  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  viewport={{ once: false, amount: 0.2 }} // <-- animate every time it comes into view
  className="border border-muted rounded-xl overflow-hidden"
>

            {/* Question */}
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-lg text-neutral "
              onClick={() => toggle(index)}
            >
              {item.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 pb-4 text-neutral text-base"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
