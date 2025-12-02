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

// const num1 = readline.questionFloat("Ingresa el primer numero:")
// const num2 = readline.questionFloat("Ingresa el segundo numero:")

// console.log("1. Suma: ");
// console.log("2. Resta: ");
// console.log("3. Multiplicacion: ");
// console.log("4. Division: ");

// const opcion = readline.question("Elegi una operacion 1-4")

// let resultado

// switch (opcion) {
//     case "1":
//         resultado = num1 + num2 
//         break;
//     case "2":
//         resultado = num1 - num2 
//         break;
//     case "3":
//         resultado = num1 * num2 
//         break;
//     case "4":
//         if(num2===0){
//             console.log("No se puede dividir por 0");
//             process.exit()
//         }
//         resultado = num1 / num2 
//         break;
//     default:
//         console.log("opcion no valida");
        
//         break;
// }
// console.log(`Resultado ${resultado}`);

/* Ejercicio 04 */

// const password = readline.question("Ingrese la contraseña: ")

// if (password === "secreto123") {
//     console.log("Acceso concedido");
    
// } else {
//     console.log("Acceso denegado");
    
// }

