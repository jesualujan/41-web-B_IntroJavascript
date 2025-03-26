// EJEMPLOS USANDO EL CICLO FOR
//  🧮 1. Tabla de multiplicar de un número 
// Solicitar al usuario un número y muestra su 
// tabla de multiplicar del 1 al 9.

const numUser = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar: "));
// utilizamos un template string para mostrar un texto junto con el dato guardado de una variable
console.log (`Tabla de multiplicar del número ${numUser}`)
for(let i = 0; i <= 9; i++){
    console.log(`${numUser} x ${i} = ${numUser * i}`); 
}
console.log("Tabla de multiplicar del número" + numUser);

// 🔍 2. Números pares del 1 al 20
// Crea un programa que imprima los números pares del 1 al 20.
console.log("Números pares del 1 al 20: ");
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0) {
        console.log(i);
    }
}