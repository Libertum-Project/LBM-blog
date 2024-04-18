import { type ReactElement } from 'react';
import Link from 'next/link';
import css from './MobileModal.module.css';

interface MobileModalProp {
  handleToggleOpenMenu: () => void;
}

export function MobileModal({
  handleToggleOpenMenu,
}: MobileModalProp): ReactElement {
  return (
    <div className={css.mobileModalContainer} onClick={handleToggleOpenMenu}>
      <div className={css.mobileModal}>
        <Link href="libertum.io/get" className={css.border}>
          Get LBM
        </Link>
        <Link href="https://www.libertum.io/comingsoon" className={css.border}>
          Explore Properties
        </Link>
        <Link href="/" className={css.border}>
          Blog
        </Link>
        <div className={css.border}>
          <p>Learn</p>
          <Link href="https://www.libertum.io/learn-investors">→ Investors</Link>
          <Link href="https://www.libertum.io/propertyowners">→ Property Owners</Link>
          <Link href="https://www.libertum.io/rwa">→ RWA Tokenisation</Link>
        </div>
        <Link href="https://www.libertum.io/community" className={css.border}>
          Community
        </Link>
        <div>
          <p>Docs</p>
          <Link href="https://www.libertum.io/Libertum_Tokenomics.pdf" target="_blank">
            → Token Utility
          </Link>
          <Link href="https://www.libertum.io/whitepaperLibertum.pdf" target="_blank">
            → White Paper
          </Link>
          <Link href="https://www.libertum.io/Libertum_Pitch.pdf" target="_blank">
            → Pitch Deck
          </Link>
        </div>
      </div>
    </div>
  );
}
