// EJEMPLOS SOBRE FUNCIONES

// 1) Funciones sin parámetros
// devolver un saludo
function getGreeting(){
    console.log("HOLA MUNDO! 🌎");
};

// mando a llamar a la función 
// para que ejecute el código que está dentro de las llaves
getGreeting();

// 2) Funciones con parámetros
// realizar una suma 
function getSuma(num1,num2){
    return num1 + num2; // devuelvo un valor de salida: 4
};
// devuelvo un mensaje en la consola con el
//  valor de salida de la función
console.log("La suma es: " + getSuma(2,2));


// 3) Función con parametros y donde javascript aplica el hoisting
// FUNCIÓN CON PARÁMETROS
function getSum(x, y) {
    console.log(`La suma es: ${x + y}`);
    alert(`La suma es: ${x + y}`);
}

// Solicitar datos al usuario y convertirlos en números
// Aquí JavaScript aplica hoisting y mueve la declaración de `var x` y `var y` arriba
var x = parseFloat(prompt("INGRESA UN NÚMERO: "));
var y = parseFloat(prompt("INGRESA OTRO NÚMERO: "));

// Verificar si los valores ingresados son válidos
if (isNaN(x) || isNaN(y)) {
    console.log("Por favor ingresa números válidos.");
    alert("Por favor ingresa números válidos.");
}else {
    getSum(x, y); // Llamada a la función con los valores ingresados
};

// Diferencias clave:
// ✅ La función getSuma(x, y) ahora recibe parámetros en lugar de pedir 
// los valores dentro de la función.
// ✅ Los prompt() se ejecutan antes de llamar a la función, 
// y los valores ingresados se validan antes de usarlos.
// ✅ Si los valores ingresados no son números, 
// se muestra un mensaje de error y la función no se ejecuta.