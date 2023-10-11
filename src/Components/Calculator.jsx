import React from 'react';

async function getIMC(altura, peso) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function Calculator({ children }) {
  return (
    <div className='Calculator'>
        <h1>IMC Calculator</h1>
      {children}
    </div>
  );
}

export default Calculator;
