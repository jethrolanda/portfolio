'use client';

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const handleExploreClick = () => {
    const element = document.getElementById('plugins')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection('plugins')
    }
  }

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-semibold text-balance leading-tight">
              WordPress Plugin Developer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed max-w-2xl">
              Crafting elegant, performant WordPress plugins that solve real problems. Specializing in custom functionality, seamless integration, and intuitive user experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <button
              onClick={handleExploreClick}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:opacity-90 active:scale-95"
            >
              Explore Plugins
            </button>
            <a
              href="#"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium transition-all hover:bg-primary/5"
            >
              Download Resume
            </a>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Quick Stats</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="text-3xl font-semibold text-primary mb-2">12+</p>
                <p className="text-sm text-muted-foreground">Plugins Built</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-primary mb-2">50K+</p>
                <p className="text-sm text-muted-foreground">Active Installations</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-primary mb-2">8+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-primary mb-2">4.8★</p>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
