/*
Escribir una función llamada removerCeros 
que reciba un arreglo de números y retorne un nuevo arreglo 
excluyendo los ceros (0).

*/

//Primera forma
function removerCeros(array){
    let NuevoArray=[]; // guardar los numeros 
    for (let i=0; i<array.length;i++){
        if(array[i]>0){ // si es mayor o diferente  a cero 
            NuevoArray.push(array[i]) // push sirve para agregar a la nueva array
        }
    }
    return NuevoArray;
}

console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
