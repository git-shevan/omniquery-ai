import type { Metadata } from 'next';
import { Inter, Roboto_Mono, Orbitron } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: 'OmniQuery AI | All-Knowing Surveillance Platform',
  description: 'The future of surveillance is here. OmniQuery AI searches the entire internet, including public, deep, and dark web, to deliver unparalleled insights and control.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${robotoMono.variable} ${orbitron.variable} font-sans bg-omni-darker text-white`}>
        {children}
      </body>
    </html>
  );
}