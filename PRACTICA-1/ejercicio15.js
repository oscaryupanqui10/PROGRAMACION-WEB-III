/*15. Proporcione un ejemplo para convertir un callback en una promesa*/

function conCallback(callback) {
    setTimeout(() => {
        callback(null, "Resultado con callback");
    }, 1000);
}
function callbackComoPromesa() {
    return new Promise((resolve, reject) => {
        conCallback((err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
}
callbackComoPromesa().then(console.log);

