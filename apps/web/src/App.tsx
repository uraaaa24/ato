import { getYearProgress } from '@ato/core'
import { useState } from 'react'

import Dot from './components/dot'
import Header from './components/header'

function App() {
  const [today] = useState(() => new Date())
  const { year, daysInYear, remainingDays, todayIndex } = getYearProgress(today)

  return (
    <div className="flex flex-col min-h-screen max-w-4xl mx-auto py-12 px-8">
      <div className="mb-16">
        <Header year={year} />
      </div>

      <main>
        <div className="mb-10 text-4xl font-semibold text-stone-800">
          {remainingDays}
          <span className="text-stone-500 text-xl font-normal">
            {' '}
            days left.
          </span>
        </div>

        <div className="grid md:grid-cols-25 grid-cols-15 border-t border-l border-stone-800/25">
          {Array.from({ length: daysInYear }).map((_, i) => {
            const key = crypto.randomUUID()

            const getStatus = (i: number) => {
              if (i < todayIndex) {
                return 'past'
              }
              if (i > todayIndex) {
                return 'future'
              }

              return 'today'
            }

            return <Dot key={key} status={getStatus(i)} />
          })}
        </div>
      </main>
    </div>
  )
}

export default App
