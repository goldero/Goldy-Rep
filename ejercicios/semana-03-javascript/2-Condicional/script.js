"use strict"
let nombre = "David"
let edad = 60
let menu = "papaya"
let mensaje = true

switch(true) {
    case (edad < 12):
        menu = "niños";

        break;
    case (edad < 30):
        menu = "jovenes";
        break;
    case (edad < 59):
        console.log("A " + nombre + " no le corresponde ningun descuento");
        mensaje = false
        break;
    case (edad >= 60):
        menu = "jubilados";

        break;
}


if (mensaje == true) {
  console.log("A "+nombre+" le corresponde el descuento para "+menu) 
}