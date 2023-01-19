import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from '../contexts/AuthContext'
import { MapProvider } from 'react-map-gl'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <MapProvider>
        <Component {...pageProps} />
      </MapProvider>
    </AuthContextProvider>  
    )
}
