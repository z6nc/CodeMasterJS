/*
Escribir una función llamada sumarArreglo que 
reciba un arreglo de números y retorne la suma de todos los elementos.

*/

//Primera forma

function sumarArreglo(array){
    let sumaArray=0;
    for (let i=0 ; i<array.length;i++){ // un bucle a través de cada elemento del array
        sumaArray+= array[i];
    }
    return sumaArray;
}


// Código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0