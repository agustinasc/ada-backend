const net = require("net")
const readline = require("readline-sync")

const PORT = 5000
const HOST = "localhost"

const client = net.createConnection({port: PORT, host:HOST}, () =>{
    console.log("Cliente: Conectado al servidor");
    
    enviarMensaje()
})
client.on("data", (data) =>{
    console.log("Cliente: Respuesta del servidor:", data.toString());
    enviarMensaje()
})
client.on("close", () =>{
    console.log("Cliente: Conexion cerrada por el servidor");
    
})
client.on("error", (err) =>{
    console.log("Error:", err.message);
    
})
const enviarMensaje = ()=>{
    const mensaje = readline.question("Cliente: Escribi un mensaje para el servidor: ")
    client.write(mensaje)
}