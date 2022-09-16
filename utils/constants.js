const StatusConnection = {
  Connected: 'Connected',
  Disconnected: 'Disconnected',
  Error: 'Error'
}

const RPC_URL_BY_CHAIN_ID = {
  [57]: 'https://bsc-dataseed.binance.org/',
  [97]: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
}

export { StatusConnection, RPC_URL_BY_CHAIN_ID }