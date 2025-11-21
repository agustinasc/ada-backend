/* Ejercicio 01

Imagina que acabas de unirte a una red social donde puedes crear tu
perfil digital básico. Tu misión es:
1. Crear un archivo llamado perfil.json.
2. Dentro de este archivo, guarda información sobre ti: nombre, edad
y tu ciudad favorita.
3. Usa el módulo fs para escribir este archivo desde Node.js.
 Pista: Utiliza JSON.stringify para convertir tu información en un
formato que pueda guardarse en el archivo.
*/

// const fs = require("fs")

// const perfil = {
//     nombre: "Agustina",
//     edad: 35,
//     ciudadFavorita: "Rio de Janeiro"
// }

// const perfilJSON = JSON.stringify(perfil, null, 2)
// //console.log(perfilJSON);

// fs.writeFile("perfilClase03.json", perfilJSON, (error)=> {
//     if(error) {
//         console.log("Error al crear el archivo:", error);
//     }else{
//         console.log("Archivo perfilClase03.json fue creado");
        
//     }
// })

/* Actividad 2: Seguimiento de series de televisión
Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa que permita:
1. Registrar una serie: Se debe registrar una serie con su nombre y la cantidad de temporadas.
2. Listar las series: Muestra todas las series registradas.
3. Actualizar las temporadas de una serie: Permite actualizar la cantidad de temporadas de una serie.
*/

// const path = "./seriesClase03.json"

// let seriesClase03 = []

// if(fs.existsSync(path)){
//     const data = fs.readFileSync(path, "utf-8")
//     seriesClase03 = JSON.parse(data)
//     console.log("Se cargo el archivo serieClase03");  
// }else{
//     fs.writeFileSync(path, JSON.stringify(seriesClase03, null, 2))
//     console.log("Archivo creado: seriesClase03.json");

// }
//         /* Registrando ls serie */

// const registrandoSerie = (nombre, temporadas) => {
//     const nuevaSerie = { nombre, temporadas }
//     seriesClase03.push(nuevaSerie)

//     fs.writeFileSync(path, JSON.stringify(seriesClase03, null, 2))
//     console.log(`Serie agregada: ${nombre} con ${temporadas} temporadas`);
// }

// //registrandoSerie("Vikings", 5)
// //registrandoSerie("Dr House", 8)

//         /* Listando la serie */

// const listarSeries = () => {
//     console.log("Lista de Serie:");

//     seriesClase03.forEach( serie => console.log(serie.nombre)
//     )
// }

//listarSeries()

        /* Actualizar temporadas */

// const actualizarTemporadas = (nombre, nuevaTemporada) => {
//     const serie = seriesClase03.find(serie => serie.nombre === nombre)

//     if(!serie){
//         console.log(`La serie ${nombre} no existe`);
//         return  
//     }
//     serie.temporadas = nuevaTemporada
//     fs.writeFileSync(path, JSON.stringify(seriesClase03, null, 2))

//     console.log(`La serie ${nombre} ahora tiene ${nuevaTemporada} temporadas`);
    
// }
//actualizarTemporadas("Friends", 10)
//actualizarTemporadas("Vikings", 10)

/* Actividad 3: Registro de tareas pendientes
Consigna: Crea un programa para gestionar tus tareas pendientes. El programa debe permitirte:
1. Agregar una tarea: Registrar una tarea pendiente con su descripción.
2. Listar las tareas: Mostrar todas las tareas registradas.
3. Eliminar una tarea: Eliminar una tarea de la lista. */

// const fs = require("fs")
// const path = "./tareaClase03.json"

// let tareas = []

// if(fs.existsSync(path)){
//     const data = fs.readFileSync(path, "utf8")
//     tareas = JSON.parse(data)
//     console.log("Tareas cargadas");
// }else{
//     fs.writeFileSync(path, JSON.stringify(tareas, null, 2))
//     console.log("Tareas creadas");
// }

// const agregarTarea = (descripcion) => {
//     const nuevaTarea = {descripcion}
//     tareas.push(nuevaTarea)

//     fs.writeFileSync(path, JSON.stringify(tareas, null, 2))
//     console.log("nueva tarea cargada");
// }

// agregarTarea("Ir al crossfit")

// const listarTareas = () => {
//     console.log("Lista de tareas:");
    
//     tareas.forEach((tarea, i) => {
//         console.log(`${i+1}. ${tarea.descripcion}`);
//     });
// }

// listarTareas()

// const eliminarTarea = (descripcion) => {
//     const indice = tareas.findIndex(tarea => tarea.descripcion === descripcion)

//     if(indice === -1){
//         console.log(`${descripcion} no existe`);
//         return
//     }
//     tareas.splice(indice, 1)
//     fs.writeFileSync(path, JSON.stringify(tareas, null, 2))
    
//     console.log(`${descripcion} eliminada`);
// }

// eliminarTarea("Nadar")
// eliminarTarea("Pintar")


/* Actividad 4: Control de inventario
Consigna: Crea un programa para llevar el control de un inventario. El programa debe permitirte:
1. Agregar un producto: Registrar un producto con su nombre y cantidad disponible.
2. Listar los productos: Mostrar todos los productos registrados.
3. Actualizar la cantidad de un producto: Modificar la cantidad de un producto en el inventario. */

// const fs = require("fs")
// const path = "./inventarioClase03.json"

// let inventario = []

// if(fs.existsSync(path)){
//     const data = fs.readFileSync(path, "utf8")
//     inventario = JSON.parse(data)
//     console.log("Inventario cargado desde inventarioClase03.json");
// }else{
//     fs.writeFileSync(path,  JSON.stringify(inventario, null, 2))
//     console.log("Nuevo inventario creado");
// }

