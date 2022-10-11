export interface TokenInfoByCurrency {
  code: 'USD' | 'GBP' | 'EUR',
  symbol: '&#36;' | '&pound;' | '&euro;',
  rate: string,
  description: 'United States Dollar' | 'British Pound Sterling' | 'Euro',
  rate_float: number,
}

export interface TokenInfoAll {
  time: {
    updated: string,
  },
  chartName: 'Bitcoin',
  bpi: {
    USD: TokenInfoByCurrency,
    GBP: TokenInfoByCurrency,
    EUR: TokenInfoByCurrency,
  }
}
