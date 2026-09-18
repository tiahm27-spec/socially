import React from 'react';

export default function ProfilePage() {
  // Sample user profile settings
  const userProfile = {
    username: 'artist_dev',
    displayName: 'Alex 🎨',
    bio: 'Digital artist & creative coder. Welcome to my personal space!',
    profileColor: '#6b46c1', // Custom purple theme
    musicTrack: 'Lofi Beats - Chill Track #3',
    badges: ['🎨 Creator', '🚀 Early Member', '🌟 Room Host']
  };

  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#f4f4f9' }}>
      {/* Custom Theme Header Banner */}
      <div 
        style={{ 
          height: '180px', 
          backgroundColor: userProfile.profileColor, 
          display: 'flex', 
          alignItems: 'flex-end', 
          padding: '20px',
          color: '#fff' 
        }}
      >
        <h1 style={{ margin: 0 }}>{userProfile.displayName}</h1>
      </div>

      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {/* Profile Details */}
        <div style={{ background: '#fff', padding: '20px', borderRadius: '12px', marginTop: '-40px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#666', margin: '4px 0' }}>@{userProfile.username}</p>
          <p style={{ fontSize: '1.1rem', margin: '12px 0' }}>{userProfile.bio}</p>
          
          {/* Profile Music Bar */}
          <div style={{ background: '#eef2ff', padding: '10px 15px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🎵 <strong>Profile Music:</strong></span>
            <span>{userProfile.musicTrack}</span>
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '15px' }}>
            {userProfile.badges.map((badge, index) => (
              <span key={index} style={{ background: '#f3f4f6', padding: '4px 10px', borderRadius: '15px', fontSize: '0.85rem' }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: userProfile.profileColor, color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>
            Visit Virtual Room 🏠
          </button>
          <button style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #ccc', backgroundColor: '#fff', cursor: 'pointer' }}>
            Message 💬
          </button>
        </div>
      </div>
    </div>
  );
}
