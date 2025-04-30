import { useRouter } from 'next/router';

export default function DetalhesFilme() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Detalhes do Filme</h1>
      <p>ID do filme: {id}</p>
      <p>Conteúdo de exemplo — aqui você vai mostrar detalhes reais na Parte 2.</p>
    </div>
  );
}
