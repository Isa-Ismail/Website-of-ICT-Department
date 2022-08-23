import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import { SnackbarProvider } from 'notistack'
import { StoreProvider } from '../utils/store'

function MyApp({ Component, pageProps }) {

  return (<SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
              <StoreProvider>
                <Component {...pageProps} />
              </StoreProvider>
          </SnackbarProvider>)
}

export default MyApp