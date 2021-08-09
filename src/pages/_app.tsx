import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/index.scss';

import { store } from '../store';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<title>Would You Redux</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>

			<Header />

			<Component {...pageProps} />

			<Footer />
		</Provider>
	);
}

export default MyApp;
