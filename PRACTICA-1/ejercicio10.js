/*10. ¿Cuando es conveniente utilizar un callback, y cuando es 
necesario utilizar una promesa? */

/*CUANDO USAR UN CALLBACK ?
Los callbacks son adecuados cuando se necesita una solución 
más directa o para situaciones que no encajan en el modelo 
de estado de las promesas. 
Se usa en tareas asíncronas simples, cuando basta con ejecutar 
otra función al terminar (ejemplo: setTimeout, manejo de eventos).

CUANDO USAR UNA PROMESA ?
Las promesas son más convenientes para gestionar la complejidad 
de las operaciones asincrónicas, ofreciendo un modelo más robusto 
y legible. 
Se usa cuando hay procesos asíncronos más complejos, encadenados 
o con manejo de errores (.then, .catch).*/