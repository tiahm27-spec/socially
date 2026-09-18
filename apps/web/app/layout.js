import './globals.css';

export const metadata = {
  title: 'Socially 🌐',
  description: 'A customizable, real-time collaborative social platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
import './globals.css';
import ThemeToggle from './ThemeToggle';

export const metadata = {
  title: 'Socially 🌐',
  description: 'A customizable, real-time collaborative social platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
