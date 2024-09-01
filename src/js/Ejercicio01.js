/*
Contraseña válida
Escribir una función llamada contrasenaValida que reciba un string y retorne true
si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
*/

//Primera forma
function validarContraseña(contraseña) {
    const contraseñasValidas = ["2Fj(jjbFsuj", "eoZiugBf&g9"];
    return contraseñasValidas.includes(contraseña);
}


//Segunda forma
function validarContraseña(contraseña) {
    return contraseña === "2Fj(jjbFsuj" || contraseña === "eoZiugBf&g9";
}

//Tercera forma
function validarContraseña(contraseña){
    const contraseñaValida ="2Fj(jjbFsuj";
    const contraseñaValida2 ="eoZiugBf&g9";
    if(contraseña === contraseñaValida ||  contraseña === contraseñaValida2 ){
        return true 
    } else{
        return false
    }
}

//Casos de prueba
console.log(validarContraseña("2Fj(jjbFsuj")) // true
console.log(validarContraseña("eoZiugBf&g9")) // true
console.log(validarContraseña("hola")) // false
console.log(validarContraseña("")) // false