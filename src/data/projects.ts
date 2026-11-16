export type Project = {
  slug: string;
  name: string;
  /** 1-2 line summary shown first. */
  summary: string;
  /** Longer details, revealed on demand. */
  details: string[];
  tags: string[];
  /** Optional real screenshot (png/webp, 1200x675). Without it a themed placeholder is shown. */
  image?: string;
  imageAlt?: string;
  github?: string;
  demo?: string;
};

// Featured card. Proprietary commercial product: no source link is claimed.
export const FEATURED = {
  name: "Wholesale Suite",
  summary:
    "A suite of WooCommerce extensions used by thousands of customers. I was an early developer on the product at Rymera Web Co.",
  highlights: [
    "Full plugin lifecycle: planning, development, testing, releases and documentation",
    "Customer support and bug fixes across plugin versions",
    "Agile/Scrum team, regular sprint cycles"
  ],
  tags: ["PHP", "WooCommerce", "WordPress"],
  image: "/projects/wholesale-suite.png",
  imageAlt: "Wholesale Suite logo",
  url: "https://wholesalesuiteplugin.com/",
  note: "Commercial product: source code is private."
};

export const PROJECTS: Project[] = [
  {
    slug: "fuel-savings-calculator",
    name: "Fuel Savings Calculator",
    summary:
      "A fuel savings calculator for fleets that generates a PDF report and can email it to any address.",
    details: [
      "Generate PDF and option to send the report to any email via modal form.",
      "WP Admin settings for storing email data and the generated pdf report.",
      "Display all entries in a table with the option to delete or view the entry. Option to export data."
    ],
    tags: [
      "PHP",
      "MySQL",
      "WordPress",
      "React",
      "Antdesign",
      "WP Blocks",
      "Interactivity API"
    ],
    github: "https://github.com/jethrolanda/fuel-savings-calculator-slider",
    demo: "https://fuellogic.net/fuel-savings-calculator"
  },
  {
    slug: "usa-gas-prices",
    name: "USA Gas Prices",
    summary:
      "Fetches historical US gas price data from a third-party REST API and shows it on an interactive state map.",
    details: [
      "Save the data in the server for caching.",
      "Perform WP Cron request every Monday to get updated data.",
      "Interactive frontend USA map. Show gas prices for every state on click.",
      "Custom shortcodes and blocks for displaying data."
    ],
    tags: [
      "PHP",
      "WordPress",
      "WP Cron",
      "React",
      "Antdesign",
      "WP Blocks",
      "Interactivity API",
      "REST API"
    ],
    github: "https://github.com/jethrolanda/usa-gas-prices",
    demo: "https://www.fuellogic.net/usa-gas-prices/"
  },
  {
    slug: "rugby-explorer-api",
    name: "Rugby Explorer API",
    summary:
      "Imports RugbyExplorer data into SportsPress events through its GraphQL API.",
    details: [
      "Properly maps data into the event CPT and meta data.",
      "Custom shortcodes for displaying data.",
      "Admin settings for adding teams and leagues to import, a manual import button and other settings."
    ],
    tags: [
      "PHP",
      "WordPress",
      "WP Cron",
      "Action Scheduler",
      "React",
      "Antdesign",
      "GraphQL API"
    ],
    github: "https://github.com/jethrolanda/rugbyexplorer-api",
    demo: "https://bushpigs.rugby/"
  },
  {
    slug: "ai-match-writer",
    name: "AI Match Writer",
    summary:
      "A WordPress plugin that uses the OpenAI API to auto-generate match preview and result posts for SportsPress events.",
    details: [
      "WP Cron job runs every day to check for upcoming events and generate content based on the teams playing, recent form and other relevant data.",
      "WP admin settings for the OpenAI API key, models and prompt."
    ],
    tags: [
      "PHP",
      "WordPress",
      "WP Cron",
      "React",
      "Antdesign",
      "AI",
      "OpenAI API"
    ],
    github: "https://github.com/jethrolanda/ai-match-writer"
  }
];
