import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import css from './Navbar.module.css';

const Navbar = ({ toggle }) => {
  return (
    <>
      <nav className={css.nav}>
        <HamburgerMenu toggle={toggle} />
        <Link href="/">
          <Image
            src="/assets/images/LibertumColor.png"
            alt="Libertum Logo"
            width={64}
            height={64}
          />
        </Link>

        <div className={css.desktopLink}>
          <Link href="/">MARKETPLACE</Link>
          <Link href="/">BUY LIBERTUM</Link>
          <Link href="/">SUPPORT</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
