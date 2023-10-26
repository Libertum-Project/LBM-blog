import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/images/LibertumColor.png';
import css from './Footer.module.css';
import { networks } from '@./utils/networks';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Image
        src={logo}
        alt="Libertum"
        width={80}
        height={80}
        className={css.image}
      />
      <div className={css.text}>
        <p>
          Libertum is a decentralized finance algorithmic market protocol that
          will make DeFi adoption make sense by introducing real collateral.
        </p>
        <i>© 2023 Libertum Protocol</i>
      </div>

      <div className={css.links}>
        <div className={css.navigation}>
          <Link href="/">HOME</Link>
          <a
            href="https://raw.githubusercontent.com/Libertum-Project/Website/2829a6808fe188063f490cdf257e97558bbd1c66/LBM-Client/src/components/Landing/assets/LBM-whitepaper.pdf" // Cambio aquí
            target="_blank"
            rel="noopener noreferrer"
            download="LBM-whitepaper.pdf"
          >
            WHITEPAPER
          </a>

          <a
            href="https://www.linkedin.com/company/libertum1"
            target="_blank"
            rel="noreferrer"
          >
            I WANT TO BE PART
          </a>

          <a href="/" rel="noreferrer">
            MARKETPLACE
          </a>

          <a href="/" rel="noreferrer">
            FAQs
          </a>

          <Link href="/">CONTACT</Link>
        </div>
        <div className={css.socialmedia}>
          {networks.map(({ net, href }, index) => (
            <a key={index} href={href} target="_blank" rel="noreferrer">
              <Image src={net} alt="Social Logo" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
