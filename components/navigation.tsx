'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          Sarah Chen
        </button>

        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className={`text-sm transition-colors ${
              activeSection === 'home'
                ? 'text-primary font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('plugins')}
            className={`text-sm transition-colors ${
              activeSection === 'plugins'
                ? 'text-primary font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Plugins
          </button>
          <button
            onClick={() => scrollToSection('resume')}
            className={`text-sm transition-colors ${
              activeSection === 'resume'
                ? 'text-primary font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Resume
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}
