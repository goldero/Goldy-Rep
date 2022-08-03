"use strict"


//////////// RELOJ DE CUCO /////////////////////

///// FUNCIONA DURANTE UN DIA(24H) Y DA LA HORA
let hora = 0
let cucu = "cucu!"
let arr = []

/* function cucu(){
    for (let canto=0;canto <= hora; canto++){
return "cucu! "
    }
} */


for (hora = 0; hora <25; hora++){
    arr.length = hora;
    console.log(arr.length)
    arr.fill("cucu!");
    console.log("Son las "+ hora + " " + arr.join(" "))
}