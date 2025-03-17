import contenedorTareas from "./contenedorTareas.js";

function agregarTarea(input) {
  const tarjeta = document.createElement("div");
  tarjeta.style = `margin: 12px; display: flex; gap: 8px; align-items: center;`;

  const parrafoTarea = document.createElement("p");
  parrafoTarea.textContent = input.value.trim();
  input.value = "";

  const botonCompletar = document.createElement("button");
  botonCompletar.textContent = "Completar";
  botonCompletar.style = `color: white; background-color: orange; border: 1px solid grey`;
  botonCompletar.addEventListener("click", () => {
    const completada = parrafoTarea.style.textDecoration === "line-through";
    parrafoTarea.style.textDecoration = completada ? "none" : "line-through";
    botonCompletar.textContent = completada ? "Completar" : "Descompletar";
  });

  const botonActualizar = document.createElement("button");
  botonActualizar.textContent = "Actualizar";
  botonActualizar.style = `color: white; background-color: green; border: 1px solid grey`;
  botonActualizar.addEventListener("click", () => actualizarTarea(parrafoTarea));

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.style = `color: white; background-color: red; border: 1px solid grey`;
  botonEliminar.addEventListener("click", () => eliminarTarea(tarjeta));

  tarjeta.append(parrafoTarea, botonCompletar, botonActualizar, botonEliminar);
  contenedorTareas.append(tarjeta);
}

function actualizarTarea(parrafoTarea) {
  const nuevaTarea = prompt("Escribe la nueva tarea:", parrafoTarea.textContent);
  if (nuevaTarea !== null && nuevaTarea.trim() !== "") {
    parrafoTarea.textContent = nuevaTarea.trim();
  }
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
