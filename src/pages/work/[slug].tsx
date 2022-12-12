import Head from '@components/Head'
const pageMeta = {
  title: 'Project',
  description: 'The project page description...',
}

export default function ProjectPage() {
  return <h1>Project</h1>
      <Head title={pageMeta.title} description={pageMeta.description} />
}
