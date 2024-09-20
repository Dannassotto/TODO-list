
import contenedorTareas from "./contenedorTareas.js";

function agregarTarea(input) {
  const tarjeta = document.createElement("div");
  tarjeta.style = `margin: 12px; display: flex; gap: 8px;`;

  const parrafoTarea = document.createElement("p");
  parrafoTarea.textContent = input.value.trim();
  input.value = null;

  const botonCompletar = document.createElement("button");
  botonCompletar.textContent = "tachar";
  botonCompletar.style = `color: white; background-color: orange; border: 1px solid grey`;
  botonCompletar.addEventListener("click", () => {
    parrafoTarea.style.textDecoration = parrafoTarea.style.textDecoration === "line-through" ? "" : "line-through";
    botonCompletar.textContent = parrafoTarea.style.textDecoration === "line-through" ? "Descompletar" : "Completar";
  });

  const botonActualizar = document.createElement("button");
  botonActualizar.textContent = "Actualizar";
  botonActualizar.style = `color: white; background-color: green; border: 1px solid grey`;
  botonActualizar.addEventListener("click", () => Actualizartarea(input, parrafoTarea));

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.style = `color: white; background-color: red; border: 1px solid grey`;
  botonEliminar.addEventListener("click", () => eliminarTarea(tarjeta));

  tarjeta.append(parrafoTarea, botonCompletar, botonActualizar, botonEliminar);
  contenedorTareas.append(tarjeta);
}

function Actualizartarea(nuevatarea, tarea) {
  tarea.textContent = nuevatarea.value;
  nuevatarea.value = "";
  nuevatarea.placeholder = "tarea actualizada!";
  setTimeout(() => {
    nuevatarea.placeholder = "eyy! ingresa tu tarea";
  }, 3000);
}

function eliminarTarea(tarjetaTarea) {
  tarjetaTarea.remove();
}

const botonBorrarTodas = document.createElement("button");
botonBorrarTodas.textContent = "Borrar todas";
botonBorrarTodas.style = `color: white; background-color: purple; border: 1px solid grey; margin-top: 12px`;
botonBorrarTodas.addEventListener("click", () => {
  contenedorTareas.innerHTML = "";
});

contenedorTareas.append(botonBorrarTodas);

export { agregarTarea, eliminarTarea };
