import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

const fontMabryLight = fetch(new URL('../../fonts/mabry-light-pro.otf', import.meta.url)).then(
  (res) => res.arrayBuffer()
)
const fontMabryRegular = fetch(new URL('../../fonts/mabry-regular-pro.woff', import.meta.url)).then(
  (res) => res.arrayBuffer()
)

export default async function handler(req: NextRequest) {
  const fontMabryLightData = await fontMabryLight
  const fontMabryRegularData = await fontMabryRegular

  try {
    const { searchParams } = new URL(req.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : 'Creative Developer'

    return new ImageResponse(
      (
        <div
          tw="flex h-full w-full flex-col justify-between bg-gray-100 px-16 py-12"
          style={{
            backgroundColor: '#ECEFE6',
          }}
        >
          <div tw="flex items-center">
            <img
              src="https://pbs.twimg.com/profile_images/1178528044740423680/M_TUFNnJ_400x400.jpg"
              alt="Ryan Leichty"
              tw="w-24 h-24 rounded-full mr-8"
            />
            <div tw="flex items-center text-4xl uppercase tracking-widest">Ryan Leichty</div>
          </div>
          <div tw="flex gap-4">
            <div
              style={{
                fontFamily: 'Mabry Light',
              }}
              tw="flex items-center text-9xl leading-none"
            >
              {title}
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Mabry Regular',
            data: fontMabryRegularData,
            style: 'normal',
          },
          {
            name: 'Mabry Light',
            data: fontMabryLightData,
            style: 'normal',
          },
        ],
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
