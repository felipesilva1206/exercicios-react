'use client'

import { useState } from "react"

export default function Palindromo() {

  const [palavra, setPalavra] = useState<string>('');

  const textoMinusculo = palavra.toLowerCase(); // transforma o texto em minúsculo.

  const inverter = textoMinusculo.split('').reverse().join(''); // inverte a string

  const comparacao = textoMinusculo === inverter;// compara os dois


  return(
    <div>

    <input 
      type="text" 
      value= {palavra}
      onChange={(e) => setPalavra(e.target.value)} 
      placeholder="Digite uma palavra"
    />

    {palavra.length > 0 && (
      comparacao
        ? <p style={{color: 'green'}}>É um palíndromo!</p>
        : <p style={{color: 'red'}}>Não é palíndromo!</p>
    )}

    </div>
  );
}