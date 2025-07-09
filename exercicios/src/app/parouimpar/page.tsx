"use client"

import { useState } from "react";

export default function Verificador(){

  const [numero, setNumero] = useState<number>(0);
   const [resultado,setResultado] = useState<string>('');

  function verificar(){
    if(numero % 2 === 0){
      setResultado ('Número é par!');
    } else {
      setResultado ('Número é ímpar!')
    }

    //if ternário ficaria assim: setResultado(numero % 2 === 0 ? 'Número é par!' : 'Número é ímpar!');
  }

  return(
    <div>

    <input type="number" placeholder="Digite um número" value={numero} onChange={(e) => setNumero (Number(e.target.value))}/> <br />

    <button onClick={verificar}>Verificar</button>

    <br />

    {resultado}
  

    </div>
  );
}