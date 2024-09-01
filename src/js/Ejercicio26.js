/*
Escribir una función llamada imprimirMatriz que reciba una matriz 
(un arreglo de arreglos) e imprima todos los elementos del arreglo.

*/

//Primera forma
function imprimirMatriz(Matrix) {
    let matrices = "";
    for (let i = 0; i < Matrix.length; i++) {
        for (let j = 0; j < Matrix[i].length; j++) {
            matrices += Matrix[i][j] + "\n"; // Concatenar el valor seguido de un salto de línea
        }
    }
    return matrices;
}


// código de prueba
console.log(imprimirMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9