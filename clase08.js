const net = require("net")

/* Ejercicio 01 y 02*/

// const client = net.createConnection({ host: "localhost", port: 5000}, () =>{
//     console.log("Se ha conectado al servidor");
    
//     //client.write("Hola servidor, soy el cliente")

//     client.setTimeout(5000)
// })

// client.on("data", (data) =>{
//     console.log("Mensaje recibido del servidor", data.toString());
//     client.setTimeout(0)
// })
// client.on("timeout", ()=>{
//     console.log("Tiempo de espera agotado");
//     client.end()
// })
// client.on("end", () =>{
//     console.log("Conexion cerrada por el servidor");
    
// })

/* Ejercicio 03 */

// let primeraVez = true

// const client = net.createConnection({host: "localhost", port:5000}, () =>{
//     console.log("Conectado al servidor");
    
//     client.write("Hola servidor, soy el cliente del ejercicio 02")

//     client.on("data", (data)=> {
//         const mensaje = data.toString().trim()
//         console.log("Mensaje recibido del servidor:", mensaje);
        
//        if (primeraVez){
//         primeraVez = false
//         console.log("... Pausando recepcion por 3 segundos...");
//         client.pause()

//         setTimeout(() => {
//             console.log("Renaudando recepcion de datos");
//             client.resume()
//         }, 3000)
//        }
//     })
// })
/* Ejercicio 04 */

// const client = net.createConnection({host: "localhost", port: 5000})

// client.on("connect", ()=>{
//     console.log("Conectado al servidor");
    
// })
// client.on("error", (err)=>{
//     console.log("Error:", err.message);
// })

// client.on("close", (hadError) => {
//     if(hadError){
//         console.log("Conexion cerrada por Err inesperado");
        
//     }else{
//         console.log("Conexion cerrada inesperadadamente");
//     }
// })

/* Ejercicio 05 */

// const client = net.createConnection({host: "localhost", port: 5000}, () => {
//     console.log("Conectado al servidor");
    
//     client.write("estas ahi servidor?")
// })

// client.on("data", (data) => {
//     console.log("Servidor dice:", data.toString());
    
// })

// client.on("end", () => {
//     console.log("Servidor cerro la conexion");
    
//})
/* Ejercicio 06 */

// const readline = require("readline")

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// const client = net.createConnection({ port: 5000}, () =>{
//     console.log("Conectado al servidor");
//     preguntar()
// })

// const preguntar = () =>{
//     rl.question("Escribe mensaje", (mensaje) => {

//         if(mensaje.trim().toLowerCase() === "salir"){
//             console.log("Desconectanto...");
//             client.end()
//             rl.close()
//             return
//         }
//         client.write(mensaje)

//         preguntar()
//     })
// }

// client.on("data", (data) => {
//     console.log("Servidor:", data.toString());
    
// })

// client.on("end", () =>{
//     console.log("Servidor cerro la conexion");
//     rl.close()
// })

/* Ejercicio 07 */

const client = net.createConnection({port: 5000}, () => {
    console.log("Conectando al servidor");
    
})
client.on("error", (err) => {
    console.log("Error en la conexion:", err.message);
    client.destroy()
    console.log("Conexion destruida");
    
})
client.on("data", (data) => {
    console.log("Servidor", data.toString());
    
})
client.on("end", () => {
    console.log("Servidor cerro la conexion");
    
})
/* Ejercicio 08 */