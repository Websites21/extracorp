import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import '../styles/globals.css';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ExtraCorp',
  description: 'ExtraCorp - Zarządzaj swoją firmą z łatwością',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body className={workSans.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
