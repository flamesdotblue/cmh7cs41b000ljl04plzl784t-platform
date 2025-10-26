import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:sbjitatharvas@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s Connect</h2>
        <p className="mt-2 max-w-2xl text-white/60">
          Have an opportunity, collaboration idea, or question? Send a message and I’ll get back shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none transition placeholder:text-white/40 focus:border-white/20 focus:bg-black/30"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none transition placeholder:text-white/40 focus:border-white/20 focus:bg-black/30"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm outline-none transition placeholder:text-white/40 focus:border-white/20 focus:bg-black/30"
                placeholder="Tell me about your project or idea..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 font-medium text-white shadow-[0_0_30px_rgba(56,189,248,0.4)] transition hover:brightness-110"
            >
              <Send size={18} /> Send Message
            </button>
          </div>
          <p className="mt-3 text-xs text-white/50">
            This form uses your email client via mailto. For server-side email, connect SMTP or an API in your deployment.
          </p>
        </form>

        <aside className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
          <h3 className="text-lg font-semibold">Contact Details</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3 text-white/80">
              <Mail size={16} className="text-cyan-400" />
              <a href="mailto:sbjitatharvas@gmail.com" className="hover:underline">sbjitatharvas@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <Linkedin size={16} className="text-cyan-400" />
              <a
                className="hover:underline"
                href="https://www.linkedin.com/in/atharva-shinde-7369b628a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <Github size={16} className="text-cyan-400" />
              <a
                className="hover:underline"
                href="https://github.com/atharva-shinde"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repositories
              </a>
            </li>
          </ul>

          <div className="mt-8 rounded-xl border border-white/10 bg-black/40 p-4">
            <p className="text-sm text-white/70">
              Open to internships, freelance projects, and research collaborations in AI, web development, and data science.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
