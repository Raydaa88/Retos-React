import { useState } from 'react'
import './App.css'


const preguntas = [

    {
      pregunta: 'A que equipo le metio Ramos en el descuento de una final de champions',
      opciones: ['Fc Barcelona', 'Atletico de Madrid', 'Liverpool', 'Real Madrid'],
      correcta: 1
    },
    {
      pregunta: 'Cuantas champions de diferencia habia entre el madrid y el barsa en 2015',
      opciones: ['8', '5', '6', '4'],
      correcta: 1
    },  
    {
      pregunta: 'Cuantas champions de diferencia habia entre el madrid y el barsa en 2026',
      opciones: ['7', '9', '11', '10'],
      correcta: 3
    },
    {
      pregunta: 'Cómo se llamaba el trofeo original de la Copa del Mundo antes de ser reemplazado en 1974?',
      opciones: ['Europa League', 'Conmebol', 'Copa Jules Rimet', 'Copa Bobby Charlton'],
      correcta: 2
    },
    {
      pregunta: 'Qué país albergó los Mundiales de fútbol en los años 1970 y 1986?',
      opciones: ['España', 'Alemania', 'Brasil', 'Mexico'],
      correcta: 3
    }

  ]


function App() {
  const [indice, setIndice] = useState(0)
  const [puntuacion, setPuntuacion] = useState(0)
  const [respuesta, setRespuesta] = useState(null)
  const [terminado, setTerminado] = useState(false)

  const preguntaActual = preguntas[indice]

  const responder = (opcion) => {
    if (respuesta !== null) return

    setRespuesta(opcion)

    if (opcion === preguntaActual.correcta) {
      setPuntuacion(puntuacion + 1)
    }
  }

  const siguientePregunta = () => {
    if (indice < preguntas.length - 1) {
      setIndice(indice + 1)
      setRespuesta(null)
    } else {
      setTerminado(true)
    }
  }

  const reiniciar = () => {
    setIndice(0)
    setPuntuacion(0)
    setRespuesta(null)
    setTerminado(false)
  }

  return (
    <main className="contenedor">
      <h1>Quiz de React</h1>

      {terminado ? (
        <section className="tarjeta">
          <h2>¡Quiz terminado!</h2>

          <p className="resultado">
            Has conseguido {puntuacion} de {preguntas.length} puntos.
          </p>

          <p>
            {puntuacion === preguntas.length
              ? '¡Perfecto! Has acertado todas.'
              : puntuacion >= 3
                ? '¡Buen trabajo!'
                : 'Sigue practicando, puedes mejorar.'}
          </p>

          <button onClick={reiniciar}>
            Volver a jugar
          </button>
        </section>
      ) : (
        <section className="tarjeta">
          <p className="progreso">
            Pregunta {indice + 1} de {preguntas.length}
          </p>

          <h2>{preguntaActual.pregunta}</h2>

          <div className="opciones">
            {preguntaActual.opciones.map((opcion, i) => (
              <button
                key={opcion}
                onClick={() => responder(i)}
                disabled={respuesta !== null}
                className={
                  respuesta === null
                    ? ''
                    : i === preguntaActual.correcta
                      ? 'correcta'
                      : respuesta === i
                        ? 'incorrecta'
                        : ''
                }
              >
                {opcion}
              </button>
            ))}
          </div>

          {respuesta !== null && (
            <div className="feedback">
              <p>
                {respuesta === preguntaActual.correcta
                  ? '¡Respuesta correcta!'
                  : 'Respuesta incorrecta.'}
              </p>

              <button onClick={siguientePregunta}>
                {indice === preguntas.length - 1
                  ? 'Ver resultado'
                  : 'Siguiente pregunta'}
              </button>
            </div>
          )}
        </section>
      )}
    </main>
  )
}


export default App
