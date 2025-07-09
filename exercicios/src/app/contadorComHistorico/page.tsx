// Exercício: Contador com histórico
// Objetivo: Criar um contador com os seguintes recursos:

// Um botão para incrementar o número.

// Um botão para resetar o número.

// Um botão para desfazer a última ação de incremento (tipo um “voltar”).

// Requisitos técnicos:

// useState para controlar o número atual.

// Outro useState para guardar um histórico dos valores antigos.

// Toda vez que o botão "Incrementar" for clicado:

// O valor atual deve ir para o histórico.

// E o número atual deve aumentar em 1.

// Ao clicar em "Desfazer", você deve:

// Voltar o número atual para o último valor salvo no histórico.

// Remover esse valor do histórico.

// “Resetar” deve zerar o número atual e limpar o histórico.

//------------------------------------------//

'use client'

import { useState } from "react";


export default function ContadorComHistorico() {

  const [contador, setContador] = useState<number>(0);
  const [historico, setHistorico] = useState<number[]>([]);

  function incrementar(){

    const proximoValor = contador + 1;

    setContador(proximoValor);
    setHistorico([...historico, proximoValor]);
  }

  function desfazer(){
    if (historico.length === 0) return;

    const novoHistorico = historico.slice(0, -1)
    const ultimoValor = novoHistorico[novoHistorico.length - 1] || 0;
    setHistorico(novoHistorico);
    setContador(ultimoValor);
  }

  function resetar(){
    setContador(0);
    setHistorico([]);
  }

  return(
    
    <div>
      <h1>Contador {contador}</h1>

      <button onClick={incrementar}>
        incrementar
      </button>
      <button onClick={desfazer}>
        Desfazer
      </button>
      <button onClick={resetar}>
        Resetar
      </button>

      <p>
        Histórico {historico.join(', ')}
      </p>

    </div>

  );
}