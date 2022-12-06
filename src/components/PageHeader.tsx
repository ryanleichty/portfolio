import MaxWidthWrapper from './MaxWidthWrapper'

export default function PageHeader({
  title,
  children,
  className,
  ...props
}: {
  title: string
  children?: React.ReactNode
  className?: string
  [key: string]: any
}) {
  return (
    <header>
      <MaxWidthWrapper>
        <div className="grid gap-8 pt-32 pb-16 lg:grid-cols-2 lg:gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{title}</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-full lg:text-lg xl:col-span-2">{children}</div>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
