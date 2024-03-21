'use client'
import { type ReactElement, useState, useEffect } from "react";
import Image from "next/image";
import css from "./Hero.module.css";
import Link from "next/link";

export function Hero(): ReactElement {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 950px)");
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1250);
      setIsMobile(mediaQuery.matches);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);


  return (
    <div className={css.heroContainer}>
      <div>
        {isMobile ? <div className={css.backgroundNoVideo}></div> : <video autoPlay muted loop className={css.video}>
            <source src="./bg-video-1.mp4" type="video/mp4" />
          </video> }
      </div>
        
      <section className={css.hero}>
        <article className={css.text}>
          <h1>
            Welcome to
            <br />
            Libertum
            <br />
            Blog
          </h1>

          <div className={css.paragraphs}>
            <p>
              Libertum is more than an investment platform; it is a catalyst for
              positive change in the world of real estate finance. We connect
              Real Estate Owners and millions of Investors across the globe,
              collaborating to unlock the true value of real estate.
            </p>
          </div>
        </article>
        {/* <div className={css.buttons}>
          <Link href="/subscribe" className={css.button1}>
            <div className={css.buttonFrame}>
              <Image
                src="/assets/rocket.svg"
                alt="N"
                width="13"
                height="13"
                className={css.logo}
              />
              <p>Start Tokenizing</p>
            </div>

            <Image
              alt="left arrow"
              src="/assets/leftArrow.svg"
              width={13.207}
              height={8.708}
            />
          </Link>

          <Link href="/subscribe" className={css.button1}>
            <div className={css.buttonFrame}>
              <Image
                src="/assets/marketIcon.svg"
                alt="N"
                width="13"
                height="13"
                className={css.logo}
              />
              <p>Explore Properties</p>
            </div>

            <Image
              alt="left arrow"
              src="/assets/leftArrow.svg"
              width={13.207}
              height={8.708}
            />
          </Link>

          <Link href="/ico" className={css.button}>
            <div className={css.buttonFrame}>
              <Image
                src="/assets/coin.svg"
                alt="N"
                width="13"
                height="13"
                className={css.logo}
              />
              <p>Buy LBM</p>
            </div>

            <Image
              alt="left arrow"
              src="/assets/leftArrow.svg"
              width={13.207}
              height={8.708}
            />
          </Link>
        </div> */}
      </section>
    </div>
  );
}
