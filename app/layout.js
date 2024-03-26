import { Montserrat } from 'next/font/google';
import './globals.css';
const montserrat = Montserrat({ subsets: ['latin'] });
import { siteConfig } from '@/config/site';

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  twitter: {
    siteId: '1467726470533754880',
    creatorId: '1467726470533754880',
  },
  whatsApp
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className} id='body'>
        {children}
      </body>
    </html>
  );
}
