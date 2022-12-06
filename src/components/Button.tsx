import { clsx } from 'clsx'
import ShiftBy from './ShiftBy'

type Props = {
  children?: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
  theme?: 'light' | 'dark'
  width?: 'auto' | 'full'
  [key: string]: any
}

export default function Button({
  children,
  className,
  variant = 'primary',
  theme = 'light',
  width = 'auto',
  ...props
}: Props) {
  const baseClass = 'h-10 rounded px-4 flex items-center'

  const variantClass = {
    primary: '',
    secondary: '',
  }

  const themeClass = {
    light: 'bg-black text-gray-100',
    dark: 'bg-gray-400 text-black',
  }

  const widthClass = {
    auto: 'w-auto',
    full: 'w-full',
  }

  const styles = clsx(
    baseClass,
    variantClass[variant],
    themeClass[theme],
    widthClass[width],
    className
  )

  return (
    <button className={styles} {...props}>
      <ShiftBy y={-2}>{children}</ShiftBy>
    </button>
  )
}
