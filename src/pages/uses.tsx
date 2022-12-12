import Head from '@components/Head'
import PageBanner from '@components/PageBanner'
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
        The details of my developer setup, software and tech. Check out uses.tech for a list of
        other peoples uses pages.
      </PageBanner>
    </>
  )
}
