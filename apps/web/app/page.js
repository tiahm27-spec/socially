'use client';

import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export default function ProfilePage() {
  const [profile, setProfile] = useLocalStorage('socially_profile', {
    name: 'Alex Rivera',
    handle: '@alex_rivera',
    bio: 'Building awesome local-first web experiences! 🚀',
    avatarColor: '#8b5cf6',
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div style={{ padding: '30px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '8px' }}>Profile Customization 👤</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        Customize your identity and see live changes instantly.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Profile Edit Form */}
        <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '24px' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Edit Details</h2>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Display Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-primary)',
                color: 'var(--text-main)',
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Handle</label>
            <input
              type="text"
              name="handle"
              value={profile.handle}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-primary)',
                color: 'var(--text-main)',
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Bio</label>
            <textarea
              name="bio"
              rows="3"
              value={profile.bio}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-primary)',
                color: 'var(--text-main)',
                resize: 'none',
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Avatar Color</label>
            <input
              type="color"
              name="avatarColor"
              value={profile.avatarColor}
              onChange={handleChange}
              style={{ border: 'none', background: 'none', cursor: 'pointer', height: '40px', width: '40px' }}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Save Changes
          </button>

          {saved && (
            <p style={{ color: '#10b981', marginTop: '12px', textAlign: 'center', fontWeight: 'bold' }}>
              ✓ Profile saved locally!
            </p>
          )}
        </form>

        {/* Live Preview Card */}
        <div>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Live Preview</h2>
          <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: profile.avatarColor,
                margin: '0 auto 16px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}
            >
              {profile.name ? profile.name.charAt(0) : 'U'}
            </div>
            <h3 style={{ margin: '0 0 4px 0' }}>{profile.name || 'Your Name'}</h3>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 16px 0', fontSize: '0.9rem' }}>
              {profile.handle || '@handle'}
            </p>
            <p style={{ background: 'rgba(0,0,0,0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.95rem' }}>
              {profile.bio || 'No bio provided yet.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
