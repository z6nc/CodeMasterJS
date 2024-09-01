/*
Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U

*/

//Primera forma
function transcribir(array){
    let  ARN = "";

    for(let i = 0 ;  i < array.length; i++){
      if(array[i] === "G"){
           ARN += "C";
      } else if (array[i] === "C"){
           ARN += "G";
      } else if(array[i] === "T"){
           ARN += "A";
      } else if(array[i] === "A"){
           ARN += "U";
      } else {
           ARN +=array[i] ;
      }
    }
    return ARN;
    
}

//Segunda forma
function transcribir(ADN) {
    const map = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };

    let arn = ""; // variable  donde  se guarda el recorrido

    for (let i = 0; i < ADN.length; i++) {
        arn += map[ADN[i]] || ADN[i]; // Usa el mapeo o conserva el carácter original si no está mapeado
    }

    return arn;
}



// Código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"