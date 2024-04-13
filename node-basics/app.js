// const saludos = require("./saludos.js"); //Estamos importando un modulo
const {saludarHolaMundo}= require ('./saludos.js');//para obtener algo específico, en este caso saludarHolaMundo
const {saludar, saludarHolaMundo} = require('./saludos.js')//Aqui obtenemos ambas cosas
// console.log(saludos.saludar("freecodecamp")); //así se llama la función, primero el paquete, desués la función
// console.log(saludos.saludarHolaMundo());

console.log(saludarHolaMundo());