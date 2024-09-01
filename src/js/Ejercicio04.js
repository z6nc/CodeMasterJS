/*
Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima 
cada elemento en una línea a parte:
*/

//Primera Forma 

function imprimirArreglo(...elementos) { // los trata arrays 
    elementos.forEach(elemento => {
        console.log(elemento);
    });
}

// código de prueba
imprimirArreglo(1, "Hola", 2, "Mundo");
// 1
// Hola
// 2
// Mundo



