import { PropsWithChildren } from 'react';
import { Montserrat } from 'next/font/google';
import './globals.css';
const montserrat = Montserrat({ subsets: ['latin'] });
import { siteConfig } from '@/config/site';

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url)
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={montserrat.className} id="body">
        {children}
      </body>
    </html>
  );
}
