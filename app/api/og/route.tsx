import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/server';
import { siteConfig } from '@/config/site';

export const runtime = 'edge';

// const spaceGrotesk = fetch(
//   new URL("../../../public/Space_Grotesk/SpaceGrotesk-VariableFont_wgh.ttf", import.meta.url)
// ).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    // const fontBold = await spaceGrotesk;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get('title');

    if (!title) {
      return new Response('No title provided', { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-[#00062F] text-white">
          <div tw="flex items-center">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 11a9 9 0 0 1 9 9" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <circle cx="5" cy="19" r="1" />
            </svg> */}
            <svg
              width="141"
              height="19"
              viewBox="0 0 141 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3658 18.5001H6.63052L10.9988 12.5H15.3658V18.5001Z"
                fill="#F9861E"
              />
              <path
                d="M15.3658 12.5H10.9988V18.5001H15.3658V12.5Z"
                fill="#FFA143"
              />
              <path
                d="M4.36695 0.5L0 6.49997V12.4999V18.4999H8.7339V12.4999V6.49997V0.5H4.36695Z"
                fill="#F9861E"
              />
              <path
                d="M8.7339 0.5H4.36694V18.4999H8.7339V0.5Z"
                fill="#FFA143"
              />
              <path
                d="M26.2137 6.73071H28.135V16.4727H35.1232V18.1472H26.2137V6.73071Z"
                fill="white"
              />
              <path
                d="M40.1902 18.1455V6.729H42.1115V18.1455H40.1902Z"
                fill="white"
              />
              <path
                d="M47.6657 6.73059H54.2392C56.7804 6.73059 58.4642 7.96344 58.4642 9.82065C58.4642 11.1901 57.4588 12.1799 55.9677 12.2863C57.7117 12.3165 58.879 13.3826 58.879 14.9649C58.879 16.8682 57.2985 18.1455 54.9192 18.1455H47.6657V6.729V6.73059ZM54.344 11.5253C55.6146 11.5253 56.4565 10.9312 56.4565 10.0494C56.4565 9.05965 55.7179 8.3908 54.2407 8.3908H49.6024V11.5269H54.344V11.5253ZM54.9207 16.4869C56.1327 16.4869 56.9299 15.8324 56.9299 14.8585C56.9299 13.8846 55.8953 13.1697 54.344 13.1697H49.6024V16.4885H54.9207V16.4869Z"
                fill="white"
              />
              <path
                d="M64.168 6.73071H73.5494V8.40522H66.0893V11.5414H72.7522V13.2159H66.0893V16.4727H73.6681V18.1472H64.168V6.73071Z"
                fill="white"
              />
              <path
                d="M79.0743 18.1455V6.729H85.5306C88.1303 6.729 89.8743 8.2367 89.8743 10.5038C89.8743 12.1322 88.7656 13.3349 86.9785 13.7162L90.303 18.1455H87.9098L84.792 13.8528H81.0095V18.1455H79.0743ZM81.0095 12.164H85.6478C87.0062 12.164 87.9083 11.4936 87.9083 10.4895C87.9083 9.24077 86.9631 8.4194 85.529 8.4194H81.0079V12.164H81.0095Z"
                fill="white"
              />
              <path
                d="M94.3661 6.73071H105.934V8.40522H101.058V18.1472H99.137V8.40522H94.3646V6.73071H94.3661Z"
                fill="white"
              />
              <path
                d="M110.292 6.73071H112.213V13.5797C112.213 15.4067 113.749 16.5331 116.039 16.5331C118.328 16.5331 119.776 15.4067 119.776 13.5797V6.73071H121.698V13.5797C121.698 16.4711 119.423 18.4046 116.009 18.4046C112.595 18.4046 110.292 16.4711 110.292 13.5797V6.73071Z"
                fill="white"
              />
              <path
                d="M129.409 6.74489L129.425 6.729L133.946 15.4511L138.393 6.729H140.727V18.1455H138.806V9.59187L134.64 18.1455H133.176L128.906 9.48384V18.1455H126.985V6.729L129.408 6.74489H129.409Z"
                fill="white"
              />
            </svg>

            {/* <p tw="ml-2 font-bold text-2xl">Libertum</p> */}
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
              BLOG POST
            </div>
            <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">{siteConfig.url}</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">{siteConfig.links.site}</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        // fonts: [
        //   {
        //     name: "Inter",
        //     data: fontBold,
        //     style: "normal",
        //     weight: 700,
        //   },
        // ],
      }
    );
  } catch (error) {
    return new Response('Failed to generate image', { status: 500 });
  }
}
