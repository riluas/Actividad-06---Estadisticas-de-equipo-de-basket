var jugador=[];
var canastas2=[];
var canastas3=[];
var tiempoMin=[];


var nombre="";
var dos="";
var tres="";
var tiempo="";

//anadir los elementos al array
 while (true) {
   nombre=prompt("Dime un jugador");
   jugador.push(nombre);
   //si el nombre es salir se acaba
   if (nombre == "salir") {
     break;
   }
   //si no es salir continua
    dos=Number(prompt("Canastas de dos"));
     canastas2.push(dos);

     tres=Number(prompt("Canastas de tres"));
     canastas3.push(tres);

     tiempo=Number(prompt("Tiempo jugado en minutos"));
     tiempoMin.push(tiempo);
  }

jugador.pop()//Borra del array el ultimo elemento que es "salir"

var totalDos=0;
var mediaDos=0;
var totalTres=0;
var mediaTres=0;
var tTotal=0;
var mediaT=0;
var maxPunt=0;
var mejor=0;
function canastas(){
  //inicio de la suma total de canastas dobles
  for (var i = 0; i < canastas2.length; i++) {
    totalDos=totalDos+canastas2[i];
  }
  //inicio del calculo de la media de canastas dobles
  for (var i = 0; i < canastas2.length; i++) {
    mediaDos += canastas2[i];
  }
  //inicio de la suma total de canastas triples
  for (var i = 0; i < canastas3.length; i++) {
    totalTres=totalTres+canastas3[i];
  }
  //inicio del calculo de la media de canastas triples
  for (var i = 0; i < canastas3.length; i++) {
    mediaTres += canastas3[i];
  }
  for (var i = 0; i < tiempoMin.length; i++) {
    tTotal =tTotal+tiempoMin[i];
  }
  for (var i = 0; i < tiempoMin.length; i++) {
    mediaT +=mediaT+tiempoMin[i];
  }
  for (var i = 0; i < jugador.length; i++) {
    let maxPuntTemp=canastas2[i]*2+canastas3[i]*3;
    if (maxPuntTemp>maxPunt) {
    maxPunt=maxPuntTemp;
    mejor=i;
    }
  }
  mediaDos = mediaDos / canastas2.length;
  mediaTres = mediaTres / canastas3.length;
  mediaT = mediaT / tiempoMin.length;
}
canastas();


console.log(`Numero de jugadores: ${jugador.length}.
Total tiempo jugado: ${tTotal} min.
Media de Tiempo por jugador ${mediaT} min.
   `);
console.log(`Máximo anotador: ${jugador[mejor]} con ${maxPunt} puntos.
   `);
console.log(`Tiros dobles:
 Media de:${mediaDos}.
 Total dobles:${totalDos}.
 `);
console.log(`Tiros triples:
 Media de:${mediaTres}.
 Total dobles:${totalTres}.
 `);

console.log(jugador,canastas2,canastas3,tiempoMin);
