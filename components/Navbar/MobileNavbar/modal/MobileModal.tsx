import { type ReactElement } from 'react';
import Link from 'next/link';

import css from './MobileModal.module.css';

interface MobileModalProp {
  handleToggleOpenMenu: () => void;
}

export function MobileModal({
  handleToggleOpenMenu
}: MobileModalProp): ReactElement {
  return (
    <div className={css.mobileModalContainer} onClick={handleToggleOpenMenu}>
      <div className={css.mobileModal}>
        <Link href="https://www.libertum.io/get" className={css.border}>
          Get LBM
        </Link>
        <Link href="https://www.libertum.io/comingsoon" className={css.border}>
          Explore Properties
        </Link>
        <div className={css.border}>
          <p>Learn</p>
          <Link href="https://www.libertum.io/learn-investors">
            → Investors
          </Link>
          <Link href="https://www.libertum.io/propertyowners">
            → Property Owners
          </Link>
          <Link href="https://www.libertum.io/rwa">→ RWA Tokenisation</Link>
        </div>
        <div>
          <p>Docs</p>
          <Link href="/Libertum_Pitch.pdf" target="_blank">
            → Token Utility
          </Link>
          <Link href="/whitepaperLibertum.pdf" target="_blank">
            → White Paper
          </Link>
          <Link href="/Libertum_Pitch.pdf" target="_blank">
            → Pitch Deck
          </Link>
          <Link href="/rfp">→ RFP</Link>
          <Link href="https://blog.libertum.io/">→Blog</Link>
        </div>
        <div>
          <p>Community</p>
          <Link href="https://www.libertum.io/community" target="_blank">
            → Socials
          </Link>
          <Link href="https://www.libertum.io/ambassadors" target="_blank">
            → Ambassadors
          </Link>
        </div>

        <div>
          <p>More</p>
          <Link href="https://www.libertum.io/roadmap" target="_blank">
            → Roadmap
          </Link>
          <Link href="https://www.libertum.io/team" target="_blank">
            → Libertum Team
          </Link>
          <Link href="https://www.libertum.io/ecosystem" target="_blank">
            → Ecosystem
          </Link>
        </div>
      </div>
    </div>
  );
}
