import React from 'react';
import Footer from '@/components/Footer/Footer';
import { NavBar } from '@/components/Navbar/NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
