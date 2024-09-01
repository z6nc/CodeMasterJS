/*
Calcular impuestos

Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos:
edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales 
o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

*/

//Primera forma
function calcularImpuestos(edad, ingreso) {
    const TASA_IMPUESTO = 0.40; // Constante para la tasa de impuestos
    // Verificar si la persona es mayor de edad y tiene ingresos suficientes
    if (edad >= 18 && ingreso >= 1000) {
        return ingreso * TASA_IMPUESTO;
    } else {
        return 0;
    }
}


//Segunda forma
function calcularImpuestos(edad, ingresos) {
    return edad >= 18 && ingresos >= 1000 ? ingresos * 0.4 : 0;
}


//Tercera forma
function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
    } else {
        return 0;
    }
}

// Casos de prueba
console.log(calcularImpuestos(18, 1000)); // 400
console.log(calcularImpuestos(40, 10000)); // 4000
console.log(calcularImpuestos(17, 5000)); // 0
console.log(calcularImpuestos(30, 500)); // 0


