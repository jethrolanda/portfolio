<<<<<<< HEAD
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import SendIcon from "@mui/icons-material/Send";
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import SendIcon from '@mui/icons-material/Send';
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
<<<<<<< HEAD
      toast.success("Message sent successfully! I will get back to you soon.");
=======
      toast.success('Message sent successfully! I will get back to you soon.');
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };
  return (
    <section id="contact" className="py-24 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-mono text-wpblue text-sm mb-2 block">
            03 / Connect
          </span>
          <h2 className="text-4xl font-bold tracking-tight">Get in Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
<<<<<<< HEAD
            className="space-y-8"
          >
=======
            className="space-y-8">
            
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
            <p className="text-lg text-ink/70 leading-relaxed max-w-md">
              I'm currently available for freelance projects and open to new
              opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-4">
                <span className="text-ink/40 w-20">Email:</span>
                <a
                  href="mailto:hello@example.com"
<<<<<<< HEAD
                  className="hover:text-wpblue transition-colors"
                >
=======
                  className="hover:text-wpblue transition-colors">
                  
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
                  hello@example.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-ink/40 w-20">GitHub:</span>
                <a href="#" className="hover:text-wpblue transition-colors">
                  github.com/alexdev
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-ink/40 w-20">LinkedIn:</span>
                <a href="#" className="hover:text-wpblue transition-colors">
                  linkedin.com/in/alexdev
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
<<<<<<< HEAD
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 border border-ink/10"
            >
=======
            }}>
            
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 border border-ink/10">
              
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
<<<<<<< HEAD
                    className="font-mono text-xs text-ink/70 block"
                  >
=======
                    className="font-mono text-xs text-ink/70 block">
                    
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-cream border border-ink/10 px-4 py-3 focus:outline-none focus:border-wpblue transition-colors font-sans"
<<<<<<< HEAD
                    placeholder="John Doe"
                  />
=======
                    placeholder="John Doe" />
                  
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
<<<<<<< HEAD
                    className="font-mono text-xs text-ink/70 block"
                  >
=======
                    className="font-mono text-xs text-ink/70 block">
                    
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-cream border border-ink/10 px-4 py-3 focus:outline-none focus:border-wpblue transition-colors font-sans"
<<<<<<< HEAD
                    placeholder="john@example.com"
                  />
=======
                    placeholder="john@example.com" />
                  
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
<<<<<<< HEAD
                  className="font-mono text-xs text-ink/70 block"
                >
=======
                  className="font-mono text-xs text-ink/70 block">
                  
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full bg-cream border border-ink/10 px-4 py-3 focus:outline-none focus:border-wpblue transition-colors font-sans"
<<<<<<< HEAD
                  placeholder="Project Inquiry"
                />
=======
                  placeholder="Project Inquiry" />
                
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
<<<<<<< HEAD
                  className="font-mono text-xs text-ink/70 block"
                >
=======
                  className="font-mono text-xs text-ink/70 block">
                  
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-cream border border-ink/10 px-4 py-3 focus:outline-none focus:border-wpblue transition-colors font-sans resize-y"
<<<<<<< HEAD
                  placeholder="Tell me about your project..."
                ></textarea>
=======
                  placeholder="Tell me about your project...">
                </textarea>
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
<<<<<<< HEAD
                className="w-full bg-ink text-cream py-4 font-medium hover:bg-wpblue transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
=======
                className="w-full bg-ink text-cream py-4 font-medium hover:bg-wpblue transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                
                {isSubmitting ? 'Sending...' : 'Send Message'}
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
                {!isSubmitting && <SendIcon fontSize="small" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
<<<<<<< HEAD
    </section>
  );
}
=======
    </section>);

}
>>>>>>> 798832ad7c1243c9db575dbfe5d21fdc1bccf1b9
