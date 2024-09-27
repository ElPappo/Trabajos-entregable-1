/*¡Gran Concurso de Tortas de Tres Arroyos! 🎂

Te toca ser jurado de un concurso de tortas, y el número de participantes 
puede variar. Tu tarea es pedir al usuario cuántos concursantes habrá y luego 
solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para cada 
torta. Al final, debes determinar qué torta tiene el mayor puntaje. Y si hay
 empate? 🤔 En ese caso, informaremos que se produjo un empate 
 (no es necesario indicar si fueron dos o mas empates ni entre que tortas es 
 el empate, solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una 
torta y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de 
participantes, luego solicita las puntuaciones de cada uno de ellos y usa 
la función calcularPuntaje para determinar la torta con el mayor puntaje.
*/



import * as rs from "readline-sync" 


//  variables

const CONCURSANTES = 5;
let i: number = 0;
let presentacion:number = 0; 
let sabor: number = 0;
let dificultad:number = 0; 
let PuntajeMax =  0;
let Ganador =  0;
let Empate: boolean =false;

// Bucle para obtener las puntuaciones de cada participante

for (let i = 0; i < CONCURSANTES; i++) {
    console.log(`\n CONCURSANTE : ${i+1}`)
}
do { 
sabor = rs.questionInt("Ingrese su Puntuacion del 1 al 5:")
      if (sabor
        console.log("Ingrese un Puntaje")
   }   
      } while (sabor <1 || sabor >5);

      do {
         dificultad = rs.questionInt("Ingrese el puntaje de dificultad del 1 al 5:")
        if (dificultad < 1 || dificultad > 5) {
          console.log("El puntaje debe estar entre 1 y 5");
        }
      }

    // Calcular el puntaje total
    

    