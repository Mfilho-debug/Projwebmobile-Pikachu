import { useRouter } from 'next/router';
import Link from 'next/link';

const detalhesFilmes: Record<string, any> = {
  '1': {
    titulo: 'O Senhor dos Anéis',
    descricao: 'Uma aventura épica pela Terra Média, onde um jovem hobbit precisa destruir um anel maligno.',
    ano: 2001,
    capa: '/images/filme1.jpg',
    classificacao: '14 anos',
    ondeAssistir: 'Amazon Prime Video',
    duracao: '2h 58min',
    genero: 'Fantasia, Aventura',
    nota: '8.8'
  },
  '2': {
    titulo: 'Matrix',
    descricao: 'Um hacker descobre que a realidade é uma simulação e se junta a um grupo de rebeldes.',
    ano: 1999,
    capa: '/images/filme2.jpg',
    classificacao: '16 anos',
    ondeAssistir: 'HBO Max',
    duracao: '2h 16min',
    genero: 'Ficção científica, Ação',
    nota: '8.7'
  },
  '3': {
    titulo: 'A Origem',
    descricao: 'Um ladrão especializado em invadir sonhos aceita um último trabalho para plantar uma ideia.',
    ano: 2010,
    capa: '/images/filme3.jpg',
    classificacao: '12 anos',
    ondeAssistir: 'Netflix',
    duracao: '2h 28min',
    genero: 'Ação, Ficção científica',
    nota: '8.8'
  }
};

export default function DetalhesFilme() {
  const { query } = useRouter();
  const filme = detalhesFilmes[query.id as string];

  if (!filme) return <p>Filme não encontrado.</p>;

  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#fafafa',
      minHeight: '100vh',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <img src={filme.capa} alt={filme.titulo} style={{
        width: '100%',
        maxWidth: '400px',
        borderRadius: '8px',
        marginBottom: '1rem'
      }} />

      <h1 style={{ color: '#333' }}>{filme.titulo}</h1>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Duração:</strong> {filme.duracao}</p>
      <p><strong>Classificação:</strong> {filme.classificacao}</p>
      <p><strong>Onde assistir:</strong> {filme.ondeAssistir}</p>
      <p><strong>Ano:</strong> {filme.ano}</p>
      <p><strong>Nota:</strong> {filme.nota} / 10</p>

      <p style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>{filme.descricao}</p>

      <Link href="/">
        <button style={{
          backgroundColor: '#555',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Voltar
        </button>
      </Link>
    </main>
  );
}
