import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Mail, User, Sparkles } from "lucide-react";
import { useState } from "react";

const JoinWaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setName("");
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10" />
            
            {/* Main modal */}
            <div className="relative rounded-3xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-2xl overflow-hidden">
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-neutral hover:text-primary transition-colors shadow-lg hover:shadow-xl"
              >
                <X size={20} />
              </button>

              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/20"
                    animate={{
                      y: [0, -30, 0],
                      x: [0, 15, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Success state */}
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg"
                    >
                      <Check className="text-white" size={32} />
                    </motion.div>
                    
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold text-neutral mb-3"
                    >
                      You're on the list! 🎉
                    </motion.h3>
                    
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-neutral/80 mb-8"
                    >
                      We'll notify you as soon as we launch. Get ready to transform your space!
                    </motion.p>
                    
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-sm text-primary/70"
                    >
                      Redirecting in 3 seconds...
                    </motion.div>
                  </motion.div>
                ) : (
                  /* Form state */
                  <>
                    {/* Header */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-center mb-8"
                    >
                      <div className="relative inline-block mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg" />
                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto">
                          <Sparkles className="text-white" size={28} />
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-neutral mb-3">
                        Join the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Waitlist</span>
                      </h3>
                      <p className="text-neutral/70">
                        Be among the first to experience A2S. Get early access and exclusive benefits.
                      </p>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Name field */}
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
                          <User size={20} />
                        </div>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/50 border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral placeholder:text-neutral/40"
                          required
                        />
                      </div>

                      {/* Email field */}
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60">
                          <Mail size={20} />
                        </div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email address"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/50 border border-muted focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral placeholder:text-neutral/40"
                          required
                        />
                      </div>

                      {/* Benefits list */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-2 text-sm text-neutral/70"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>Early beta access</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>Exclusive launch discounts</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>Priority feature requests</span>
                        </div>
                      </motion.div>

                      {/* Submit button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full mx-auto"
                          />
                        ) : (
                          "Join Waitlist Now"
                        )}
                      </motion.button>
                    </motion.form>
                  </>
                )}
              </div>
              
              {/* Bottom decorative border */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gradient-to-r from-primary via-accent to-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JoinWaitlistModal;