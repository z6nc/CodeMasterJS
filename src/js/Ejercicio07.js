/*
Escribir una función llamada contarRango que reciba dos números y retorne cuántos 
números que hay entre ellos (excluyéndolos):

Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer 
número va a ser menor que el segundo.

*/

//Primera forma
function contarRango(num1, num2) {
    let contador = 0;
    for (let i = num1 + 1; i < num2; i++) {
        contador++;
    }
    return contador;
}

//Segunda forma
function contarRango(a , b){
    let Rango= 0 ;
    if(a>b){
        Rango = (a-b) -1 ;
    } else {
        Rango = (b-a) -1;
    }
    return Rango
  }

  // escribe tu respuesta acá

// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0