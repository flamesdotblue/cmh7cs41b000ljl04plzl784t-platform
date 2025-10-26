import React, { useMemo, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const FAQ = [
  {
    q: 'Who are you?',
    a: 'I am Atharva Shinde, a B.Tech CSE student at S.B. Jain Institute (2023–2026), focusing on AI, web development, and data science.'
  },
  {
    q: 'What do you work on?',
    a: 'AI-driven systems, full-stack web apps, and data projects. Key projects include EmotiPal, SafeCool, PartyCam Web, and GitNova.'
  },
  {
    q: 'How can I contact you?',
    a: 'Email me at sbjitatharvas@gmail.com or connect on LinkedIn: linkedin.com/in/atharva-shinde-7369b628a'
  },
  {
    q: 'Are you open to opportunities?',
    a: 'Yes—open to internships, research, and freelance collaborations in AI, web, and data.'
  }
];

function findAnswer(input) {
  const text = input.toLowerCase();
  const item = FAQ.find((f) => text.includes(f.q.split(' ')[0].toLowerCase()) || text.includes(f.q.toLowerCase().slice(0, 6)));
  return item ? item.a : "I couldn't find that in my FAQ. You can email me at sbjitatharvas@gmail.com and I’ll reply soon.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(() => [
    { role: 'bot', content: 'Hi! I\'m Atharva\'s assistant. Ask me about skills, projects, or contact info.' }
  ]);
  const listRef = useRef(null);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const onSend = () => {
    if (!canSend) return;
    const userMsg = { role: 'user', content: input.trim() };
    const botMsg = { role: 'bot', content: findAnswer(input.trim()) };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput('');
    setTimeout(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
    }, 30);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:brightness-110"
          aria-label="Open Ask Atharva"
        >
          <MessageCircle size={18} /> Ask Atharva
        </button>
      )}

      {open && (
        <div className="w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-black/80 backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
            <div className="text-sm font-medium">Ask Atharva</div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-md p-1 text-white/70 hover:bg-white/5 hover:text-white"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          <div ref={listRef} className="max-h-64 space-y-2 overflow-y-auto p-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === 'user' ? 'ml-auto max-w-[85%] rounded-xl bg-white/10 px-3 py-2 text-sm' : 'mr-auto max-w-[90%] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90'}
              >
                {m.content}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-white/10 p-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') onSend(); }}
              placeholder="Type your question..."
              className="flex-1 rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/20"
            />
            <button
              onClick={onSend}
              disabled={!canSend}
              className="inline-flex items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 text-sm text-white disabled:opacity-40"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
