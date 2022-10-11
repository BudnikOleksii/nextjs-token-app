import { FC } from 'react';
import { TokenInfoByCurrency } from '../../types/TokenInfo';

type Props = {
  tokenInfo: TokenInfoByCurrency;
};

export const TokenInfoRow: FC<Props> = ({ tokenInfo }) => {
  const { code, rate, description } = tokenInfo;

  return (
    <tr>
      <td>{code}</td>
      <td>{rate}</td>
      <td>{description}</td>
    </tr>
  );
};
