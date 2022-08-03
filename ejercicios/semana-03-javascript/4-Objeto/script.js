"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

for(let nombre in people){
  let edad = people[nombre]
  console.log("nombre: ", nombre)
  console.log("edad ", edad)
}

function print(obj){
  for(let nombre in obj){
    let edad = obj[nombre]
    console.log("nombre: ", nombre)
    console.log("edad ", edad)
  }
}

print(people)