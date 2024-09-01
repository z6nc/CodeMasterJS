/*
Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, 
la posición inicial y la posición final. 
La función debe retornar la suma de todos los números dentro del rango (la posición inicial y 
la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual 
a la posición final, y que están dentro de los límites del arreglo.

*/

//Primera forma
function sumarArreglo(array ,posIni ,posFin){
    let suma = 0 ;
    if(posIni !== 0 && posFin !== 0 ){
         for(let i = posIni ; i < array.length && i <= posFin ; i++){
         suma += array[i]
         }
         return suma
   } else{
       return 0;
   }

}
// segunda forma
function sumarArreglo(array ,posIni ,posFin){
    let suma = 0 ;
    if(posIni == 0 && posFin == 0 ){
        return 0;
    }
    
    for(let i = posIni ; i < array.length && i <= posFin ; i++){
    suma += array[i]
  }
 return suma
}

// Código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0