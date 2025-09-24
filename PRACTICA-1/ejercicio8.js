/*8. Realizar un código para ejecutar una función callback después 2 segundos.*/
function Callback(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}
Callback(() => {
    console.log("Callback ejecutado después de 2 segundos");
});

