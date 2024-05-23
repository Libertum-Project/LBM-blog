import css from './Hero.module.css';

const Hero = () => {
  return (
    <div className={css.heroContainer}>
      <div className="max-sm:hidden">
        <video autoPlay muted loop className={css.video}>
          <source src="/bg-video-1.webm" type="video/webm" />
          <source src="/bg-video-1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={`${css.heroCommunity} max-sm:bg-primary-gradient`}>
        <div className={css.textCommunity}>
          <h1>Your Source for Real Estate Finance Insights</h1>
          <div className={css.paragraphsCommunity}>
            <p>
              Discover a world of opportunities in real estate finance with
              Libertum. Here, you will stay updated with the latest trends,
              innovations, and developments shaping the real estate investment
              landscape.
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
