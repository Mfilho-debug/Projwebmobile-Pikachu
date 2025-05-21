import type { AppProps } from 'next/app';
import { FavoritosProvider } from '../context/FavoritosContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoritosProvider>
      <Component {...pageProps} />
    </FavoritosProvider>
  );
}
