import { RESULTS } from "./constants"

export const getResultText = (itemIndex, result) => {
  if (result === 2) return RESULTS.tie

  return result === itemIndex ? RESULTS.winner : RESULTS.loser
}

export const getResultColor = (itemIndex, result) => {
  if (result === 2) return "warning"

  return result === itemIndex ? "success" : "error"
}