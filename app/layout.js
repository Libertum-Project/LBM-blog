import { Montserrat } from 'next/font/google';
import './globals.css';

import Header from '@components/Header/Header';
import Footer from '@./components/Footer/Footer';
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Libertum - Blog',
  description:
    'Exploring freedom, technology, and innovation in our journey to a brighter future.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
