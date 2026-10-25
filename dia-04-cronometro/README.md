# Día 4/30 — Cronómetro con React ⏱️

## 📌 Descripción

En el cuarto día de mi reto de 30 días de proyectos con React, he desarrollado un cronómetro que permite contar el tiempo en segundos y mostrarlo en formato de minutos y segundos.

El proyecto permite iniciar, pausar y reiniciar el cronómetro, utilizando diferentes Hooks de React para gestionar el estado y los intervalos.

## 🚀 Funcionalidades

- ▶️ Iniciar el cronómetro.
- ⏸️ Pausar el cronómetro.
- 🔄 Reiniciar el cronómetro a cero.
- ⏱️ Mostrar el tiempo en formato `MM:SS`.
- 🛡️ Evitar que se creen varios intervalos al iniciar repetidamente.
- 🧹 Limpiar el intervalo cuando el componente se desmonta.

## 🛠️ Tecnologías utilizadas

- React
- JavaScript
- Vite
- CSS

## 🧠 Conceptos aprendidos

- **useState:** gestionar los segundos del cronómetro.
- **useRef:** guardar el identificador del intervalo sin provocar renderizados.
- **useEffect:** limpiar el intervalo al desmontar el componente.
- **setInterval():** ejecutar una función periódicamente.
- **clearInterval():** detener el intervalo.
- **Math.floor():** calcular los minutos completos.
- **Operador módulo (%):** obtener los segundos restantes.
- **String.padStart():** mostrar siempre dos dígitos.
- **Funciones de actualización de estado:** actualizar el contador a partir del valor anterior.

## ▶️ Instalación y ejecución

Clona el repositorio y accede a la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abre en el navegador la dirección local que indique Vite.

## 📚 Objetivo del proyecto

Practicar la gestión del estado, las referencias y los efectos secundarios en React mediante la creación de un cronómetro funcional.

---

**Reto:** 30 días de proyectos con React  
**Día:** 4/30  
**Estado:** Completado ✅