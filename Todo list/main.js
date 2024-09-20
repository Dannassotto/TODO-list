import botonenviar from "./componentes/botonenviar.js";
import contenedorTareas from "./componentes/contenedorTareas.js"
import crearTareacontenedor from "./componentes/crearTareaContenedor.js";
import titulo from "./componentes/titulo.js";
import tareaInput from "./componentes/tareaInput.js";
import tarea  from "./clases/tarea.js";

const root = document.getElementById("root")

const mitarea = new tarea("Hola mundo")

mitarea.texto = "Tacos"
root.append(mitarea.etiqueta)

root.append(titulo);
root.append(tareaInput);
root.append(botonenviar)
root.append(contenedorTareas);
root.append(crearTareacontenedor)

 
