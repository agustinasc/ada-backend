//Importamos el modulo que nos permite crear clientes TCP
const net = require('net')

//Creamos una conexion TCP al servidor que esta escuchando el puerto 4000
const client = net.createConnection({ port: 4000}, () =>{
    console.log("Conectado al servidor") //Se ejecuta cuando la conexion al servidor es exitosa
    
    //Para enviar un ID al servidor
    const bookId = "3"
    client.write(bookId)
})

//Se escucha el evento 'data' que se dispara cuando el cliente recibe datos del servidor
client.on('data', (data) =>{
    //Se convierten los datos recibidos a una cadena de texto
    console.log("Respuesta del servidor:", data.toString());
    //Se cierra la conexion con el servidor despues de recibir la respuesta
    client.end()
})
//Escuchamos el evento 'end' que se dispara la conexion cuando la conexion en el servidor se cierra
client.on('end', () =>{
    console.log("Conexion cerrada");
    
})