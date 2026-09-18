'use client';

import { useRef, useState, useEffect } from 'react';

export default function CanvasPage() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#8b5cf6');
  const [brushSize, setBrushSize] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set internal canvas resolution to match display size
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '8px' }}>Collaborative Canvas 🎨</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
        Express yourself with real-time drawing tools.
      </p>

      {/* Drawing Toolbar */}
      <div
        className="glass-card"
        style={{
          padding: '16px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
          Color:
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ border: 'none', background: 'none', cursor: 'pointer', height: '36px', width: '36px' }}
          />
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
          Size ({brushSize}px):
          <input
            type="range"
            min="1"
            max="40"
            value={brushSize}
            onChange={(e) => setBrushSize(e.target.value)}
            style={{ cursor: 'pointer' }}
          />
        </label>

        <button onClick={clearCanvas} className="btn-primary" style={{ marginLeft: 'auto' }}>
          Clear Canvas
        </button>
      </div>

      {/* HTML5 Interactive Viewport */}
      <div className="glass-card" style={{ overflow: 'hidden', cursor: 'crosshair' }}>
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          style={{ display: 'block', width: '100%', background: 'rgba(0, 0, 0, 0.2)' }}
        />
      </div>
    </div>
  );
}
