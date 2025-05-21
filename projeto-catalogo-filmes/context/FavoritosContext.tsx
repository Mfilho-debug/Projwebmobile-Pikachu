import { createContext, useEffect, useState, ReactNode } from 'react';

interface FavoritosContextType {
  favoritos: number[];
  toggleFavorito: (id: number) => void;
  isFavorito: (id: number) => boolean;
}

export const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export function FavoritosProvider({ children }: Props) {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favoritos');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavoritos(parsed);
        }
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (id: number) => {
    setFavoritos(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const isFavorito = (id: number) => favoritos.includes(id);

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito, isFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}
