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


//  variables Globales

let CantidadConsursantes: number =0;
let presentacion: number = 0; 
let sabor: number = 0;
let dificultad: number = 0; 
let mayorPuntje: number = 0;
let Ganador: number = 0;
let Empate: boolean =false;

function determinarGanador():void{
  CantidadConsursantes = rs.questionInt(`Cuantas tortas del concurso?`);
//BUCLE FOR
for (let i = 1; i <= CantidadConsursantes; i++) {
    console.log(` CONCURSANTE NUMERO : ${i}`)


 //ASIGNACION DE PUNTAJES 

sabor = obtenerPuntaje("Sabor ");
presentacion = obtenerPuntaje("Presentacion");
dificultad = obtenerPuntaje("Dificultad ");
const puntajeTotal = calcularPuntaje(sabor, presentacion, dificultad)
console.log(`
  El puntaje totalde la torta ${i} es: ${puntajeTotal}`);

//COMPROBACIONES 

if( puntajeTotal > mayorPuntje){
  mayorPuntje = puntajeTotal;
  Ganador = i
  Empate = false
  
}  else if(puntajeTotal === mayorPuntje) {
    Empate = true;
  }
  
}

if(Empate){
  console.log(`
    Hay un empate, se necesita comer mas tortas para determinar el ganador
    `);
    } else {
      console.log(`
        La torta ganadora es ${Ganador} con un puntaje de ${mayorPuntje}`);
    }

}


// Calcular puntaje, pregunta al usuario puntaje de S, P, D:

function obtenerPuntaje(criterio: string): number{ 
         const opciones  = [ '1' , '2' , '3' , '4' , '5' ]     
  const index = rs.keyInSelect( opciones ,  `Introduce el puntaje de ${criterio}` );  
  return Number (opciones [index]);    //Number convierte el string a number (N)
 }


//Funcion que calcula el Puntaje de S, P y D:
function calcularPuntaje(s: number, p: number, d: number ): number {
return s + d + d;
}

determinarGanador();

/*Logre completarlo siguiendolo a marcelo, si tengo que plantearlo desde 0 solo,  no creo
terminarlo por ahora, hasta que no incorpore cada uno de lo elementos para poder implementar
en las logicas de los ejercicio*/




  