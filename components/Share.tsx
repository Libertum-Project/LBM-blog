import React from 'react';
import Link from 'next/link';

interface ShareProps {
  title: string;
  url: string;
}

function Share({ title, url }: ShareProps) {
  const description = `Read this new post from Libertum: ${title}`;

  const socialLinks = [
    {
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
      icon: <Linkedin />,
      label: 'Linkedin'
    },
    // {
    //   href: `https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot&permissions=0`,
    //   icon: <Discord />,
    //   label: 'Discord',
    // },
    {
      href: `https://t.me/share/url?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(title)}`,
      icon: <Telegram />,
      label: 'Telegram'
    },
    {
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        url
      )}&text=${encodeURIComponent(description)}`,
      icon: <Twitter />,
      label: 'Twitter'
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: <Facebook />,
      label: 'Facebook'
    }
    // {
    //   href: "https://www.instagram.com/libertum.io/",
    //   icon: <Instagram />,
    //   label: "Instagram",
    // },
  ];

  return (
    <div>
      <div className="flex space-x-2 ">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="  hover:rotate-[350deg] hover:scale-110"
          >
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

const Twitter = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.86328 18C14.8338 18 18.8633 13.9706 18.8633 9C18.8633 4.02944 14.8338 0 9.86328 0C4.89272 0 0.863281 4.02944 0.863281 9C0.863281 13.9706 4.89272 18 9.86328 18ZM14.3982 4.28571H12.821L10.2216 7.29851L7.97449 4.28571H4.72042L8.60862 9.44242L4.92306 13.7143H6.50122L9.34573 10.4182L11.8317 13.7143H15.0061L10.9525 8.27956L14.3982 4.28571ZM13.1414 12.7569H12.2675L6.56225 5.19279H7.50009L13.1414 12.7569Z"
      fill="#00B3B5"
    />
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 40 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.0271 19.2908C39.0271 8.7765 30.2911 0.243164 19.5271 0.243164C8.7631 0.243164 0.0270996 8.7765 0.0270996 19.2908C0.0270996 28.5098 6.7351 36.186 15.6271 37.9574V25.0051H11.7271V19.2908H15.6271V14.5289C15.6271 10.8527 18.6886 7.86221 22.4521 7.86221H27.3271V13.5765H23.4271C22.3546 13.5765 21.4771 14.4336 21.4771 15.4813V19.2908H27.3271V25.0051H21.4771V38.2432C31.3246 37.2908 39.0271 29.1765 39.0271 19.2908Z"
      fill="#00B3B5"
    />
  </svg>
);
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
  >
    <path
      d="M9.86328 0C4.89266 0 0.863281 4.02938 0.863281 9C0.863281 13.9706 4.89266 18 9.86328 18C14.8339 18 18.8633 13.9706 18.8633 9C18.8633 4.02938 14.8339 0 9.86328 0ZM7.66016 12.7303H5.83766V6.86531H7.66016V12.7303ZM6.73766 6.14531C6.16203 6.14531 5.78984 5.7375 5.78984 5.23312C5.78984 4.71844 6.17328 4.32281 6.76109 4.32281C7.34891 4.32281 7.70891 4.71844 7.72016 5.23312C7.72016 5.7375 7.34891 6.14531 6.73766 6.14531ZM14.3164 12.7303H12.4939V9.48C12.4939 8.72344 12.2295 8.20969 11.5705 8.20969C11.067 8.20969 10.768 8.5575 10.6358 8.89219C10.587 9.01125 10.5748 9.18 10.5748 9.34781V12.7294H8.75141V8.73563C8.75141 8.00344 8.72797 7.39125 8.70359 6.86437H10.287L10.3705 7.67906H10.407C10.647 7.29656 11.2348 6.73219 12.2183 6.73219C13.4173 6.73219 14.3164 7.53562 14.3164 9.2625V12.7303Z"
      fill="#00B3B5"
    />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
  >
    <path
      d="M9.86328 0C4.89266 0 0.863281 4.02938 0.863281 9C0.863281 13.9706 4.89266 18 9.86328 18C14.8339 18 18.8633 13.9706 18.8633 9C18.8633 4.02938 14.8339 0 9.86328 0ZM7.66016 12.7303H5.83766V6.86531H7.66016V12.7303ZM6.73766 6.14531C6.16203 6.14531 5.78984 5.7375 5.78984 5.23312C5.78984 4.71844 6.17328 4.32281 6.76109 4.32281C7.34891 4.32281 7.70891 4.71844 7.72016 5.23312C7.72016 5.7375 7.34891 6.14531 6.73766 6.14531ZM14.3164 12.7303H12.4939V9.48C12.4939 8.72344 12.2295 8.20969 11.5705 8.20969C11.067 8.20969 10.768 8.5575 10.6358 8.89219C10.587 9.01125 10.5748 9.18 10.5748 9.34781V12.7294H8.75141V8.73563C8.75141 8.00344 8.72797 7.39125 8.70359 6.86437H10.287L10.3705 7.67906H10.407C10.647 7.29656 11.2348 6.73219 12.2183 6.73219C13.4173 6.73219 14.3164 7.53562 14.3164 9.2625V12.7303Z"
      fill="#00B3B5"
    />
  </svg>
);

const Discord = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.86328 18C14.8338 18 18.8633 13.9706 18.8633 9C18.8633 4.02944 14.8338 0 9.86328 0C4.89272 0 0.863281 4.02944 0.863281 9C0.863281 13.9706 4.89272 18 9.86328 18ZM11.6042 4.06454C12.4751 4.21551 13.3112 4.4768 14.0835 4.8368C14.0951 4.8368 14.1009 4.84261 14.1067 4.84841C15.4829 6.87487 16.1622 9.1568 15.9067 11.7871C15.9067 11.7987 15.9009 11.8103 15.8893 11.8162C14.8441 12.5826 13.8396 13.0471 12.8409 13.3549C12.8235 13.3607 12.8061 13.3549 12.7887 13.3491C12.5622 13.0297 12.3532 12.6929 12.1674 12.3387C12.1616 12.3213 12.1674 12.2923 12.1906 12.2865C12.5216 12.1587 12.8409 12.0136 13.1429 11.8336C13.1719 11.822 13.1719 11.7871 13.1487 11.7697C13.1167 11.7436 13.0848 11.7189 13.0529 11.6942C13.0209 11.6695 12.989 11.6449 12.9571 11.6187C12.9454 11.6071 12.928 11.6071 12.9164 11.6129C10.9422 12.5245 8.78802 12.5245 6.7906 11.6129C6.77899 11.6071 6.76157 11.6071 6.74996 11.6187C6.71802 11.642 6.68609 11.6666 6.65415 11.6913C6.62222 11.716 6.59028 11.7407 6.55834 11.7639C6.54093 11.7813 6.54093 11.8162 6.56415 11.8278C6.87189 12.002 7.18544 12.1529 7.51641 12.2807C7.53963 12.2865 7.55125 12.3097 7.53963 12.3329C7.35963 12.6871 7.1506 13.0239 6.91834 13.3433C6.91254 13.3549 6.89512 13.3607 6.8777 13.3549C5.8848 13.0471 4.88028 12.5826 3.83512 11.8162C3.82351 11.8103 3.8177 11.7987 3.8177 11.7871C3.60286 9.51099 4.03834 7.21164 5.6177 4.84841C5.62351 4.84261 5.62931 4.8368 5.63512 4.8368C6.41318 4.4768 7.24351 4.21551 8.11447 4.06454C8.13189 4.06454 8.14931 4.07035 8.15512 4.08196C8.26544 4.27358 8.38738 4.51745 8.46867 4.71487C9.39247 4.57551 10.332 4.57551 11.2558 4.71487C11.3371 4.52325 11.459 4.27358 11.5635 4.08196C11.5686 4.07626 11.5749 4.07175 11.5819 4.06874C11.5889 4.06573 11.5965 4.0643 11.6042 4.06454ZM6.74415 9.16841C6.74415 9.84777 7.24351 10.3994 7.84157 10.3994C8.45125 10.3994 8.93899 9.84777 8.93899 9.16841C8.9448 8.49487 8.45705 7.93745 7.84157 7.93745C7.23189 7.93745 6.74415 8.48906 6.74415 9.16841ZM10.7912 9.16841C10.7912 9.84777 11.2906 10.3994 11.8887 10.3994C12.5042 10.3994 12.9861 9.84777 12.9861 9.16841C12.9919 8.49487 12.5042 7.93745 11.8887 7.93745C11.279 7.93745 10.7912 8.48906 10.7912 9.16841Z"
      fill="#00B3B5"
    />
  </svg>
);

const Telegram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
  >
    <path
      d="M9.86328 0C4.89528 0 0.863281 4.032 0.863281 9C0.863281 13.968 4.89528 18 9.86328 18C14.8313 18 18.8633 13.968 18.8633 9C18.8633 4.032 14.8313 0 9.86328 0ZM14.0393 6.12C13.9043 7.542 13.3193 10.998 13.0223 12.591C12.8963 13.266 12.6443 13.491 12.4103 13.518C11.8883 13.563 11.4923 13.176 10.9883 12.843C10.1963 12.321 9.74628 11.997 8.98128 11.493C8.09028 10.908 8.66628 10.584 9.17928 10.062C9.31428 9.927 11.6183 7.83 11.6633 7.641C11.6695 7.61237 11.6687 7.58265 11.6609 7.55442C11.653 7.52619 11.6384 7.5003 11.6183 7.479C11.5643 7.434 11.4923 7.452 11.4293 7.461C11.3483 7.479 10.0883 8.316 7.63128 9.972C7.27128 10.215 6.94728 10.341 6.65928 10.332C6.33528 10.323 5.72328 10.152 5.26428 9.999C4.69728 9.819 4.25628 9.72 4.29228 9.405C4.31028 9.243 4.53528 9.081 4.95828 8.91C7.58628 7.767 9.33228 7.011 10.2053 6.651C12.7073 5.607 13.2203 5.427 13.5623 5.427C13.6343 5.427 13.8053 5.445 13.9133 5.535C14.0033 5.607 14.0303 5.706 14.0393 5.778C14.0303 5.832 14.0483 5.994 14.0393 6.12Z"
      fill="#00B3B5"
    />
  </svg>
);

export default Share;
