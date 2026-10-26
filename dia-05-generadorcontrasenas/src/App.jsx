
import { useState } from 'react'
import './App.css'

function App() {
  const [contrasena, setContrasena] = useState("Password123")
  const [longitud, setLongitud] = useState(12)

  const [usarMayusculas, setUsarMayusculas] = useState(true)
  const [usarMinusculas, setUsarMinusculas] = useState(true)
  const [usarNumeros, setUsarNumeros] = useState(true)
  const [usarEspeciales, setUsarEspeciales] = useState(false)

  const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const minusculas = "abcdefghijklmnopqrstuvwxyz"
  const numeros = "0123456789"
  const especiales = "@!#$%&*?"

  function generar() {
    let caracteres = ""

    if (usarMayusculas) {
      caracteres += mayusculas
    }

    if (usarMinusculas) {
      caracteres += minusculas
    }

    if (usarNumeros) {
      caracteres += numeros
    }

    if (usarEspeciales) {
      caracteres += especiales
    }

    if (caracteres.length === 0) {
      setContrasena("Selecciona alguna opción")
      return
    }

    let nuevaContrasena = ""

    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(
        Math.random() * caracteres.length
      )

      nuevaContrasena += caracteres[indice]
    }

    setContrasena(nuevaContrasena)
  }

  async function copiar() {
    await navigator.clipboard.writeText(contrasena)
  }

  return (
    <div className="contenedor">
      <h1>Generador de contraseñas</h1>

      <div className="resultado">
        <p>{contrasena}</p>
        <button onClick={copiar}>Copiar</button>
      </div>

      <label>
        Longitud: {longitud}
        <input
          type="range"
          min="8"
          max="32"
          value={longitud}
          onChange={(e) => setLongitud(Number(e.target.value))}
        />
      </label>

      <h3>Opciones</h3>

      <label>
        <input
          type="checkbox"
          checked={usarMayusculas}
          onChange={(e) => setUsarMayusculas(e.target.checked)}
        />
        Mayúsculas (A-Z)
      </label>

      <label>
        <input
          type="checkbox"
          checked={usarMinusculas}
          onChange={(e) => setUsarMinusculas(e.target.checked)}
        />
        Minúsculas (a-z)
      </label>

      <label>
        <input
          type="checkbox"
          checked={usarNumeros}
          onChange={(e) => setUsarNumeros(e.target.checked)}
        />
        Números (0-9)
      </label>

      <label>
        <input
          type="checkbox"
          checked={usarEspeciales}
          onChange={(e) => setUsarEspeciales(e.target.checked)}
        />
        Caracteres especiales (!@#$%)
      </label>

      <button onClick={generar}>Generar contraseña</button>
    </div>
  )
}

export default App
