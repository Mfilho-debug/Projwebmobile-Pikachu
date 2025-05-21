import { GetServerSideProps } from 'next';
import DetalhesFilme from '../../components/DetalhesFilme';
import { getFilmePorId, Filme } from '../../lib/api';

interface Props {
  filme?: Filme;
}

export default function PaginaDetalhes({ filme }: Props) {
  if (!filme) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Filme não encontrado.</p>;

  return <DetalhesFilme filme={filme} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  const filme = await getFilmePorId(id as string);

  return {
    props: { filme },
  };
};
