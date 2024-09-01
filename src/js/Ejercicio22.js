/*
Escribir una función llamada posiciones que reciba un arreglo de números y retorne un nuevo arreglo 
con las posiciones donde se encuentran números pares.

*/

//Primera forma  no recomendada pero funcional
function  posiciones(array){
    let ArrayPares=[];
    for(let i = 0 ; i<array.length ; i++ ){
        if (array[i] % 2 === 0){
            ArrayPares.push(array.indexOf(array[i]))
            
        } 
    }
    return ArrayPares;
}

//Segunda forma   Recomendada
function posiciones(array) {
    return array.reduce((acc, el, i) => {
        if (el % 2 === 0) {
            acc.push(i);
        }
        return acc;
    }, []);
}

//tercera forma  facil de entender
function posiciones(array) {
    let ArrayPares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            ArrayPares.push(i);
        }
    }
    return ArrayPares;
}




console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []