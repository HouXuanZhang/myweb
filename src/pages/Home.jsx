import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to houxuan's AI Project</h1>
      <p>
        Hi! I'm Houxuan, a passionate junior computer science student from Kean University, China.
        This website showcases my interests in artificial intelligence, programming, and technology.
      </p>
      <div className="highlight-section">
        <h2>Explore the Site</h2>
        <ul>
          <li>Learn about my background and download my resume.</li>
          <li>Check out my favorite movies with trailers.</li>
          <li>Read my latest blog posts on CSDN.</li>
          <li>Contact me directly through my personal channels.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
