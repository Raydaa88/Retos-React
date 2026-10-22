import { useState } from "react";

function App() {

  const [contador, setContador] = useState(0);

  const restar = () => {
    if (contador > 0) {
      setContador (contador - 1)
    }
  }

  const sumar = () => setContador(contador + 1);

  const reset = () => setContador(0);

  const superar10 = () => {
      return contador >= 10 ? <p>¡Has llegado a 10!</p> : null
  }

  return (
    <div>
      <h1>Mi contador</h1>
      <p  style={{color: contador ? "red" : "grey"}}>Valor: {contador}</p>
      <button onClick={restar}>Restar</button>
      <button onClick={sumar}>Sumar</button>
      <button onClick={reset}>Reset</button>

      <p style={{color: contador ? "green" : "grey"}}>{superar10()}</p>
      
    </div>
  );
}

export default App;