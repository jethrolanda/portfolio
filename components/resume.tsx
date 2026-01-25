export default function Resume() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12">Professional Resume</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-semibold text-foreground">Senior WordPress Developer</h4>
                  <p className="text-sm text-muted-foreground mb-2">Digital Solutions Co. | 2020 - Present</p>
                  <ul className="text-foreground/80 space-y-2 text-sm">
                    <li>• Developed and maintained 12+ WordPress plugins with 50,000+ active installations</li>
                    <li>• Led plugin architecture decisions and code quality standards</li>
                    <li>• Managed client relationships and gathered requirements for custom solutions</li>
                    <li>• Mentored junior developers on WordPress best practices and security</li>
                  </ul>
                </div>

                <div className="border-l-2 border-border pl-6">
                  <h4 className="text-lg font-semibold text-foreground">WordPress Developer</h4>
                  <p className="text-sm text-muted-foreground mb-2">WebStudio Inc. | 2018 - 2020</p>
                  <ul className="text-foreground/80 space-y-2 text-sm">
                    <li>• Built custom WordPress themes and plugins for 100+ clients</li>
                    <li>• Implemented REST APIs and custom post types for complex workflows</li>
                    <li>• Optimized site performance achieving 90+ Google PageSpeed scores</li>
                    <li>• Provided technical support and training to content teams</li>
                  </ul>
                </div>

                <div className="border-l-2 border-border pl-6">
                  <h4 className="text-lg font-semibold text-foreground">Junior Web Developer</h4>
                  <p className="text-sm text-muted-foreground mb-2">StartupHub | 2016 - 2018</p>
                  <ul className="text-foreground/80 space-y-2 text-sm">
                    <li>• Developed WordPress sites and plugins for startup clients</li>
                    <li>• Learned full-stack development practices and version control</li>
                    <li>• Collaborated with designers on UI/UX implementation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="text-lg font-semibold text-foreground">
                    Bachelor of Science in Computer Science
                  </h4>
                  <p className="text-sm text-muted-foreground">Tech University | 2016</p>
                </div>

                <div className="border-l-2 border-border pl-6">
                  <h4 className="text-lg font-semibold text-foreground">
                    Advanced WordPress Development Certification
                  </h4>
                  <p className="text-sm text-muted-foreground">WordPress Academy | 2017</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Technical Skills</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'React', 'HTML/CSS', 'Tailwind'].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    {['PHP', 'MySQL', 'REST API', 'WP-CLI'].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Docker', 'VS Code', 'Webpack'].map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Core Competencies</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>✓ Plugin Architecture & Development</li>
                <li>✓ Custom Theme Development</li>
                <li>✓ Database Optimization</li>
                <li>✓ Security & Performance</li>
                <li>✓ REST API Integration</li>
                <li>✓ WordPress Multisite</li>
                <li>✓ WooCommerce Extension</li>
                <li>✓ User Experience Design</li>
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Languages</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-medium text-foreground">English</p>
                    <p className="text-xs text-muted-foreground">Fluent</p>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-medium text-foreground">Mandarin</p>
                    <p className="text-xs text-muted-foreground">Intermediate</p>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="pt-4 border-t border-border">
              <a
                href="#"
                className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-center transition-all hover:opacity-90 inline-block"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
