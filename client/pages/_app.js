import './index.scss'
import "../styles/font.css";
import GlobalStyle from "../styles/global";
import React from "react";
import NavBar from "../layout/NavBar";
import {Provider} from "react-redux";
import {persistor, store, wrapper} from "../store";
import { PersistGate } from 'redux-persist/integration/react'

const App = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyle/>
      <Provider store={store}>
        <PersistGate loading={<div>로딩</div>} persistor={persistor}>
          <NavBar/>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
};

App.getInitialProps = async ({ctx, Component}) => {
  const pageProps = await Component.getInitialProps?.(ctx)
  return {pageProps}
}

export default wrapper.withRedux(App);