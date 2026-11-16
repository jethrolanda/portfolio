// Facts are unchanged from the original resume: wording is shortened only.
// Each job: max 5 bullets, most impactful first.
export const EXPERIENCE = [
  {
    role: "WordPress Developer",
    company: "Freelance (Remote)",
    period: "Oct 2025 — Present",
    bullets: [
      "Built custom WordPress plugins for client-specific business requirements.",
      "Implemented REST API integrations with third-party services.",
      "Improved WCAG accessibility and Core Web Vitals scores across client sites.",
      "Use Claude Code and MCP (Figma, WordPress, Block, Novamira) in real WordPress projects for agentic code generation and design-to-code.",
      "Designed a hybrid AI workflow of free local LLMs and premium cloud models, cutting AI costs without hurting output quality."
    ]
  },
  {
    role: "Web Developer",
    company: "Xammis/Fuellogic (Remote)",
    period: "Oct 2023 — Aug 2025",
    bullets: [
      "Integrated WordPress with HubSpot CRM via its REST API, syncing customer, contact and deal data in real time and reducing manual entry.",
      "Developed WordPress plugins and internal web apps for fuel management workflows.",
      "Integrated third-party REST APIs, including fuel price data providers.",
      "Optimized website performance and improved Core Web Vitals scores.",
      "Maintained and enhanced existing codebases across multiple projects."
    ]
  },
  {
    role: "Software Engineer",
    company: "Rymera Web Co (Remote)",
    period: "Jan 2015 — July 2022",
    bullets: [
      "Built and maintained free and premium WooCommerce extensions used by thousands of customers.",
      "Handled the full plugin lifecycle: planning, development, testing, releases and documentation.",
      "Resolved customer support issues and fixed bugs across plugin versions.",
      "Worked in an Agile/Scrum team with regular sprint cycles."
    ]
  },
  {
    role: "Web Developer",
    company: "Lancera (On-site)",
    period: "Aug 2013 — Oct 2014",
    bullets: [
      "Converted PSD designs to WordPress using Underscores, Twitter Bootstrap and ACF.",
      "Deployed sites to production servers and handled maintenance and bug fixes."
    ]
  }
];

export const SKILLS: Record<string, string[]> = {
  "Primary Skills": [
    "PHP",
    "React JS",
    "Next.js",
    "REST API",
    "MySQL",
    "WP Hooks",
    "Custom Blocks",
    "Plugins",
    "Themes",
    "jQuery",
    "AJAX"
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
    "Novamira",
    "Ollama",
    "LM Studio"
  ],
  "Secondary Skills": [
    "Astro",
    "Vercel",
    "Laravel",
    "React Native (Expo/Typescript)",
    "Headless WP",
    "WP GraphQL"
  ]
};

export const EDUCATION = {
  degree: "B.S. in Information Technology",
  school: "Silliman University",
  period: "2008 — 2012"
};
