import './index.scss'
import "../styles/font.css";
import GlobalStyle from "../styles/global";
import React from "react";
import NavBar from "../layout/NavBar";
import {persistor, store, wrapper} from "../store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";

const App = ({Component, pageProps}) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle/>
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