import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="projects" className="relative">
          <Projects />
        </section>
        <section id="contact" className="relative">
          <Contact />
        </section>
      </main>
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur py-8 text-center">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Atharva Shinde. All rights reserved.</p>
      </footer>
      <Chatbot />
    </div>
  );
}

export default App;
