import Link from 'next/link';
import styles from '../styles/DetalhesFilme.module.css';
import { useFavoritos } from '../hooks/useFavoritos';

interface Filme {
  titulo: string;
  descricao: string;
  ano: number;
  capa: string;
  classificacao: string;
  duracao: string;
  genero: string;
  nota: string;
  id: number;
}

interface Props {
  filme: Filme;
}

export default function DetalhesFilme({ filme }: Props) {
  const { isFavorito, toggleFavorito } = useFavoritos();

  return (
    <main className={styles.container}>
      <button className={styles.favorito} onClick={() => toggleFavorito(filme.id)}>
        {isFavorito(filme.id) ? '❤️' : '🤍'}
      </button>

      <img
        src={filme.capa}
        alt={filme.titulo}
        className={styles.capa}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      />
      <h1 className={styles.titulo}>{filme.titulo}</h1>

      <section className={styles.infoGrid}>
        <p>🎬 <strong>Gênero:</strong> {filme.genero}</p>
        <p>⏱️ <strong>Duração:</strong> {filme.duracao}</p>
        <p>🔞 <strong>Classificação:</strong> {filme.classificacao}</p>
        <p>📅 <strong>Ano:</strong> {filme.ano}</p>
        <p>⭐ <strong>Nota:</strong> {filme.nota} / 10</p>
      </section>

      <p className={styles.descricao}>{filme.descricao}</p>

      <Link href="/">
        <button
          className={styles.botaoVoltar}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#333';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = '#4a4a4a';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          ⬅ Voltar
        </button>
      </Link>
    </main>
  );
}
