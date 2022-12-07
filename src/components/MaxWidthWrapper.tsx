import clsx from 'clsx'

type Props = {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
}

export default function MaxWidthWrapper({ as: Component = 'section', children, className }: Props) {
  return <Component className={clsx('px-4 md:px-8', className)}>{children}</Component>
}
