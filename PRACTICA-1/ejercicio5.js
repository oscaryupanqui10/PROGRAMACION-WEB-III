/*5. Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
al revés).
let band = miFuncion(“oruro”)
console.log(band) // true
let band = miFuncion(“hola”)
console.log(band) // false */

function palindromo(cadena) {
    let invertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida =invertida + cadena[i];
    }
    if (cadena === invertida) {
        return true;
    } else {
        return false;
    }
}
console.log(palindromo("oruro")); // true
console.log(palindromo("hola"));  // false