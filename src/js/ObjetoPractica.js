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
                forma: "1) Primera Solucion",
                explicacion: "En esta solución se utiliza un array contraseñasValidas y el método includes() para verificar si la contraseña es válida. Es más escalable y fácil de modificar, ya que se puede agregar o quitar contraseñas sin cambiar la lógica.",
                metodo: "Funcion includes",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
                codigo: `
                function validarContraseña(contraseña) {
                    const contraseñasValidas = ["2Fj(jjbFsuj", "eoZiugBf&g9"];
                    return contraseñasValidas.includes(contraseña);
                }
                `
            },
            {
                forma: "2) Segunda Solucion",
                explicacion: "En esta solución utiliza una única línea con una expresión booleana para verificar si la contraseña es válida. Es más concisa y directa, retornando true o false sin estructuras adicionales.",
                metodo: "Expresión Booleana",
                link: "https://www.aulascript.com/lenguaje/objetos/booleanos.htm",
                codigo: `
                function validarContraseña(contraseña) {
                    return contraseña === "2Fj(jjbFsuj" || contraseña === "eoZiugBf&g9";
                }
                `
            },
            {
                forma: "3) Tercera Solucion",
                explicacion: "En esta solución utiliza una estructura if-else con operador lógico  para hacer la misma verificación. Aunque es más explícita en la lógica, es más larga y menos eficiente.",
                metodo: "Operador lógico ",
                link: "https://lenguajejs.com/javascript/operadores/logicos/",
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
                forma: "1) Primera Solucion",
                explicacion : "En esta solución declara una constante TASA_IMPUESTO para la tasa de impuestos y utiliza una estructura if para verificar las condiciones de edad e ingresos. Es clara, pero un poco más extensa.",
                metodo:"Variables",
                link:"https://ed.team/blog/variables-constantes-y-scope-de-bloque-en-javascript",
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
                forma: "2) Segunda Solucion",
                explicacion: "En esta solución usa un operador ternario para realizar la misma verificación en una sola línea. Es más compacta y fácil de leer, retornando directamente el resultado.",
                metodo: "Operador Ternario",
                link:"https://lenguajejs.com/fundamentos/estructuras-de-control/operador-ternario/",
                codigo: `
                function calcularImpuestos(edad, ingresos) {
                    return edad >= 18 && ingresos >= 1000 ? ingresos * 0.4 : 0;
                }
                `
            },
            {
                forma: "3) Tercera Solucion",
                explicacion: "En esta solución es similar a la primera, utiliza una estructura if-else para comprobar las condiciones de edad e ingresos. Es más explícita pero un poco más larga y no usa constantes.",
                metodo:"Condicioanles If-Else",
                link:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else",
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
        function calcularImpuestos(edad, ingresos)

        // Casos de prueba
        console.log(calcularImpuestos(18, 1000)); // 400
        console.log(calcularImpuestos(40, 10000)); // 4000
        console.log(calcularImpuestos(17, 5000)); // 0
        console.log(calcularImpuestos(30, 500)); // 0
        `
    },

    ]