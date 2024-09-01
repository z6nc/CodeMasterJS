/*
Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo:

Nota: Intentarlo hacer sin el método Math.max de JavaScript.

*/

//Primera forma
function max(array){
    let NumeroMayor = 0;
    for(let i=0 ; i<array.length ; i++){
        if(NumeroMayor  < array[i]){
             NumeroMayor = array[i]
        }
       
    }
     return  NumeroMayor
    
}

//Segunda forma
function max(array) {
    return Math.max(...array); // Usa el operador de propagación para pasar los elementos del array como argumentos
}

console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9