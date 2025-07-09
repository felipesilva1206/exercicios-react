"use client"

import { useState } from "react";

export default function ContadorComLimite() {

 const [contador, setContador] = useState<number>(0);

 function incrementar() {
  const incremento = contador + 1
  
  if(incremento <= 10){
  setContador(incremento)}
 }

 function reset(){
  setContador(0);
 }

  return(
    <div>
      <h1>Contador {contador}</h1>
      <button onClick={incrementar} disabled={contador >=10}>start</button>
      {contador === 10 && <p>Limite atingido!</p>}

      <button onClick={reset}>Resetar</button>

    </div>
  );
}