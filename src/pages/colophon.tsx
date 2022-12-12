import Head from '@components/Head'
import PageBanner from '@components/PageBanner'

const pageMeta = {
  title: 'Colophon',
  description: 'The colophon page description...',
}

export default function ColophonPage() {
  return (
    <>
      <Head title={pageMeta.title} description={pageMeta.description} />
      <PageBanner title="Colophon">
        The details of my developer setup, software and tech. Check out uses.tech for a list of
        other peoples uses pages.
      </PageBanner>
    </>
  )
}
