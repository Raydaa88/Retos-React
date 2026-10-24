import { useState } from 'react'

import './App.css'

function App() {

  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    setResultado(Number(numero1) + Number(numero2));
  };
  const resta = () => {
    setResultado(Number(numero1) - Number(numero2));
  };
  const multiplicacion = () => {
    setResultado(Number(numero1) * Number(numero2));
  };
  const division = () => {
    if (Number(numero2) === 0) {
      setResultado("No puedes dividir por 0");
    } else {
    setResultado(Number(numero1) / Number(numero2));
    }
  };

  const limpiar = () => {
    setNumero1("");
    setNumero2("");
    setResultado(null);
  };


  return (
    <div>
      <h1>Calculadora</h1>
      <input type="number" 
        placeholder='0'
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />
      <br />
      <input type="number" 
        placeholder='0'
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />
      <br />
      <button onClick={sumar}>+</button>
      <button onClick={resta}>-</button>
      <button onClick={multiplicacion}>*</button>
      <button onClick={division}>/</button>
      <button onClick={limpiar}>AC</button>


      <p>Resultado: {resultado}</p>
    </div>
  )
}

export default App
