import React, { useState } from 'react';

const Inputs = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleAlturaChange = (e) => {
    setAltura(e.target.value);
  };

  const handlePesoChange = (e) => {
    setPeso(e.target.value);
  };

  return (
    <div className='inputsContainer'>
      <p>Altura:</p>
      <input
        className='altura'
        type="text" // Defina o tipo do input, por exemplo, "text"
        placeholder='Exemplo: 1.75'
        value={altura}
        onChange={handleAlturaChange}
      />
      <p>Peso:</p>
      <input
        className='peso'
        type="text" // Defina o tipo do input, por exemplo, "text"
        placeholder='Exemplo: 75'
        value={peso}
        onChange={handlePesoChange}
      />
    </div>
  );
}

export default Inputs;
