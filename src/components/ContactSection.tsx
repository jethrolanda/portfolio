"use client";
import { motion } from "framer-motion";
import { toast } from "sonner";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const EMAIL = "jemaq_lan@hotmail.com";
const LINKS = [
  {
    label: "GitHub",
    handle: "https://github.com/jethrolanda/",
    href: "#",
    icon: GitHubIcon
  },
  {
    label: "LinkedIn",
    handle: "https://www.linkedin.com/in/jethro-landa/",
    href: "#",
    icon: LinkedInIcon
  }
];

export function ContactSection() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Could not copy — please copy manually");
    }
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
            className="space-y-8"
          >
            <p className="text-lg text-ink/70 leading-relaxed max-w-md">
              I'm currently available for freelance projects and open to new
              opportunities. The fastest way to reach me is by email — I usually
              reply within a day.
            </p>

            <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-2 bg-white border border-ink/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-600"></span>
              </span>
              <span className="text-ink/70">Available for new work</span>
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
            }}
            className="space-y-4"
          >
            {/* Primary email card */}
            <div className="bg-ink text-cream p-8">
              <span className="font-mono text-xs text-cream/50 block mb-4">
                // drop me a line
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-3 text-2xl md:text-3xl font-bold tracking-tight hover:text-wpblue transition-colors break-all"
              >
                <EmailIcon />
                {EMAIL}
                <ArrowOutwardIcon className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-cream/70 hover:text-cream border border-cream/20 hover:border-cream/50 px-3 py-2 transition-colors"
              >
                <ContentCopyIcon fontSize="inherit" />
                Copy address
              </button>
            </div>

            {/* Secondary links */}
            <div className="bg-white border border-ink/10 divide-y divide-ink/10">
              {LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.handle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-5 hover:bg-cream transition-colors"
                  >
                    <span className="flex items-center gap-4">
                      <Icon fontSize="small" className="text-ink/60" />
                      <span>
                        <span className="block font-medium text-sm">
                          {link.label}
                        </span>
                        <span className="block font-mono text-xs text-ink/50">
                          {link.handle}
                        </span>
                      </span>
                    </span>
                    <ArrowOutwardIcon
                      fontSize="small"
                      className="text-ink/30 group-hover:text-wpblue transition-colors"
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
