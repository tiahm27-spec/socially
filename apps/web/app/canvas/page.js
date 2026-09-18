'use client';

import { useRef, useState, useEffect } from 'react';

export default function CanvasPage() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#8b5cf6');
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set internal canvas resolution to match container
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
    ctx.strokeStyle = isEraser ? '#1a1a2e' : color; // Erase matches viewport background
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

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const imageURI = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'socially-artwork.png';
    link.href = imageURI;
    link.click();
  };

  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '8px' }}>Collaborative Canvas 🎨</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
        Draw freehand, toggle tools, and export your creations locally.
      </p>

      {/* Drawing Toolbar */}
      <div
        className="glass-card"
        style={{
          padding: '16px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        {/* Tool Mode Toggles */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            type="button"
            onClick={() => setIsEraser(false)}
            className="btn-primary"
            style={{
              opacity: !isEraser ? 1 : 0.5,
              padding: '6px 12px',
              fontSize: '0.9rem',
            }}
          >
            ✏️ Brush
          </button>
          <button
            type="button"
            onClick={() => setIsEraser(true)}
            className="btn-primary"
            style={{
              opacity: isEraser ? 1 : 0.5,
              padding: '6px 12px',
              fontSize: '0.9rem',
            }}
          >
            🧹 Eraser
          </button>
        </div>

        {/* Color Picker */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
          Color:
          <input
            type="color"
            value={color}
            disabled={isEraser}
            onChange={(e) => setColor(e.target.value)}
            style={{
              border: 'none',
              background: 'none',
              cursor: isEraser ? 'not-allowed' : 'pointer',
              height: '36px',
              width: '36px',
              opacity: isEraser ? 0.3 : 1,
            }}
          />
        </label>

        {/* Size Presets */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontWeight: 'bold' }}>Presets:</span>
          {[
            { label: 'Fine', size: 2 },
            { label: 'Medium', size: 8 },
            { label: 'Bold', size: 20 },
          ].map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => setBrushSize(preset.size)}
              style={{
                padding: '4px 8px',
                borderRadius: '6px',
                border: '1px solid var(--border-color)',
                background: brushSize === preset.size ? 'var(--accent-color)' : 'var(--bg-primary)',
                color: 'var(--text-main)',
                cursor: 'pointer',
                fontSize: '0.8rem',
              }}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Dynamic Range Slider */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
          Size ({brushSize}px):
          <input
            type="range"
            min="1"
            max="40"
            value={brushSize}
            onChange={(e) => setBrushSize(Number(e.target.value))}
            style={{ cursor: 'pointer' }}
          />
        </label>

        {/* Actions */}
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
          <button
            type="button"
            onClick={clearCanvas}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'rgba(239, 68, 68, 0.2)',
              color: '#f87171',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Clear
          </button>
          <button type="button" onClick={downloadCanvas} className="btn-primary">
            📥 Export PNG
          </button>
        </div>
      </div>

      {/* HTML5 Interactive Viewport */}
      <div className="glass-card" style={{ overflow: 'hidden', cursor: isEraser ? 'cell' : 'crosshair' }}>
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          style={{ display: 'block', width: '100%', background: '#1a1a2e' }}
        />
      </div>
    </div>
  );
}
