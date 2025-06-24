/*
Exercício: Calculadora de IMC

OBJETIVO:
Criar uma calculadora de IMC simples com React e TypeScript que:

 Solicite ao usuário:
   - Peso (em kg).
   - Altura (em cm).

 Mostre:
   - O resultado do IMC calculado assim que o peso e a altura estiverem preenchidos corretamente.

 Validação:
   - Os inputs não devem aceitar valores menores ou iguais a 0.
   - Exibir uma mensagem de alerta para o usuário quando tentar inserir um valor não aceitável.

 Etapa atual:
   - Os inputs foram configurados para não aceitarem valores mínimos (usando o `min`).
   - Resultado exibido direto após inserção.

PRÓXIMOS PASSOS:
   - Melhorar o layout para exibir peso e altura com labels claros.
   - Melhorar as validações para exibir alertas amigáveis.
   - Adicionar botão de reset para limpar todos os campos.

*/

"use client";

import { useState } from "react";

export default function CalculadoraIMC() {
	const [peso, setPeso] = useState<string>("");
	const [altura, setAltura] = useState<string>("");
	const [imcResult, setImcResult] = useState<number | null>(null);

	function classificacao(valor: number) {
		return valor < 18.5
			? "Abaixo do peso"
			: valor < 25
			? "Normal"
			: valor < 30
			? "Sobrepeso"
			: "Obesidade";
	}

	function imc() {
		return Number(peso) / (Number(altura) / 100) ** 2;
	}

	function calcular() {
		setImcResult(imc());
	}

	function reset() {
		setPeso(""); 
    setAltura(""); 
    setImcResult(null);
	}

	return (
		<div style={{marginLeft: 15, marginTop: 15}}>
			<div>
				<label>
					Digite seu peso em Kg <br />
					<input
						type="number"
						min={0}
						placeholder="0"
						value={peso}
						onChange={(e) => setPeso(e.target.value)}
					/>
				</label>
			</div>

			<br />

			<div>
				<label>
					Digite sua altura em cm <br />
					<input
						type="number"
						min={0}
						placeholder="0"
						value={altura}
						onChange={(e) => setAltura(e.target.value)}
					/>
				</label>
			</div>

			<br />
			<br />

			<button style={{ border: "solid", padding: 3 }} onClick={calcular}>
				Calcular
			</button>
			
      <button style={{ marginLeft: 10, border: "solid", padding: 3 }} onClick={reset}>
				Resetar
			</button>

      <br /><br />

      {imcResult !== null && (
				<p>
					Resultado: {imcResult.toFixed(2)} - {classificacao(imcResult)}
				</p>
			)}

		</div>
	);
}
