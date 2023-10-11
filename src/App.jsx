import { useState } from 'react'
import './App.css'
import Calculator from './Components/Calculator'
import Inputs from './Components/Inputs'
import Buttons from './Components/Buttons'

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  return (
    <div className='ContainerGeral'>
      <Calculator>
      <Inputs altura={altura} peso={peso} setAltura={setAltura} setPeso={setPeso} />
        <Buttons setAltura={setAltura} setPeso={setPeso} />
      </Calculator>
    </div>
  )
}

export default App
