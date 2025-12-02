const net = require("net")
const path = require("path")

/* Ejercicio 01 */

// const server = net.createServer((socket) => {
//     console.log("Cliente conectado");
    
//     socket.on("data", (data) =>{
//         const ruta = data.toString().trim()
//         console.log("Ruta recibida: ", ruta);
        
//         if (path.isAbsolute(ruta)) {
//             socket.write("La ruta es ABSOLUTA")
//         } else {
//             socket.write("La ruta es relativa")
//         }
//     })

//     socket.on("end", ()=>{
//         console.log("Cliente desconectado");       
//     })
//     socket.on("error", (err)=>{
//         console.log("Error", err.message);
//     })
// })
// server.listen(8080, ()=>{
//     console.log("Servidor validacion de rutas en puerto 8080");
    
// })

/* Ejercicio 02 */

// const server = net.createServer((socket) => {
//     console.log("Cliente conectado");
    
//     socket.on("data", (data) =>{
//         const ruta = data.toString().trim()
//         console.log("Ruta recibida: ", ruta);
        
//         const normalizada = path.normalize(ruta)
//         socket.write("Ruta normalizada: " + normalizada + "\n")
        
//     })

//     socket.on("end", ()=>{
//         console.log("Cliente desconectado");       
//     })
//     socket.on("error", (err)=>{
//         console.log("Error", err.message);
//     })
// })
// server.listen(8081, ()=>{
//     console.log("Servidor validacion de rutas en puerto 8081");
    
// })

/* Ejercicio 3 */

const server = net.createServer((socket) => {
    console.log("Cliente conectado");
    
    socket.on("data", (data) =>{
        const ruta = data.toString().trim()
        console.log("Ruta recibida: ", ruta);
        
       const info = `Base name: ${path.basename(ruta)}, Directorio ${path.dirname(ruta)}, Extension ${path.extname(ruta)}`
        
       socket.write(info)
    })

    socket.on("end", ()=>{
        console.log("Cliente desconectado");       
    })
    socket.on("error", (err)=>{
        console.log("Error", err.message);
    })
})
server.listen(8082, ()=>{
    console.log("Servidor validacion de rutas en puerto 8082");
    
})