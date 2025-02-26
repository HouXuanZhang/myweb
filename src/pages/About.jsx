import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>I am a junior computer science student from China at Kean University, passionate about AI, software development, and problem-solving.</p>
      <p>My journey has been filled with various projects focusing on AI-powered applications and web development.</p>

      {/* 图片展示区域 */}
      <div className="image-gallery">
        <img src="/assets/picture1.jpg" alt="Profile 1" className="about-image"/>
        <img src="/assets/picture2.jpg" alt="Profile 2" className="about-image"/>
      </div>

      {/* 简历下载按钮 */}
      <button className="download-button" onClick={() => window.open('/resume.pdf')}>
        Download My Resume (PDF)
      </button>
    </div>
  );
}

export default About;
