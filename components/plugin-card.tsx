'use client'

import { Star } from 'lucide-react'

interface PluginCardProps {
  title: string
  description: string
  category: string
  rating: number
  reviews: number
  status: string
  image?: string
  demo: string
  download: string
}

export default function PluginCard({
  title,
  description,
  category,
  rating,
  reviews,
  status,
  image,
  demo,
  download,
}: PluginCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <span className="text-5xl opacity-20">📦</span>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-semibold text-card-foreground">{title}</h3>
            <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
              {status}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            <span className="inline-block px-2 py-1 bg-secondary/50 rounded text-xs mr-2">
              {category}
            </span>
          </p>
        </div>

        <p className="text-foreground/80 leading-relaxed">{description}</p>

        <div className="flex items-center gap-2 py-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-border'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-foreground">{rating}</span>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>

        <div className="flex gap-3 pt-4 border-t border-border">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 text-center text-sm font-medium border border-primary text-primary rounded-lg transition-all hover:bg-primary/5"
          >
            View Demo
          </a>
          <a
            href={download}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 text-center text-sm font-medium bg-primary text-primary-foreground rounded-lg transition-all hover:opacity-90"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  )
}
