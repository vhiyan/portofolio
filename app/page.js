'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroCanvas from '@/components/HeroCanvas';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { site } from '@/data/site';

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        {/* HERO */}
        <div className="mx-auto max-w-6xl px-4">
          <HeroCanvas>
            <div className="text-center">
              <motion.h1
                className="text-3xl md:text-5xl font-bold gradient-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {site.name}
              </motion.h1>
              <motion.p
                className="mt-3 text-lg md:text-xl text-slate-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {site.role} — {site.tagline}
              </motion.p>
              <motion.div
                className="mt-6 flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <a href={site.resumeUrl} className="card px-5 py-3 text-sm font-medium">Download Resume</a>
                <a href={`mailto:${site.email}`} className="px-5 py-3 text-sm font-medium rounded-2xl ring-1 ring-white/15 hover:ring-white/30 transition">Email Me</a>
              </motion.div>
            </div>
          </HeroCanvas>
        </div>

        {/* ABOUT */}
        <Section id="about" title="About">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 card">
              <p>
                I’m an embedded software engineer focused on reliable systems, real-time comms, and robotics.
                I work across C/C++, Python, Linux services, and vehicle networks (CAN, J1939, UDS).
                Recently I’ve been exploring optimization for UAVs and scalable test frameworks.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Social</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {site.socials.map(s => (
                  <li key={s.label}><a className="link" href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills" subtitle="Tech I use often">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {site.skills.map((sk) => (
              <div key={sk} className="card text-sm">{sk}</div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects" subtitle="Selected work & experiments">
          <div className="grid md:grid-cols-2 gap-4">
            {site.projects.map(p => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div className="card">
            <p>Want to build something together? Reach me at <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.</p>
          </div>
        </Section>

        <footer className="py-10 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind & React Three Fiber.
        </footer>
      </div>
    </main>
  );
}
