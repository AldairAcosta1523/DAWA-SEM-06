function diasHastaNavidad() {
    var fechaActual = new Date();
  
    var year = fechaActual.getFullYear();
  
    var navidad = new Date(year, 11, 25);
  
    if (fechaActual > navidad) {
      navidad = new Date(year + 1, 11, 25);
    }
  
    var diferencia = navidad - fechaActual;
  
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  
    return dias;
  }
  
  module.exports = {
    diasHastaNavidad
  };