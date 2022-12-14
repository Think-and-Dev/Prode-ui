const StatusConnection = {
  Connected: 'Connected',
  Disconnected: 'Disconnected',
  Error: 'Error'
}

const RESULTS = {
  0: "Ganador",
  1: "Perdedor",
  2: "Empate"
}

const TOKEN_ERC20 = '0x620183085B03064BE38529Df28Bf52ccF251f084'
const PRODEX_ADDRESS = '0x9e77Ec5425D19F5DD49DD4C21357Bb0ffFb41218'

const RPC_URL_BY_CHAIN_ID = {
  [57]: 'https://bsc-dataseed.binance.org/',
  [97]: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  [588]: 'https://stardust.metis.io/?owner=588'
}

const BET_TYPES = {
  WIN_FIRST: 0,
  WIN_SECOND: 1,
  TIE: 2
}

export { StatusConnection, RPC_URL_BY_CHAIN_ID, RESULTS, TOKEN_ERC20, PRODEX_ADDRESS, BET_TYPES }