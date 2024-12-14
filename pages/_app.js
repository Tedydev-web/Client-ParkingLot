import React from 'react';
import Head from 'next/head';
import { ConfigProvider } from 'antd';
import App, { Container } from 'next/app';
import vi_VN from 'antd/lib/locale-provider/vi_VN';
import rootSaga from '../redux/sagas/index';
import { Provider } from 'react-redux';
import configureStore from '../redux/storeConfig';
import 'antd/dist/antd.css';
import '../styles/index.scss';
import { Helmet } from 'react-helmet';
const store = configureStore();
store.runSaga(rootSaga);

export default class MainApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Provider store={store}>
				<Container>
					<Head>
						<meta charSet="UTF-8" />
						{/* <title>Parking Lot - Live Map</title> */}
						<meta
							name="viewport"
							content="width=device-width, height=device-height, initial-scale=1.0"
						/>
						<link
							rel="icon"
							href="/static/images/logo-mini.png"
						/>
						<link
							rel="stylesheet"
							href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
							integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
							crossOrigin="anonymous"
						/>
					</Head>
					<ConfigProvider locale={vi_VN}>
						<Component {...pageProps} />
					</ConfigProvider>
				</Container>
			</Provider>
		);
	}
}
