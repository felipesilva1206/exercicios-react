"use client";

import { useState } from "react";
import "@/assets/ui-kit.css";

export default function ContadorComHistorico() {
	const [contador, setContador] = useState<number>(0);
	const [historico, setHistorico] = useState<number[]>([]);

	function incrementar() {
		const proximoValor = contador + 1;

		setContador(proximoValor);
		setHistorico([...historico, proximoValor]);
	}

	function desfazer() {
		if (historico.length === 0) return;

		const novoHistorico = historico.slice(0, -1);
		const novoValor = novoHistorico[novoHistorico.length - 1] || 0;
		setHistorico(novoHistorico);
		setContador(novoValor);
	}

	function resetar() {
		setContador(0);
		setHistorico([]);
	}

	return (
		<div className="bg-pastel-blue min-h-screen w-100 p-6">

      {/*Inicio Container */}
			<div className="w-full max-w-3xl mx-auto p-6 bg-pastel-green rounded shadow">
				<h1 className="text-xl font-bold mb-4 text-center">
					Contador Com Histórico
				</h1>{" "}
				<br />
				<h2 className="text-xl font-bold mb-4 text-center">
					Contador: {contador}
				</h2>{" "}
				<br />
				<div className="flex gap-0-2">
					<button
						onClick={incrementar}
						className="bg-blue text-white rounded p-2 cursor-pointer transition hover:bg-blue-dark"
					>
						Incrementar
					</button>

					<button
						onClick={desfazer}
						className="bg-yellow-warm text-gray rounded p-2 cursor-pointer transition hover:bg-blue-dark"
					>
						Desfazer
					</button>

					<button
						onClick={resetar}
						className="bg-red text-white rounded p-2 cursor-pointer transition hover:bg-red"
					>
						Resetar
					</button>
				</div>
				<p className="pt-1 text-xl font-bold">Histórico: {historico.join(", ")}</p>
			</div> {/*Fim Container */}

		</div>
	);
}
