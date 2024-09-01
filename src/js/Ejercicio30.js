/*

Escribir una función llamada numAsteriscos que reciba una matriz 
(un arreglo de arreglos) y retorne el número de asteriscos:

*/

//primer forma de hacerlo  recomendada
function numAsteriscos(array) {
    let countAste = 0;
    for (let i = 0; i < array.length ; i++) {
     for(let j = 0 ; j< array[i].length ; j++){
            if (array[i][j] === '*') {
            countAste++;
          } 
     }
 }
   return countAste;
   
}
// código de prueba
console.log(numAsteriscos([
  ['*', '', '*'],
  ['', '*', ''],
  ['*', '', '*']
]))
// 5