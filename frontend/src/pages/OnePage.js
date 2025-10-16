import React from 'react';
import Cv from './Cv';
import Projects from './Projects';
import Achievements from './Achievements';
import Events from './Events';

export default function OnePage(){
  return (
    <div>
      {/* Hero */}
      <section id="hero" style={{padding:'48px 0'}}>
        <h1 style={{margin:'0 0 8px'}}>Ahmed Charfeddine</h1>
        <div style={{color:'#555', marginBottom:12}}>Full-Stack Developer | Web & Mobile</div>
        <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          <a href="mailto:ahmed.charfeddine216@gmail.com">ahmed.charfeddine216@gmail.com</a>
          <span>•</span>
          <a href="tel:+21654946860">+216-54-946-860</a>
          <span>•</span>
          <a href={process.env.PUBLIC_URL + '/cv/cv.pdf'} className="button" style={{background:'#111', color:'#fff', padding:'6px 10px', borderRadius:6, textDecoration:'none'}}>Download CV (PDF)</a>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" style={{padding:'24px 0'}}>
        <h2>CV</h2>
        <Cv />
      </section>

      {/* Projects Section */}
      <section id="projects" style={{padding:'24px 0'}}>
        <h2>Projects</h2>
        <Projects />
      </section>

      {/* Achievements Section */}
      <section id="achievements" style={{padding:'24px 0'}}>
        <h2>Achievements</h2>
        <Achievements />
      </section>

      {/* Events Section */}
      <section id="events" style={{padding:'24px 0'}}>
        <h2>Events</h2>
        <Events />
      </section>
    </div>
  );
}
