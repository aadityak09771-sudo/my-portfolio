import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Aaditya Kumar | Frontend Developer',
  description: 'Portfolio of Aaditya Kumar, a Frontend Developer.',
  openGraph: {
    title: 'Aaditya Kumar | Frontend Developer',
    description: 'Portfolio of Aaditya Kumar, a Frontend Developer.',
    url: 'https://your-portfolio-domain.com',
    siteName: 'Aaditya Kumar Portfolio',
    images: [
      {
        url: 'https://your-portfolio-domain.com/og-image.jpg', 
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
