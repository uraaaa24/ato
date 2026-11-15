import { getYearProgress } from '@ato/core'
import { useEffect, useState } from 'react'
import { AppState, Text, View } from 'react-native'

import Dot from '@/components/dot'

export default function HomeScreen() {
  const [today, setToday] = useState(() => new Date())
  const { remainingDays, daysInYear, todayIndex } = getYearProgress(today)

  const days = Array.from({ length: daysInYear }).map((_, i) => {
    const date = new Date(today.getFullYear(), 0, i + 1)

    if (i === todayIndex) {
      return {
        date: date.toDateString(),
        status: 'today' as const,
      }
    }

    return {
      date: date.toDateString(),
      status: i < todayIndex ? ('past' as const) : ('future' as const),
    }
  })

  useEffect(() => {
    // アプリの状態変更を監視
    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        setToday(new Date())
      }
    })

    return () => subscription.remove()
  }, [])

  return (
    <View>
      <Text>{remainingDays} days left.</Text>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {days.map(({ date, status }) => {
          return <Dot key={date} status={status} />
        })}
      </View>
    </View>
  )
}
