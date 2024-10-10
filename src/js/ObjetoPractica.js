/*
 identificadores de dificualtad de los ejercicios
 Facil : 🌱
 Intermedia : ⚡
 Dificil : 🔥

*/

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
    {
        id: 3,
        nombre: "Índice de Masa Corporal (IMC)",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 03",
        NombreFuncion: "bmi",
        descripcion: "Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades: 'Bajo de peso' si el BMI < 18.5, 'Normal' si está entre 18.5 y 24.9, 'Sobrepeso' si está entre 25 y 29.9, 'Obesidad' si es igual o mayor a 30.",
        restricciones: [
          "La función se debe llamar bmi.",
          "Debe recibir dos argumentos: peso y altura.",
          "Debe retornar 'Bajo de peso', 'Normal', 'Sobrepeso' o 'Obesidad' según el cálculo del BMI."
        ],
        soluciones: [
          {
            forma: "1) Primera Solución",
            explicacion: "Esta solución divide el cálculo del BMI y la evaluación del mensaje en dos funciones separadas: una para calcular el BMI y otra para retornar el mensaje correspondiente. Luego, la función principal bmi coordina ambas.",
            metodo: "Modularización de funciones",
            link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions",
            codigo: `
            // Función para calcular el BMI
            function calcularBMI(peso, altura) {
                const bmiResultado = peso / (altura * altura);
                return bmiResultado;
            }
    
            // Función para obtener el mensaje según el BMI
            function obtenerMensajeBMI(bmiResultado) {
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
    
            // Función principal
            function bmi(peso, altura) {
                const bmiResultado = calcularBMI(peso, altura);
                return obtenerMensajeBMI(bmiResultado);
            }
            `
          }
        ],
        CasosPrueba: `
        function bmi(peso, altura)

        // Datos de prueba
        console.log(bmi(65, 1.8)); // "Normal"
        console.log(bmi(72, 1.6)); // "Sobrepeso"
        console.log(bmi(52, 1.75)); // "Bajo de peso"
        console.log(bmi(135, 1.7)); // "Obesidad"
        `
      },
      {
        id: 4,
        nombre: "Imprimir Arreglo",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 04",
        NombreFuncion: "imprimirArreglo",
        descripcion: "Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea aparte.",
        restricciones: [
            "La función se debe llamar imprimirArreglo.",
            "La función debe recibir un arreglo de elementos como argumento."
        ],
        soluciones: [
            {
                forma: "1) Primera Solucion",
                explicacion: "Esta solución utiliza el método forEach para recorrer el array recibido y utilizar console.log para imprimir cada elemento por separado.",
                metodo: "Método forEach",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
                codigo: `
                function imprimirArreglo(...elementos) { 
                    elementos.forEach(elemento => {
                        console.log(elemento);
                    });
                }
                `
            }
        ],
        CasosPrueba: `
         function imprimirArreglo(arreglo)

        // código de prueba
        imprimirArreglo(1, "Hola", 2, "Mundo");
        // 1
        // Hola
        // 2
        // Mundo
        `
    },
    {
        id: 5,
        nombre: "Likes Convertidos",
        dificultad: "Intermedio",
        NumeroEjercicio: "Ejercicio 05",
        NombreFuncion: "likes",
        descripcion: "Escribir una función llamada likes que reciba un número y retorne un string en formato 'K' para miles y 'M' para millones.",
        restricciones: [
            "La función se debe llamar likes.",
            "La función debe recibir un número como argumento.",
            "Retornar el número en formato 'K' para miles y 'M' para millones si aplica.",
            "Si el número es menor a 1000, retornar el número tal como está pero convertido en string."
        ],
        soluciones: [
            {
                forma: "1) Primera Solucion",
                explicacion: "Esta solución convierte el número a string y luego utiliza la longitud del string para determinar si debe devolver el número como está o aplicarle el formato K o M según corresponda.",
                metodo: "Manipulación de strings",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String",
                codigo: `
                // Función para convertir el número a string
                function ConvertirString(numero) {
                    return numero.toString();
                }
    
                // Función para convertir el número en formato K o M
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
    
                // Función principal
                function likes(NumberLike) {
                    let likeString = ConvertirString(NumberLike);
                    return likesConvertidor(likeString);
                }
                `
            }
        ],
        CasosPrueba: `
        function likes(NumberLike)

        // código de prueba
        console.log(likes(983)); // "983"
        console.log(likes(1900)); // "1K"
        console.log(likes(54000)); // "54K"
        console.log(likes(120800)); // "120K"
        console.log(likes(25222444)); // "25M"
        `
    },
    {
        id: 6,
        nombre: "FizzBuzz",
        dificultad: "Intermedia",
        NumeroEjercicio: "Ejercicio 06",
        NombreFuncion: "fizzBuzz",
        descripcion: "Escribir una función llamada fizzBuzz que reciba un número y retorne un string basado en si es múltiplo de 3, 5, o ambos.",
        restricciones: [
            "La función se debe llamar fizzBuzz.",
            "La función debe recibir un número como argumento.",
            "Retornar 'fizz' si el número es múltiplo de 3.",
            "Retornar 'buzz' si el número es múltiplo de 5.",
            "Retornar 'fizzbuzz' si el número es múltiplo tanto de 3 como de 5.",
            "Si no cumple ninguna de las condiciones, retornar el número como string."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Esta solución separa la lógica de verificación en dos funciones auxiliares (`esMultiploDeTres` y `esMultiploDeCinco`) para hacer el código más modular. Luego, la función principal `fizzBuzz` utiliza estas funciones para decidir el resultado final, retornando 'fizz', 'buzz', 'fizzbuzz', o el número como string según corresponda.",
                metodo: "Módulo (Operador de Resto)",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Modulo",
                codigo: `
                function esMultiploDeTres(n) {
                    return n % 3 === 0;
                }
    
                function esMultiploDeCinco(n) {
                    return n % 5 === 0;
                }
    
                function fizzBuzz(n) {
                    let Respuesta = "";
                    if (esMultiploDeTres(n) && esMultiploDeCinco(n)) { 
                        Respuesta = "fizzbuzz";
                    } else if (esMultiploDeTres(n)) { 
                        Respuesta = "fizz";
                    } else if (esMultiploDeCinco(n)) { 
                        Respuesta = "buzz";
                    } else {
                        Respuesta = n.toString();
                    }
                    return Respuesta;
                }
                `
            }
        ],
        CasosPrueba: `
        function fizzBuzz(numero)

        // código de prueba
        console.log(fizzBuzz(6));  // "fizz"
        console.log(fizzBuzz(20)); // "buzz"
        console.log(fizzBuzz(30)); // "fizzbuzz"
        console.log(fizzBuzz(8));  // "8"
        `
    },
    {
        id: 7,
        nombre: "Contar Rango",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 07",
        NombreFuncion: "contarRango",
        descripcion: "Escribir una función llamada contarRango que reciba dos números y retorne cuántos números hay entre ellos, excluyendo los extremos.",
        restricciones: [
            "La función se debe llamar contarRango.",
            "La función debe recibir dos números como argumento.",
            "Retorna la cantidad de números que hay entre ambos números, excluyéndolos."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Esta solución usa un ciclo `for` para contar cuántos números hay entre los dos valores, excluyéndolos. El ciclo empieza en el número inmediatamente mayor a `num1` y termina antes de llegar a `num2`.",
                metodo: "Ciclo for",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                codigo: `
                function contarRango(num1, num2) {
                    let contador = 0;
                    for (let i = num1 + 1; i < num2; i++) {
                        contador++;
                    }
                    return contador;
                }
                `
            },
            {
                forma: "2) Segunda Solución",
                explicacion: "En esta solución se implementa una fórmula simple que resta los dos números y ajusta la diferencia para excluir los extremos. El valor absoluto de la diferencia asegura que la función maneje correctamente el orden de los números, aunque en el ejercicio se asume que `a` será menor que `b`.",
                metodo: "Fórmula matemática",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math",
                codigo: `
                function contarRango(a , b){
                    let Rango = 0;
                    if(a > b){
                        Rango = (a - b) - 1;
                    } else {
                        Rango = (b - a) - 1;
                    }
                    return Rango;
                }
                `
            }
        ],
        CasosPrueba: `
        // código de prueba
        console.log(contarRango(1, 9)); // 7
        console.log(contarRango(1332, 8743)); // 7410
        console.log(contarRango(5, 6)); // 0
        `
    },
    {
        id: 8,
        nombre: "Sumar Rango",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 08",
        NombreFuncion: "sumarRango",
        descripcion: "Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango, incluyendo los extremos.",
        restricciones: [
            "La función se debe llamar sumarRango.",
            "La función debe recibir dos números como argumento.",
            "La suma debe incluir tanto el número inicial como el número final."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Esta solución utiliza un ciclo `for` para recorrer desde el número inicial hasta el número final, sumando cada valor. Es una solución sencilla y efectiva que garantiza que todos los números entre el rango, incluidos los extremos, sean sumados.",
                metodo: "Ciclo for",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                codigo: `
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
                `
            }
        ],
        CasosPrueba: `
        function sumarRango(num1, num2)
        
        // código de prueba
        console.log(sumarRango(0, 10)); // 55
        console.log(sumarRango(12, 14)); // 39
        console.log(sumarRango(5, 5)); // 0
        console.log(sumarRango(1, 1)); // 0
        `
    },

    {
        id: 9,
        nombre: "Número de Aes",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 09",
        NombreFuncion: "numeroDeAes",
        descripcion: "Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra 'a'.",
        restricciones: [
            "La función se debe llamar numeroDeAes.",
            "La función debe recibir un string como argumento.",
            "Debe retornar el número de veces que aparece la letra 'a' en la cadena."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Esta solución utiliza un ciclo `for` para recorrer el string y cuenta cuántas veces aparece la letra 'a'. El uso de un diccionario (array) es una forma flexible de manejar letras específicas, aunque en este caso solo contiene la letra 'a'.",
                metodo: "Método includes()",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
                codigo: `
                function numeroDeAes(palabra) {
                    const Diccionario = ["a"];
                    let contador = 0;
    
                    if (palabra.length > 0) {
                        for (let i = 0; i < palabra.length; i++) {
                            let letra = palabra[i];
                            if (Diccionario.includes(letra)) {
                                contador++;
                            }
                        }
                        return contador;
                    } else {
                        return 0; // Retorna 0 si la palabra está vacía
                    }
                }
                `
            }
        ],
        CasosPrueba: `
        function numeroDeAes(palabra)

        // código de prueba
        console.log(numeroDeAes("aeiou"));       // 1
        console.log(numeroDeAes("abracadabra")); // 5
        console.log(numeroDeAes("etinol"));      // 0
        console.log(numeroDeAes(""));            // 0
        `
    },
    {
        id: 10,
        nombre: "Número de Caracteres",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 10",
        NombreFuncion: "numeroDeCaracteres",
        descripcion: "Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.",
        restricciones: [
            "La función se debe llamar numeroDeCaracteres.",
            "La función debe recibir dos argumentos: un string y un caracter.",
            "Debe retornar el número de veces que el caracter aparece en el string."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Esta solución utiliza un ciclo `for` para recorrer el string y comparar cada carácter con el que se busca. Si hay coincidencia, aumenta el contador.",
                metodo: "Ciclo for y comparación directa",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                codigo: `
                function numeroDeCaracteres(Palabra, letra) {
                    let contador = 0;
                    let letraConvertido = String(letra); // Convierte la letra a una cadena
                    
                    // Recorre cada carácter de la palabra
                    for (let i = 0; i < Palabra.length; i++) {
                        let letras = Palabra[i];
                        // Compara el carácter actual con la letraConvertida
                        if (letras === letraConvertido) {
                            contador++;
                        }
                    }
                    return contador;
                }
                `
            }
        ],
        CasosPrueba: `
        // código de prueba
        console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
        console.log(numeroDeCaracteres("MMMMM", "m")); // 0
        console.log(numeroDeCaracteres("eeee", 'e')); // 4
        `
    },
    {
        id: 11,
        nombre: "Suma de Arreglo",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 11",
        NombreFuncion: "sumarArreglo",
        descripcion: "Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos.",
        restricciones: [
            "La función se debe llamar sumarArreglo.",
            "La función debe recibir un arreglo de números como argumento.",
            "Debe retornar la suma de todos los números en el arreglo."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Esta solución utiliza un bucle for para iterar sobre cada elemento del arreglo, sumando su valor a una variable acumuladora.",
                metodo: "Ciclo for",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                codigo: `
                    function sumarArreglo(array) {
                        let sumaArray = 0;
                        for (let i = 0; i < array.length; i++) {
                            sumaArray += array[i];
                        }
                        return sumaArray;
                    }
                `
            }
        ],
        CasosPrueba: `
            // Código de prueba
            console.log(sumarArreglo([3, 1, 2])) // 6
            console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
            console.log(sumarArreglo([])) // 0
        `
    },

    {
        id: 12,
        nombre: "Multiplicación de Arreglo",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 12",
        NombreFuncion: "multiplicarArreglo",
        descripcion: "Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.",
        restricciones: [
            "La función se debe llamar multiplicarArreglo.",
            "La función debe recibir un arreglo de números como argumento.",
            "Debe retornar la multiplicación de todos los números en el arreglo."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Esta solución usa un bucle for para iterar sobre cada elemento del arreglo, multiplicando su valor por una variable acumuladora inicializada en 1.",
                metodo: "Ciclo for",
                link: "https://lenguajejs.com/fundamentos/bucles-e-iteraciones/bucles-for/",
                codigo: `
                    function multiplicarArreglo(array) {
                        let multiplicador = 1;
                        for (let i = 0; i < array.length; i++) {
                            multiplicador *= array[i];
                        }
                        return multiplicador;
                    }
                `
            }
        ],
        CasosPrueba: `
           function multiplicarArreglo(array)
           
            // Código de prueba
            console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
            console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
            console.log(multiplicarArreglo([])) // 1
        `
    },
    {
        id: 13,
        nombre: "Remover Ceros",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 13",
        NombreFuncion: "removerCeros",
        descripcion: "Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).",
        restricciones: [
            "La función se debe llamar removerCeros.",
            "La función debe recibir un arreglo de números como argumento.",
            "Debe retornar un nuevo arreglo sin los ceros."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "La función usa el método 'filter()' para crear un nuevo arreglo excluyendo los ceros. 'filter()' retorna un nuevo arreglo con los elementos que cumplen con la condición dada.",
                metodo: "Método filter()",
                link: "https://ed.team/blog/javascript-filtrar-elementos-de-un-array-con-filter",
                codigo: `
                    function removerCeros(array) {
                        return array.filter(numero => numero !== 0);
                    }
                `
            },
            {
                forma: "2) Segunda Solución",
                explicacion: "La función utiliza un ciclo for para iterar sobre cada número en el arreglo y empuja los números diferentes de cero a un nuevo arreglo.",
                metodo: "Ciclo for",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                codigo: `
                    function removerCeros(array) {
                        let NuevoArray = [];
                        for (let i = 0; i < array.length; i++) {
                            if (array[i] > 0) {
                                NuevoArray.push(array[i]);
                            }
                        }
                        return NuevoArray;
                    }
                `
            }
        ],
        CasosPrueba: `
           function removerCeros(array)

            // Código de prueba
            console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
            console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
            console.log(removerCeros([0, 0, 0])) // []
        `
    },
    {
        id: 14,
        nombre: "Sumar Arreglo con Rango",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 14",
        NombreFuncion: "sumarArreglo",
        descripcion: "Escribir una función llamada sumarArreglo que reciba un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números dentro del rango (incluyendo las posiciones inicial y final).",
        restricciones: [
            "La función se debe llamar sumarArreglo.",
            "Debe recibir tres argumentos: un arreglo de números, una posición inicial y una posición final.",
            "Debe sumar solo los números dentro del rango (posiciones incluidas)."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Esta implementación usa un ciclo `for` para iterar desde la posición inicial hasta la posición final, sumando los valores en esas posiciones. Se verifica que las posiciones estén dentro del arreglo.",
                metodo: "Método for loop",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                codigo: `
                    function sumarArreglo(array, posIni, posFin) {
                        let suma = 0;
                        for (let i = posIni; i <= posFin; i++) {
                            suma += array[i];
                        }
                        return suma;
                    }
                `
            },
            {
                forma: "2) Segunda Solución",
                explicacion: "Esta implementación usa `slice()` para extraer una porción del arreglo entre las posiciones inicial y final, y luego `reduce()` para sumar los elementos de esa porción.",
                metodo: "Método slice() + reduce()",
                link: "https://filisantillan.com/bits/slice/",
                codigo: `
                    function sumarArreglo(array, posIni, posFin) {
                        return array.slice(posIni, posFin + 1).reduce((a, b) => a + b, 0);
                    }
                `
            }
        ],
        CasosPrueba: `
            function sumarArreglo(array, posIni, posFin)

            // Código de prueba
            console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
            console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
            console.log(sumarArreglo([7, 8, 9], 0, 0)) // 7
        `
    },
    
    {
        id: 15,
        nombre: "Transcribir ADN a ARN",
        dificultad: "Intermedio",
        NumeroEjercicio: "Ejercicio 15",
        NombreFuncion: "transcribir",
        descripcion: "Escribir una función llamada transcribir que reciba un string representando una cadena de ADN y retorne otro string con su complemento ARN.",
        restricciones: [
            "La función debe recibir un string de ADN.",
            "Debe retornar un string que es el complemento ARN del ADN ingresado.",
            "Los complementos de las bases nitrogenadas son: G -> C, C -> G, T -> A, A -> U."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Esta solución recorre la cadena de ADN carácter por carácter, verificando cada base nitrogenada e insertando su complemento correspondiente en el ARN.",
                metodo: "Método básico con condicionales (if-else)",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else",
                codigo: `
                    function transcribir(array) {
                        let ARN = "";
                        for (let i = 0; i < array.length; i++) {
                            if (array[i] === "G") {
                                ARN += "C";
                            } else if (array[i] === "C") {
                                ARN += "G";
                            } else if (array[i] === "T") {
                                ARN += "A";
                            } else if (array[i] === "A") {
                                ARN += "U";
                            } else {
                                ARN += array[i];
                            }
                        }
                        return ARN;
                    }
                `
            },
            {
                forma: "2) Segunda Solución",
                explicacion: "En esta solución, usamos un objeto de mapeo para asociar cada base nitrogenada con su complemento ARN, lo que hace que el código sea más conciso. El uso de un objeto nos permite reducir la cantidad de condicionales.",
                metodo: "Método con objeto de map()",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
                codigo: `
                    function transcribir(ADN) {
                        const map = {
                            'G': 'C',
                            'C': 'G',
                            'T': 'A',
                            'A': 'U'
                        };
                        let arn = "";
                        for (let i = 0; i < ADN.length; i++) {
                            arn += map[ADN[i]] || ADN[i];
                        }
                        return arn;
                    }
                `
            }
        ],
        CasosPrueba: `
           function transcribir(ADN)

            // Código de prueba
            console.log(transcribir("ACGT")) // "UGCA"
            console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"
        `
    },
    {
        id: 16,
        nombre: "Capitalizar primera letra de un string",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 16",
        NombreFuncion: "capitalizar",
        descripcion: "Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra del string. El resto de la palabra debe permanecer igual.",
        restricciones: [
            "La función debe recibir un string.",
            "Debe retornar el mismo string con la primera letra capitalizada."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Esta solución verifica si la palabra no está vacía, y luego capitaliza la primera letra con el método `toUpperCase`. Finalmente, concatena el resto de la palabra sin modificarla usando `slice(1)`.",
                metodo: "Método  toUpperCase()",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase",
                codigo: `
                    function capitalizar(palabra) {
                        if (palabra.length === 0) {
                            return palabra; // Si el string está vacío, se retorna igual
                        }
                        // Capitaliza la primera letra y concatena el resto
                        let nuevaPalabra = palabra[0].toUpperCase() + palabra.slice(1);
                        return nuevaPalabra;
                    }
                `
            }
        ],
        CasosPrueba: `
           function capitalizar(palabra)
           
            // Código de prueba
            console.log(capitalizar("pedro")); // "Pedro"
            console.log(capitalizar("hola mundo")); // "Hola mundo"
            console.log(capitalizar("")); // ""
        `
    },
    {
        id: 17,
        nombre: "Capitalizar la primera letra de cada palabra",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 17",
        NombreFuncion: "capitalizar",
        descripcion: "Escribir una función llamada capitalizar que reciba un string y capitalice la primera letra de cada palabra. El resto de las letras en cada palabra deben permanecer en minúsculas.",
        restricciones: [
            "La función debe recibir un string.",
            "Debe retornar el mismo string con la primera letra de cada palabra capitalizada."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "La función primero divide la frase en un arreglo de palabras usando `split(' ')`. Luego, en un bucle, convierte la primera letra de cada palabra en mayúscula y concatena el resto con `slice(1)`. Finalmente, une las palabras usando `join(' ')` para devolver el resultado.",
                metodo: "Metodo split() + join()",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split",
                codigo: `
                    function capitalizar(frase) {
                        if (frase.length === 0) {
                            return frase; // Si la cadena está vacía, se retorna igual
                        }
                    
                        // Dividir la frase en palabras
                        let palabras = frase.split(' ');
    
                        // Capitalizar la primera letra de cada palabra
                        for (let i = 0; i < palabras.length; i++) {
                            palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
                        }
    
                        // Unir las palabras en una sola cadena
                        return palabras.join(' ');
                    }
                `
            }
        ],
        CasosPrueba: `
            function capitalizar(frase)

            // Código de prueba
            console.log(capitalizar("hola mundo")); // "Hola Mundo"
            console.log(capitalizar("make it real")); // "Make It Real"
            console.log(capitalizar("")); // ""
        `
    },
    {
        id: 18,
        nombre: "Encontrar el número máximo en un arreglo",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 18",
        NombreFuncion: "max",
        descripcion: "Escribir una función llamada max que reciba un arreglo de números y retorne el número máximo. Debe hacerlo sin usar el método Math.max de JavaScript.",
        restricciones: [
            "No se permite el uso del método Math.max()"
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Recorremos el arreglo utilizando un bucle `for`. Comparamos cada número con el valor más alto encontrado hasta ese punto (inicializado en 0), y si el número actual es mayor, lo actualizamos.",
                metodo: "bucle for, comparaciones",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                codigo: `
                    function max(array) {
                        let NumeroMayor = 0;
                        for (let i = 0; i < array.length; i++) {
                            if (NumeroMayor < array[i]) {
                                NumeroMayor = array[i];
                            }
                        }
                        return NumeroMayor;
                    }
                `
            },
            {
                forma: "2) Segunda Solución (usando Math.max)",
                explicacion: "Usamos el operador de propagación (`...`) para expandir los elementos del array y pasarlos como argumentos a `Math.max`.",
                metodo: "Metodo Math.max()",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/max",
                codigo: `
                    function max(array) {
                        return Math.max(...array); // Usamos el operador spread para descomponer el arreglo
                    }
                `
            }
        ],
        CasosPrueba: `
            function max(array)

            // Código de prueba
            console.log(max([3, 9, 6])) // 9
            console.log(max([67, 35, 54, 26])) // 67
            console.log(max([5, 9, 2, 4, 5, 7])) // 9
        `
    },
    {
        id: 19,
        nombre: "Encontrar el número mínimo en un arreglo",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 19",
        NombreFuncion: "min",
        descripcion: "Escribir una función llamada min que reciba un arreglo de números y retorne el número mínimo sin usar el método Math.min de JavaScript.",
        restricciones: [
            "No se permite el uso del método Math.min()."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Inicializamos la variable `NumeroMenor` con el primer elemento del arreglo. Luego recorremos el arreglo con un bucle `for`, comparando cada número con `NumeroMenor`, y actualizamos si encontramos un número menor.",
                metodo: "bucle for, comparaciones",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                codigo: `
                    function min(array) {
                        let NumeroMenor = array[0]; // Inicializar con el primer elemento del array
                        for (let i = 0; i < array.length; i++) {
                            if (NumeroMenor > array[i]) {
                                NumeroMenor = array[i]; // Actualizar si encontramos un número menor
                            }
                        }
                        return NumeroMenor;
                    }
                `
            },
            {
                forma: "2) Segunda Solución",
                explicacion: "Utilizamos el método `Math.min` con el operador de propagación para encontrar el número mínimo del arreglo. Este método devuelve el valor mínimo entre los argumentos proporcionados.",
                metodo: "Metodo Math.min()",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/min",
                codigo: `
                    function min(array) {
                        return Math.min(...array); // Usamos el operador spread para descomponer el arreglo
                    }
                `
            }
        ],
        CasosPrueba: `
            function min(array)
            
            // Código de prueba
            console.log(min([3, 9, 6])) // 3
            console.log(min([67, 35, 54, 26])) // 26
            console.log(min([5, 9, 2, 4, 5, 7])) // 2
        `
    },
    {
        id: 20,
        nombre: "Transformar una cadena en una contraseña segura",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 20",
        NombreFuncion: "password",
        descripcion: "Escribir una función llamada password que reciba un string y retorne un nuevo string realizando cambios específicos en el formato.",
        restricciones: [
            "El string de entrada puede contener espacios y caracteres especiales."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Utiliza un objeto de mapeo para reemplazar los caracteres específicos. Se recorre la cadena, se convierten las letras a minúsculas, se eliminan los espacios y se reemplazan los caracteres según el mapeo.",
                metodo: "bucle for, mapeo de caracteres",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                codigo: `
                    function password(contraseña) {
                        const map = {
                            'a': '4',
                            'e': '3',
                            'i': '1',
                            'o': '0'
                        };
                        
                        let passwordWin = "";
                        for (let i = 0; i < contraseña.length; i++) {
                            let char = contraseña[i].toLowerCase(); // Convertir a minúscula
                            if (char !== ' ') {  // Ignorar los espacios
                                passwordWin += map[char] || char; // Reemplazar según el mapeo
                            }
                        }
                        
                        return passwordWin;
                    }
                `
            },
            {
                forma: "2) Segunda Solución",
                explicacion: "Utiliza el método `replace` de las cadenas junto con expresiones regulares para realizar los reemplazos de caracteres en una sola línea. Primero convierte toda la cadena a minúsculas y elimina los espacios usando `replace`.",
                metodo: "Metodo replace()",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
                codigo: `
                    function password(contraseña) {
                        return contraseña
                            .toLowerCase() // Convertir a minúsculas
                            .replace(/ /g, '') // Eliminar espacios
                            .replace(/a/g, '4')
                            .replace(/e/g, '3')
                            .replace(/i/g, '1')
                            .replace(/o/g, '0');
                    }
                `
            }
        ],
        CasosPrueba: `
            function password(contraseña)

            // Código de prueba
            console.log(password("hola")); // "h0l4"
            console.log(password("esta es una prueba")); // "3st43sun4pru3b4"
            console.log(password("")); // ""
        `
    },
    {
        id: 21,
        nombre: "Filtrar números pares de un arreglo",
        dificultad: "Fácil",
        NumeroEjercicio: "Ejercicio 21",
        NombreFuncion: "pares",
        descripcion: "Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.",
        restricciones: [
            "El arreglo de entrada puede contener números negativos y positivos.",
            "El arreglo de entrada no debe estar vacío."
        ],
        soluciones: [
            {
                forma: "1) Primera Solución",
                explicacion: "Utiliza un bucle `for` para recorrer el arreglo y verifica si cada número es par. Si lo es, se añade al nuevo arreglo de números pares.",
                metodo: "bucle for, comprobación de paridad",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                codigo: `
                    function pares(array) {
                        let ArrayPares = [];
                        for (let i = 0; i < array.length; i++) {
                            if (array[i] % 2 === 0) {
                                ArrayPares.push(array[i]);
                            }
                        }
                        return ArrayPares;
                    }
                `
            },
            {
                forma: "2) Segunda Solución",
                explicacion: "Utiliza el método `filter` para crear un nuevo arreglo que contenga solo los números pares. Este método es más conciso y legible.",
                metodo: "Metodo filter()",
                link: "https://ed.team/blog/javascript-filtrar-elementos-de-un-array-con-filter",
                codigo: `
                    function pares(array) {
                        return array.filter(num => num % 2 === 0);
                    }
                `
            }
        ],
        CasosPrueba: `
            function pares(array)

            // Código de prueba
            console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
            console.log(pares([])); // []
        `
    }
    
    
    
    
    

    
    


    
    
    

    ]