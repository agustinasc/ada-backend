/* para provocar errores de la clase 07 */
const net = require("net")

const client = net.createConnection({port: 5000})

client.on("connect", () => {
    client.write("Hola servidor soy elcliente 02")

    // setTimeout(() => {
    //     console.log("Cierre abruto del cliente");
    //     client.destroy()
    // }, 2000)
})