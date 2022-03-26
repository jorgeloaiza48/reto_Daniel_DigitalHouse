# reto_Daniel_DigitalHouse
Este código fue una tarea propuesta por el profesor Daniel Duque de DH y él dijo:

"Es una app para calcular la hora de finalización de una clase, tiene dos partes, la parte base que me gustaría que todos la hicieran y la parte complementaria para el que quiera gastarle un ratico más.
Bueno, dada una entrada como (node app.js hora minuto duración) (node app.js 12 17 59), la app debe imprimir la hora de finalización, en este caso algo como las 13:16

les doy 3 casos de prueba, 12 17 59 -> 13:16
23 58 642 -> 10:40
0 1 2939 -> 1:0

hora -> hace referencia a la hora de inicio de la clase en formato 24h va de 0 a 23
minuto -> hace referencia al minuto de inicio de la clase, va de 0 a 59
duración -> la duración en minutos de la clase, cualquier valor positivo desde 0

#########################################################################################################################################################################

Bueno para los que ya lo terminaron les voy a decir el complemento, tampoco es muy complejo
Partiendo de la solución anterior Necesitamos indicar cuantos días pasaron, por ejemplo ponemos node app.js 12 17 1440
y debe retornar 12:17 más 1 día
o node app.js 23 59 2 y debe retornar 0:1 más 1 día
