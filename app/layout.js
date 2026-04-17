import './globals.css';

export const metadata = {
  title: 'Hidz Savings - Sepuh Edition',
  description: 'Track my future wealth',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}