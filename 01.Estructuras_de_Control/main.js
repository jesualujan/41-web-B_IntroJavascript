// trabajar toda nuestra lógica

//  Ejercicio 1) vamos a escribir un programa donde guardemos la edad en una variable
// y sepamos si es mayor o menor de edad 

//  1. Declarar una variable
// esto esta Harcodeado/Harcoding
let age = 17;

// implemento una condicional/estructura de control/ if ... else
if (age >= 18) {
    console.log("ERES MAYOR DE EDAD");
}else {
    console.log("ERES MENOR DE EDAD");
}

//  Ejercicio 1) Vamos a escribir un programa que le pida/solicite a un usuario
// que ingrese su edad y saber si esa persona es mayor o menor de edad

// prompt nos sirve para pedirle datos al usuario palabra/string/cadena
let ageUser = window.prompt("¿CUANTOS AÑOS TIENES?");
// validamos si la condición se cumple o no se cumple
if(ageUser >= 18){
    console.log("ERES MAYOR DE EDAD");
}else{
    console.log("ERES MENOR DE EDAD");
}

// Ejercicio 3) vamos a escribir un programa para que un usuario nos de su nombre
// y vamos a guardar ese dato y vamos a solicitar que nos de su nombre otra vez
// y vamos a comparar si el nombre es igual o no

// 1. Pedirle al usuario que nos de su nombre
const user = window.prompt("¿CUAL ES TU NOMBRE?");
const baseDeDatos = "Adriana"; // nombre que ya tengo guardado

// 2. mostramos mensajes en consola, para ello usamos console.log
// console.log(); nos sirve para mostrar mensajes en consola y nos ayuda
// a velos datos que se tienen en un instante del código
console.log("¿EL USUARIO ES EL MISMO?");
console.log(user == baseDeDatos); // true o false

console.log("Si son diferentes, debo hecharlo de la app?")
console.log(user != baseDeDatos); // true o false

console.log("El usuario es bienvenido a la app?");
// validamos una condición para saber si es el usuario correcto
if(user != baseDeDatos) // true o false 
{
    console.log("EL USUARIO NO ES EL MISMO");
    alert("Adios!, no eres bienvenido a la app");
}else {
    console.log("EL USUARIO ES EL MISMO");
    alert("Bienvenido a la app");
}

