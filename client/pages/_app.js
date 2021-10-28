import './index.scss'
import "../styles/font.css";
import GlobalStyle from "../styles/global";
import React from "react";
import NavBar from "../layout/NavBar";
import {Provider} from "react-redux";
import {wrapper} from "../store";

const App = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyle/>
        <NavBar/>
        <Component {...pageProps} />
    </>
   );
};

App.getInitialProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getInitialProps?.(ctx)
    return { pageProps }
}

export default wrapper.withRedux(App);