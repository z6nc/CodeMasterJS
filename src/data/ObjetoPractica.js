
export const ObjetoPractica = [
    {
        id: 1,
        nombre: "Contraseña Válida",
        categoria : "Ejercicios",
        dificultad: "Facil",
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
        nombre: "Número Par",
        categoria : "Ejercicios",
        dificultad: "Facil",
        NumeroEjercicio: "Ejercicio 02",
        NombreFuncion: "numeroPar",
        descripcion: "Escribir una función llamada numeroPar que reciba un número y retorne true si el número es par, o false si es impar.",
        restricciones: [
            "La función debe llamarse numeroPar.",
            "La función debe recibir un número como argumento.",
            "Retorna true si el número es par, de lo contrario retorna false."
        ],
        soluciones: [
            {
                "forma": "1) Primera Solucion",
                "explicacion": "En esta solución utilizamos el operador módulo (%) para verificar si el número es divisible entre 2, lo que indica que es par.",
                "metodo": "Operador módulo",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#modulo",
                "codigo": `
                    function numeroPar(num) {
                        return num % 2 === 0;
                    }
                `
            },
            {
                "forma": "2) Segunda Solucion",
                "explicacion": "En esta solución se utiliza una expresión booleana simple para retornar true si el número es divisible entre 2, y false en caso contrario.",
                "metodo": "Expresión Booleana",
                "link": "https://www.aulascript.com/lenguaje/objetos/booleanos.htm",
                "codigo": `
                    function numeroPar(num) {
                        return num % 2 === 0 ? true : false;
                    }
                `
            },
            {
                "forma": "3) Tercera Solucion",
                "explicacion": "En esta solución utilizamos una estructura if-else para verificar si el número es par o impar de forma explícita.",
                "metodo": "Estructura if-else",
                "link": "https://lenguajejs.com/javascript/condicionales/if-else/",
                "codigo": `
                    function numeroPar(num) {
                        if (num % 2 === 0) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                `
            }
        ],
        "CasosPrueba": `
            function numeroPar(num)
        
            // Datos de prueba
            console.log(numeroPar(4)) // true
            console.log(numeroPar(7)) // false
            console.log(numeroPar(0)) // true
            console.log(numeroPar(-2)) // true
        `
    },
    {
        "id": 3,
        "nombre": "Suma de Números",
        categoria : "Ejercicios",
        "dificultad": "Facil",
        "NumeroEjercicio": "Ejercicio 03",
        "NombreFuncion": "sumaNumeros",
        "descripcion": "Escribir una función llamada sumaNumeros que reciba un array de números y retorne la suma de todos sus elementos.",
        "restricciones": [
            "La función debe llamarse sumaNumeros.",
            "La función debe recibir un array de números como argumento.",
            "Retorna la suma de todos los elementos del array."
        ],
        "soluciones": [
            {
                "forma": "1) Primera Solucion",
                "explicacion": "En esta solución utilizamos el método reduce() para recorrer el array y sumar los elementos de manera acumulada.",
                "metodo": "Método reduce()",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
                "codigo": `
                    function sumaNumeros(arr) {
                        return arr.reduce((acumulador, num) => acumulador + num, 0);
                    }
                `
            },
         
            {
                "forma": "2) Segunda Solucion",
                "explicacion": "En esta solución utilizamos el método forEach() para recorrer el array y acumular la suma de los elementos.",
                "metodo": "Método forEach()",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
                "codigo": `
                    function sumaNumeros(arr) {
                        let suma = 0;
                        arr.forEach(num => {
                            suma += num;
                        });
                        return suma;
                    }
                `
            }
        ],
        "CasosPrueba": `
            function sumaNumeros(arr)
        
            // Datos de prueba
            console.log(sumaNumeros([1, 2, 3, 4])) // 10
            console.log(sumaNumeros([5, 0, -2])) // 3
            console.log(sumaNumeros([10, 20, 30])) // 60
            console.log(sumaNumeros([])) // 0
        `
    },
    {
        "id": 4,
        "nombre": "Filtrar Palabras Largas",
        categoria : "Ejercicios",
        "dificultad": "Intermedio",
        "NumeroEjercicio": "Ejercicio 04",
        "NombreFuncion": "filtrarPalabrasLargas",
        "descripcion": "Escribir una función llamada filtrarPalabrasLargas que reciba un array de palabras y un número `n`. La función debe retornar un array con todas las palabras que tengan más de `n` caracteres.",
        "restricciones": [
            "La función debe llamarse filtrarPalabrasLargas.",
            "La función debe recibir un array de palabras y un número `n` como argumentos.",
            "Retorna un array con las palabras que tienen más de `n` caracteres."
        ],
        "soluciones": [
            {
                "forma": "1) Primera Solucion",
                "explicacion": "En esta solución utilizamos el método filter() para filtrar las palabras que tengan más de `n` caracteres. Es una forma concisa y funcional de resolver el problema.",
                "metodo": "Método filter()",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
                "codigo": `
                    function filtrarPalabrasLargas(arr, n) {
                        return arr.filter(palabra => palabra.length > n);
                    }
                `
            },
            {
                "forma": "2) Segunda Solucion",
                "explicacion": "En esta solución utilizamos un ciclo for para iterar sobre el array de palabras y comprobar si su longitud es mayor que `n`. Si es así, añadimos la palabra al array resultante.",
                "metodo": "Ciclo for",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                "codigo": `
                    function filtrarPalabrasLargas(arr, n) {
                        let resultado = [];
                        for (let i = 0; i < arr.length; i++) {
                            if (arr[i].length > n) {
                                resultado.push(arr[i]);
                            }
                        }
                        return resultado;
                    }
                `
            },
        
        ],
        "CasosPrueba": `
            function filtrarPalabrasLargas(arr, n)
        
            // Datos de prueba
            console.log(filtrarPalabrasLargas(["manzana", "pera", "plátano", "uva"], 5)) // ["manzana", "plátano"]
            console.log(filtrarPalabrasLargas(["gato", "elefante", "ratón", "jirafa"], 4)) // ["elefante", "jirafa"]
            console.log(filtrarPalabrasLargas(["rojo", "azul", "verde", "morado"], 3)) // ["rojo", "verde", "morado"]
            console.log(filtrarPalabrasLargas([], 5)) // []
        `
    },
    {
        "id": 5,
        "nombre": "Contar Ocurrencias de un Elemento",
        categoria : "Ejercicios",
        "dificultad": "Intermedio",
        "NumeroEjercicio": "Ejercicio 05",
        "NombreFuncion": "contarOcurrencias",
        "descripcion": "Escribir una función llamada contarOcurrencias que reciba un array y un elemento, y retorne cuántas veces aparece ese elemento en el array.",
        "restricciones": [
            "La función debe llamarse contarOcurrencias.",
            "La función debe recibir un array y un elemento como argumentos.",
            "Retorna el número de veces que el elemento aparece en el array."
        ],
        "soluciones": [
            {
                "forma": "1) Primera Solucion",
                "explicacion": "En esta solución utilizamos el método filter() para crear un nuevo array con solo las ocurrencias del elemento, y luego simplemente retornamos la longitud de ese array.",
                "metodo": "Método filter()",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
                "codigo": `
                    function contarOcurrencias(arr, elemento) {
                        return arr.filter(item => item === elemento).length;
                    }
                `
            },
         
            {
                "forma": "2) Segunda Solucion",
                "explicacion": "En esta solución utilizamos el método forEach() para iterar sobre el array y contar las ocurrencias del elemento incrementando un contador cuando se encuentra una coincidencia.",
                "metodo": "Método forEach()",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
                "codigo": `
                    function contarOcurrencias(arr, elemento) {
                        let contador = 0;
                        arr.forEach(item => {
                            if (item === elemento) {
                                contador++;
                            }
                        });
                        return contador;
                    }
                `
            }
        ],
        "CasosPrueba": `
            function contarOcurrencias(arr, elemento)
        
            // Datos de prueba
            console.log(contarOcurrencias([1, 2, 3, 1, 4, 1], 1)) // 3
            console.log(contarOcurrencias(["a", "b", "c", "a", "a"], "a")) // 3
            console.log(contarOcurrencias([true, false, true, false, true], true)) // 3
            console.log(contarOcurrencias([], 5)) // 0
        `
    },
    {
        "id": 6,
        "nombre": "Invertir un String",
        categoria : "Ejercicios",
        "dificultad": "Intermedio",
        "NumeroEjercicio": "Ejercicio 06",
        "NombreFuncion": "invertirString",
        "descripcion": "Escribir una función llamada invertirString que reciba un string y retorne el string invertido.",
        "restricciones": [
            "La función debe llamarse invertirString.",
            "La función debe recibir un string como argumento.",
            "Retorna el string invertido."
        ],
        "soluciones": [
            {
                "forma": "1) Primera Solucion",
                "explicacion": "En esta solución utilizamos el método split() para dividir el string en un array de caracteres, luego usamos el método reverse() para invertir el array y finalmente unimos los caracteres con join() para formar el string invertido.",
                "metodo": "Métodos split(), reverse() y join()",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split",
                "codigo": `
                    function invertirString(str) {
                        return str.split('').reverse().join('');
                    }
                `
            },
            {
                "forma": "2) Segunda Solucion",
                "explicacion": "En esta solución utilizamos un ciclo for para iterar sobre el string de derecha a izquierda y construir el string invertido manualmente.",
                "metodo": "Ciclo for",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                "codigo": `
                    function invertirString(str) {
                        let invertido = '';
                        for (let i = str.length - 1; i >= 0; i--) {
                            invertido += str[i];
                        }
                        return invertido;
                    }
                `
            },
            {
                "forma": "3) Tercera Solucion",
                "explicacion": "En esta solución utilizamos el método reduce() para recorrer el string y construir el string invertido acumulando los caracteres en orden inverso.",
                "metodo": "Método reduce()",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
                "codigo": `
                    function invertirString(str) {
                        return str.split('').reduce((acc, char) => char + acc, '');
                    }
                `
            }
        ],
        "CasosPrueba": `
            function invertirString(str) //str = string
        
            // Datos de prueba
            console.log(invertirString("hola")) // "aloh"
            console.log(invertirString("javascript")) // "tpircsavaj"
            console.log(invertirString("12345")) // "54321"
            console.log(invertirString("")) // ""
        `
    },
    {
        "id": 7,
        "nombre": "Ordenar un Array de Objetos por Múltiples Criterios",
        categoria : "Ejercicios",
        "dificultad": "Dificil",
        "NumeroEjercicio": "Ejercicio 07",
        "NombreFuncion": "ordenarPorMultiplesCriterios",
        "descripcion": "Escribir una función llamada ordenarPorMultiplesCriterios que reciba un array de objetos, donde cada objeto tiene las propiedades `nombre`, `edad`, y `salario`, y lo ordene primero por `edad` de menor a mayor, y en caso de empate, por `salario` de mayor a menor.",
        "restricciones": [
            "La función debe llamarse ordenarPorMultiplesCriterios.",
            "La función debe recibir un array de objetos como argumento.",
            "Cada objeto tiene las propiedades `nombre`, `edad`, y `salario`.",
            "El array debe ser ordenado por `edad` de menor a mayor, y en caso de empate, por `salario` de mayor a menor."
        ],
        "soluciones": [
            {
                "forma": "1) Primera Solucion",
                "explicacion": "En esta solución utilizamos el método `sort()` y proporcionamos una función de comparación que maneja los dos criterios: primero ordenando por edad, y en caso de empate, ordenando por salario.",
                "metodo": "Método sort() c",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
                "codigo": `
                    function ordenarPorMultiplesCriterios(arr) {
                        return arr.sort((a, b) => {
                            if (a.edad === b.edad) {
                                return b.salario - a.salario;
                            }
                            return a.edad - b.edad;
                        });
                    }
                `
            },
            {
                "forma": "2) Segunda Solucion",
                "explicacion": "En esta solución utilizamos el mismo método `sort()`, pero utilizando un objeto para representar las claves de comparación, lo que facilita la extensibilidad si se requieren más criterios en el futuro.",
                "metodo": "Método sort() ",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
                "codigo": `
                    function ordenarPorMultiplesCriterios(arr) {
                        return arr.sort((a, b) => {
                            return (a.edad - b.edad) || (b.salario - a.salario);
                        });
                    }
                `
            },
            {
                "forma": "3) Tercera Solucion",
                "explicacion": "Esta solución utiliza una función de comparación más detallada que incluye la conversión explícita de valores, y asegura un orden seguro y claro en todos los casos.",
                "metodo": "Método sort() ",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
                "codigo": `
                    function ordenarPorMultiplesCriterios(arr) {
                        return arr.sort((a, b) => {
                            const edadDiff = a.edad - b.edad;
                            if (edadDiff === 0) {
                                return (b.salario - a.salario);
                            }
                            return edadDiff;
                        });
                    }
                `
            }
        ],
        "CasosPrueba": `
            function ordenarPorMultiplesCriterios(arr)
        
            // Datos de prueba
            console.log(ordenarPorMultiplesCriterios([
                { nombre: "Juan", edad: 25, salario: 1500 },
                { nombre: "Ana", edad: 25, salario: 1800 },
                { nombre: "Pedro", edad: 22, salario: 1200 },
                { nombre: "María", edad: 22, salario: 2200 }
            ])) 
            // [{ nombre: "Pedro", edad: 22, salario: 2200 }, { nombre: "María", edad: 22, salario: 1200 }, { nombre: "Juan", edad: 25, salario: 1500 }, { nombre: "Ana", edad: 25, salario: 1800 }]
            
            console.log(ordenarPorMultiplesCriterios([
                { nombre: "Carlos", edad: 30, salario: 2000 },
                { nombre: "Luis", edad: 30, salario: 2000 },
                { nombre: "Lucía", edad: 28, salario: 3000 }
            ])) 
            // [{ nombre: "Lucía", edad: 28, salario: 3000 }, { nombre: "Carlos", edad: 30, salario: 2000 }, { nombre: "Luis", edad: 30, salario: 2000 }]
        `
    },
    {
        "id": 8,
        "nombre": "Generar Permutaciones de un String",
         categoria : "Ejercicios",
        "dificultad": "Dificil",
        "NumeroEjercicio": "Ejercicio 08",
        "NombreFuncion": "generarPermutaciones",
        "descripcion": "Escribir una función llamada generarPermutaciones que reciba un string y retorne todas las posibles permutaciones del mismo string.",
        "restricciones": [
            "La función debe llamarse generarPermutaciones.",
            "La función debe recibir un string como argumento.",
            "Retorna un array con todas las permutaciones posibles del string."
        ],
        "soluciones": [
            {
                "forma": "1) Primera Solucion",
                "explicacion": "En esta solución utilizamos una función recursiva para generar todas las permutaciones posibles. Cada llamada recursiva genera las permutaciones al remover un carácter y concatenarlo en diferentes posiciones del string.",
                "metodo": "Recursividad",
                "link": "https://jscodez.com/javascript-funciones-recursivas/",
                "codigo": `
                    function generarPermutaciones(str) {
                        if (str.length === 1) {
                            return [str];
                        }
                        let permutaciones = [];
                        for (let i = 0; i < str.length; i++) {
                            let char = str[i];
                            let remainingStr = str.slice(0, i) + str.slice(i + 1);
                            let remainingPermutations = generarPermutaciones(remainingStr);
                            for (let perm of remainingPermutations) {
                                permutaciones.push(char + perm);
                            }
                        }
                        return permutaciones;
                    }
                `
            },
            {
                "forma": "2) Segunda Solucion",
                "explicacion": "En esta solución utilizamos el método `reduce()` para construir las permutaciones de manera funcional, manteniendo el carácter fijo y generando las permutaciones del resto del string de manera recursiva.",
                "metodo": "Método reduce() con recursión",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",
                "codigo": `
                    function generarPermutaciones(str) {
                        return str.split('').reduce((acc, char, i) => {
                            let remainingStr = str.slice(0, i) + str.slice(i + 1);
                            let remainingPermutations = generarPermutaciones(remainingStr);
                            remainingPermutations.forEach(perm => acc.push(char + perm));
                            return acc;
                        }, []);
                    }
                `
            },
            {
                "forma": "3) Tercera Solucion",
                "explicacion": "Esta solución utiliza una función iterativa en lugar de recursiva, construyendo las permutaciones paso a paso al ir agregando cada carácter en todas las posiciones posibles.",
                "metodo": "Iteración",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
                "codigo": `
                    function generarPermutaciones(str) {
                        let permutaciones = [''];
                        for (let i = 0; i < str.length; i++) {
                            let newPermutations = [];
                            permutaciones.forEach(perm => {
                                for (let j = 0; j <= perm.length; j++) {
                                    newPermutations.push(perm.slice(0, j) + str[i] + perm.slice(j));
                                }
                            });
                            permutaciones = newPermutations;
                        }
                        return permutaciones;
                    }
                `
            }
        ],
        "CasosPrueba": `
            function generarPermutaciones(str)
        
            // Datos de prueba
            console.log(generarPermutaciones("abc")) 
            // ["abc", "acb", "bac", "bca", "cab", "cba"]
            
            console.log(generarPermutaciones("ab")) 
            // ["ab", "ba"]
            
            console.log(generarPermutaciones("a")) 
            // ["a"]
            
            console.log(generarPermutaciones("")) 
            // [""]
        `
    },
    {
        "id": 9,
        "nombre": "Encontrar la Subcadena Más Larga sin Repetición de Caracteres",
        categoria : "Ejercicios",
        "dificultad": "Dificil",
        "NumeroEjercicio": "Ejercicio 09",
        "NombreFuncion": "subcadenaSinRepetidos",
        "descripcion": "Escribir una función llamada subcadenaSinRepetidos que reciba un string y retorne la longitud de la subcadena más larga que no contenga caracteres repetidos.",
        "restricciones": [
            "La función debe llamarse subcadenaSinRepetidos.",
            "La función debe recibir un string como argumento.",
            "Retorna un número que representa la longitud de la subcadena más larga sin caracteres repetidos."
        ],
        "soluciones": [
            {
                "forma": "1) Primera Solucion",
                "explicacion": "En esta solución utilizamos un enfoque de ventana deslizante con dos punteros para encontrar la subcadena sin caracteres repetidos. Utilizamos un Set para verificar si el carácter actual ya está en la subcadena.",
                "metodo": "Ventana deslizante (Sliding Window)",
                "link": "https://en.wikipedia.org/wiki/Sliding_window_protocol",
                "codigo": `
                    function subcadenaSinRepetidos(str) {
                        let chars = new Set();
                        let left = 0;
                        let maxLength = 0;
    
                        for (let right = 0; right < str.length; right++) {
                            while (chars.has(str[right])) {
                                chars.delete(str[left]);
                                left++;
                            }
                            chars.add(str[right]);
                            maxLength = Math.max(maxLength, right - left + 1);
                        }
                        return maxLength;
                    }
                `
            },
            {
                "forma": "2) Segunda Solucion",
                "explicacion": "Esta solución utiliza un objeto para almacenar la última posición de cada carácter, y luego ajusta la ventana deslizante basándose en la posición de los caracteres repetidos.",
                "metodo": "Uso de un objeto para almacenar posiciones",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration",
                "codigo": `
                    function subcadenaSinRepetidos(str) {
                        let charIndex = {};
                        let left = 0;
                        let maxLength = 0;
    
                        for (let right = 0; right < str.length; right++) {
                            if (charIndex[str[right]] >= left) {
                                left = charIndex[str[right]] + 1;
                            }
                            charIndex[str[right]] = right;
                            maxLength = Math.max(maxLength, right - left + 1);
                        }
                        return maxLength;
                    }
                `
            },
            {
                "forma": "3) Tercera Solucion",
                "explicacion": "En esta solución utilizamos el método `indexOf` para encontrar el índice de repetición de un carácter, y luego actualizamos el valor de la longitud máxima de la subcadena sin caracteres repetidos.",
                "metodo": "Método indexOf()",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf",
                "codigo": `
                    function subcadenaSinRepetidos(str) {
                        let maxLength = 0;
    
                        for (let i = 0; i < str.length; i++) {
                            let currentSubstring = "";
                            for (let j = i; j < str.length; j++) {
                                if (currentSubstring.indexOf(str[j]) === -1) {
                                    currentSubstring += str[j];
                                    maxLength = Math.max(maxLength, currentSubstring.length);
                                } else {
                                    break;
                                }
                            }
                        }
                        return maxLength;
                    }
                `
            }
        ],
        "CasosPrueba": `
            function subcadenaSinRepetidos(str)
        
            // Datos de prueba
            console.log(subcadenaSinRepetidos("abcabcbb")) 
            // 3 ("abc")
            
            console.log(subcadenaSinRepetidos("bbbbb")) 
            // 1 ("b")
            
            console.log(subcadenaSinRepetidos("pwwkew")) 
            // 3 ("wke")
            
            console.log(subcadenaSinRepetidos("")) 
            // 0
        `
    },
    {
        "id": 10,
        "nombre": "Encontrar el Número Más Grande en un Array",
        "categoria": "Pruebas Tecnica",
        "dificultad": "Facil",
        "NumeroEjercicio": "Prueba Tecnica 01",
        "NombreFuncion": "numeroMasGrande",
        "descripcion": "Escribir una función llamada numeroMasGrande que reciba un array de números y retorne el número más grande.",
        "restricciones": [
            "La función debe llamarse numeroMasGrande.",
            "La función debe recibir un array de números como argumento.",
            "Debe retornar el número más grande en el array.",
            "No se permite el uso de Math.max con spread (...)."
        ],
        "soluciones": [
            {
                "forma": "1) Solución Iterativa",
                "explicacion": "Recorremos el array con un bucle y almacenamos el número más grande encontrado hasta el momento.",
                "metodo": "Bucle for",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                "codigo": `
                    function numeroMasGrande(arr) {
                        if (arr.length === 0) return null; // Manejo de array vacío
                        
                        let max = arr[0];
                        for (let i = 1; i < arr.length; i++) {
                            if (arr[i] > max) {
                                max = arr[i];
                            }
                        }
                        return max;
                    }
                `
            },
            {
                "forma": "2) Solución con Reduce",
                "explicacion": "Utilizamos el método reduce() para recorrer el array y encontrar el máximo en una sola operación.",
                "metodo": "Método reduce()",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
                "codigo": `
                    function numeroMasGrande(arr) {
                        if (arr.length === 0) return null; // Manejo de array vacío
                        return arr.reduce((max, num) => num > max ? num : max, arr[0]);
                    }
                `
            }
        ],
        "CasosPrueba": `
            function numeroMasGrande(arr)
    
            // Datos de prueba
            console.log(numeroMasGrande([3, 1, 7, 9, 2])); 
            // 9
            
            console.log(numeroMasGrande([-5, -2, -10, -1])); 
            // -1
            
            console.log(numeroMasGrande([10])); 
            // 10
            
            console.log(numeroMasGrande([])); 
            // null
        `
    },
    {
        "id": 11,
        "nombre": "Calcular el Total de Ventas con Descuento",
        "categoria": "Pruebas Tecnica",
        "dificultad": "Facil",
        "NumeroEjercicio": "Prueba Tecnica 02",
        "NombreFuncion": "calcularTotalConDescuento",
        "descripcion": "Escribir una función llamada calcularTotalConDescuento que reciba un array de objetos representando productos, donde cada objeto tiene el nombre del producto, su precio y un descuento aplicado. La función debe retornar el total de las ventas con el descuento aplicado.",
        "restricciones": [
            "La función debe llamarse calcularTotalConDescuento.",
            "La función debe recibir un array de objetos, donde cada objeto tiene las propiedades 'precio' y 'descuento'.",
            "Cada descuento debe ser aplicado como porcentaje sobre el precio del producto.",
            "El valor del descuento nunca será mayor a 50%."
        ],
        "soluciones": [
            {
                "forma": "1) Solución Iterativa",
                "explicacion": "Recorremos el array de productos y vamos sumando el precio de cada producto después de aplicar el descuento.",
                "metodo": "Bucle for",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for",
                "codigo": `
                    function calcularTotalConDescuento(productos) {
                        let total = 0;
                        for (let i = 0; i < productos.length; i++) {
                            const { precio, descuento } = productos[i];
                            const precioConDescuento = precio - (precio * descuento / 100);
                            total += precioConDescuento;
                        }
                        return total;
                    }
                `
            },
            {
                "forma": "2) Solución con Reduce",
                "explicacion": "Utilizamos el método reduce() para sumar el precio de los productos después de aplicar el descuento.",
                "metodo": "Método reduce()",
                "link": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce",
                "codigo": `
                    function calcularTotalConDescuento(productos) {
                        return productos.reduce((total, { precio, descuento }) => {
                            const precioConDescuento = precio - (precio * descuento / 100);
                            return total + precioConDescuento;
                        }, 0);
                    }
                `
            }
        ],
        "CasosPrueba": `
            function calcularTotalConDescuento(productos)
    
            // Datos de prueba
            console.log(calcularTotalConDescuento([
                { precio: 100, descuento: 10 },
                { precio: 200, descuento: 20 }
            ])); 
            // 240 (100 - 10% + 200 - 20%)
            
            console.log(calcularTotalConDescuento([
                { precio: 50, descuento: 5 }
            ])); 
            // 47.5 (50 - 5%)
            
            console.log(calcularTotalConDescuento([
                { precio: 300, descuento: 50 }
            ])); 
            // 150 (300 - 50%)
            
            console.log(calcularTotalConDescuento([])); 
            // 0
        `
    },
    
    
    
    
    
    
    
    
    
    

    
    


    
    
    

    ]