// const agregarProductos = (nombre, cantidad) => {
//     const nuevoProducto = {nombre, cantidad}
//     inventario.push(nuevoProducto)
//     fs.writeFileSync(path, JSON.stringify(inventario, null, 2))
//     console.log(`El producto ${nombre} fue agregado`);
    
// }

// // agregarProductos("Pan", 2)
// // agregarProductos("Leche", 1)
// // agregarProductos("Yerba", 5)

// const listarInventario = () => {
//     console.log("Inventario:");
    
//     if (inventario.length === 0) {
//         console.log("El inventario esta vacio");
//         return
//     }

//     inventario.forEach((producto, i) => {
//         console.log(`${i+1}. ${producto.nombre} con ${producto.cantidad} unidades`)
//     });
// }

// // listarInventario()

// const actualizarProducto = (nombre, nuevaCantidad) => {

//     const productoAModificar = inventario.find(producto => producto.nombre === nombre)

//     if(!productoAModificar){
//         console.log(`No existe el producto ${nombre}`);
//         return
//     }
//     productoAModificar.cantidad = nuevaCantidad
//     fs.writeFileSync(path, JSON.stringify(inventario, null, 2))
//     console.log(`Se modifico las cantidades de ${nombre} con ${nuevaCantidad} unidades`);
// }

// actualizarProducto("Pan", 10)

/* Actividad 5: Registro de contactos
Consigna: Crea un programa que permita registrar contactos con nombre, teléfono y correo electrónico. El programa debe permitirte:
1. Agregar un contacto: Registrar un nuevo contacto.
2. Listar los contactos: Mostrar todos los contactos registrados.
3. Eliminar un contacto: Eliminar un contacto de la lista. */

// const fs = require("fs")
// const path = "./agendaClase03"

// let agenda = []

// if(fs.existsSync(path)){
//     const data = fs.readFileSync(path, "utf8") 
//     agenda = JSON.parse(data)
//     console.log("Agenda cargada desde agendaClase03.js");
    
// }else{
//     fs.writeFileSync(path, JSON.stringify(agenda, null, 2))
//     console.log("Agenda creada");
// }

// const agregarContacto = (nombre, telefono, correoElectronico) => {
//     const nuevoContacto = {nombre, telefono, correoElectronico}
//     agenda.push(nuevoContacto)

//     fs.writeFileSync(path,  JSON.stringify(agenda, null,2))
//     console.log(`Se agrego el nuevo contacto ${nuevoContacto.nombre}`);
// }

// // agregarContacto("Matias", 3513480788, "matias@gmail.com")
// // agregarContacto("Natalia", 3833280752, "natalia@gmail.com")
// // agregarContacto("Virginia", 3513834568, "virginia@gmail.com")

// const listarContactos = () => {
//     console.log("Lista de Contactos:");
//     if(agenda === 0){
//         console.log("No hay contactos guardados");
//         return
//     }
//     agenda.forEach((contacto, i) => { 
//         console.log(`${i+1}. ${contacto.nombre} con el telefono numero ${contacto.telefono}`);
    
//     });
// }

// listarContactos()

// const eliminarContacto = (nombre) => {
//     const indice = agenda.findIndex(contacto => contacto.nombre === nombre)

//     if (indice === -1){
//         console.log(`El nombre ${nombre} no esta en la Agenda`);
//         return
//     }

//     agenda.splice(indice, 1)

//     fs.writeFileSync(path, JSON.stringify(agenda, null, 2))
//     console.log(`${nombre} eliminado`);
    
// }

// eliminarContacto("Matias")
// eliminarContacto("Natalia")
// eliminarContacto("Virginia")

/* Actividad 6: Gestión de un diario personal 
Consigna: Crea un programa que te permita gestionar un diario personal. El programa debe permitirte:
1. Agregar una entrada al diario: Registrar una nueva entrada con la fecha y el texto.
2. Listar las entradas: Mostrar todas las entradas registradas.
3. Eliminar una entrada: Eliminar una entrada específica por su ID.
 */

const fs = require("fs")
const path = "./diarioClase03.json"

let diario = []

if(fs.existsSync(path)){
    const data = fs.readFileSync(path, "utf8")
    diario = JSON.parse(data)
    console.log(`Archivo cargado desde diarioClase03.json`);
    
}else{
    fs.writeFileSync(path, JSON.stringify(diario, null, 2))
    console.log(`Se ha creado el archivo Diario de la Clase 03`);
}

const agregarEntrada = (fecha, descripcion) => {
    const nuevaEntrada = { 
        id: diario.length + 1, 
        fecha, 
        descripcion
    }
    //console.log("Tipo de diario:", typeof diario);
    diario.push(nuevaEntrada)

    fs.writeFileSync(path, JSON.stringify(diario, null, 2))
    console.log(`Se agrego la ${descripcion} con fecha ${fecha}`);
}

//agregarEntrada("10-10-2025", "Hoy fue un dia muy especial")
//agregarEntrada("11-10-2025", "Hoy no fue un dia tan bueno")

const listarEntradas = () => {
    console.log("Lista de Entradas");
    
    if( diario === 0){
        console.log("No hay entradas en el diario");
    }
    diario.forEach((entrada, i) => { console.log(`${i+1}. ${entrada.descripcion}`)});
}
listarEntradas()

const eliminarEntrada = (id) => {
    const indice = diario.findIndex(entrada => entrada.id === id)

    if(indice ===-1){
        console.log(`El numero de ID: ${id} no existe`);
        return
    }
    diario.splice(indice, 1)
    fs.writeFileSync(path, JSON.stringify(diario, null, 2))
    
    console.log(`Se elimino la entrada con el ID: ${id}`);
}
eliminarEntrada(1)