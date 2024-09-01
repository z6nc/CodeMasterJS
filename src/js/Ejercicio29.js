/*
Escribir una función llamada numAsteriscos que reciba un arreglo y retorne el número de asteriscos:
*/

//primer forma de hacerlo  recomendada
function numAsteriscos(array) {
    let countAste = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === '*') {
            countAste++;
        }
    }
    return countAste;
}

//segunda forma de hacerlo recomendada
function numAsteriscos(array) {
    return array.filter((element) => element === '*').length;
}

// tercer forma de hacerlo no recomendada
function numAConvertido(array){
    let arrayAstedisco=[];
     for(let i=0; i<array.length ; i++){
           if( array[i] === '*'){
              arrayAstedisco.push(array[i]) 
           }
     }
     return arrayAstedisco
}

function numAsteriscos(array){
    let countAste = 0;
    let arrayConvertido = numAConvertido(array);
     for(let i=0; i<arrayConvertido.length ; i++){
         countAste = countAste + 1
     }
     return countAste
}


// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0