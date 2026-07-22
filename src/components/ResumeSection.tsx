"use client";
import { motion } from "framer-motion";
const EXPERIENCE = [
  {
    role: "WordPress Developer",
    company: "Freelance (Remote)",
    period: "Oct 2025 — Present",
    bullets: [
      "Built custom WordPress plugins for client-specific business requirements",
      "Implemented REST API integrations with third-party services",
      "Improved WCAG accessibility compliance and Core Web Vitals scores across client sites",
      "Actively upskilling in AI-assisted software engineering and modern WordPress development workflows.",
      "Working with and experimenting with Claude Code for agentic code generation, incorporating it into my development workflows — while learning and integrating Model Context Protocol (MCP) into real WordPress projects, including Novamira MCP for executing WordPress actions directly from AI agents, Figma MCP for design-to-code handoff, WordPress MCP Server for exposing site content to AI tools, and Block MCP for Gutenberg block development assistance."
    ]
  },
  {
    role: "Web Developer",
    company: "Xammis/Fuellogic (Remote)",
    period: "Oct 2023 — Aug 2025",
    bullets: [
      "Developed specialized WordPress plugins and internal web app solutions for fuel management workflows",
      "Integrated third-party REST APIs including fuel price data providers",
      "Optimized website performance and improved Core Web Vitals scores",
      "Maintained and enhanced existing codebases across multiple projects",
      "Integrated WordPress with HubSpot CRM using its REST API to fetch and push customer, contact, and deal data between platforms, ensuring accurate, real-time data synchronization. Built custom API connections to automate the exchange of information between the website and CRM, streamlining data flow and reducing manual entry across sales and marketing processes.",
      "Continuously expanded my technical skill set by studying Ruby, Laravel, React Native (Expo), Next.js, and Tailwind CSS — broadening my development capabilities beyond WordPress and PHP to stay adaptable across modern web and mobile technologies."
    ]
  },
  {
    role: "Software Engineer",
    company: "Rymera Web Co (Remote)",
    period: "Jan 2015 — July 2022",
    bullets: [
      "Built and maintained free and premium WooCommerce extension plugins used by thousands of customers",
      "Handled full plugin lifecycle: feature planning, development, testing, releases, and documentation",
      "Resolved customer support issues and fixed reported bugs across plugin versions",
      "Worked in an Agile/Scrum team environment with regular sprint cycles"
    ]
  },
  {
    role: "Web Developer",
    company: "Lancera (On-site)",
    period: "Aug 2013 — Oct 2014",
    bullets: [
      "Converted PSD designs to WordPress using Underscores theme boilerplate, Twitter Bootstrap, and ACF",
      "Deployed sites to production servers and handled ongoing maintenance and bug fixes"
    ]
  }
];

const SKILLS = {
  "Primary Skills": [
    "PHP",
    "React JS",
    "jQuery",
    "AJAX",
    "MySQL",
    "WP Hooks",
    "REST API",
    "Custom Blocks",
    "Plugins",
    "Themes"
  ],
  "Tools & Workflow": [
    "Git",
    "Github Actions",
    "Composer",
    "NPM",
    "WordPress Studio",
    "Agile/Scrum",
    "SDLC"
  ],
  "AI Tools": [
    "ChatGPT",
    "GitHub Copilot",
    "Cursor",
    "OpenAI Codex",
    "Claude Code",
    "Magic Patterns",
    "Google Stitch",
    "Novamira"
  ],
  "Secondary Skills": [
    "NextJs",
    "Vercel",
    "Laravel",
    "React Native (Expo/Typescript)",
    "Headless WP",
    "WP GraphQL"
  ]
};
export function ResumeSection() {
  return (
    <section id="resume" className="py-24 border-t border-ink/10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-mono text-wpblue text-sm mb-2 block">
            02 / Experience
          </span>
          <h2 className="text-4xl font-bold tracking-tight">Resume</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Experience Timeline */}
          <div className="lg:col-span-8 space-y-12">
            <h3 className="font-mono text-lg font-medium border-b border-ink/10 pb-4 mb-8">
              Work History
            </h3>

            <div className="space-y-12">
              {EXPERIENCE.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    margin: "-100px"
                  }}
                  transition={{
                    duration: 0.5
                  }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                    <div className="mb-2 md:mb-0 md:col-span-1 font-mono text-sm text-ink/50">
                      {job.period}
                    </div>
                    <div className="md:col-span-3 space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-ink">
                          {job.role}
                        </h4>
                        <div className="font-mono text-sm text-wpblue mt-1">
                          {job.company}
                        </div>
                      </div>
                      <ul className="space-y-2 text-ink/70">
                        {job.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="text-wpblue mt-1.5 text-xs">
                              ▹
                            </span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills & Education */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="font-mono text-lg font-medium border-b border-ink/10 pb-4 mb-8">
                Technical Skills
              </h3>
              <div className="space-y-8">
                {Object.entries(SKILLS).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="font-bold text-ink mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs px-2 py-1 bg-cream border border-ink/10 text-ink/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-lg font-medium border-b border-ink/10 pb-4 mb-8">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-ink">
                    B.S. in Information Technology
                  </h4>
                  <div className="font-mono text-sm text-ink/60 mt-1">
                    Silliman University
                  </div>
                  <div className="font-mono text-xs text-ink/40 mt-1">
                    2008 — 2012
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-mono text-lg font-medium border-b border-ink/10 pb-4 mb-8">
                Resume
              </h3>
              <div>
                <a
                  href="https://docs.google.com/document/d/1IH9xEQA_5pBgvBQSx10koxvzb44GrSzZ4mni_q_OTng/edit?tab=t.0"
                  target="_blank"
                  className="font-mono text-sm text-wpblue hover:text-wpblue/80 transition-colors"
                >
                  Google Doc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
