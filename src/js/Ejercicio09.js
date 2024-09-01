/*
Escribir una función llamada numeroDeAes que reciba un string 
y retorne el número de veces que aparece la letra "a":

*/

//Primera forma
function numeroDeAes(palabra) {
    const Diccionario = ["a"];
    let contador = 0;
    
    if (palabra.length > 0) {
        for (let i = 0; i < palabra.length; i++) { // Cambio de <= a <
            let letra = palabra[i];
            if (Diccionario.includes(letra)) { // Comparar directamente con 'a'
                contador++;
            }
        }
        return contador; // Retornar al final del bucle
        
    } else {
        return 0; // Retorna 0 si la palabra está vacía
    }
}

console.log(numeroDeAes("aeiou"));       // 1
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol"));      // 0
console.log(numeroDeAes(""));            // 0
