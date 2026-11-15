import { getYearProgress } from '@ato/core'
import { useState } from 'react'
import { Text } from 'react-native'

export default function HomeScreen() {
  const [today] = useState(() => new Date())
  const { remainingDays } = getYearProgress(today)

  return <Text>{remainingDays} days left.</Text>
}
