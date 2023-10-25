import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import css from './Navbar.module.css';

const Navbar = ({ toggle }) => {
  return (
    <>
      <nav className={css.mobileNav}>
        <HamburgerMenu toggle={toggle} />
        <Link href="/">
          <Image
            src="/assets/images/LibertumColor.png"
            alt="Libertum Logo"
            width={64}
            height={64}
          />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
