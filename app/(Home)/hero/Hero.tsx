import Link from 'next/link';
import css from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className={css.heroContainer}>
      <div className="max-sm:hidden">
        <video autoPlay muted loop className={css.video}>
          <source src="/bg-video-1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={`${css.heroCommunity} max-sm:bg-primary-gradient`}>
        <div className={css.textCommunity}>
          <h1>Your Source for Real Estate Finance Insights</h1>
          <div className={css.paragraphsCommunity}>
            <p>
              Discover a world of opportunities in real estate finance with
              Libertum. Here, you
              will stay updated with the latest trends, innovations, and
              developments shaping the real estate investment landscape.
            </p>
            <p>
              Join us at Libertum Blog and stay informed about the latest
              developments in real estate finance!
            </p>
          </div>
        </div>

        <div className={css.textCommunity}>
          <h1>
            Libertum
            <span className="text-orange-400 tracking-wide animate-pulse">
              Blog
            </span>
          </h1>
          {/* <Image
            src="/assets/photoMarket.png"
            alt="N"
            width={336}
            height={336}
            className="cover mr-[-2rem] z-10"
          /> */}

          {/* <div className="pl-10 pr-4 py-4 bg-white bg-opacity-5 rounded-xl border border-l-0 rounded-l-none border-teal-500">
            <div className={css.featuredProperties__title}>
              <span>New</span>
              <p>Featured Properties</p>
            </div>

            <Link href="/" className={css.featuredProperties__button}>
              See all featured
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
