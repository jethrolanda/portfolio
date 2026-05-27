"use client";

import { motion } from "framer-motion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center pt-20 pb-32">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="lg:col-span-8 space-y-8"
        >
          <div className="space-y-4">
            <p className="font-mono text-wpblue text-sm md:text-base">
              &gt; Hello, world. I am
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Alex Developer.
              <br />
              <span className="text-ink/40">WordPress Architect.</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-ink/70 max-w-2xl leading-relaxed">
            I engineer robust, scalable WordPress plugins that power thousands
            of websites. Specializing in complex integrations, performance
            optimization, and clean architecture.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#plugins"
              className="group flex items-center gap-2 bg-ink text-cream px-6 py-3 font-medium hover:bg-wpblue transition-colors"
            >
              View Plugins
              <ArrowOutwardIcon
                fontSize="small"
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-ink/20 px-6 py-3 font-medium hover:border-ink transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.6,
            delay: 0.4
          }}
          className="hidden lg:block lg:col-span-4"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-wpblue/10 translate-x-4 translate-y-4 -z-10"></div>
            <div className="bg-white border border-ink/10 p-8 space-y-6">
              <div className="font-mono text-xs text-ink/50 mb-4 border-b border-ink/10 pb-4">
                // current_status.json
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-ink/60">role:</span>
                  <span>Senior Plugin Dev</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/60">focus:</span>
                  <span>React & REST API</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/60">location:</span>
                  <span>Remote</span>
                </div>
                <div className="flex justify-between pt-4 border-t border-ink/10">
                  <span className="text-ink/60">available:</span>
                  <span className="text-green-600">true</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
