'use client';

import { motion } from 'framer-motion';

export default function ProjectCard({ title, summary, tags, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="card block hover:scale-[1.01] transition-transform"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-slate-300 mt-1">{summary}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-800 ring-1 ring-white/10">{t}</span>
        ))}
      </div>
    </motion.a>
  );
}
