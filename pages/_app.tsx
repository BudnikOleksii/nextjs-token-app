import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../app/store";
import { Layout } from '../components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchToken } from '../features/tokenSlice';

function MyApp({ Component, pageProps }: AppProps) {
  const dispatch = useDispatch();
  const [updateTokenCounter, setUpdateTokenCounter] = useState(0);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchToken());

    const updateTimeout = setInterval(() => {
      setUpdateTokenCounter(prevState => prevState + 1);
    }, 60000);

    return () => clearInterval(updateTimeout);
  }, [updateTokenCounter]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
