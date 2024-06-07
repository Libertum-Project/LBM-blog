import { NextRequest } from 'next/server';
import { ImageResponse } from 'next/server';

import { siteConfig } from '@/config/site';

export const runtime = 'edge';
const blogUrl = 'blog.libertum.io';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const title = searchParams.get('title');

    if (!title) {
      return new Response('No title provided', { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-26 w-full h-full items-start text-black text-white"
          style={{
            backgroundImage: `url(https://${blogUrl}/imageOgBlog.svg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-7xl font-bold capitalize"
              style={{ fontFamily: 'Space Grotesk', fontWeight: 600 }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-center">
            <div
              tw="flex ml-2 border border-orange-200 px-6 py-3 rounded-3xl bg-[#FFA24E] shadow-2xl uppercase"
              style={{
                boxShadow: '0px 0px 4px 0px #FFF, 0px 0px 20px 0px #FFA143',
                fontFamily: 'Space Grotesk',
                fontWeight: 600
              }}
            >
              {siteConfig.links.site}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 540
      }
    );
  } catch (error) {
    return new Response('Failed to generate image', { status: 500 });
  }
}
