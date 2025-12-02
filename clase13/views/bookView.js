
//Creamos un objeto llamado "bookView" que contiene metodos para formatear respuestas relacionadas con los libros
const BookView = {
    //Metodo para formatear la respuesta que se enviara al usuario
    formatResponse: (book) =>{
        //Verificamos si el vehiculo es 'null' o 'undefined' 
        if (!book) {
            //Si no lo encontro, devuelve un objeto JSON con un mensaje de error
            return JSON.stringify({
                status:"error", // Para indicar que hubo error
                message: "Libro no encontrado" // Mensaje descriptivo del error
            })
        }
        //Si encontro el libro, se retorna un objeto JSON con los datos del libro
        return JSON.stringify({
            status: "sucess", 
            data: book //Para incluir los datos del libro en la respuesta
        })
    }
}
// Para exportar el objeto y pueda ser utilizado en otros archivos
module.exports = BookView