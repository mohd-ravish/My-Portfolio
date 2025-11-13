import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Responsibilities from './components/Responsibilities';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Responsibilities />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
