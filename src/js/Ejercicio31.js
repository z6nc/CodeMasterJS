/*
Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres diferentes (comparando posición por posición).

Nota: Puedes asumir que los strings siempre tienen la misma longitud. Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más largo que el otro
(la diferencia entre las longitudes agregaría al resultado).

*/


//primer forma de hacerlo  recomendada
function distancia(PalaA, PalaB) {
    let count = 0;
    let maxLength = Math.max(PalaA.length, PalaB.length);

    // Comparar caracteres hasta el máximo de las longitudes
    for (let i = 0; i < maxLength; i++) {
        // Obtener el carácter actual de cada string, si existe
        let charA = i < PalaA.length ? PalaA[i] : undefined;
        let charB = i < PalaB.length ? PalaB[i] : undefined;

        // Comparar los caracteres actuales
        if (charA !== charB) {
            count++;
        }
    }

    return count;
}

//segunda forma de hacerlo 
function distancia(PalaA , PalaB){
    let count = 0;
    for(let i = 0 ; i < PalaA.length && i<PalaB.length ; i++ ){
        if(PalaA[i] !== PalaB[i] ){
            count++
        }
    }
    return count;
    
}

// Código de prueba
console.log(distancia("hola", "hola")); // 0
console.log(distancia("sol", "tol")); // 1
console.log(distancia("carro", "correr")); // 3
console.log(distancia("hola", "holas")); // 1 (diferencia en longitud)
