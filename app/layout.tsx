import type { Metadata } from 'next';
import './globals.css';
import ThreeBackground from '@/components/ui/ThreeBackground';

export const metadata: Metadata = {
  title: 'Softloftix — Enterprise Software & App Development',
  description: 'Softloftix builds scalable web applications, native mobile experiences, and enterprise cloud solutions.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      {/* Removed bg-black to allow 3D background transparency */}
      <body className="antialiased h-full overflow-hidden text-white font-inter">
        <ThreeBackground />
        
        <div id="root" className="h-full w-full relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}