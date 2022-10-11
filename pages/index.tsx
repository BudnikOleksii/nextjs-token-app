import type { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken, selectTokenState } from '../features/tokenSlice';
import { useEffect, useState } from 'react';
import { Loader } from '../components/Loader';
import { TokenCard } from '../components/TokenCard';

const Home: NextPage = () => {
  const { tokenState, tokenIsLoading, tokenError} = useSelector(selectTokenState);
  const dispatch = useDispatch();
  const [updateTokenCounter, setUpdateTokenCounter] = useState(0);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchToken());

    const updateTimeout = setInterval(() => {
      setUpdateTokenCounter(prevState => prevState + 1);
    }, 10000000);

    return () => clearInterval(updateTimeout);
  }, [updateTokenCounter]);

  console.log(tokenState.map(token => token.bpi['EUR']))

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
