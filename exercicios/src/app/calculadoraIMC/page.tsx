'use client';

import { useState } from "react";

export default function CalculadoraIMC() {

  const [peso, setPeso] = useState<string>('');
  const [altura, setAltura] = useState<string>('');

  const imc = Number(peso) / (Number(altura) / 100) ** 2

  return(
    <div>

    <input 
      type="number"
      placeholder="Digite seu peso em Kg"
      value={peso}
      onChange={(e) => setPeso(e.target.value)}
    />

    <input 
      type="number"
      placeholder="Digite sua altura em cm"
      value={altura}
      onChange={(e) => setAltura(e.target.value)}
    />

{Number(altura) > 0 && <p>Resultado: {imc.toFixed(2)}</p>}
    </div>
  );

}
