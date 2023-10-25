'use client';
import { useState } from 'react';
import Navbar from './Navbar/Navbar';
import MobileMenu from './Navbar/MobileMenu/MobileMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <Navbar toggle={toggle} />
      <MobileMenu isOpen={isOpen} toggle={toggle} />
    </header>
  );
};

export default Header;
