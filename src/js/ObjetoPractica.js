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
        dificultad: "Intermedia",
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
                metodo: "Método includes",
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
    }
    


    
    
    
    
    
    

    ]