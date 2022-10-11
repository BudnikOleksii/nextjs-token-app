import { FC } from 'react';
import { TokenInfoAll, TokenInfoByCurrency } from '../../types/TokenInfo';

interface TokenCardProps {
  currentToken: TokenInfoAll,
}

interface TokenInfoProps {
  tokenCurrencyInfo: TokenInfoByCurrency,
}

const TokenCurrencyInfo: FC<TokenInfoProps> = ({ tokenCurrencyInfo }) => {
  const { code, symbol, rate } = tokenCurrencyInfo;
  let symbolUnicode: string;

  switch (symbol) {
    case '&#36;':
      symbolUnicode = '$';
      break;
    case '&pound;':
      symbolUnicode = '£';
      break;
    case '&euro;':
      symbolUnicode = '€';
      break;
    default:
      symbolUnicode = '';
      break;
  }

  return (
    <p className="subtitle is-5">
      {`${code} ${rate}`}
      <strong>{symbolUnicode}</strong>
    </p>
  )
}

export const TokenCard: FC<TokenCardProps> = ({ currentToken }) => {
  const { time, chartName, bpi } = currentToken;

  return (
    <div className="card m-auto" style={{ width : '300px'}}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDInqAQaLVPBHsaY9Z7wYbMMmrcNSaQY11LnR3c3JH5Q&s" alt={chartName} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{`${chartName} current price`}</p>
          </div>
        </div>

        <div className="content">
          <TokenCurrencyInfo tokenCurrencyInfo={bpi.USD} />
          <TokenCurrencyInfo tokenCurrencyInfo={bpi.GBP} />
          <TokenCurrencyInfo tokenCurrencyInfo={bpi.EUR} />
          <time>{time.updated}</time>
        </div>
      </div>
    </div>
  );
};
