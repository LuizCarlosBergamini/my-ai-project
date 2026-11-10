"use client";

import { useState } from "react";

// Edite aqui: "correta" é a posição da resposta certa (0, 1, 2 ou 3).
const perguntas = [
  {
    texto: "Qual é a minha comida favorita?",
    opcoes: ["Pizza", "Hambúrguer", "Sushi", "Lasanha"],
    correta: 0,
  },
  {
    texto: "Qual é a minha cor favorita?",
    opcoes: ["Azul", "Verde", "Vermelho", "Preto"],
    correta: 0,
  },
  {
    texto: "Qual é o meu tipo de filme favorito?",
    opcoes: ["Comédia", "Terror", "Romance", "Ação"],
    correta: 0,
  },
  {
    texto: "Qual é o meu passeio favorito?",
    opcoes: ["Praia", "Cinema", "Parque", "Shopping"],
    correta: 0,
  },
];

export default function Home() {
  const [atual, setAtual] = useState(0);
  const [acertos, setAcertos] = useState(0);

  function responder(indice) {
    if (indice === perguntas[atual].correta) setAcertos(acertos + 1);
    setAtual(atual + 1);
  }

  if (atual >= perguntas.length) {
    const percentual = acertos / perguntas.length;

    if (percentual === 1) {
      return <h2 className="verde">Parabéns, você realmente me ama muuito, toma um beijao muaaac :3</h2>;
    }
    if (percentual >= 0.5) {
      return <h2 className="amarelo">Quaaase, mas vc foi muito bem, toma um beijinho muac :p</h2>;
    }
    return <h2 className="vermelho">ta tudo bem eu te amo mesmo assim :l</h2>;
  }

  const pergunta = perguntas[atual];

  return (
    <div>
      <p>Pergunta {atual + 1} de {perguntas.length}</p>
      <h2>{pergunta.texto}</h2>
      {pergunta.opcoes.map((opcao, indice) => (
        <button key={opcao} onClick={() => responder(indice)}>
          {opcao}
        </button>
      ))}
    </div>
  );
}
