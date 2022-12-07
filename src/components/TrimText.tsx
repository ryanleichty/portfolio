type Props = {
  top?: number
  bottom?: number
  left?: number
  right?: number
  x?: number
  y?: number
  children: React.ReactNode
  [key: string]: any
}

export default function TrimText({
  top,
  bottom,
  left,
  right,
  x = 0,
  y = 0,
  children,
  ...props
}: Props) {
  return (
    <span
      className="block"
      style={{ marginLeft: `${left ? left : x}em`, marginRight: `${right ? right : x}em` }}
      {...props}
    >
      <span className="block" style={{ marginBottom: `${top ? top : y}em` }} />
      {children}
      <span className="block" style={{ marginTop: `${bottom ? bottom : y}em` }} />
    </span>
  )
}
