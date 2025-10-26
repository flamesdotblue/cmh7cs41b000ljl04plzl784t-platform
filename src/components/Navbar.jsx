import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4" />
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 p-3 backdrop-blur">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500" />
            <span className="font-semibold tracking-tight">Atharva Shinde</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://github.com/atharva-shinde"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/atharva-shinde-7369b628a"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:sbjitatharvas@gmail.com"
              className="rounded-xl border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white md:hidden"
            aria-label="Open Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-3 backdrop-blur md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://github.com/atharva-shinde"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl border border-white/10 p-2 text-center text-white/80 transition hover:border-white/20 hover:text-white"
              >
                <Github size={18} className="mx-auto" />
              </a>
              <a
                href="https://www.linkedin.com/in/atharva-shinde-7369b628a"
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl border border-white/10 p-2 text-center text-white/80 transition hover:border-white/20 hover:text-white"
              >
                <Linkedin size={18} className="mx-auto" />
              </a>
              <a
                href="mailto:sbjitatharvas@gmail.com"
                className="flex-1 rounded-xl border border-white/10 p-2 text-center text-white/80 transition hover:border-white/20 hover:text-white"
              >
                <Mail size={18} className="mx-auto" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
