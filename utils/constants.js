const StatusConnection = {
  Connected: 'Connected',
  Disconnected: 'Disconnected',
  Error: 'Error'
}

const RESULTS = {
  winner: "Ganador",
  loser: "Perdedor",
  tie: "Empate"
}

const TOKEN_ERC20 = ''
const PRODEX_ADDRESS = '0xf51744c8ea5Dd910F1717f90658934f89cB16745'

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