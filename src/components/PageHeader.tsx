import { clsx } from 'clsx'

import MaxWidthWrapper from '@components/MaxWidthWrapper'
import TrimText from '@components/TrimText'

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
    <MaxWidthWrapper
      className={clsx(className, 'grid gap-8 pt-32 pb-16 lg:grid-cols-2 lg:gap-4')}
      {...props}
    >
      <h1 className="font-serif text-3xl italic md:text-4xl lg:text-5xl xl:text-8xl">
        <TrimText top={0} bottom={-0.15} x={-0.075}>
          {title}
        </TrimText>
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-full xl:col-span-2">
          <p className="lg:text-lg">
            <TrimText top={-0.275} bottom={-0.15} x={-0.075}>
              {children}
            </TrimText>
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
