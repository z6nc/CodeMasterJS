/*

Escribir una función llamada pares que reciba un arreglo de números
y retorne un nuevo arreglo con los números pares únicamente.

*/

//Primera forma


function  pares(array){
    let ArrayPares=[];
    for(let i = 0 ; i<array.length ; i++ ){
        if (array[i] % 2 === 0){
            ArrayPares.push(array[i])
            
        } 
    }
    return ArrayPares;
}



console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []