/* EJERCICIO 01 

Muestra en la consola el título y el autor del libro.
• Actualiza el año del libro a un valor más reciente.
• Añade una nueva propiedad llamada páginas que indique el número
de páginas del libro.
• Muestra el objeto actualizado en la consola.

*/

let libros =
    {
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "año": 1967,
    "genero": "Realismo mágico"
    }
//console.log("Autor: ", libros.autor, "Titulo: ", libros.titulo);

libros.año = 2020
//console.log("Año: ", libros.año);

libros.paginas = 5000
//console.log(libros);

/* Ejercicio 02 

Convierte este objeto a una cadena JSON usando JSON.stringify().
• Muestra la cadena JSON en la consola.
• Luego, convierte la cadena JSON de nuevo a un objeto utilizando
JSON.parse() y muestra el objeto en la consola.
*/

let alumnoA = {
    "nombre": "Belen",
    "edad": 25,
    "curso": "Data Science",
    "notas": [10,5,8]
}
const cadena = JSON.stringify(alumnoA)
//console.log(cadena);
//console.log(JSON.parse(cadena));


/* Ejercicio 03 
crea un archivo llamado datos.js que
contenga un objeto con información sobre un curso, similar a los ejemplos
anteriores.
2.Crea otro archivo llamado actividad3.js que importará los datos de
datos.js usando require().
Instrucciones:
• En datos.js, define un objeto que tenga información como
nombreCurso, duracion, y temas (array de cadenas).
• Exporta este objeto para que pueda ser utilizado en otros archivos.
• En actividad3.js, importa el objeto usando require().
• Muestra en la consola la información del curso.
*/

const curso = require("./datos02.js")

//console.log(curso);
//console.log(curso.nombreCurso);
//console.log(curso.duracion);


/* Ejercicio 04 

crea dos archivos:
o estudiantes.js
o gestionEstudiantes.js
2. En estudiantes.js:
o Crea un array de objetos que represente una lista de
estudiantes.
o Cada estudiante debe tener las propiedades: nombre, edad,
curso y notas (un array de números).
o Exporta este array usando module.exports.
3. En gestionEstudiantes.js:
o Importa el array desde estudiantes.js.
o Muestra en la consola los nombres de todos los estudiantes.
o Calcula y muestra el promedio de notas de un estudiante
específico.
o Agrega un nuevo estudiante al array y muestra el array
actualizado en formato JSON.
*/

const estudiantes = require("./datos02.js")

console.log(estudiantes)

estudiantes.forEach(est => console.log(est.nombre))

const estudianteBuscado = "Matias";

const estudianteEncontrado = estudiantes.find(est => est.nombre === estudianteBuscado)

const notas = estudianteEncontrado.notas;
const promedio = notas.reduce((acum, nota)=> acum + nota, 0) / notas.length

console.log(`Promedio de ${estudianteEncontrado}:  ${promedio}`);
    
const newEstudiante =  {
  nombre: "Santiago",
  edad: 23,
  curso: "Backend",
  notas: [8, 7, 9]
};

estudiantes.push(newEstudiante)
console.log(estudiantes);

console.log(JSON.stringify(estudiantes));
