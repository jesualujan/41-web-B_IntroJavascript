//Haremos ejemplos de ciclos do-while 
// EJEMPO 1)
let caracter; // está en el scope global 
do {
    // bloque de código
    caracter = prompt("Ingrese un caracter: ");
    console.log(caracter);
} while (caracter !== "a");
console.log("Ingresaste el caracter a!! 🙃" )

// EJEMPO 2)
// Ingreso de una contraseña
// El programa solicita una contraseña y no avanza hasta que el usuario
// ingrese la contraseña correcta.

// Harcodeamos la constraseña correcta
const password = "secreta";
let pass; 

do {
 pass = prompt("Ingrese la contraseña:");
 if(pass !== password){
    console.log("contraseña incorrecta, intenta nuevamente 😛");
 }
}while(pass !== password);
console.log("Contraseña correcta, bienvenido al sistema 😎");
