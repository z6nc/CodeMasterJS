export const ObjetoPractica = [
    {
        id: 1,
        nombre: "Contraseña Válida",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 01",
        NombreFuncion: "contraseñaValida",
        descripcion: "Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a '2Fj(jjbFsuj' o 'eoZiugBf&g9'. De lo contrario debe retornar false",
        restricciones: [
            "La función se debe llamar contrasenaValida.",
            "La función debe recibir un string como argumento.",
            "Retorna true si el string es igual a '2Fj(jjbFsuj' o 'eoZiugBf&g9'."
        ],
        soluciones: [
            {
                forma: "Primera Forma",
                codigo: `
                function validarContraseña(contraseña) {
                    const contraseñasValidas = ["2Fj(jjbFsuj", "eoZiugBf&g9"];
                    return contraseñasValidas.includes(contraseña);
                }
                `
            },
            {
                forma: "Segunda Forma",
                codigo: `
                function validarContraseña(contraseña) {
                    return contraseña === "2Fj(jjbFsuj" || contraseña === "eoZiugBf&g9";
                }
                `
            },
            {
                forma: "Tercera Forma",
                codigo: `
                function validarContraseña(contraseña){
                    const contraseñaValida = "2Fj(jjbFsuj";
                    const contraseñaValida2 = "eoZiugBf&g9";
                    if(contraseña === contraseñaValida || contraseña === contraseñaValida2){
                        return true;
                    } else {
                        return false;
                    }
                }
                `
            }
        ],
        CasosPrueba: `
        function contrasenaValida(string)
    
        // Datos de prueba
        console.log(validarContraseña("2Fj(jjbFsuj")) // true
        console.log(validarContraseña("eoZiugBf&g9")) // true
        console.log(validarContraseña("hola")) // false
        console.log(validarContraseña("")) // false
        `
    },
    
    {
        id: 2,
        nombre: "Calcular impuestos",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 02",
        NombreFuncion: "calcularImpuestos",
        descripcion: "Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.",
        restricciones: [
            "La función se debe llamar calcularImpuestos.",
            "La función debe recibir dos argumentos numéricos.",
            "Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%.",
            "De lo contrario retornar 0."
        ],
        soluciones: [
            {
                forma: "Primera Forma",
                codigo: `
                function calcularImpuestos(edad, ingreso) {
                    const TASA_IMPUESTO = 0.40; // Constante para la tasa de impuestos
                    // Verificar si la persona es mayor de edad y tiene ingresos suficientes
                    if (edad >= 18 && ingreso >= 1000) {
                        return ingreso * TASA_IMPUESTO;
                    } else {
                        return 0;
                    }
                }
                `
            },
            {
                forma: "Segunda Forma",
                codigo: `
                function calcularImpuestos(edad, ingresos) {
                    return edad >= 18 && ingresos >= 1000 ? ingresos * 0.4 : 0;
                }
                `
            },
            {
                forma: "Tercera Forma",
                codigo: `
                function calcularImpuestos(edad, ingresos) {
                    if (edad >= 18 && ingresos >= 1000) {
                        return ingresos * 0.4;
                    } else {
                        return 0;
                    }
                }
                `
            }
        ],
        CasosPrueba: `
        // Casos de prueba
        console.log(calcularImpuestos(18, 1000)); // 400
        console.log(calcularImpuestos(40, 10000)); // 4000
        console.log(calcularImpuestos(17, 5000)); // 0
        console.log(calcularImpuestos(30, 500)); // 0
        `
    },

    ]