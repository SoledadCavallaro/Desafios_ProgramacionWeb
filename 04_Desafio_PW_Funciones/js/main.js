/* Crear una función que permita buscar un alumno [Pieza del Workshop I]
Debe recibir como parámetro un texto y un Array de alumnos y buscar dentro del Array por nombre o apellido, si lo encuentra deberá devolver la posición en el Array del alumno, en caso contrario -1. La función solo encuentra coincidencias exactas, por ejemplo encuentra Fernandez, pero no Fer o fernandez.
Probar que funcione correctamente.
 */

 // Datos de prueba:

 var studentsList = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956
    },
    {
      firstName: 'Pablo',
      lastName: 'Picapiedras',
      dni: 45678983
    }
  ]

  function lookForStudent (text, studentsList) {
    var posicion = -1
    for (var i = 0; i < studentsList.length; i++) {
      var student = studentsList[i]
      if (student.firstName === text || student.lastName === text) {
        posicion = i
        break
      }
    } if ( posicion !== -1){
        console.log('Estudiante encontrado en la posición', posicion)
    } else {
        console.log('Estudiante no encontrado')
    }
    
  }
  
  // Solicito el nombre del estudiante a buscar y llamo a la funcion de busqueda
  
  var text = prompt('Ingrese nombre o apellido a buscar')
    
  var buscar = lookForStudent(text, studentsList)
  
