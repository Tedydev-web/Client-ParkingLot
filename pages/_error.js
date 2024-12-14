import React from 'react';
import Head from 'next/head';
import { Result } from 'antd';

export default class Error extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.13.2/antd.min.css" />
          <title>Oops page</title>
        </Head>
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
        />
      </div>
    );
  }
}
