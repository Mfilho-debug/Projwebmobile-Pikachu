import Link from 'next/link';

const filmes = [
  { id: '1', titulo: 'O Senhor dos Anéis' },
  { id: '2', titulo: 'Matrix' },
  { id: '3', titulo: 'A Origem' },
];

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🎬 Catálogo de Filmes</h1>
      <ul>
        {filmes.map(filme => (
          <li key={filme.id}>
            <Link href={`/filmes/${filme.id}`}>
              {filme.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
