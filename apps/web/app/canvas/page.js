import React from 'react';

export default function CanvasPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2>🎨 Collaborative Canvas</h2>
          <p style={{ margin: 0, color: '#666' }}>Connected Room: Alex's Room</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #ccc', background: '#fff', cursor: 'pointer' }}>Undo</button>
          <button style={{ padding: '8px 16px', borderRadius: '6px', border: 'none', background: '#0070f3', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>Export Art</button>
        </div>
      </header>

      {/* Toolbar & Drawing Viewport */}
      <div style={{ display: 'flex', gap: '15px' }}>
        {/* Drawing Tools */}
        <aside style={{ width: '80px', background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <button title="Brush" style={{ fontSize: '1.2rem', padding: '8px', cursor: 'pointer' }}>🖌️</button>
          <button title="Eraser" style={{ fontSize: '1.2rem', padding: '8px', cursor: 'pointer' }}>🧹</button>
          <button title="Text Tool" style={{ fontSize: '1.2rem', padding: '8px', cursor: 'pointer' }}>🔤</button>
          <input type="color" defaultValue="#000000" style={{ width: '32px', height: '32px', border: 'none', cursor: 'pointer' }} />
        </aside>

        {/* Canvas Surface */}
        <main style={{ flex: 1, height: '600px', background: '#fff', borderRadius: '8px', border: '1px solid #ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: '#aaa' }}>[ Interactive HTML5 Canvas Viewport ]</p>
        </main>
      </div>
    </div>
  );
}
