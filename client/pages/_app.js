import './index.scss'
import "../styles/font.css";
import GlobalStyle from "../styles/global";
import React from "react";
import NavBar from "../layout/NavBar";


const App = ({Component, pageProps}) => (
  <>
      <GlobalStyle/>
      <NavBar/>
      <Component {...pageProps} />
  </>);

App.getInitialProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getInitialProps?.(ctx)
    return { pageProps }
}

export default App;