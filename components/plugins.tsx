'use client'

import { useState } from 'react'
import PluginCard from './plugin-card'

const pluginsData = [
  {
    id: 1,
    title: 'Advanced Form Builder',
    description: 'Drag-and-drop form builder with advanced field types, conditional logic, and seamless payment integration.',
    category: 'Forms',
    rating: 4.9,
    reviews: 328,
    status: 'Active',
    image: '/plugins/form-builder.jpg',
    demo: 'https://example.com',
    download: 'https://wordpress.org',
  },
  {
    id: 2,
    title: 'SEO Optimizer Pro',
    description: 'Comprehensive SEO suite with on-page analysis, sitemap generation, and schema markup support.',
    category: 'SEO',
    rating: 4.7,
    reviews: 512,
    status: 'Active',
    image: '/plugins/seo-optimizer.jpg',
    demo: 'https://example.com',
    download: 'https://wordpress.org',
  },
  {
    id: 3,
    title: 'Performance Accelerator',
    description: 'Multi-layer caching system with image optimization and lazy loading for blazing-fast page loads.',
    category: 'Performance',
    rating: 4.8,
    reviews: 1205,
    status: 'Active',
    image: '/plugins/performance.jpg',
    demo: 'https://example.com',
    download: 'https://wordpress.org',
  },
  {
    id: 4,
    title: 'Social Media Manager',
    description: 'Schedule and manage social media posts across multiple platforms with analytics and engagement tracking.',
    category: 'Social Media',
    rating: 4.6,
    reviews: 387,
    status: 'Active',
    image: '/plugins/social-media.jpg',
    demo: 'https://example.com',
    download: 'https://wordpress.org',
  },
]

export default function Plugins() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(pluginsData.map((p) => p.category))]
  const filteredPlugins =
    filter === 'All' ? pluginsData : pluginsData.filter((p) => p.category === filter)

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Featured Plugins</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of my most popular WordPress plugins. Each built with attention to detail, performance, and user experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-foreground border border-border hover:border-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPlugins.map((plugin) => (
            <PluginCard key={plugin.id} {...plugin} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            View more plugins on WordPress.org →
          </p>
          <a
            href="https://profiles.wordpress.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-primary text-primary rounded-lg font-medium transition-all hover:bg-primary/5"
          >
            Browse All Plugins
          </a>
        </div>
      </div>
    </section>
  )
}
