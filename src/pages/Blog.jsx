import React from 'react';
import './Blog.css';

function Blog() {
  // 预设的博客主题内容
  const blogTopics = [
    { title: "Algorithms", description: "Detailed explanations of sorting, graph traversal, and dynamic programming.", icon: "🧮" },
    { title: "Deep Learning", description: "Tutorials on neural networks, CNNs, and NLP models.", icon: "🧠" },
    { title: "HTML & Web Development", description: "Step-by-step HTML, CSS, and JavaScript guides.", icon: "🌐" },
    { title: "Python Programming", description: "Python basics, OOP, and practical coding projects.", icon: "🐍" },
  ];

  return (
    <div className="blog-container">
      <h1>My Blog</h1>
      <p>Explore various topics I've written about:</p>

      {/* 博客分类展示 */}
      <div className="blog-grid">
        {blogTopics.map((topic, index) => (
          <div key={index} className="blog-card">
            <h2>{topic.icon} {topic.title}</h2>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>

      {/* 跳转到 CSDN 博客 */}
      <div className="blog-link">
        <p>Read more articles on my CSDN blog:</p>
        <a href="https://mp.csdn.net/mp_blog/manage/article?spm=1000.2115.3001.5448" target="_blank" rel="noopener noreferrer">
          Go to CSDN Blog
        </a>
      </div>
    </div>
  );
}

export default Blog;
