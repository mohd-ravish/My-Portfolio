import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
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
        <CodingProfiles />
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
