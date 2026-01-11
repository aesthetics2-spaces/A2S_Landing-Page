import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import JoinWaitlistModal from "./JoinWaitlistModal"; // make sure the path is correct

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leftVariant = {
    hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightVariant = {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const mobileMenu = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
    exit: { opacity: 0, y: -20 },
  };

  const mobileItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      <nav className="w-full bg-light border-b border-muted fixed top-0 z-50 overflow-y-hidden">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LEFT: Logo */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 md:-mx-10"
          >
            <img src="/logo1.png" alt="Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-primary">Aesthetics To Spaces</span>
          </motion.div>

          {/* MIDDLE LINKS */}
<motion.div
  className="hidden md:flex gap-8 text-neutral font-medium"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
  }}
>
  {[
    { label: "Features", id: "features" },
    { label: "Coming Soon", id: "upcoming" },
    { label: "How it Works", id: "how-it-works" },
  ].map((item) => (
    <motion.a
      key={item.id}
      onClick={() => scrollToSection(item.id)}
      variants={{
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      className="relative cursor-pointer text-neutral hover:text-primary transition
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-primary
        hover:after:w-full after:transition-all after:duration-300"
    >
      {item.label}
    </motion.a>
  ))}
</motion.div>


          {/* DESKTOP BUTTON */}
          <motion.button
            variants={rightVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex relative w-fit overflow-hidden rounded-xl shadow-lg group"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
            <span className="absolute inset-0 bg-gradient-to-r from-secondary to-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2 text-white px-5 py-2">
              Join Waitlist <ArrowRight size={18} />
            </span>
          </motion.button>

          {/* MOBILE MENU ICON */}
          <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden bg-light border-t border-muted px-6 py-6 space-y-6"
            >
              {[
                { label: "Features", id: "features" },
                { label: "Coming Soon", id: "upcoming" },
                { label: "How it Works", id: "how-it-works" },
              ].map((item) => (
                <motion.a
                  key={item.id}
                  variants={mobileItem}
                  className="block text-lg font-medium text-neutral hover:text-primary cursor-pointer"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* MOBILE BUTTON */}
              <button
                className="relative w-full overflow-hidden rounded-xl shadow-md group"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white px-5 py-3">
                  Join Waitlist <ArrowRight size={18} />
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* MODAL */}
      <JoinWaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
