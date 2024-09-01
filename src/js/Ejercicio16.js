/*
Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra:

*/

//Primera forma

function capitalizar(palabra) {
    if (palabra.length === 0) {
        return palabra;
    }

    // Reemplaza solo la primera letra con su versión en mayúscula y concatena el resto
    let nuevaPalabra = palabra[0].toUpperCase() + palabra.slice(1);

    return nuevaPalabra;
}

console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""

