/*16. Proporcione un ejemplo para migrar una función con promesas a 
  async/await.*/

  //Con Promesas
  function obtenerDatos() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Datos obtenidos"), 2000);
    });
}

obtenerDatos().then(res => console.log(res));

 //Migrado a async/await
async function ejecutarDatos() {
    let res = await obtenerDatos();
    console.log(res);
}
ejecutarDatos();
