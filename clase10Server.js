const net = require("net")

const PORT = 5000

let clientes = []

const server = net.createServer((socket) =>{
    console.log("Servidor: Nuevo cliente conectado");

    clientes.push(socket)
    
    socket.on("data", (data) => {
        const mensaje = data.toString().trim()
        console.log(`Servidor: Mensaje recibido del cliente ${mensaje}`);
        
        socket.write("Servidor: Mensaje recibido") //Respuesta al cliente
    })

    socket.on("close", () =>{
        console.log("Servidor: Un cliente se desconecto");
        clientes = clientes.filter((cliente) => cliente !== socket)
    })
    socket.on("error", (err)=>{
        console.log("Error en un cliente", err.message);
        
    })
})

server.listen(PORT, ()=>{
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);
    
})