"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

// Efeito rápido de confetes ao entrar na página.
export default function Confetes() {
  const [tamanho, setTamanho] = useState(null);

  useEffect(() => {
    function atualizarTamanho() {
      setTamanho({ largura: window.innerWidth, altura: window.innerHeight });
    }

    atualizarTamanho();
    window.addEventListener("resize", atualizarTamanho);
    return () => window.removeEventListener("resize", atualizarTamanho);
  }, []);

  // Só renderiza no navegador, depois de saber o tamanho da janela.
  if (!tamanho) return null;

  return (
    <Confetti
      width={tamanho.largura}
      height={tamanho.altura}
      numberOfPieces={300}
      recycle={false}
      gravity={0.4}
      style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}
    />
  );
}
