/*
Escribir una función llamada empiezanConA que reciba un arreglo de strings y retorne un nuevo arreglo 
con todas las palabras que empiecen por "a" (mayúscula o minúscula).

*/
//Primera forma
function empiezanConA(array){
    let ArrayConA = [];
     for (let i = 0; i < array.length; i++) {
         if(array[i][0] === "A" || array[i][0] === "a" ){
         ArrayConA.push(array[i]);
        }
    }
 return ArrayConA;
}

//segunda forma  // el filtro es una funcion que recibe un parametro y retorna un booleano
function empiezanConA(array) {
    return array.filter(palabra => /^[aA]/.test(palabra));
}


// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []