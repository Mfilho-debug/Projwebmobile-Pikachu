import { GetServerSideProps } from 'next';
import { getFilmesPopulares } from '../lib/api';
import FilmeCard from '../components/FilmeCard';
import { useFavoritos } from '../hooks/useFavoritos';
import styles from '../styles/Home.module.css';

export const getServerSideProps: GetServerSideProps = async () => {
  const filmes = await getFilmesPopulares();
  return { props: { filmes } };
};

export default function Home({ filmes }: { filmes: any[] }) {
  const { favoritos } = useFavoritos();

  const filmesFavoritos = filmes.filter(filme => favoritos.includes(filme.id));
  const filmesRestantes = filmes.filter(filme => !favoritos.includes(filme.id));

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🎬 Catálogo de Filmes</h1>

      {filmesFavoritos.length > 0 && (
        <>
          <h2 className={styles.subtitle}>❤️ Filmes Favoritados</h2>
          <section className={styles.grid}>
            {filmesFavoritos.map(({ id, title, poster_path }) => (
              <FilmeCard key={id} id={id} title={title} poster_path={poster_path} />
            ))}
          </section>
        </>
      )}

      <h2 className={styles.subtitle}>✨ Filmes Populares</h2>
      <section className={styles.grid}>
        {filmesRestantes.map(({ id, title, poster_path }) => (
          <FilmeCard key={id} id={id} title={title} poster_path={poster_path} />
        ))}
      </section>
    </main>
  );
}
