import { TokenInfoAll } from '../types/TokenInfo';

const BASE_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

type RequestMethod = 'GET';

const request = <T>(
  url: string,
  method: RequestMethod = 'GET',
): Promise<T> => {
  const options: RequestInit = { method };

  return fetch(BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};

export const getTokenInfo = () => request<TokenInfoAll>('');
