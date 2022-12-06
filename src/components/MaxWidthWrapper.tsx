import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function MaxWidthWrapper({ children, className }: Props) {
  return <div className={clsx('px-4 md:px-8', className)}>{children}</div>
}
