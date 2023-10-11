import React from 'react';

const Buttons = ({ props }) => {
  const cleanInputs = () => {
    props.setAltura('');
    props.setPeso('');
  };

  return (
    <div className='buttonContainer'>
      <button className='CalcButton'>Calcular</button>
      <button className='CleanButton' onClick={cleanInputs}>Limpar</button>
    </div>
  );
}

export default Buttons;
