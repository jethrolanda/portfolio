<<<<<<< HEAD
"use client";

import { motion } from "framer-motion";
=======
import React from 'react';
import { motion } from 'framer-motion';
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
export function Navbar() {
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.5,
<<<<<<< HEAD
        ease: "easeOut"
      }}
      className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-ink/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="font-mono font-medium text-lg tracking-tight hover:text-wpblue transition-colors"
        >
=======
        ease: 'easeOut'
      }}
      className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-b border-ink/10">
      
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="font-mono font-medium text-lg tracking-tight hover:text-wpblue transition-colors">
          
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
          dev<span className="text-wpblue">_</span>portfolio
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          <a href="#plugins" className="hover:text-wpblue transition-colors">
            01/Plugins
          </a>
          <a href="#resume" className="hover:text-wpblue transition-colors">
            02/Resume
          </a>
          <a href="#contact" className="hover:text-wpblue transition-colors">
            03/Contact
          </a>
        </div>

        <a
          href="#contact"
<<<<<<< HEAD
          className="md:hidden font-mono text-sm border border-ink px-4 py-2 hover:bg-ink hover:text-cream transition-colors"
        >
          Contact
        </a>
      </div>
    </motion.nav>
  );
}
=======
          className="md:hidden font-mono text-sm border border-ink px-4 py-2 hover:bg-ink hover:text-cream transition-colors">
          
          Contact
        </a>
      </div>
    </motion.nav>);

}
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
