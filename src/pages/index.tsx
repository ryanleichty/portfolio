import Head from '@components/Head'
import MaxWidthWrapper from '@components/MaxWidthWrapper'
import PageBanner from '@components/PageBanner'

const pageMeta = {
  title: 'Creative Developer',
  description:
    'I’m a creative who likes working with code, specializing in bridging the gaps between software development, design, and user experience.',
}

export default function Home() {
  return (
    <>
      <Head title={pageMeta.title} description={pageMeta.description} />
      <PageBanner title="Creative Developer" className="bg-black text-gray-400">
        Hi, I’m Ryan!
      </PageBanner>

      <div className="aspect-[3/2] h-full w-full bg-black"></div>

      <MaxWidthWrapper>
        <div className="grid gap-8 py-8 md:grid-cols-2 md:gap-4">
          <div>
            <h2 className="uppercase tracking-widest">Info</h2>
          </div>
          <div className="grid grid-cols-6 gap-8 md:gap-4">
            <div className="col-span-full lg:col-span-4">
              <p>
                I developed The Quarterly name, logo, and visuals and brought a proud, cat-owning
                personality across its entire brand world.
              </p>
              <p>
                Storytelling is fundamental to what it means to be human. We capture attention and
                inspire action through the stories we tell. Social media offers ever-expanding
                opportunity for connection, but to harness its cooperative potential we need to look
                outward.
              </p>
            </div>
            <div className="col-span-full text-sm lg:col-start-[-1]">
              <ul>
                <li>Branding</li>
                <li>Design</li>
                <li>Publishing</li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
