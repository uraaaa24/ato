type DotProps = {
  status: 'past' | 'today' | 'future'
}

const colorClasses = {
  past: 'bg-stone-500',
  today: 'bg-orange-500',
  future: 'bg-transparent',
}

const Dot = ({ status }: DotProps) => {
  const colorClass = colorClasses[status]

  return (
    <div
      className={`w-full aspect-square border-r border-b border-stone-800/25 bg-clip-padding ${colorClass}`}
    />
  )
}

export default Dot
