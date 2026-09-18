'use client';

import { useState, useRef, useEffect } from 'react';

export default function RoomPage() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'Alex', text: 'Welcome to the virtual room! 🚀', time: '10:00 AM' },
    { id: 2, user: 'Sam', text: 'Hey everyone! Excited to test out this local chat.', time: '10:02 AM' },
  ]);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef(null);

  // Auto-scroll to the bottom when a new message arrives
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      user: 'You',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText('');
  };

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '8px' }}>Virtual Room Chat 💬</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
        A local interactive space to chat and hang out.
      </p>

      {/* Chat Container */}
      <div
        className="glass-card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '500px',
          overflow: 'hidden',
        }}
      >
        {/* Message Feed Viewport */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                alignSelf: msg.user === 'You' ? 'flex-end' : 'flex-start',
                maxWidth: '70%',
                background: msg.user === 'You' ? 'var(--accent-color)' : 'var(--bg-secondary)',
                color: 'var(--text-main)',
                padding: '10px 14px',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  color: msg.user === 'You' ? '#e9d5ff' : 'var(--text-muted)',
                  marginBottom: '4px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '12px',
                }}
              >
                <span>{msg.user}</span>
                <span>{msg.time}</span>
              </div>
              <p style={{ margin: 0, wordBreak: 'break-word' }}>{msg.text}</p>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Message Input Box */}
        <form
          onSubmit={handleSendMessage}
          style={{
            display: 'flex',
            gap: '10px',
            padding: '16px',
            background: 'rgba(0, 0, 0, 0.2)',
            borderTop: '1px solid var(--border-color)',
          }}
        >
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-primary)',
              color: 'var(--text-main)',
              outline: 'none',
            }}
          />
          <button type="submit" className="btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
