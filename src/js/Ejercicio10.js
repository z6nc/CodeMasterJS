/*
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter 
(un string de un caracter). 
La función debe retornar el número de veces que aparece el caracter en el string.
*/

//Primera forma
function numeroDeCaracteres(Palabra, letra) {
    let contador = 0;
    let letraConvertido = String(letra); // Convierte la letra a una cadena
    
    // Recorre cada carácter de la palabra
    for (let i = 0; i < Palabra.length; i++) {
        let letras = Palabra[i];
        // Compara el carácter actual con la letraConvertida
        if (letras === letraConvertido) {
            contador++;
        }
    }
    return contador;
}

// Código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", 'e')); // 4
