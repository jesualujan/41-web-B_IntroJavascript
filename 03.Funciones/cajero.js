// Simulación de un cajero automático que permite realizar 
// retiros de efectivo con las siguientes condiciones:
// El saldo inicial de la cuenta es de $1000.
// El usuario puede ingresar un monto a retirar.
// Se verifica si el monto solicitado es menor o igual al saldo disponible.
// Si el monto es válido, se realiza la transacción y se actualiza el saldo.
// Se informa al usuario del nuevo saldo disponible.
// Si el monto es mayor al saldo disponible, 
// se informa al usuario que la operación no puede realizarse por falta de fondos.

// usa el lenguaje de programación javasctipt, funciones,
//  declaración de varibles con let y const, ciclo for de ser necesario e if else 

//* 1) Declarar mis variables 
let saldo = 1000; //  saldo inicial de la cuenta
let historial = []; //  historial de transacciones de la cuenta y lo guardo en una lista
let intentosFallidos = 0; // intento fallidos de retiros

//* 2) Función para consultar saldo 
function getSaldo(){
    console.log(`Tu saldo actual es de: ${saldo}`);
    alert(`Tu saldo actual es de: ${saldo}`);
};

//* 3) Función para realizar retiro
function retirarSaldo(){
    // validamos los intentos fallidos
    if(intentosFallidos >= 3){
       alert(`Has excedido el número máximo de intentos fallidos. Tu cuenta ha sido bloqueada.`);
       return;
    }

    // más codigo;
    // solicitar monto a retirar
    let monto = parseFloat(prompt("Ingrese el monto a retirar:"));
    //Verificar si el monto es válido
    if(isNaN(monto) || monto <= 0){
        alert("Monto inválido. Por favor, ingrese un monto válido.");
        return;
    }

    // Verificar si el monto solicitado es menor o igual al saldo disponible
    if(monto <= saldo){
        // actualizamos el saldo
        saldo -= monto; // es lo mismo que tener  saldo = saldo - monto;
        // actualizo el historial de transacciones
        historial.push(`Retiro de $ ${monto}`); // se agrega la transacción al historial
        console.log(`Transacción exitosa. Has retirado $ ${monto}, tu nuevo saldo es de $ ${saldo}`);
        // si quiero mostrar ese mensaje al usuario uso un alert
        alert(`Transacción exitosa. Has retirado $ ${monto}, tu nuevo saldo es de $ ${saldo}`);
        // reiniciar intentos fallidos
        intentosFallidos = 0; // reinicio los intentos fallidos
    }else{
        // si el monto solicitado es mayor que el saldo disponible
        console.log("Operación no realizada. Saldo insuficiente.❌");
        alert("Operación no realizada. Saldo insuficiente.❌");
        // incrementar los intentos fallidos
        intentosFallidos++; // incremento los intentos fallidos
    }
};

//* 4) Función para depositar saldo
function depositarSaldo(){
    // solicitarl al usuario el monto a depositar
    let monto = parseFloat(prompt("¿Cuánto desea depositar?"));

    //Verificar si el monto es válido
    if(isNaN(monto) || monto <= 0){
        alert("Monto inválido. Por favor, ingrese un monto válido.");
        return;
    }

     // actualizamos el saldo
     saldo += monto; // es lo mismo que tener   saldo = saldo + monto;
     // actualizo el historial de transacciones
     historial.push(`Deposito de $ ${monto}`); // se agrega la transacción al historial
     console.log(`Deposito exitoso. Has depositado $ ${monto}, tu nuevo saldo es de $ ${saldo}`);
     // si quiero mostrar ese mensaje al usuario uso un alert
     alert(`Deposito exitoso. Has depositado $ ${monto}, tu nuevo saldo es de $ ${saldo}`);
}

// Creamos un Menu interactivo para el usuario y pueda usar el cajero
function menu() {
    let opcion;
    do {
        // Mostrar al usuario el menú de opciones
        // \n sirve para dar un enter o un salto de linea.
        opcion = prompt(" Bienvenido al cajero automático, Elige una opción: \n" +
            "1. Consultar saldo  \n" +
            "2. Realizar un retiro  \n" +
            "3. Realizar un depósito  \n" +
            "4. Salir \n"
        );
        switch(opcion){
            case "1":
                getSaldo(); //consultar saldo
                break;
                case "2":
                    retirarSaldo(); //retirar saldo
                    break;
                    case "3":
                        depositarSaldo(); //depositar saldo
                        break;
                        case "4":
                            console.log("Gracias por usar el cajero automático. ¡Hasta luego!"); //salir
                            alert("Gracias por usar el cajero automático. ¡Hasta luego!"); //salir
                            break;
                            default:
                                alert("Opción inválida. Por favor, elige una opción válida del menú"); //opción inválida
     }
    } while(opcion !== "5");
}

// Iniciar el cajero automático
menu(); //llamo a la función menu para iniciar el cajero automático