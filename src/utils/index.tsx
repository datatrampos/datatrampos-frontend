import { COLORS } from '@/constants/colors'

export const handleSinceData = (date: string) => {
  const today = new Date()
  const jobDate = new Date(date)

  const diff = Math.floor(
    (today.getTime() - jobDate.getTime()) / (1000 * 60 * 60 * 24),
  )

  if (diff > 1) {
    return `há ${diff} dias`
  } else if (diff === 1) {
    return `ontem`
  } else {
    return <strong style={{ color: COLORS.darkPink }}> hoje </strong>
  }
}
