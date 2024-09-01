/*
Escribe una función llamada likes que reciba un número y retorne un string utilizando 
el formato de K para miles y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.

*/

// Recordatorio :Una función debe hacer una sola cosa y hacerla bien

function ConvertirString(numero) {
    // Convierte el número a una cadena
    return numero.toString();
}

function likesConvertidor(like) {
    let ResultadoLikes = "";
    let length = like.length;

    if (length <= 3) {
        ResultadoLikes = like;
    } else if (length === 4) {
        ResultadoLikes = like[0] + "K";
    } else if (length === 5) {
        ResultadoLikes = like[0] + like[1] + "K";
    } else if (length === 6) {
        ResultadoLikes = like[0] + like[1] + like[2] + "K";
    } else if (length >= 7) {
        ResultadoLikes = like[0] + like[1] + "M";
    }

    return ResultadoLikes;
}

function likes(NumberLike) {
    let likeString = ConvertirString(NumberLike);
    return likesConvertidor(likeString);
}

// código de prueba
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"
