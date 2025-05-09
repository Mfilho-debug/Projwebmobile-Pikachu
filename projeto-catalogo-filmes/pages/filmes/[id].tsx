import { useRouter } from 'next/router';
import Link from 'next/link';

const detalhesFilmes: Record<string, any> = {
  '1': {
    titulo: 'O Senhor dos Anéis',
    descricao: 'Em um mundo fantástico chamado Terra Média, um jovem hobbit chamado Frodo Bolseiro recebe a missão de destruir o Um Anel, uma poderosa relíquia forjada pelo Lorde das Trevas, Sauron. Com a ajuda da Sociedade do Anel, composta por humanos, elfos, anões e seus amigos hobbits, Frodo embarca em uma jornada perigosa para impedir que Sauron recupere seu poder absoluto. Enquanto travam batalhas épicas contra forças do mal, a amizade, coragem e sacrifício serão fundamentais para decidir o destino do mundo.',
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
    descricao: 'Neo, um hacker habilidoso, descobre que a realidade em que vive é uma ilusão criada por máquinas para controlar a humanidade. Com a ajuda de Morpheus e Trinity, ele desperta para o mundo real e aprende a manipular as leis da simulação conhecida como Matrix. À medida que se torna um guerreiro da resistência, Neo enfrenta agentes implacáveis e busca entender seu papel na profecia que o coloca como "O Escolhido", o único capaz de libertar a humanidade dessa prisão digital.',
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
    descricao: 'Dom Cobb é um ladrão especializado em invadir sonhos e extrair segredos do subconsciente das pessoas. Após ser contratado para um último e arriscado trabalho, ele precisa realizar algo nunca feito antes: plantar uma ideia na mente de um empresário sem que ele perceba. Junto com sua equipe, Cobb navega por múltiplas camadas de sonhos, onde a linha entre o real e o imaginário se torna cada vez mais tênue. No meio dessa jornada, ele é assombrado por traumas do passado que podem comprometer sua missão e sua sanidade.',
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
      backgroundColor: '#f0f2f5',
      minHeight: '100vh',
      maxWidth: '700px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <img src={filme.capa} alt={filme.titulo} style={{
        width: '100%',
        maxWidth: '400px',
        borderRadius: '10px',
        marginBottom: '1.5rem',
        boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
      />

      <h1 style={{ color: '#222', marginBottom: '1rem', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
        {filme.titulo}
      </h1>

      <div style={{
        display: 'grid',
        gap: '0.6rem',
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '1.5rem',
        textAlign: 'left',
        maxWidth: '500px',
        margin: '0 auto 1.5rem'
      }}>
        <p>🎬 <strong>Gênero:</strong> {filme.genero}</p>
        <p>⏱️ <strong>Duração:</strong> {filme.duracao}</p>
        <p>🔞 <strong>Classificação:</strong> {filme.classificacao}</p>
        <p>📺 <strong>Onde assistir:</strong> {filme.ondeAssistir}</p>
        <p>📅 <strong>Ano:</strong> {filme.ano}</p>
        <p>⭐ <strong>Nota:</strong> {filme.nota} / 10</p>
      </div>

      <p style={{
        fontStyle: 'italic',
        marginBottom: '2rem',
        padding: '0 1rem'
      }}>
        {filme.descricao}
      </p>

      <Link href="/">
        <button style={{
          backgroundColor: '#4a4a4a',
          color: '#fff',
          border: 'none',
          padding: '0.8rem 1.6rem',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'background-color 0.3s, transform 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#333';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#4a4a4a';
          e.currentTarget.style.transform = 'scale(1.0)';
        }}>
          ⬅ Voltar
        </button>
      </Link>
    </main>
  );
}
