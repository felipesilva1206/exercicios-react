'use client';

import { useState } from "react";

export default function Validador() {

  const [senha, setSenha] = useState<string>('');

  const senhaValida = senha.length >= 6;

  return(
    <div>

    <input
      type="password"
      value={senha}
      onChange={(e) => setSenha(e.target.value)}
      placeholder="Insira sua senha"
    />
   
    {senha.length > 0 && (senhaValida
      ? <p style={{color: 'green'}}>Senha válida</p>
      : <p style={{color: 'red'}}>Senha muito curta</p>
    )}

    </div>
  );

}