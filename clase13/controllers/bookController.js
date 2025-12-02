//Importamos el modulo 'BookModel'
const BookModel = require('../model/bookModel')
//Importamos el modulo 'BookView'
const BookView = require('../views/bookView')

//Creamos un objeto llamado 'BookController' que manejara las solicitudes relacionadas con los libros
const BookController = {
    handleRequest: (id) =>{
        //Llamamos al metodo 'getBookById' del BookModel para obtener los datos del libros
        //Convertimos el 'id' en numero entero con base 10
        const book = BookModel.getBookById(parseInt(id, 10))
        
        //Llamamos al metodo 'formatResponse' para formatear la respuesta
        //Este metodo toma los datos del libro y los prepara para ser enviados al usuario
        return BookView.formatResponse(book)
    }
}

//Exportamos el objeto 'BookController' para que pueda ser utilizado en otros archivos
module.exports = BookController