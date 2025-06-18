'use client';

import { useState } from 'react';

export default function Conversor() {
  const [celsius, setCelsius] = useState<number>(0);

  const fahrenheit = (celsius * 9/5) + 32;

  return (
    <div>
      <h1>Conversor de Temperatura</h1>

      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(Number(e.target.value))}
        placeholder="Digite a temperatura em Celsius"
      />

      <p>Temperatura em Fahrenheit: {fahrenheit.toFixed(2)} °F</p>
    </div>
  );
}
