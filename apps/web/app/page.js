import React from 'react';

export default function Home() {
  return (
    <div style={{ display: 'flex', fontFamily: 'sans-serif', height: '100vh' }}>
      {/* Sidebar Navigation */}
      <nav style={{ width: '220px', borderRight: '1px solid #ccc', padding: '20px' }}>
        <h2>Socially 🌐</h2>
        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2.5' }}>
          <li>🏠 <strong>Home</strong></li>
          <li>💬 <strong>Chats</strong></li>
          <li>🖼️ <strong>Rooms</strong></li>
          <li>🎨 <strong>Canvas</strong></li>
          <li>👤 <strong>Profile</strong></li>
        </ul>
      </nav>

      {/* Main Feed Content Area */}
      <main style={{ flex: 1, padding: '20px', backgroundColor: '#fafafa' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3>Feed</h3>
          <button style={{ padding: '8px 16px', borderRadius: '20px', cursor: 'pointer' }}>+ Create</button>
        </header>

        <div style={{ background: '#fff', border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
          <h4>@artist_dev shared a canvas</h4>
          <p>Anyone wanna draw right now? Hop into my room! 🎨</p>
          <button style={{ backgroundColor: '#0070f3', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}>
            Join Virtual Room
          </button>
        </div>
      </main>
    </div>
  );
}
