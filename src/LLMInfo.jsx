import React from 'react';
import './LLMInfo.css';

function LLMInfo() {
  return (
    <div className="llm-info-container">
      <h1>Understanding Large Language Models (LLMs)</h1>
      <section className="llm-section">
        <h2>What is an LLM?</h2>
        <p>
          Large Language Models (LLMs) are advanced AI systems capable of understanding and generating human-like language.
          They are trained on vast amounts of text data to perform various tasks such as text generation, translation, and summarization.
        </p>
      </section>

      <section className="llm-section">
        <h2>ChatGPT</h2>
        <p>
          ChatGPT is developed by OpenAI and is based on the GPT architecture. It is designed for conversational AI, content creation, and various other natural language processing tasks.
        </p>
        <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer">Learn More</a>
      </section>

      <section className="llm-section">
        <h2>Gemini</h2>
        <p>
          Gemini is a powerful language model developed by Google. It is known for its advanced natural language understanding capabilities and can handle complex AI tasks.
        </p>
        <a href="https://gemini.google.com/app" target="_blank" rel="noopener noreferrer">Learn More</a>
      </section>
    </div>
  );
}

export default LLMInfo;
