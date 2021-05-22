import '../styles/globals.css'
import Head from 'next/head';
import { Layout } from 'antd';
import Top from '../src/component/top'
import Footer from '../src/component/footer'
import { Content } from 'antd/lib/layout/layout';
import withRedux from 'next-redux-wrapper';
import {Provider} from 'react-redux';
import { Fragment } from 'react';
import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux/reducers/index';
import wrapper from '../redux/store';

function MyApp({ Component, pageProps }) {

  console.log(pageProps);

  return (
    <Fragment>
      <Head><title>NextJS Frist Project</title></Head>
      <Layout>
          <Top/>
          <Content>
          <>
            <Component {...pageProps} />
          </>
          </Content>
        <Footer/>
      </Layout>
    </Fragment>
  )
}

export default wrapper.withRedux(MyApp);
