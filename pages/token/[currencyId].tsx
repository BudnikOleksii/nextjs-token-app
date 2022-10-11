import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { CurrencyCode, TokenInfoByCurrencyWithId } from '../../types/TokenInfo';
import { useSelector } from 'react-redux';
import { selectTokenState } from '../../features/tokenSlice';
import { TokenInfoRow } from '../../components/TokenInfoRow';

const TokenDashboardByCurrency: NextPage = () => {
  const router = useRouter();
  const { currencyId } = router.query;
  const { tokenState } = useSelector(selectTokenState)
  let tokenStatistic: TokenInfoByCurrencyWithId[] = [];

  if (currencyId !== 'usd' && currencyId !== 'eur' && currencyId !== 'gbp') {
    return <div className="notification is-warning m-auto" style={{ width: '300px' }}>Not found page</div>;
  }

  tokenStatistic = tokenState.map(token => ({
    ...token.bpi[currencyId.toUpperCase() as CurrencyCode],
    id: token.id,
  }));

  return (
    <div className="m-auto pt-2" style={{ maxWidth: '800px' }}>
      <table className="table is-striped is-hoverable is-narrow is-fullwidth p-1">
        <thead>
        <tr>
          {['Currency', 'Rate', 'Description'].map(head => (
            <th key={head}>
              {head}
            </th>
          ))}
        </tr>
        </thead>

        <tbody>
        {tokenStatistic.map(token => (
          <TokenInfoRow tokenInfo={token} key={token.id} />
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default TokenDashboardByCurrency;
