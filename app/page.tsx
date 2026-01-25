'use client'

import Link from 'next/link'
import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Plugins from '@/components/plugins'
import Resume from '@/components/resume'
import Footer from '@/components/footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div id="home">
        <Hero setActiveSection={setActiveSection} />
      </div>
      
      <div id="plugins">
        <Plugins />
      </div>
      
      <div id="resume">
        <Resume />
      </div>
      
      <Footer />
    </main>
  )
}
