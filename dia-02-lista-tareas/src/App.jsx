import { useState } from "react";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
    setNuevaTarea("");
  };

  const eliminarTarea = (indice) => {
    setTareas(tareas.filter((_, i) => i !== indice));
  };

  const toggleCompletada = (indiceAlternar) => {
    setTareas(
      tareas.map((tarea, indice) =>
        indice === indiceAlternar
          ? { ...tarea, completada: !tarea.completada }
          : tarea,
      ),
    );
  };

  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") agregarTarea();
        }}
      />

      <button onClick={agregarTarea}>Añadir</button>

      <ul>
        {tareas.map((tarea, indice) => (
          <li key={indice}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggleCompletada(indice)}
              style={{ marginRight: "8px" }}
            />
            <span
              style={{
                textDecoration: tarea.completada ? "line-through" : "none",
                color: tarea.completada ? "gray" : "white",
              }}
            >
              {tarea.texto}
            </span>
            <button onClick={() => eliminarTarea(indice)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {tareas.length === 0 && <p>No hay tareas todavía</p>}

      <p>Total de tareas: {tareas.length}</p>
    </div>
  );
}

export default App;
