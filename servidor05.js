//CLASE 05

const net = require("net")

//para crear el servidor
const server = net.createServer((socket) => {
    console.log("¡Un cliente se ha conectado!");
    
    //Recibir datos del cliente
    socket.on("data", (datos) => {
        const mensaje = datos.toString()
        console.log(`Se recibio el mensaje ${mensaje}`);
        
        //responder al clinete
        socket.write("¡Hola, cliente! Tu mensaje fue recibido correctamente.")
    })

    socket.on("end", () => {
        console.log("El cliente se ha desconectado");
        
    })
})


//servidor escucha el puerto 5000
server.listen(5000, () => {
    console.log("Servidor TCP escuchando en el puerto 5000");
    
})

