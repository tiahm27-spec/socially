import './globals.css';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export const metadata = {
  title: 'Socially 🌐',
  description: 'A local-first, real-time interactive prototype',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {/* Global Glassmorphism Header */}
        <header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            backdropFilter: 'blur(12px)',
            background: 'var(--bg-glass)',
            borderBottom: '1px solid var(--border-color)',
            padding: '12px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              color: 'var(--text-main)',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            Socially 🌐
          </Link>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontWeight: '500',
                fontSize: '0.95rem',
              }}
            >
              Feed
            </Link>
            <Link
              href="/canvas"
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontWeight: '500',
                fontSize: '0.95rem',
              }}
            >
              Canvas
            </Link>
            <Link
              href="/room"
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontWeight: '500',
                fontSize: '0.95rem',
              }}
            >
              Virtual Room
            </Link>
            <Link
              href="/profile"
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontWeight: '500',
                fontSize: '0.95rem',
              }}
            >
              Profile
            </Link>
          </nav>
        </header>

        {/* Page Content Viewport */}
        <main>{children}</main>

        {/* Global Dark/Light Floating Switch */}
        <ThemeToggle />
      </body>
    </html>
  );
}
