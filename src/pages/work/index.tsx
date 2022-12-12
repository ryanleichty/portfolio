import Head from '@components/Head'
import PageBanner from '@components/PageBanner'

const pageMeta = {
  title: 'Work',
  description: 'The work page description...',
}

export default function WorkPage() {
  return (
    <>
      <Head title={pageMeta.title} description={pageMeta.description} />
      <PageBanner title="Work">
        The details of my developer setup, software and tech. Check out uses.tech for a list of
        other peoples uses pages.
      </PageBanner>

      <div className="aspect-[3/2] h-full w-full bg-black"></div>
    </>
  )
}
