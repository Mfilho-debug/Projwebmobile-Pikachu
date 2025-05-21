// services/api.ts
const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export interface Filme {
  id: number;
  titulo: string;
  descricao: string;
  ano: number;
  capa: string;
  classificacao: string;
  duracao: string;
  genero: string;
  nota: string;
}

export async function getFilmePorId(id: string): Promise<Filme | null> {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  const filme: Filme = {
    id: data.id,
    titulo: data.title,
    descricao: data.overview,
    ano: parseInt(data.release_date?.slice(0, 4)) || 0,
    capa: data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : '/images/placeholder.png',
    classificacao: data.adult ? '18+' : 'Livre',
    duracao: data.runtime ? `${data.runtime} min` : 'N/A',
    genero: data.genres?.map((g: any) => g.name).join(', ') || 'N/A',
    nota: data.vote_average ? data.vote_average.toFixed(1) : 'N/A',
  };

  return filme;
}

export async function getFilmesPopulares() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`);

  if (!res.ok) {
    throw new Error('Erro ao buscar filmes populares');
  }

  const json = await res.json();
  return json.results; // Ainda retorna o array cru, pode formatar aqui também se quiser
}
