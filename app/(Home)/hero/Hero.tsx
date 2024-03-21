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
            <span className="text-orange-400 tracking-wide animate-pulse">Blog</span>
          </h1>

          <div className={css.paragraphs}>
            <p>
            Libertum is more than just an investment platform. It is a catalyst for positive change in real estate finance. Here, you will find the latest updates and innovations in the world of real estate investment.
            </p>
            <p>
            Join us at Libertum Blog and stay informed about the latest developments in real estate finance!
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
