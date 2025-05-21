import { useContext } from 'react';
import { FavoritosContext } from '../context/FavoritosContext';

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error('useFavoritos precisa estar dentro de FavoritosProvider');
  }
  return context;
};
