import type { NextPage } from "next";
import { useSelector } from "react-redux";
import { selectTokenState } from '../features/tokenSlice';
import { Loader } from '../components/Loader';
import { TokenCard } from '../components/TokenCard';

const Home: NextPage = () => {
  const { tokenState, tokenIsLoading, tokenError} = useSelector(selectTokenState);

  return (
    <div>
      {tokenIsLoading && <Loader />}
      {!tokenError && tokenState.length > 0 && (
        <TokenCard currentToken={tokenState[tokenState.length - 1]} />
      )}
    </div>
  );
};

export default Home;
