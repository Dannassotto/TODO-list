import { eliminarTodasTareas }from "../funciones/funcionesTareas.js";


    let botonEliminarTodas = document.createElement("button");
    botonEliminarTodas.textContent = "Eliminar todas las tareas";
    botonEliminarTodas.style
    `
    color: white;
    background-color: red;
    border: black 2px dotted;
    margin-left: 8px;
    border-radius: 4px;
    cursor: pointer;`
    botonEliminarTodas.addEventListener("click", eliminarTodasTareas);

    export default botonEliminarTodas;
