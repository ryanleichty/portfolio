import Head from '@components/Head'
import MaxWidthWrapper from '@components/MaxWidthWrapper'
import TrimText from '@components/TrimText'

const pageMeta = {
  title: 'About',
  description: 'The about page description...',
}

export default function AboutPage() {
  return (
    <>
      <Head title={pageMeta.title} description={pageMeta.description} />
      <MaxWidthWrapper className="grid grid-cols-12 gap-4 py-32">
        <h1 className="col-span-full text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:col-span-10 xl:text-7xl">
          <TrimText top={-0.25} bottom={-0.15} x={-0.075}>
            I’m a creative who likes working with code, specializing in bridging the gaps between
            software development, design, and user experience.
          </TrimText>
        </h1>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="grid gap-8 border-t border-black pb-40 pt-8 md:grid-cols-2 md:gap-4 md:pb-60">
        <div>
          <h2 className="uppercase tracking-widest">
            <TrimText top={-0.35} bottom={-0.25} x={-0.05}>
              Info
            </TrimText>
          </h2>
        </div>
        <div className="grid grid-cols-6 gap-8 md:gap-4 ">
          <div className="col-span-full lg:col-span-4">
            <p className="text-lg md:text-xl">
              <TrimText top={-0.275} bottom={-0.15} x={-0.075}>
                I value craftsmanship, conviction, collaboration, and communication. I create bold,
                elegant, and timeless identities in a modern aesthetic way. Aesthetics
              </TrimText>
            </p>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="grid gap-8 border-t border-black pb-40 pt-8 md:grid-cols-[1fr_1fr] md:gap-4 md:pb-60 lg:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_5fr]">
        <div>
          <h2 className="uppercase tracking-widest">
            <TrimText top={-0.35} bottom={-0.25} x={-0.05}>
              What I do
            </TrimText>
          </h2>
        </div>
        <div>
          <p className="text-lg md:text-xl lg:text-4xl xl:text-6xl">
            <TrimText top={-0.275} bottom={-0.15} x={-0.075}>
              I create bold, elegant, and timeless identities in a modern aesthetic way.
            </TrimText>
          </p>
        </div>
      </MaxWidthWrapper>
    </>
  )
}
