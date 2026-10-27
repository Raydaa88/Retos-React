
import { useState } from 'react';
import './App.css';

function App() {
  const [tipo, setTipo] = useState('longitud');
  const [valor, setValor] = useState('10');
  const [unidadOrigen, setUnidadOrigen] = useState('km');
  const [unidadDestino, setUnidadDestino] = useState('m');

  const unidades = {
    longitud: [
      { valor: 'km', nombre: 'Kilómetros (km)' },
      { valor: 'm', nombre: 'Metros (m)' },
      { valor: 'cm', nombre: 'Centímetros (cm)' },
      { valor: 'mm', nombre: 'Milímetros (mm)' },
      { valor: 'mi', nombre: 'Millas (mi)' },
    ],
    peso: [
      { valor: 'kg', nombre: 'Kilogramos (kg)' },
      { valor: 'g', nombre: 'Gramos (g)' },
      { valor: 'mg', nombre: 'Miligramos (mg)' },
      { valor: 'lb', nombre: 'Libras (lb)' },
    ],
    temperatura: [
      { valor: 'C', nombre: 'Celsius (°C)' },
      { valor: 'F', nombre: 'Fahrenheit (°F)' },
      { valor: 'K', nombre: 'Kelvin (K)' },
    ],
  };

  const cambiarTipo = (nuevoTipo) => {
    setTipo(nuevoTipo);

    const valoresIniciales = {
      longitud: ['km', 'm'],
      peso: ['kg', 'g'],
      temperatura: ['C', 'F'],
    };

    setUnidadOrigen(valoresIniciales[nuevoTipo][0]);
    setUnidadDestino(valoresIniciales[nuevoTipo][1]);
  };

  const convertir = () => {
    const numero = Number(valor);

    if (valor.trim() === '' || !Number.isFinite(numero)) {
      return null;
    }

    if (unidadOrigen === unidadDestino) {
      return numero;
    }

    if (tipo === 'longitud') {
      const metros = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.344,
      };

      return numero * metros[unidadOrigen] / metros[unidadDestino];
    }

    if (tipo === 'peso') {
      const gramos = {
        kg: 1000,
        g: 1,
        mg: 0.001,
        lb: 453.59237,
      };

      return numero * gramos[unidadOrigen] / gramos[unidadDestino];
    }

    if (tipo === 'temperatura') {
      let celsius;

      if (unidadOrigen === 'C') {
        celsius = numero;
      } else if (unidadOrigen === 'F') {
        celsius = (numero - 32) * 5 / 9;
      } else {
        celsius = numero - 273.15;
      }

      if (unidadDestino === 'C') return celsius;
      if (unidadDestino === 'F') return celsius * 9 / 5 + 32;

      return celsius + 273.15;
    }

    return null;
  };

  const resultado = convertir();

  const intercambiar = () => {
    setUnidadOrigen(unidadDestino);
    setUnidadDestino(unidadOrigen);
  };

  const formatear = (numero) => {
    return Number(numero.toPrecision(10)).toLocaleString('es-ES', {
      maximumFractionDigits: 8,
    });
  };

  return (
    <main className="contenedor">
      <header className="cabecera">
        <h1>Unit Converter</h1>
        <p>Convierte unidades de forma rápida y sencilla.</p>
      </header>

      <section className="conversor">
        <label htmlFor="tipo">Tipo de conversión</label>

        <select
          id="tipo"
          value={tipo}
          onChange={(e) => cambiarTipo(e.target.value)}
        >
          <option value="longitud">Longitud</option>
          <option value="peso">Peso</option>
          <option value="temperatura">Temperatura</option>
        </select>

        <label htmlFor="valor">Cantidad</label>

        <input
          id="valor"
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Introduce un valor"
        />

        <div className="unidades">
          <div className="campo">
            <label htmlFor="origen">De</label>

            <select
              id="origen"
              value={unidadOrigen}
              onChange={(e) => setUnidadOrigen(e.target.value)}
            >
              {unidades[tipo].map((unidad) => (
                <option key={unidad.valor} value={unidad.valor}>
                  {unidad.nombre}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="boton-intercambiar"
            onClick={intercambiar}
            aria-label="Intercambiar unidades"
            title="Intercambiar unidades"
          >
            ⇄
          </button>

          <div className="campo">
            <label htmlFor="destino">A</label>

            <select
              id="destino"
              value={unidadDestino}
              onChange={(e) => setUnidadDestino(e.target.value)}
            >
              {unidades[tipo].map((unidad) => (
                <option key={unidad.valor} value={unidad.valor}>
                  {unidad.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="resultado">
          <p>Resultado</p>

          <h2>
            {resultado === null ? '—' : formatear(resultado)}
          </h2>

          <span>
            {valor === '' ? 'Introduce una cantidad' : `${valor} ${unidadOrigen} → ${unidadDestino}`}
          </span>
        </div>
      </section>

    </main>
  );
}

export default App;
