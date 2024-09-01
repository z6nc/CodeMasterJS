/*
Escribir una función llamada multiplicarArreglo que reciba un 
arreglo de números y retorne la multiplicación de todos los elementos.

*/

//Primera forma

function multiplicarArreglo(array){
    let multiplicador = 1; // se guarda la multiplicacion del array
    for (let i=0 ; i<array.length;i++){
        multiplicador*= array[i];
    }
    return multiplicador;
}


// Código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1