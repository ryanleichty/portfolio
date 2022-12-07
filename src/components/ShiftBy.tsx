type Props = {
  x?: number
  y?: number
  children: React.ReactNode
  [key: string]: any
}

export default function ShiftBy({ x = 0, y = 0, children, ...props }: Props) {
  return (
    <span style={{ translate: `${x}px ${y}px` }} {...props}>
      {children}
    </span>
  )
}
