export type CurrencyCode = 'USD' | 'GBP' | 'EUR';

export interface TokenInfoByCurrencyWithId {
  id: string,
  code: CurrencyCode,
  symbol: '&#36;' | '&pound;' | '&euro;',
  rate: string,
  description: 'United States Dollar' | 'British Pound Sterling' | 'Euro',
  rate_float: number,
}

export type TokenInfoByCurrency = Omit<TokenInfoByCurrencyWithId, 'id'>;

export interface TokenInfoAll {
  id: string,
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
