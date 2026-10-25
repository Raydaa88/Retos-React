
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  const [segundos, setSegundos] = useState(0);
  const intervalo = useRef(null);

  const iniciar = () =>  {
    if (intervalo.current !== null) return;

    intervalo.current = setInterval(() => {
      setSegundos ((anterior) => anterior +1);
    }, 1000);
  }

  const pausar = () =>  {
    clearInterval(intervalo.current);
    intervalo.current = null;
  }

  const reiniciar = () =>  {
    pausar();
    setSegundos(0);
  }

  useEffect(() => {
    return () => clearInterval(intervalo.current);
  }, []);

  const minutos = Math.floor(segundos / 60);
  const restoSegundos = segundos % 60;

  return (
    <div>

      <h1>Cronometro</h1>

      <h2>
        {String (minutos).padStart(2, '0')}:
        {String(restoSegundos).padStart(2, '0')}

      </h2>

      <button onClick={iniciar}>Inciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>

    </div>
  )
}

export default App
