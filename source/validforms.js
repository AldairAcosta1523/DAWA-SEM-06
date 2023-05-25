function validarFormulario(datosFormulario) {
    var camposObligatorios = {
      nombre: "texto",
      email: "email",
      fechaNacimiento: "fecha"
    };
  
    var camposOpcionales = {
      telefono: "telefono"
    };
  
    for (var campo in camposObligatorios) {
      if (!datosFormulario.hasOwnProperty(campo) || !validarCampo(datosFormulario[campo], camposObligatorios[campo])) {
        return "El campo " + campo + " es obligatorio y debe ser válido.";;
      }
    }
  
    for (var campo in camposOpcionales) {
      if (datosFormulario.hasOwnProperty(campo) && !validarCampo(datosFormulario[campo], camposOpcionales[campo])) {
        return "El campo " + campo + " opcional no es válido.";
    }
    }
  
    return "El formulario se validó correctamente.";
  }
  
  function validarCampo(valor, tipo) {
    switch (tipo) {
      case "texto":
        return valor.trim() !== "";
  
      case "email":
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(valor);
  
      case "fecha":
        var fecha = new Date(valor);
        return !isNaN(fecha);
  
      case "telefono":
       var telefono = Number
        return true;
  
      default:
        return false;
    }
  }
  
  module.exports = {
    validarFormulario
  };
  