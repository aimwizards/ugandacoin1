export const cryptoAssets = [
  {
    name: 'Monero',
    symbol: 'XMR',
    balance: '0.00',
    address: '48P6vRHbs3KWE1Jb6mXCH8jj6VY7VDi43NChxAWoP9URRMktFcDmZM9XLCioF7yrYt9t9XR4aJnQQEcnUmy5ooq82Nx8CgA',
    logo: 'https://cryptologos.cc/logos/monero-xmr-logo.png?v=035'
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    balance: '0.00',
    address: 'AtdFE6C3RwVscghy4tv1AsJ9b59Cr8JkRDn2eHwvJJEC',
    logo: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/128/black/sol.png'
  },
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    balance: '0.00',
    address: 'bc1qscda4sqr6wp4c3kwdta7v2z22lgugksw284fs7',
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=035'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    balance: '0.00',
    address: '0x4Fd2CAA4F1020Db5eeFA13d64c38d5D7c9128471',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=035'
  },
  {
    name: 'Tether (BEP20)',
    symbol: 'BEP20',
    network: 'BNB',
    balance: '0.00',
    address: '0x4Fd2CAA4F1020Db5eeFA13d64c38d5D7c9128471',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=035'
  },
  {
    name: 'USD Coin (ERC20)',
    symbol: 'USDC',
    network: 'ERC20',
    balance: '0.00',
    address: '0x4Fd2CAA4F1020Db5eeFA13d64c38d5D7c9128471',
    logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=035'
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    balance: '0.00',
    address: 'LbL3PYNHeK5EMd3XYzRNcbapZmqk1YrABj',
    logo: 'https://static-00.iconduck.com/assets.00/litecoin-cryptocurrency-icon-256x256-gwwa1l54.png'
  },
  {
    name: 'Binance Coin',
    symbol: 'BNB',
    network: 'BSC',
    balance: '0.00',
    address: '0x4Fd2CAA4F1020Db5eeFA13d64c38d5D7c9128471',
    logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png?v=035'
  },
  {
    name: 'Tether (BEP20)',
    symbol: 'USDT',
    network: 'BEP20',
    balance: '0.00',
    address: '0x4Fd2CAA4F1020Db5eeFA13d64c38d5D7c9128471',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=035'
  },
  {
    name: 'USD Coin (BEP20)',
    symbol: 'USDC',
    network: 'BEP20',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=035'
  },
  {
    name: 'MANA ',
    symbol: 'MANA',
    balance: '0.00',
    address: '0x4Fd2CAA4F1020Db5eeFA13d64c38d5D7c9128471',
    logo: 'https://cryptologos.cc/logos/decentraland-mana-logo.png'
  },
  {
    name: 'TRON',
    symbol: 'TRX',
    balance: '0.00',
    address: 'TFrufmUuvLGYKvskjTTpgBBftXyKx3wAcp',
    logo: 'https://cryptologos.cc/logos/tron-trx-logo.png?v=035'
  },
  {
    name: 'Tether (TRC20)',
    symbol: 'USDT',
    network: 'TRC20',
    balance: '0.00',
    address: 'TFrufmUuvLGYKvskjTTpgBBftXyKx3wAcp',
    logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=035'
  },
  {
    name: 'Celo',
    symbol: 'CELO',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/celo-celo-logo.png?v=035'
  },
  {
    name: 'Celo Dollar',
    symbol: 'cUSD',
    balance: '0.00',
    address: '0xec50538871198336D81b9F0d5B5fbBdB302D5510',
    logo: 'https://cryptologos.cc/logos/celo-celo-logo.png?v=035'
  }
];

export const supportedCryptos = cryptoAssets.map(asset => ({
  name: asset.name,
  symbol: asset.symbol,
  network: asset.network
}));
