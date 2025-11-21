const net = require("net")

const client = net.createConnection({port: 5000}, ()=>{
    console.log("Conectado al servidot TCP");
    
    client.write("Hola")
    //client.end();

})

client.on("data", (data) => {
    console.log("Respuesta del servidor:", data.toString());
    
})

client.on("end", ()=> {
    console.log("Desconectado del servidor");
    
})