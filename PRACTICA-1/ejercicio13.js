/*13. Proporcione un ejemplo concreto donde el anidamiento de 
 promesas se puede reescribir mejor con async/await haciendo 
 el código más limpio y mantenible.*/
 
 function paso1() {
    return new Promise(resolve => {
      setTimeout(() => resolve(" Paso 1 completado"), 1000);
    });
  } 
  function paso2() {
    return new Promise(resolve => {
      setTimeout(() => resolve(" Paso 2 completado"), 1000);
    });
  }
  function paso3() {
    return new Promise(resolve => {
      setTimeout(() => resolve(" Paso 3 completado"), 1000);
    });
  }
  //ASYNC/AWAIT
 async function ejecutarPasos() {
    try {
      const res1 = await paso1();
      console.log(res1);
  
      const res2 = await paso2();
      console.log(res2);
  
      const res3 = await paso3();
      console.log(res3);
  
      console.log(" Todos los pasos completados con éxito");
    } catch (error) {
      console.error(" Error:", error);
    }
  }
  ejecutarPasos();
  
