import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Download, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Rocket size={14} className="text-cyan-400" />
            AI & Full-Stack Developer
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Atharva Shinde
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            AI Innovator | Web Developer | Data Science Enthusiast. Passionate about AI-driven systems, web apps, and sustainable solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 font-medium text-white shadow-[0_0_30px_rgba(56,189,248,0.4)] transition hover:brightness-110"
            >
              View Projects
              <ArrowDown size={18} className="transition group-hover:translate-y-0.5" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-medium text-white/90 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative h-[380px] w-full md:h-[520px]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-black/30 backdrop-blur" />
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-transparent to-blue-500/10" />
        </div>
      </div>

      <BackgroundDecor />
    </div>
  );
}

function BackgroundDecor() {
  return (
    <div aria-hidden className="absolute inset-0 opacity-60">
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.25),transparent_60%)] blur-xl" />
      <div className="pointer-events-none absolute left-[8%] bottom-[10%] h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-xl" />
    </div>
  );
}
