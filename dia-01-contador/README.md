# 🔢 Día 01 — Contador interactivo

Primer proyecto del reto **30 Days of React**: una aplicación sencilla que permite incrementar, decrementar y reiniciar un contador.

El objetivo es aprender los fundamentos de React y entender cómo las acciones del usuario pueden actualizar dinámicamente una interfaz.

## 🎯 Funcionalidades

- Incrementar el contador en una unidad.
- Decrementar el contador sin permitir valores negativos.
- Reiniciar el contador a cero.
- Mostrar un mensaje al alcanzar un valor de 10 o superior.
- Cambiar el color del número según su valor.

## 🛠️ Tecnologías

- React
- JavaScript (ES6+)
- JSX
- CSS
- Vite

## 📚 Conceptos aprendidos

### 1. Estado con `useState`

He utilizado el hook `useState` para almacenar el valor actual del contador y actualizar la interfaz cuando cambia.

```jsx
const [contador, setContador] = useState(0);
```

### 2. Eventos con `onClick`

Los botones ejecutan funciones cuando el usuario interactúa con ellos.

```jsx
const sumar = () => setContador(contador + 1);
```

### 3. Condicionales

He utilizado condiciones para evitar que el contador sea negativo y para mostrar un mensaje cuando alcanza un valor determinado.

### 4. Renderizado condicional

React permite mostrar elementos según el estado actual del componente.

```jsx
{contador >= 10 && <p>¡Has llegado a 10!</p>}
```

### 5. Estilos dinámicos

He practicado el uso de expresiones en JSX para cambiar los estilos en función del valor del contador.

## ⚙️ Cómo ejecutar el proyecto

Necesitas tener Node.js y npm instalados.

```bash
npm install
npm run dev
```

Después, abre la dirección local que indique Vite en la terminal.

## 💡 Mejoras futuras

- Añadir un límite máximo configurable.
- Permitir incrementar y decrementar en cantidades personalizadas.
- Mejorar el diseño y la adaptación a móviles.
- Desactivar visualmente el botón de restar cuando el contador llegue a cero.

## 🧠 Conclusión

Este proyecto me ha servido para dar mis primeros pasos con React, comprender cómo funciona el estado de un componente y relacionar eventos con actualizaciones de la interfaz.

Es la base para proyectos posteriores con formularios, listas, APIs y aplicaciones más completas.

---

**Reto 30 Days of React · Día 01/30**