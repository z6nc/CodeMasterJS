/*
Escribir una función llamada terminanConS que reciba un arreglo de strings y 
retorne un nuevo arreglo con todas 
las palabras que terminan con "s" (mayúscula o minúscula).

*/

//Primera forma
function terminanConS(array){
    let  ArrayEnS = [];
    for(let i= 0; i<array.length ; i++){
        if(array[i][array[i].length - 1] === "s" || array[i][array[i].length - 1] === "S"){
            ArrayEnS.push(array[i])
           
        }
    } 
     return ArrayEnS
}
//segunda forma
function terminanConS(array){
    return array.filter(palabra => /[sS]$/.test(palabra));
}

// código de prueba
console.log(terminanConS(["pruebaS", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []