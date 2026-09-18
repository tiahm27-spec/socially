'use client';

import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export default function HomePage() {
  const [posts, setPosts] = useLocalStorage('socially_feed_posts', [
    {
      id: 1,
      author: 'Alex Rivera',
      handle: '@alex_rivera',
      content: 'Just launched the local-first setup for Socially! Everything is running super smooth on Next.js. 🚀',
      tag: 'Development',
      likes: 4,
      isLiked: false,
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      author: 'Sam Chen',
      handle: '@sam_c',
      content: 'Testing out the new canvas drawing tools. Loving the glassmorphism UI theme! ✨',
      tag: 'Design',
      likes: 12,
      isLiked: false,
      timestamp: '4 hours ago',
    },
  ]);

  const [newPostContent, setNewPostContent] = useState('');
  const [selectedTag, setSelectedTag] = useState('General');

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost = {
      id: Date.now(),
      author: 'You',
      handle: '@you_local',
      content: newPostContent,
      tag: selectedTag,
      likes: 0,
      isLiked: false,
      timestamp: 'Just now',
    };

    setPosts((prev) => [newPost, ...prev]);
    setNewPostContent('');
  };

  const toggleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked,
          };
        }
        return post;
      })
    );
  };

  return (
    <div style={{ padding: '30px', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '8px' }}>Community Feed 🌐</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
        See what everyone is working on and share your updates.
      </p>

      {/* Post Creator Box */}
      <form onSubmit={handleCreatePost} className="glass-card" style={{ padding: '20px', marginBottom: '30px' }}>
        <textarea
          rows="3"
          placeholder="What's happening?"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-primary)',
            color: 'var(--text-main)',
            resize: 'none',
            marginBottom: '12px',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-primary)',
              color: 'var(--text-main)',
              cursor: 'pointer',
            }}
          >
            <option value="General">General</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Showcase">Showcase</option>
          </select>

          <button type="submit" className="btn-primary">
            Post Update
          </button>
        </div>
      </form>

      {/* Posts Stream */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {posts.map((post) => (
          <div key={post.id} className="glass-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div>
                <span style={{ fontWeight: 'bold', marginRight: '8px' }}>{post.author}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{post.handle}</span>
              </div>
              <span
                style={{
                  fontSize: '0.75rem',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                {post.tag}
              </span>
            </div>

            <p style={{ margin: '12px 0', lineHeight: '1.5' }}>{post.content}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{post.timestamp}</span>

              <button
                onClick={() => toggleLike(post.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: post.isLiked ? '#ef4444' : 'var(--text-muted)',
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {post.isLiked ? '❤️' : '🤍'} {post.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
