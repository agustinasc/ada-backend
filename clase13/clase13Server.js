//Importar el modulo 'net' para crear el servidor TCP
const net = require('net')
//Se importa el controlador para manejar la logica de las solicitudes relacionadas con los libros
const BookController = require('./controllers/bookController')

//Creamos el servidor usando el metodo 'createServer', que escucha las conexciones de los clientes y maneja las solicitudes
const server = net.createServer((socket) =>{
    console.log("Cliente conectado"); //Avisa cuando se conecta un cliente
    
    //Escuchamos el evento 'data' que se dispara cuando el servidor recibe datos de los clientes
    socket.on('data', (data) =>{
        const bookId = data.toString().trim() //Convierte los datos recibidos a una cadena de texto y se eliminan espacios en blanco
        console.log(`Solicitudes recibidas: ID ${bookId}`);
        
        //Se llama al metodo 'handleRequest' del controller para manejar la solicitud
        const response = BookController.handleRequest(bookId)
        socket.write(response) //Enviamos la respuesta del cliente usando el metodo 'write'
    })
    //Escuchamos el evento 'end' que se dispara cuando el cliente se desconecta
    socket.on('end', () =>{
        console.log("Cliente desconectado");
        
    })
    //Escuchamos el evento 'error' que se dispara cuando se detecta un error
    socket.on('error', (err) =>{
        console.log("Error en un cliente", err.message);
    })

}) 
//Hacemos que el servidor escuche el puerto 4000
server.listen(4000, () =>{
    console.log("Servidor TCP escuchando en el puerto 4000...");
    
})


