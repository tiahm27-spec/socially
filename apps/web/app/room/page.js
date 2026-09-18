import React from 'react';

export default function VirtualRoomPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#1a1a2e', color: '#fff', padding: '20px' }}>
      {/* Room Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
        <div>
          <h2>🎨 Alex's Creative Room</h2>
          <p style={{ color: '#aaa', margin: 0 }}>4 Participants • Live Canvas Active</p>
        </div>
        <button style={{ backgroundColor: '#e94560', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          Leave Room
        </button>
      </header>

      {/* Main Interactive Room Space */}
      <main style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '20px' }}>
        {/* Collaborative Screen / Canvas Area */}
        <div style={{ backgroundColor: '#16213e', borderRadius: '12px', height: '500px', border: '2px dashed #0f3460', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <p style={{ color: '#888' }}>[ Shared WebRTC Screen Share & Canvas Viewport ]</p>
          <div style={{ position: 'absolute', bottom: '20px', display: 'flex', gap: '10px' }}>
            <button style={{ padding: '8px 12px', borderRadius: '6px', border: 'none', background: '#0f3460', color: '#fff', cursor: 'pointer' }}>🖥️ Share Screen</button>
            <button style={{ padding: '8px 12px', borderRadius: '6px', border: 'none', background: '#e94560', color: '#fff', cursor: 'pointer' }}>🎨 Toggle Drawing Tool</button>
          </div>
        </div>

        {/* Live Chat & Participant Sidebar */}
        <div style={{ backgroundColor: '#16213e', borderRadius: '12px', padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <h3>Room Chat</h3>
            <div style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.6' }}>
              <p><strong>@alex:</strong> Check out this screen share!</p>
              <p><strong>@sam:</strong> Drawing on the canvas now 🎨</p>
            </div>
          </div>
          <input 
            type="text" 
            placeholder="Send a message..." 
            style={{ width: '90%', padding: '10px', borderRadius: '6px', border: 'none', outline: 'none', backgroundColor: '#0f3460', color: '#fff' }} 
          />
        </div>
      </main>
    </div>
  );
}
