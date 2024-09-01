/*
Escribir una función llamada duplicar que reciba un arreglo de números y 
retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).

*/

//Primera forma
function duplicar(array){
    let ArrayDuplicado = [];
    for(let i= 0; i<array.length; i++){
        ArrayDuplicado.push(array[i] * 2)
    }
    return ArrayDuplicado
}
// código de prueba
console.log(duplicar([1, 2, 3])) // [2, 4, 6]
console.log(duplicar([])) // []