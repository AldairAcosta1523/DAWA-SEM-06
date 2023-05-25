function calcularEdad(fechaNacimiento) {
    var fechaActual = new Date();
  
    var yearActual = fechaActual.getFullYear();
  
    var yearNacimiento = fechaNacimiento.getFullYear();
  
    var edad = yearActual - yearNacimiento;
  
    var mesActual = fechaActual.getMonth();
    var diaActual = fechaActual.getDate();
    var mesNacimiento = fechaNacimiento.getMonth();
    var diaNacimiento = fechaNacimiento.getDate();
  
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
    }
  
    return edad;
  }
  
  module.exports = {
    calcularEdad
  };
  