import { useRouter } from 'next/router';
import Link from 'next/link';

const detalhesFilmes: Record<string, any> = {
  '1': {
    titulo: 'O Senhor dos Anéis',
    descricao: 'Uma aventura épica pela Terra Média, onde um jovem hobbit, Frodo Bolseiro, recebe a missão de destruir o Um Anel, uma relíquia poderosa forjada pelo Lorde das Trevas Sauron. Acompanhado por seus amigos, ele embarca em uma jornada perigosa e cheia de desafios, enfrentando criaturas míticas, traições e batalhas épicas. Enquanto isso, exércitos se preparam para o confronto final que decidirá o destino do mundo.',
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
    descricao: 'Thomas Anderson, um programador e hacker conhecido como Neo, descobre que o mundo em que vive é, na verdade, uma simulação criada por máquinas para controlar a humanidade. Com a ajuda de Morpheus e Trinity, ele aprende a manipular as regras dessa realidade virtual e se junta à resistência contra as máquinas. À medida que adquire novas habilidades, Neo começa a questionar seu papel na luta e se ele é de fato "O Escolhido", o único capaz de libertar a humanidade do domínio das máquinas.',
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
    descricao: 'Dom Cobb é um ladrão habilidoso que invade sonhos para roubar segredos do subconsciente das pessoas. Quando recebe uma proposta de um cliente misterioso, ele precisa realizar um feito impossível: implantar uma ideia na mente de um poderoso empresário sem que ele perceba. Junto com sua equipe, Cobb embarca em uma missão perigosa que o leva por múltiplas camadas de sonhos, enquanto lida com traumas do passado que ameaçam sua sanidade. O filme desafia as leis da realidade e questiona o que é sonho e o que é real.',
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
      textAlign: 'center',
      animation: 'fadeIn 0.8s ease-in-out'
    }}>
      <img src={filme.capa} alt={filme.titulo} style={{
        width: '100%',
        maxWidth: '400px',
        borderRadius: '8px',
        marginBottom: '1rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s'
      }} 
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
      />

      <h1 style={{ color: '#333', textShadow: '2px 2px 5px rgba(0,0,0,0.3)' }}>{filme.titulo}</h1>
      <p><strong>Gênero:</strong> {filme.genero}</p>
      <p><strong>Duração:</strong> {filme.duracao}</p>
      <p><strong>Classificação:</strong> {filme.classificacao}</p>
      <p><strong>Onde assistir:</strong> {filme.ondeAssistir}</p>
      <p><strong>Ano:</strong> {filme.ano}</p>
      <p><strong>Nota:</strong> {filme.nota} / 10</p>

      <p style={{ marginTop: '1rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>{filme.descricao}</p>

      <Link href="/">
        <button style={{
          backgroundColor: '#555',
          color: '#fff',
          border: 'none',
          padding: '0.7rem 1.2rem',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.3s, transform 0.2s'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#333'; e.currentTarget.style.transform = 'scale(1.05)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#555'; e.currentTarget.style.transform = 'scale(1.0)'; }}>
          Voltar
        </button>
      </Link>
    </main>
  );
}
