const MS_PER_DAY = 24 * 60 * 60 * 1000

export function getYearProgress(today: Date) {
  const year = today.getFullYear()

  const startOfYear = Date.UTC(year, 0, 1)
  const startOfNextYear = Date.UTC(year + 1, 0, 1)
  const startOfToday = Date.UTC(year, today.getMonth(), today.getDate())

  const daysInYear = (startOfNextYear - startOfYear) / MS_PER_DAY
  const remainingDays = (startOfNextYear - startOfToday) / MS_PER_DAY

  const todayIndex = (startOfToday - startOfYear) / MS_PER_DAY

  return {
    year,
    daysInYear,
    remainingDays,
    todayIndex,
  }
}
