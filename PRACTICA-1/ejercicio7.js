/*7. Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros
elementos de un arreglo, mediante desestructuración.*/

let arreglo = [10, 20, 30, 40, 50, 60];
let [primero, segundo, ...resto] = arreglo;
console.log("Primero:",primero); 
console.log("Segundo:",segundo); 
console.log("Resto:",resto);   
