import { FC } from 'react';
import { TokenInfoAll } from '../../types/TokenInfo';

interface Props {
  currentToken: TokenInfoAll,
}

export const TokenCard: FC<Props> = ({ currentToken }) => {
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

          <time>{time.updated}</time>
        </div>
      </div>
    </div>
  );
};
