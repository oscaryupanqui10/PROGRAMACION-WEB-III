/* 14.  Proporcione un ejemplo para convertir una promesa en un callback. */
function promesa() {
    return new Promise(resolve => setTimeout(() => resolve("Hecho con promesa"), 2000));
}

function promesaComoCallback(callback) {
    promesa()
        .then(resultado => callback(null, resultado))
        .catch(error => callback(error));
}

promesaComoCallback((err, res) => {
    if (err) console.error(err);
    else console.log(res);
});
