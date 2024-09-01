/*
Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo 
a lo siguiente:

"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.

*/

// Recordatorio :Una función debe hacer una sola cosa y hacerla bien
//Primer forma de hacerlo

function esMultiploDeTres(n) {
    return n % 3 === 0;
}

function esMultiploDeCinco(n) {
    return n % 5 === 0;
}

function fizzBuzz(n) {
    let Respuesta = "";
    if (esMultiploDeTres(n) && esMultiploDeCinco(n)) { // si 
        Respuesta = "fizzbuzz";
    } else if (esMultiploDeTres(n)) { // sino 
        Respuesta = "fizz";
    } else if (esMultiploDeCinco(n)) { // sino 
        Respuesta = "buzz";
    } else {
        Respuesta = n.toString();
    }
    return Respuesta;
}

console.log(fizzBuzz(6));  // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8));  // "8"
