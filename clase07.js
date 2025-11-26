const net = require("net")

//Ejercicio 01

const server = net.createServer((socket) => {
    console.log("un cliente se ha conectado");
    
    socket.on("data", (data => {
        const mensaje = data.toString()
        console.log("Mensaje recibido del cliente", mensaje);
        

        socket.write(`Eco: ${mensaje}`)
    }))
    socket.on("end", () => {
        console.log("El cliente se ha desconectado (end)");
        
    })
    socket.on("close", () => {
        console.log("La conexion con el cliente se ha cerrado");
        
    })
})

server.listen(5000, () => {
    console.log("Servidor escuchando el ECO en el puerto 5000");
    
})

/* Ejercicio 02 */

// const server = net.createServer((socket) => {
//     console.log("Cliente conectado");
    

//     socket.setTimeout(7000)

//     socket.on("data", (data)=> {
//         console.log("Mensaje recibido", data.toString());
        
//         socket.write("Servidor recibio tu mensaje")

//         socket.setTimeout(7000) //reinicia timeout
//     })

//     socket.on("timeout", () => {
//         console.log("Se agoto el tiempo. Cerrando conexion");
//         socket.end("Desconectado por inactividad")
//     })

//     socket.on("end", () => {
//         console.log("Cliente desconectado");
        
//     })
//     socket.on("close", () => {
//         console.log("Conexion cerrada");
        
//     })
// })
// server.listen(5000, () => {
//     console.log("Servidor escuchando el ECO en el puerto 5000");
    
// })

/* Ejercicio 03 */

// const server = net.createServer((socket) => {
//     console.log("Cliente conectado");
    
//     socket.on("data",(data) =>{
//         const mensaje = data.toString().trim()
//         console.log("Mensaje recibido:", mensaje);
        
//         if(mensaje === "Hola"){
//             socket.write("Bienvenido!")
//         }else if (mensaje === "Adios"){
//             socket.write("Hasta luego!")
//             socket.end()
//         }else{
//             socket.write(`Mensaje recibido ${mensaje}`)
//         }
//     })
//     socket.on("end", ()=>{
//         console.log("Cliente desconectado");
//     })
// })
// server.listen(5000, () => {
//     console.log("Servidor escuchando el ECO en el puerto 5000");
    
// })


/* Ejercicio 04 */

// const server = net.createServer((socket) => {
//     console.log("Cliente conectado");
    
//     socket.on("data", (data) => {
//         console.log("Mensaje recibido:", data.toString());
        
//         socket.write("Mensaje recibido")
        
//         //socket.end();
//     })
//     socket.on("end", () => {
//     console.log("Cliente desconectado (el cliente cortó)");
// });

//     socket.on("error", (err)=>{
//         console.log("Error en la conexion", err.message);

//         //socket.destroy()
//     })
// })
// server.listen(5000, () => {
//     console.log("Servidor escuchando del ej 04 en el puerto 5000");
// })

/* Ejercicio 07 */

// let clientes = []

// const server = net.createServer((socket)=>{
//     console.log("Un cliente se ha conectado");
    
//     clientes.push(socket)

//     for (let cliente of clientes){
//         if(cliente !== socket){
//             cliente.write("Un nuevo cliente se ha unido al chat")
//         }
//     }

//     socket.on("data", (data)=> {
//         const mensaje = data.toString().trim()
//         console.log("Mensaje recibido", mensaje);
        
//         for (let cliente of clientes){
//             if(cliente !== socket){
//                 cliente.write(`El cliente dice ${mensaje}`)
//             }
//         }
//     })
//     socket.on("error", (err)=>{
//         console.log("Error en un cliente", err.message);
        
//     })
//     socket.on("end", ()=> {
//         console.log("un cliente se ha desconectado");
        
//         clientes = clientes.filter(cliente => cliente !== socket)

//         for (let cliente of clientes){
//             cliente.write("Un cliente salio del char")
//         }
//     })
// })
// server.listen(5000, () => {
//     console.log("Servidor de chat escuchando en el puerto 5000 del ejercicio 7");
// })
/* Ejercicio 06 */