import React, { useState } from 'react';
import './AIBot.css';

function AIBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // 模拟 LLM 响应的函数
  const simulateLLMResponse = (userInput) => {
    setLoading(true);

    // 模拟 LLM 的“智能”回复
    let response = '';

    if (userInput.toLowerCase().includes('movie')) {
      response = 'If you enjoy sci-fi, you should watch Inception or Interstellar!';
    } else if (userInput.toLowerCase().includes('resume')) {
      response = 'You can download your latest resume from the About page.';
    } else if (userInput.toLowerCase().includes('blog')) {
      response = 'Check out my latest blog post for more insights!';
    } else if (userInput.toLowerCase().includes('hello') || userInput.toLowerCase().includes('hi')) {
      response = 'Hello! How can I assist you today?';
    } else {
      response = `I'm here to help! You said: "${userInput}". What can I assist you with?`;
    }

    // 模拟 1 秒延迟
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: response }]);
      setLoading(false);
    }, 1000);
  };

  // 处理用户消息发送
  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { sender: 'user', text: input }]);
    simulateLLMResponse(input);
    setInput('');
  };

  return (
    <div className={`ai-bot ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'AI'}
      </button>
      {isOpen && (
        <div className="chat-window">
          <h3>houxuan's AI Bot</h3>
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="message bot">AI is thinking...</div>}
          </div>
          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button onClick={handleSend} disabled={loading}>
              {loading ? 'Thinking...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIBot;
