> [!IMPORTANT]  
> En JavaScript, != (desigualdad) y !== (desigualdad estricta) comparan valores, 
> pero !== también verifica el tipo de los operandos, 
> mientras que != realiza una conversión de tipo antes de la comparación si los
>  operandos son de diferentes tipos. 
> 
> En detalle:
> != (Desigualdad):
> Compara si dos valores no son iguales. 
> Si los operandos son de diferentes tipos, intenta convertir los valores a
>  un tipo común antes de la comparación. 
> 
> Ejemplo: 1 != "1" devuelve false porque JavaScript convierte la cadena "1" a un número 
> antes de la comparación. 
> !== (Desigualdad Estricta):
> Compara si dos valores no son iguales y si no son del mismo tipo. 
> No realiza conversión de tipos. 
> Ejemplo: 1 !== "1" devuelve true porque aunque los valores son iguales, 
> los tipos (número y cadena) son diferentes. 