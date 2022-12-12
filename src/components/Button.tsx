import Link from 'next/link'
import { clsx } from 'clsx'

import TrimText from '@components/TrimText'

type Props = {
  as?: React.ElementType
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  width?: 'auto' | 'full'
  [key: string]: any
}

export default function Button({
  as = 'button',
  children,
  className,
  variant = 'primary',
  width = 'auto',
  ...props
}: Props) {
  const Component = props?.href ? Link : as

  const baseClass = 'h-10 rounded-md px-4 flex items-center justify-center transition-colors'

  const variantClass = {
    primary:
      'bg-black text-gray-100 dark:bg-gray-400 dark:text-black hover:bg-gray-900 hover:dark:bg-gray-600',
    secondary:
      'border border-black text-black dark:border-gray-400 dark:text-gray-400 hover:bg-black hover:text-gray-100 hover:dark:bg-gray-400 hover:dark:border-gray-400 hover:dark:text-black',
  }

  const widthClass = {
    auto: 'w-auto',
    full: 'w-full',
  }

  return (
    <Component
      className={clsx(baseClass, variantClass[variant], widthClass[width], className)}
      {...props}
    >
      <TrimText top={-0.35} bottom={-0.25} x={-0.05}>
        {children}
      </TrimText>
    </Component>
  )
}
