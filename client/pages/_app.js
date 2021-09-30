import './index.scss'
import "../styles/font.css";


const App = ({ Component, pageProps }) => <Component {...pageProps} />

App.getInitialProps = async ({ ctx, Component }) => {
    const pageProps = await Component.getInitialProps?.(ctx)
    return { pageProps }
}

export default App