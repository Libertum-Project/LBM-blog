import Link from 'next/link';
import css from './MobileMenu.module.css';

const MobileMenu = ({ isOpen }) => {
  return (
    <div
      className={css.mobileMenuContainer}
      style={{
        display: `${isOpen ? 'block' : 'none'}`,
      }}
    >
      <div className={css.mobileMenu}>
        <Link href="/">MARKETPLACE</Link>
        <Link href="/">BUY LIBERTUM</Link>
        <Link href="/">SUPPORT</Link>
      </div>
    </div>
  );
};

export default MobileMenu;
