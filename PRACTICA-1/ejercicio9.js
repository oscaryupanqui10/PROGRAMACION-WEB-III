/*9. Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.*/
function promesaExito() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Éxito después de 3 segundos");
        }, 3000);
    });
}
promesaExito().then(mensaje => console.log(mensaje));

