import type { Metadata } from 'next';

import { Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';

import '../styles/globals.css';

const NotoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--noto-sans-kr',
});

const Soehne = localFont({
  src: [
    {
      path: './fonts/Soehne/soehne-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Soehne/soehne-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Soehne/soehne-600.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--soehne',
});

export const metadata: Metadata = {
  title: 'React Rolling Number',
  description: 'A smooth, customizable React component for rolling number animations.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${Soehne.variable} ${NotoSansKR.variable} font-sans`}>{children}</body>
    </html>
  );
};

export default RootLayout;
