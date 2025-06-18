

import {useState} from 'react';

export default function Contador(){

  const [contador, setContador] = useState<number>(0);

  function incrementar() {
    setContador(contador +1);
  }

  function resetar() {
    setContador(0);
  }

  return(
    <div>

    <h1>Contador: {contador}</h1>

    <button 
  onClick={incrementar} 
  style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginRight: '10px' }}
>
  Incrementar
</button>

<button 
  onClick={resetar} 
  style={{ backgroundColor: 'red', color: 'white', padding: '10px' }}
>
  Resetar
</button>


    </div>
  );

}