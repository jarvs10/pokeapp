import FavoritosProvider from '@/context/FavoritoContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <FavoritosProvider>
      <Component {...pageProps} />
    </FavoritosProvider>
  )
  
  
}
