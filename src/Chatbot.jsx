import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // 新增错误状态

  // 模拟 AI 回复，不调用 API
  const generateResponse = (userInput) => {
    setLoading(true);
    setError(null); // 每次请求前清空错误信息

    try {
      // 模拟 AI 回复逻辑
      const response = `You said: "${userInput}". Here's a simulated AI response!`;

      // 模拟 AI 回复延迟
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: response },
        ]);
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.error('Failed to generate response:', err);
      setError('An unexpected error occurred. Please try again.');
      setLoading(false);
    }
  };

  // 处理用户发送消息
  const handleSend = () => {
    if (input.trim() === '') {
      setError('You cannot send an empty message.');
      return;
    }

    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');

    // 生成模拟回复
    generateResponse(input);
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">houxuan's AI Chatbot</div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
        {loading && <p className="message bot loading">AI is thinking...</p>}
        {error && <p className="error-message">{error}</p>} {/* 显示错误信息 */}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
