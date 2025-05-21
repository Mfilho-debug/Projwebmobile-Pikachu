import Link from 'next/link';
import styles from '../styles/FilmeCard.module.css';
import { useFavoritos } from '../hooks/useFavoritos';

interface FilmeCardProps {
  id: number;
  title: string;
  poster_path: string | null;
}

export default function FilmeCard({ id, title, poster_path }: FilmeCardProps) {
  const { isFavorito, toggleFavorito } = useFavoritos();

  return (
    <article className={styles.card}>
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}` : '/images/placeholder.png'}
        alt={title}
        className={styles.poster}
      />
      <h2 className={styles.title}>{title}</h2>

      <footer className={styles.actions}>
        <Link href={`/filmes/${id}`}>
          <button className={styles.button}>Ver detalhes</button>
        </Link>

        <button onClick={() => toggleFavorito(id)} className={styles.favoriteButton}>
          {isFavorito(id) ? '❤️' : '🤍'}
        </button>
      </footer>
    </article>
  );
}
