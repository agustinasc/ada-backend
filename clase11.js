const readline = require("readline-sync")

/* Ejercicio 01 */

// const nombre = readline.question("Ingresa tu nombre:")
// const edad = readline.questionInt("Ingresa tu edad: ")

// console.log(`Hola ${nombre},, tenes ${edad}`);

/* Ejercicio 02 */

const crypto = require("crypto");

// let opcion = ""

// while( opcion !== 3 ){
//     console.log("MENU");
//     console.log("1. Ver mensaje de bienvenida");
//     console.log("2. Generar hash de texto");
//     console.log("3. Salir");
    
//     opcion = readline.question("Elegi una opcion:")

//     switch (opcion) {
//         case "1":
//             console.log("Bienvenida!");
//             break
//         case "2":
//             const texto = readline.question("Ingresa el texto a hashear")
//             const hash= crypto.createHash("sha256").update(texto).digest("hex")
//             console.log("Hash generado (SHA-256)", hash);
//         case "3":
//             console.log("saliendo del programa");       
//             break;   
//         default:
//             console.log("Opcion no valida. Intenta de nuevo");
//             break;
//     }
// }


/* Ejercicio 03 */

const num1 = readline.questionFloat("Ingresa el primer numero:")
const num2 = readline.questionFloat("Ingresa el segundo numero:")


/* Ejercicio 02 */