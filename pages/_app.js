import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import { SnackbarProvider } from 'notistack'
import { StoreProvider } from '../utils/store'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);

  return (<SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  </SnackbarProvider>)
}

export default MyApp