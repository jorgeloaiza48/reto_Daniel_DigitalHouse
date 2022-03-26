



let hora = process.argv[2];
let minuto = process.argv[3];
let duracion = process.argv[4];

let totalMinutos = parseFloat(hora)*60 + parseFloat(minuto) + parseFloat(duracion) //parseFloat convierte de string a número
//console.log("Total minutos --->" + totalMinutos)
let nuevaHora = Math.floor(totalMinutos/60) //toma la parte entera del número decimal
//console.log("Nueva Hora ---->" + nuevaHora)
let nuevosMinutos = Math.round(totalMinutos % 60) //redondea al entero más cercano
let dia = 0
let nuevaHora1 = 0

if(nuevaHora === 24){
    
    dia = 1
}
else if (nuevaHora > 23 ) {
    nuevaHora1 = nuevaHora % 24
    dia = Math.floor(nuevaHora/24)
    console.log(dia)
    
    }

else 
    nuevaHora1 = nuevaHora

//nuevaHora > 23 ? nuevaHora = nuevaHora-24 : ""


console.log("Hora ingresada ---> "+ hora + ":" + minuto)
console.log("Duración ----> "+ duracion +" Minutos" )
console.log("Hora de finalización ---> "+ nuevaHora1 + ":" + nuevosMinutos + " más " + dia + " día(s)")

//  console.log(87%24) //cantidad horas
//  console.log(87/24) //cantidad de días