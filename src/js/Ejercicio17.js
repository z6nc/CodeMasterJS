/*

Escribir una función llamada capitalizar que reciba un 
string y capitalice la primera letra de cada palabra:

*/

//Primera forma
function capitalizar(frase) {
    if (frase.length === 0) {
        return frase;
    }

    // Dividir la frase en palabras
    let palabras = frase.split(' ');

    // Capitalizar la primera letra de cada palabra
    for (let i = 0; i < palabras.length; i++) {
     palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
        
    }

    // Unir las palabras capitalizadas en una sola cadena
    return palabras.join(' ');
}


// Código de prueba
console.log(capitalizar("hola mundo")); // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"
console.log(capitalizar("")); // ""
