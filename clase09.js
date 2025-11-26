const net = require("net")

/* Ejercicio 01 */
// let client

// const conectar = () =>{
//     console.log("Intentando conectar al servidor");
//     client = net.createConnection({ port: 5000}, () =>{
//         console.log("Conectado al servidor");
//         client.write("Hola servidor!")
//     })
//     client.on("data", (data)=>{
//         console.log("servidor:", data.toString());
        
//     })
//     client.on("error", (err)=>{
//         console.log("Error en la conexion", err.message);
        
//     })
//     client.on("close", () =>{
//         console.log("Conxion cerrada. Reintentar en 3 segundos");
//         setTimeout(conectar, 3000)
//     })
// }

// conectar()

/* Ejercicio 02 */

// const client = net.createConnection({port: 5000}, () =>{
//     console.log("Conectado al servidor");
    
//     client.write("Hola servidor, comenzando prueba de pausa y renaudacion")
// })

// client.on("data", (data) =>{
//     console.log("Datos recibidos", data.toString());
    
// })

// //Para renaudar
// setTimeout(() =>{
//     console.log("Pausando recepcion de datos");
//     client.pause()
// }, 3000)

// //Para cerrar a los 15min
// setTimeout(() => {
//     console.log("Renaudando recepcion de datos");
//     client.resume()
// }, 8000)

// //Avisar cuando el servidor cierre
// setTimeout(() =>{
//     console.log("Finalizando conexion");
//     client.end()
// }, 15000)

// client.on("end", () =>{
//     console.log("Conexion finalizada");
    
// })


/* Ejercicio 03 */
// let timeOut

// const client = net.createConnection({port: 5000}, () => {
//     console.log("Conectando al servidor");
//     client.write("Hola Servidor, soy el cliente")
    
//     timeOut = setTimeout(() => {
//         console.log("Esperamos 10 segundos para cerrar la conexion");
//         client.destroy()
//     }, 10000)
// })

// client.on("data", (data) =>{
//     console.log("Datos recibidos", data.toString());
//     clearTimeout(timeOut) //para cancelar el setTimeOut cuando llegan datos
// })

// client.on("close", ()=>{
//     console.log("Cliente: Conexion finalizada");
    
// })
// client.on("error", (err)=>{
//     console.log("Error:", err.message);
    
// })

/* Ejercicio 04 */

// const client = net.createConnection({port: 5000}, () => {
//     console.log("Conectando al servidor");
    
//     client.write("Hola Servidor! Soy el cliente, voy a enviarte mensajes automaticos")
// })
// client.on("data", (data) => {
//     console.log("Datos recibidos", data.toString());
    
// })
// const mensajes5seg = setInterval(() =>{
//     client.write("Mensaje automatico")
// },5000)

// //para cerrar la conexion
// setTimeout(() =>{
//     console.log("Pasaron los 20 segundos");
//     clearInterval(mensajes5seg)
//     client.end()
// }, 20000)
// client.on("end", () => {
//     console.log("Cerrando conexion");  
// })

// client.on("close", () => {
//     console.log("Socket cerrado");   
// })
// client.on("error", (err)=>{
//     console.log("Error", err.message);
    
// })
/* Ejercicio 05 */

const client = net.createConnection({port: 5000}, ()=>{
    console.log("Creando la conexion");
    
    client.write("Servidor, soy el cliente")
})
/* Eventos */
client.on("data", (data)=>{
    console.log("Mensaje del servidor", data.toString());
    
})
client.on("close", () =>{
    console.log("La conexion se cerro complementamente");
    
})
client.on("end", ()=>{
    console.log("Cerrando conexion porque el servidor dejo de enviar datos");
    
})
client.on("error", (err) =>{
    console.log("error", err.message);
    
})
/* Timers */
setTimeout(() =>{
    console.log("Para permitir que el proceso termine si no hay mas conexiones activas");
    client.unref()
}, 10000)

setTimeout(() =>{
    console.log("Llamando a ref para obligar a que el proceso se mantenga vivo");
    client.ref()
}, 15000)

setTimeout(() =>{
    console.log("Cerrando conexion con end");
    client.ref()
}, 20000)