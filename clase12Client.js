const net =require("net")
const readline = require("readline-sync")

const client = net.createConnection({ port:8082}, ()=>{
    console.log("Conectando al servidor");
    enviarRuta() //para enviar rutas infinitas
    
})

const enviarRuta= () =>{
    const ruta = readline.question("Ingrese una ruta: ")
    client.write(ruta)
}
client.on("data", (data) =>{
    console.log("Servidor", data.toString());
    
})