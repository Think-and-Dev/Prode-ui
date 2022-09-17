import { BET_TYPES, RESULTS } from "./constants"

export const getResultText = (itemIndex, result) => {
  if (!isNaN(Number(result))) {
    if (result === 2) return RESULTS[BET_TYPES.TIE]

    return result === itemIndex ? RESULTS[BET_TYPES.WIN_FIRST] : RESULTS[BET_TYPES.WIN_SECOND]
  }
  
  return '(No seleccionado)'
}

export const getResultColor = (itemIndex, result) => {
  if (!isNaN(Number(result))) {
    if (result === 2) return "warning"
  
    return result === itemIndex ? "success" : "error"
  }

  return 'default'
}

export const getAddressFormatted = (address) => {
  return address && `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
}