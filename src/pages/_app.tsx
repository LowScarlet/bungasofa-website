import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined 
    ? require('bootstrap/dist/js/bootstrap') 
    : null
  }, []);
  return (<>
    <Head>
      <link rel="icon" href="/static/logo/brand-logo.ico" />
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
