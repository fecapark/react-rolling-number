import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'React Rolling Number Demo',
  description: 'A demo app for React Rolling Number component',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
};

export default RootLayout;
