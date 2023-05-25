const { diasHastaNavidad } = require('./source/dnavidad.js');

var diasRestantes = diasHastaNavidad();
console.log("------------------ DIAS RESTANTE PARA NAVIDAD ------------------");
console.log("Quedan " + diasRestantes + " días hasta Navidad.");
console.log("----------------------------------------------------------------");


const { calcularEdad } = require('./source/edadper.js');

var fechaNacimiento = new Date(2004, 2, 8); 
var edad = calcularEdad(fechaNacimiento);
console.log("---------------- CALCULAR LA EDAD DE UNA PERSONA ----------------");
console.log("La edad es: " + edad);
console.log("-----------------------------------------------------------------");


const { validarFormulario } = require('./source/validforms.js');

var formulario = {
    nombre: "Armando",
    email: "Armando@example.com",
    fechaNacimiento: "2005-10-20",
  };

  console.log("------------------ VALIDACION DE FORMULARIO ------------------");
var resultadoValidacion = validarFormulario(formulario);
console.log(resultadoValidacion);
console.log("----------------------------------------------------------------");
