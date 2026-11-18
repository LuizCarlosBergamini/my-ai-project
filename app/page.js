import { Suspense } from "react";
import Confetes from "./Confetes";

const URL_TABNEWS = "https://www.tabnews.com.br";

// Busca a quantidade total de posts no TabNews original.
// A API devolve o total no cabeçalho "x-pagination-total-rows".
async function buscarTotalDePosts() {
  try {
    const resposta = await fetch(
      `${URL_TABNEWS}/api/v1/contents?page=1&per_page=1&strategy=new`,
      { next: { revalidate: 60 } }
    );
    if (!resposta.ok) return null;

    const total = Number(resposta.headers.get("x-pagination-total-rows"));
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

async function TotalDePosts() {
  const total = await buscarTotalDePosts();

  if (total === null) {
    return <p className="total-posts">Não foi possível carregar a quantidade de posts do TabNews.</p>;
  }

  return (
    <p className="total-posts">
      O TabNews já possui <strong>{total.toLocaleString("pt-BR")}</strong> posts publicados.
    </p>
  );
}

export default function Home() {
  return (
    <main className="em-construcao">
      <Confetes />

      <p className="selo">🚧 Em construção 🚧</p>
      <h1>
        Começa aqui o estudo para reconstrução do tab-news, um ambiente para pessoas interessadas
        em tecnologia compartilharem seus conhecimentos
      </h1>

      <a className="botao" href={URL_TABNEWS}>
        Ir para o TabNews
      </a>

      <Suspense fallback={<p className="total-posts">Carregando quantidade de posts...</p>}>
        <TotalDePosts />
      </Suspense>
    </main>
  );
}
