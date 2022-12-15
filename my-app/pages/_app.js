import '../styles/globals.css';
import  { BreakpointProvider } from 'react-socks';


function MyApp({ Component, pageProps }) {

  return (
    <BreakpointProvider>
      <Component {...pageProps} />
    </BreakpointProvider>
  )
}

export default MyApp
