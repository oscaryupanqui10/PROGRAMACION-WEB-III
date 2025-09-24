/*11. Proporcione un ejemplo concreto de encadenamiento de promesas.*/

new Promise(resolve => resolve(5))
  .then(n => {
    console.log("Número inicial:", n);
    return n + 3;
  })
  .then(n => {
    console.log("Más 3:", n);
    return n * 2;
  })
  .then(n => {
    console.log("Multiplicado por 2:", n);
    return n - 4;
  })
  .then(n => {
    console.log("Menos 4:", n);
  });
