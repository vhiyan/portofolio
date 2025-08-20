'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/60 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight">KD<span className="text-sky-400">•</span>Portfolio</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:text-sky-300">About</a>
          <a href="#skills" className="hover:text-sky-300">Skills</a>
          <a href="#projects" className="hover:text-sky-300">Projects</a>
          <a href="#contact" className="hover:text-sky-300">Contact</a>
        </nav>
        <button className="md:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#about" className="block">About</a>
          <a href="#skills" className="block">Skills</a>
          <a href="#projects" className="block">Projects</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}
    </header>
  );
}
