/*
Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final
.La función debe retornar la suma de los números en ese rango (incluyéndolos).

Nota:
puedes asumir que el número inicial va a ser menor o igual que el número final.

*/

//Primera forma
function sumarRango(num1, num2) {
    if (num1 === num2) {
        return 0; // Si ambos números son iguales, retornamos 0
    }
    
    let suma = 0;
    for (let i = num1; i <= num2; i++) {
        suma += i;
    }
    return suma;
}

// Código de prueba
console.log(sumarRango(0, 10)); // 55
console.log(sumarRango(12, 14)); // 39
console.log(sumarRango(5 ,5)); // 0
console.log(sumarRango(1, 1)); // 0