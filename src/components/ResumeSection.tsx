import React from 'react';
import { motion } from 'framer-motion';
const EXPERIENCE = [
{
  role: 'Senior WordPress Developer',
  company: 'Agency XYZ',
  period: '2021 — Present',
  bullets: [
  'Architected and maintained 15+ custom enterprise WordPress plugins.',
  'Led the migration of legacy jQuery codebases to modern React/Gutenberg blocks.',
  'Optimized database queries reducing average load times by 40%.']

},
{
  role: 'Plugin Developer',
  company: 'WP Solutions Inc.',
  period: '2018 — 2021',
  bullets: [
  'Developed a premium e-commerce add-on with over 50,000 active installations.',
  'Implemented complex REST API endpoints for headless WordPress setups.',
  'Provided technical support and resolved critical security vulnerabilities.']

},
{
  role: 'Web Developer',
  company: 'Freelance',
  period: '2015 — 2018',
  bullets: [
  'Built custom WordPress themes and simple utility plugins for small businesses.',
  'Managed hosting, deployments, and regular maintenance for 30+ client sites.']

}];

const SKILLS = {
  'WordPress Core': [
  'Plugin API',
  'Theme API',
  'REST API',
  'Gutenberg Blocks',
  'WP-CLI'],

  Languages: ['PHP 8+', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML/CSS'],
  'Tools & Workflow': ['Git', 'Composer', 'npm/yarn', 'Docker', 'PHPUnit']
};
export function ResumeSection() {
  return (
    <section id="resume" className="py-24 border-t border-ink/10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="font-mono text-wpblue text-sm mb-2 block">
            02 / Experience
          </span>
          <h2 className="text-4xl font-bold tracking-tight">Resume</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Experience Timeline */}
          <div className="lg:col-span-8 space-y-12">
            <h3 className="font-mono text-lg font-medium border-b border-ink/10 pb-4 mb-8">
              Work History
            </h3>

            <div className="space-y-12">
              {EXPERIENCE.map((job, index) =>
              <motion.div
                key={index}
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
                  duration: 0.5
                }}
                className="relative pl-8 md:pl-0">
                
                  <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                    <div className="mb-2 md:mb-0 md:col-span-1 font-mono text-sm text-ink/50">
                      {job.period}
                    </div>
                    <div className="md:col-span-3 space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-ink">
                          {job.role}
                        </h4>
                        <div className="font-mono text-sm text-wpblue mt-1">
                          {job.company}
                        </div>
                      </div>
                      <ul className="space-y-2 text-ink/70">
                        {job.bullets.map((bullet, i) =>
                      <li key={i} className="flex gap-3">
                            <span className="text-wpblue mt-1.5 text-xs">
                              ▹
                            </span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                      )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Skills & Education */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="font-mono text-lg font-medium border-b border-ink/10 pb-4 mb-8">
                Technical Skills
              </h3>
              <div className="space-y-8">
                {Object.entries(SKILLS).map(([category, skills]) =>
                <div key={category}>
                    <h4 className="font-bold text-ink mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) =>
                    <span
                      key={skill}
                      className="font-mono text-xs px-2 py-1 bg-cream border border-ink/10 text-ink/80">
                      
                          {skill}
                        </span>
                    )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-mono text-lg font-medium border-b border-ink/10 pb-4 mb-8">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-ink">B.S. Computer Science</h4>
                  <div className="font-mono text-sm text-ink/60 mt-1">
                    University of Technology
                  </div>
                  <div className="font-mono text-xs text-ink/40 mt-1">
                    2011 — 2015
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}