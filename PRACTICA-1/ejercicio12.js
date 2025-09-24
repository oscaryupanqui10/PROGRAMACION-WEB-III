/*12. Proporcione un ejemplo concreto donde el anidamiento de callbacks 
 se puede reescribir mejor con async/await haciendo el código más 
 limpio y mantenible.*/

 //Con callbacks
 function tarea1(callback) {
    setTimeout(() => {
        console.log("Tarea 1 completada");
        callback();
    }, 1000);
}
function tarea2(callback) {
    setTimeout(() => {
        console.log("Tarea 2 completada");
        callback();
    }, 1000);
}
function tarea3(callback) {
    setTimeout(() => {
        console.log("Tarea 3 completada");
        callback();
    }, 1000);
}
tarea1(() => {
    tarea2(() => {
        tarea3(() => {
            console.log("Todas las tareas terminadas");
        });
    });
});


//Reescrito con async/await
 function tarea(ms, mensaje) {
    return new Promise(resolve => setTimeout(() => {
        console.log(mensaje);
        resolve();
    }, ms));
}
async function ejecutarTareas() {
    await tarea(1000, "Tarea 1 completada");
    await tarea(1000, "Tarea 2 completada");
    await tarea(1000, "Tarea 3 completada");
    console.log("Todas las tareas terminadas");
}
ejecutarTareas();
