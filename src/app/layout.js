// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css'; // Import the global CSS file

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
<link rel="icon" href="/icon.png" />

export const metadata = {
  title: 'My App',
  description: 'My Next.js App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
