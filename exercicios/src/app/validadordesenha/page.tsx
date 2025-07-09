'use client'

import { useState } from "react";
import "@/assets/ui-kit.css";

export default function Validador() {
  const [senha, setSenha] = useState('');
  const [senhaValida, setSenhaValida] = useState<boolean | null>(null);
  const [erros, setErros] = useState<string[]>([]);

  function validar(): string[] {
    let erros: string[] = [];

    if (senha.length < 8) {
      erros.push("A senha deve conter no mínimo 8 caracteres!");
    }

    if (!/[0-9]/.test(senha)) {
      erros.push("A senha deve conter pelo menos um número!");
    }

    if (!/[!@#$%&*]/.test(senha)) {
      erros.push("A senha deve conter pelo menos um caractere especial!");
    }

    return erros;
  }

  function checarValidade() {
    const erros = validar();
    setErros(erros);
    setSenhaValida(erros.length === 0);
  }

  return (
    <div className="bg-pastel-blue min-h-screen flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow p-6 w-100 max-w-2xl">
        <h1 className="text-xl font-bold text-center mb-3 text-blue">Validador de Senhas</h1>

        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-100 p-2 rounded shadow mb-2 text-base bg-gray text-black"
        />

        <button
          onClick={checarValidade}
          className="bg-green text-white rounded p-2 w-100 mb-2 cursor-pointer transition hover:bg-blue-dark"
        >
          Validar
        </button>

        {senhaValida === true && (
          <p className="text-green font-bold text-center mt-2">✅ Senha válida!</p>
        )}

        {senhaValida === false && (
          <div className="bg-yellow-warm p-2 rounded">
            <p className="text-red font-bold mb-1">❌ Senha inválida:</p>
            <ul className="text-sm text-gray pl-1">
              {erros.map((erro, index) => (
                <li key={index}>• {erro}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
