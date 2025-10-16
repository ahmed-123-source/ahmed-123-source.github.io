import React from 'react';

export default function Cv() {
  const pdfUrl = process.env.PUBLIC_URL + '/cv/cv.pdf';
  const section = (title, children) => (
    <section style={{marginBottom:24}}>
      <h2 style={{margin:'16px 0 8px', borderBottom:'1px solid #e5e7eb', paddingBottom:6}}>{title}</h2>
      {children}
    </section>
  );

  return (
    <div style={{maxWidth:900, margin:'0 auto', lineHeight:1.6}}>
      {/* Header */}
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:16, borderBottom:'2px solid #111', paddingBottom:12, marginBottom:16}}>
        <div>
          <h1 style={{margin:0}}>Ahmed Charfeddine</h1>
          <div>Full-Stack Developer | Web & Mobile</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div>
            <a href="mailto:ahmed.charfeddine216@gmail.com">ahmed.charfeddine216@gmail.com</a>
          </div>
          <div>
            <a href="tel:+21654946860">+216-54-946-860</a>
          </div>
          <div style={{marginTop:8}}>
            <a href={pdfUrl} download className="button" style={{background:'#111', color:'#fff', padding:'6px 10px', borderRadius:6, textDecoration:'none'}}>Download PDF</a>
          </div>
        </div>
      </header>

      {section('Education', (
        <ul style={{margin:0, paddingLeft:16}}>
          <li>
            <strong>ESPRIT - Private Higher School of Engineering and Technology</strong>, Ariana, Tunisia
            <div>Master’s Degree in Information Technology — Sep 2019 – Nov 2024</div>
          </li>
        </ul>
      ))}

      {section('Experience', (
        <div>
          <div style={{marginBottom:12}}>
            <div style={{display:'flex', justifyContent:'space-between', gap:12}}>
              <strong>SQLI Services</strong>
              <span>Manouba, Tunisia</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', gap:12, color:'#374151'}}>
              <em>Full-Stack Web and Mobile Developer</em>
              <em>Apr 2025 – Present</em>
            </div>
            <ul>
              <li>Developed a mobile application using Firebase and Java to support users with Mediterranean dieting and fitness, including healthy habit courses and interactive challenges.</li>
              <li>Built an interactive game module to evaluate users' understanding of the Mediterranean diet with instant feedback and performance analysis.</li>
              <li>Implemented a fitness and diet chatbot that provides personalized guidance, analyzes food images for calories and ingredients, and checks recipe healthiness.</li>
              <li>Constructed an Instagram-style community for dieting and fitness, enabling users to share recipes, follow others, comment, react, and chat with friends.</li>
            </ul>
          </div>

          <div style={{marginBottom:12}}>
            <div style={{display:'flex', justifyContent:'space-between', gap:12}}>
              <strong>I-Lead Consulting</strong>
              <span>Charguia, Tunisia</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', gap:12, color:'#374151'}}>
              <em>Full-Stack Developer</em>
              <em>Feb 2024 – July 2024</em>
            </div>
            <ul>
              <li>Implemented a code editor for a candidate skill-testing platform using Spring Boot and Angular with 13 multi-language compiler integration.</li>
              <li>Created sample test cases and expected outputs for automated evaluation of submitted solutions using Docker for containerization.</li>
              <li>Ensured scalability and consistent environment setup across different programming language assessments.</li>
            </ul>
          </div>

          <div>
            <div style={{display:'flex', justifyContent:'space-between', gap:12}}>
              <strong>ESPRIT</strong>
              <span>Ariana, Tunisia</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', gap:12, color:'#374151'}}>
              <em>Mobile Developer</em>
              <em>June 2023 – Aug 2023</em>
            </div>
            <ul>
              <li>Developed a medical mobile application using Kotlin and Firebase for predicting venous thrombosis probability based on user medical data.</li>
              <li>Integrated data analysis algorithms and secure data handling for medical risk assessment.</li>
            </ul>
          </div>
        </div>
      ))}

      {section('Technical Skills', (
        <ul style={{margin:0, paddingLeft:16}}>
          <li><strong>Programming Languages:</strong> Java, Kotlin, JavaScript, TypeScript, PHP, HTML/CSS.</li>
          <li><strong>Frameworks & Libraries:</strong> Spring Boot, Angular, Symfony, React, QT.</li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Firebase, H2, NoSQL.</li>
          <li><strong>Tools & Technologies:</strong> GitHub, Docker, GitLab, Google Cloud, Postman, REST APIs, Agile Methodology.</li>
        </ul>
      ))}

      {section('Certifications', (
        <ul style={{margin:0, paddingLeft:16}}>
          <li><strong>Saylor Academy:</strong> ESL005: Business-Proficient English as a Second Language.</li>
          <li><strong>Coursera:</strong> Messenger ChatBot Certificate.</li>
          <li><strong>Bourguiba School of Languages (2014–2018):</strong> Japanese Language Program.</li>
          <li><strong>Sololearn:</strong> JavaScript Certification.</li>
        </ul>
      ))}

      {section('Languages', (
        <ul style={{margin:0, paddingLeft:16}}>
          <li><strong>Tunisian:</strong> Native.</li>
          <li><strong>French:</strong> Fluent.</li>
          <li><strong>Arabic:</strong> Fluent.</li>
          <li><strong>English:</strong> Fluent.</li>
          <li><strong>Japanese:</strong> Basic – 4 years of language training.</li>
        </ul>
      ))}

      {/* Embedded PDF preview (optional): shows a viewer if the file exists) */}
      <div style={{marginTop:24}}>
        <h3>PDF Preview</h3>
        <object data={pdfUrl} type="application/pdf" width="100%" height="800">
          <p>PDF preview unavailable. You can <a href={pdfUrl} target="_blank" rel="noreferrer">open or download the PDF</a>. Make sure the file exists at <code>public/cv/cv.pdf</code>.</p>
        </object>
      </div>
    </div>
  );
}
