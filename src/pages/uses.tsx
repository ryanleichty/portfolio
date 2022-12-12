import Head from '@components/Head'
import MaxWidthWrapper from '@components/MaxWidthWrapper'
import PageBanner from '@components/PageBanner'
import Sandbox from '@components/Sandbox'

const pageMeta = {
  title: 'Uses',
  description:
    'The details of my developer setup, software and tech. Check out uses.tech for a list of other peoples uses pages.',
}

export default function UsesPage() {
  return (
    <>
      <Head title={pageMeta.title} description={pageMeta.description} />
      <PageBanner title="Uses">
        The details of my developer setup, software and tech. Check out{' '}
        <a href="https://uses.tech/" target="_blank" rel="noopener noreferrer">
          uses.tech
        </a>{' '}
        for a list of other peoples uses pages.
      </PageBanner>

      <div className="aspect-[3/2] h-full w-full bg-black"></div>

      <MaxWidthWrapper className="py-8">
        <Sandbox />
      </MaxWidthWrapper>
    </>
  )
}
