//Importamso el modulo 'fs' que nos permite trabajar con el sistema de archivos
const fs = require("fs")

//Importamos el modulo 'path' que nos ayuda a manejar y transformar rutas de archivos
const path = require("path")

//Definimos la ruta del archivo 'data.json' que esta en el mismo directorio que este script
const dataPath = path.join(__dirname, 'books.json')

const BookModel = {

    //Metodo para obtener un vehiculo por su ID
    getBookById: (id)=> {

        //Para leer el contenido de manera sincrona. El codigo se detiene hasta leer el archivo
        const rawData = fs.readFileSync(dataPath)

        //Convertimos el contenido del archivo a objeto JS
        const books = JSON.parse(rawData)

        //Se busca el Book que coincida con el ID buscado, si no lo encuentra retorna null
        return books.find(book => book.id === id) || null
    }
}

//Para exportar el objeto 'BooksModel' y que se pueda usar en otros archivos
module.exports = BookModel