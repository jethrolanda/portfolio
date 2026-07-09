"use client";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
const PLUGINS = [
  {
    name: "Fuel Savings Calculator",
    slug: "fuel-savings-calculator",
    description: [
      "Fuel savings calculator for fleets.",
      "Generate PDF and option to send the report to any email via modal form.",
      "WP Admin settings for storing email data and the generated pdf report.",
      "Display all entries in a table with the option to delete or view the entry."
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
    installs: "0",
    version: "1.0",
    url: "https://github.com/jethrolanda/fuel-savings-calculator-slider"
  },
  {
    name: "USA Gas Prices",
    slug: "usa-gas-prices",
    description: [
      "Fetches and displays historical US gas price data via third-party REST API.",
      "Save the data in the server for caching",
      "Perform WP Cron request every monday to get updated data",
      "Add an interactive frontend USA map. Show gas prices for every state on click.",
      "Create custom shortcodes and blocks for displaying data."
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
    installs: "0",
    version: "1.0",
    url: "https://github.com/jethrolanda/usa-gas-prices"
  },
  {
    name: "Rugby Explorer API",
    slug: "rugby-explorer-api",
    description: [
      "Imports data from RugbyExplorer into Sportspress Events using Graphql API.",
      "Properly map data into event CPT and meta data",
      "Create custom shortcodes for displaying data.",
      "Admin settings for adding teams and leagues to import, manual import button and other settings"
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
    installs: "0",
    version: "1.0",
    url: "https://github.com/jethrolanda/rugbyexplorer-api"
  },
  {
    name: "AI Match Writer",
    slug: "ai-match-writer",
    description: [
      "WordPress plugin that uses Open AI API to auto-generate match preview and result posts for Sportspress events.",
      "WP Cron job that runs every day to check for upcoming events and generate content based on the teams playing, recent form, and other relevant data.",
      "WP admin settings for adding Open AI API key, models and prompt."
    ],
    tags: [
      "PHP",
      "WordPress",
      "WP Cron",
      "React",
      "Antdesign",
      "AI",
      "Open AI API"
    ],
    installs: "0",
    version: "1.0",
    url: "https://github.com/jethrolanda/ai-match-writer"
  }
];

export function PluginsSection() {
  return (
    <section id="plugins" className="py-24 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-mono text-wpblue text-sm mb-2 block">
            01 / Showcase
          </span>
          <h2 className="text-4xl font-bold tracking-tight">
            Featured Plugins
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLUGINS.map((plugin, index) => (
            <motion.div
              key={plugin.slug}
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
                duration: 0.5,
                delay: index * 0.1
              }}
              className="group bg-white border border-ink/10 p-8 hover:border-wpblue/50 transition-colors flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">{plugin.name}</h3>
                  <p className="font-mono text-xs text-ink/50">{plugin.slug}</p>
                </div>
                <div className="flex gap-3 text-ink/40">
                  <a
                    target="_blank"
                    href={plugin.url}
                    className="hover:text-wpblue transition-colors"
                    aria-label="View Source"
                  >
                    <GitHubIcon fontSize="small" />
                  </a>
                </div>
              </div>

              {/* <p className="text-ink/70 mb-8 flex-grow leading-relaxed"></p> */}
              <ul className="list-disc pl-5 text-gray-700 mb-8">
                {plugin.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              <div className="space-y-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {plugin.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 bg-cream border border-ink/10 text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-ink/10 font-mono text-xs text-ink/60">
                  <div className="flex items-center gap-1.5">
                    <DownloadIcon fontSize="inherit" />
                    <span>{plugin.installs} Active Installs</span>
                  </div>
                  <div>v{plugin.version}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
