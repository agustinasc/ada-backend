require ("dotenv").config()

// ejercicio 01

const readline = require("readline")

const saludo = process.env.GREETING || "Hola"

const nombre = process.argv[3]|| "Invitado"

console.log(`${saludo} para ${nombre}`);

//ejercicio 02

console.log("Plataforma del sistema operativo:", process.platform);

console.log("Directorio actual:", process.cwd());

//ejercicio 03

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("Ingrese por favor, el primer numero:", (num1) => {
//     rl.question("Ingrese el segundo numero: " , (num2) => {

//         const n1 = Number(num1)
//         const n2 = Number(num2)

//         const suma = n1 + n2

//         console.log(`la suma es ${suma}`);
        
//         rl.close()
//     })
// })

//Ejercicio 04

// const saludoInicial = process.env.START_MESSAGE || "Hola!!!!"

// const rl2 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// console.log(saludoInicial);

// rl2.question("Cual es tu nombre?: ", (nombre) => {
//     console.log(`Un gusto hablar con vos, ${nombre}. Hasta luego`);
//     rl2.close
// })

//Ejercicio 05

const mensajeBienvenida = process.env.WELCOME_MESSAGE || "Soy la otra bienvenida"

console.log(mensajeBienvenida);


const rl3 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl3.question("ingresa la temperatura en grados Celsius: ", (celsius) =>{
    const valorCelsius = parseFloat(celsius)

    if(isNaN(valorCelsius)){
        console.log("Por favor ingresa un numero valio");
        rl3.close()
        return
    }
    const fahrenheit = (valorCelsius * 9/5) +32
    
    console.log(`${valorCelsius}C, equivalen a ${fahrenheit.toFixed(2)}F`);
    console.log("Gracias por usar el conversor");
    
    rl3.close()
})


