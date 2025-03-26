//Haremos ejemplos de ciclos con while 
// 1) Imprimir los numeros del 0 al 10 en la consola

var index = 0; 
let index = 0; //Inicializamos la variable index en 0
while(index < 11) {
    //bloque de código
    console.log(index);
    // tengo que hacer que el ciclo itere nuevamente
    // tengo que tener una especie de contador en index
    // index = index + 1; 
    index++; // sumar 1 a index
}

// EJEMPLO 2)
let numUser = parseInt(prompt("Ingrese un número"));
let contador = 0;

while(contador <= numUser){
    console.log(contador);
    contador++;
}

// EJEMPLO 3) SUMA DE LOS PRIMEROS N NUMEROS
// pidamos al usuario un número y calcula la suma de los primeros N números naturales
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
let n = parseInt(prompt("Ingrese un número positivo:"));
let contadorDos = 1;
let suma = 0; // variable acumuladora
while(contadorDos <= n) {
    // la forma larga suma = suma + contadorDos; 
    suma += contadorDos; // la forma corta
    contadorDos++;
}
console.log(" La suma de los primeros", n, "números naturales es:", suma)