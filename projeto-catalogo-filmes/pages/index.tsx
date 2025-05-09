import Link from 'next/link';

const filmes = [
  { id: '1', titulo: 'O Senhor dos Anéis', capa: '/images/filme1.jpg' },
  { id: '2', titulo: 'Matrix', capa: '/images/filme2.jpg' },
  { id: '3', titulo: 'A Origem', capa: '/images/filme3.jpg' },
];

export default function Home() {
  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        textAlign: 'center',
        color: '#333',
        marginBottom: '2rem'
      }}>
        🎬 Catálogo de Filmes
      </h1>

      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1.5rem'
      }}>
        {filmes.map(({ id, titulo, capa }) => (
          <article
            key={id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              background: '#fff',
              overflow: 'hidden',
              textAlign: 'center',
              padding: '1rem',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
          >
            <img src={capa} alt={titulo} style={{ width: '100%' }} />
            <h2>{titulo}</h2>
            <Link href={`/filmes/${id}`}>
              <button style={{
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '0.5rem',
                fontWeight: 'bold',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0059c1'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0070f3'}
              >
                Ver detalhes
              </button>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
