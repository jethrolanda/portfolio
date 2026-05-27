import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import DownloadIcon from '@mui/icons-material/Download';
const PLUGINS = [
{
  name: 'SEO Lite Boost',
  slug: 'seo-lite-boost',
  description:
  'A lightweight, zero-configuration SEO optimization plugin focused on core web vitals and automated metadata generation.',
  tags: ['PHP', 'WordPress', 'React'],
  installs: '10,000+',
  version: '2.1.0'
},
{
  name: 'WP Cache Sentry',
  slug: 'wp-cache-sentry',
  description:
  'Advanced object caching and page caching solution with Redis integration and intelligent cache invalidation rules.',
  tags: ['PHP', 'Redis', 'REST API'],
  installs: '5,000+',
  version: '1.4.2'
},
{
  name: 'Form Forge',
  slug: 'form-forge',
  description:
  'Drag-and-drop form builder utilizing the Block Editor (Gutenberg) API for seamless native WordPress integration.',
  tags: ['JavaScript', 'React', 'Gutenberg'],
  installs: '25,000+',
  version: '3.0.1'
},
{
  name: 'Custom Field Studio',
  slug: 'custom-field-studio',
  description:
  'Developer-focused toolkit for registering complex meta boxes and custom fields via a fluent PHP API.',
  tags: ['PHP', 'MySQL', 'Architecture'],
  installs: '2,000+',
  version: '1.0.5'
}];

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
          {PLUGINS.map((plugin, index) =>
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
              margin: '-100px'
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="group bg-white border border-ink/10 p-8 hover:border-wpblue/50 transition-colors flex flex-col h-full">
            
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">{plugin.name}</h3>
                  <p className="font-mono text-xs text-ink/50">{plugin.slug}</p>
                </div>
                <div className="flex gap-3 text-ink/40">
                  <a
                  href="#"
                  className="hover:text-wpblue transition-colors"
                  aria-label="View on WP.org">
                  
                    <LanguageIcon fontSize="small" />
                  </a>
                  <a
                  href="#"
                  className="hover:text-wpblue transition-colors"
                  aria-label="View Source">
                  
                    <GitHubIcon fontSize="small" />
                  </a>
                </div>
              </div>

              <p className="text-ink/70 mb-8 flex-grow leading-relaxed">
                {plugin.description}
              </p>

              <div className="space-y-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {plugin.tags.map((tag) =>
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-1 bg-cream border border-ink/10 text-ink/70">
                  
                      {tag}
                    </span>
                )}
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
          )}
        </div>
      </div>
    </section>);

}