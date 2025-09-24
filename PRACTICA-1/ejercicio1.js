/*1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el
resultado en un objeto.
let obj = miFuncion(“euforia”)
console.log(obj)  { a: 1, e: 1, i: 1, o: 1, u: 1 }*/

function contarVocales(palabra) {
    let obj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (let i = 0; i < palabra.length; i++) {
        let letra = palabra[i];
        if (letra === "a") obj.a++;
        else if (letra === "e") obj.e++;
        else if (letra === "i") obj.i++;
        else if (letra === "o") obj.o++;
        else if (letra === "u") obj.u++;
    }
    return obj;
}
let obj = contarVocales("euforia");
console.log(obj);