/*
IMC (ïndice de masa corporal)
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que 
determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura,
y retorne un string con las siguientes posibilidades:


"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30

*/


//Recordatorio:Cada función debe tener una sola responsabilidad

//Buena práctica: Utilizar nombres de variables descriptivos 
//Buena práctica: Utilizar comentarios para explicar el código

//Primera forma
function calcularBMI(peso, altura) { //Función para calcular el BMI
    const bmiResultado = peso / (altura * altura);
    return bmiResultado;
}

function obtenerMensajeBMI(bmiResultado) { // Función para obtener el mensaje del BMI
    let mensajeResultado = "";
    if (bmiResultado < 18.5) {
        mensajeResultado = "Bajo de peso";
    } else if (bmiResultado >= 18.5 && bmiResultado <= 24.9) {
        mensajeResultado = "Normal";
    } else if (bmiResultado >= 25 && bmiResultado <= 29.9) {
        mensajeResultado = "Sobrepeso";
    } else if (bmiResultado >= 30) {
        mensajeResultado = "Obesidad";
    } else {
        mensajeResultado = "Valor no válido";
    }
    return mensajeResultado;
}

function bmi(peso, altura) { // Función principal que llama a las funciones anteriores
    const bmiResultado = calcularBMI(peso, altura);
    return obtenerMensajeBMI(bmiResultado);
}

// código de prueba
console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); // "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obesidad"
