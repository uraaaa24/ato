import { View } from 'react-native'

const COLS = 15

const colors = {
  past: '#78716B',
  today: '#FF6900',
  future: 'transparent',
}

type DotProps = {
  status: 'past' | 'today' | 'future'
}

const Dot = ({ status }: DotProps) => {
  return (
    <View
      style={{
        width: `${100 / COLS}%`,
        aspectRatio: 1,
        borderColor: '#C4C0BA',
        borderWidth: 0.5,
        backgroundColor: colors[status],
      }}
    />
  )
}

export default Dot
