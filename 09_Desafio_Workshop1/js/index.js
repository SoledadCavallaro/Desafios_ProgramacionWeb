/* 
Nombre es un campo obligatorio.
DNI tiene que ser un número positivo y ser único (Que no coincida con ninguno ya agregado en la lista).
Deberá poder eliminar un alumno ingresando el número de DNI, en caso de que no exista no borra nada.

Todos los cambios tienen que quedar guardados en el LocalStorage, en el caso de que ya existan alumnos guardados los tiene que mostrar al inicio del programa.

Deberá mostrar siempre una lista en pantalla con los alumnos cargados en el sistema que tendrá que ser actualizada en cada cambio.
*/
/*
 * 1. Crear objeto alumno
 * 2. Crear Funcion Constructora Alumno
 * 3. Crear la funcion que obtiene lista de alumnos (getListaAlumnos)
 *      a. obtener del localstorage la lista de alumnos
 *          a1. crear lista vacia
 *          a2. existe lista? => obtener del ls
 *          a3. no existe lista? => guardar lista vacia en ls
 *      b. parsear lista a objeto
 *      c. devolver lista
 * 4. Crear la Funcion que agrega un alumno
 *      a. obtener lista alumnos con funcion getListaAlumnos().
 *      b. recorrer alumnos para verificar ya si existe
 *      b. agregar alumno a lista
 *      c. convertir lista a json
 *      d. guardar lista en local storage
*/

printStudents();

// el usario ingresa nombre, mail, dni y se deben validar antes de habilitar la carga:

//valido nombre como campo requerido:
var firstNameIngresado = document.getElementById('firstName');

firstNameIngresado.onblur = validarNombre;


var lastNameIngresado = document.getElementById('lastName');

//valido email ingresado:

var emailIngresado = document.getElementById('email');

emailIngresado.onblur = validarEmail;

// valido dni como num positivo y que no este en la lista:

var dniIngresado = document.getElementById('dni');
dniIngresado.onblur = validarDni;


//FUNCION VALDAR NOMBRE, es un campo requerido:

function validarNombre(event) {
    var inputNode = event.target;

    if (!inputNode.value) {
        inputNode.classList.remove('is-valid')
        inputNode.classList.add('is-invalid')
    } else {
        inputNode.classList.remove('is-invalid')
        inputNode.classList.add('is-valid')
    }
    envioOk();
}

//FUNCION VALIDAR EMAIL

function validarEmail(event) {
    var inputNode = event.target;

    if (
        !inputNode.value ||
        inputNode.value.indexOf('@') === -1 ||
        inputNode.value.indexOf('.') === -1
    ) {
        inputNode.classList.remove('is-valid')
        inputNode.classList.add('is-invalid')
    } else {
        inputNode.classList.remove('is-invalid')
        inputNode.classList.add('is-valid')
    }
    envioOk();
}

//FUNCION VALIDAR DNI

//No se puede repetir entonces primero busco si existe el dni en la lista y luego que sea mayor a cero:


function buscarXdni(dni) {
    
    var student

    if (localStorage.getItem('students')) {
        studentList = JSON.parse(localStorage.getItem('students'));
        
        for (var i = 0; i < studentList.length; i++) {
            student = studentList[i];
            if (student.dni === dni) {
                return i
            }
        }  
    
    }  
    return -1
}

function validarDni(event) {
    
    var dniInput = event.target;
    var parseDni = parseInt(dniInput.value);
    var existeDni = buscarXdni(dniInput.value);

    if (parseDni > 0 && existeDni === -1) {
        dniInput.classList.remove('is-invalid');
        dniInput.classList.add('is-valid');
    } else {
        dniInput.classList.remove('is-valid');
        dniInput.classList.add('is-invalid');
    }

    envioOk();
}
//FUNCION VALIDAR APTO ENVIO DE ESTUDIANTE (nombre,dni y email todos ok)

function envioOk() {
    var addStudentBtn = document.getElementById('addStudentBtn');
    var inputsValidados = document.getElementsByClassName('is-valid');

    if (inputsValidados.length === 3) {
        addStudentBtn.disabled = false;
    } else {
        addStudentBtn.disabled = true;

    }

}

// El usuario ya agrego los datos y fueron validados: procedo a crear y guardar el alumno.. creo funcion constructora,defino el evento, creo funcion alumno nuevo



//Defino evento click y activo  la funcion addAlumnoNuevo:


var addStudentBtn = document.getElementById("addStudentBtn");
addStudentBtn.onclick = addAlumnoNuevo;

function Students(firstName, lastName, dni, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;
  
};

function addAlumnoNuevo() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var dni = document.getElementById("dni");
    var email = document.getElementById("email");

    saveSt(
        firstName.value,
        lastName.value,
        dni.value,
        email.value,
      );
    
    }

    function saveSt(firstName, lastName, dni, email) {
      var studentsList = [];
    
    
      if (localStorage.getItem('students')) {
        studentsList = JSON.parse(localStorage.getItem('students'));
      }
    
      studentsList.push(new Students(firstName, lastName, dni, email));
      var studentsJson = JSON.stringify(studentsList);
      localStorage.setItem('students', studentsJson);
    
    
    }


function printStudents() {
    if (localStorage.getItem('students')) {
        var studentsList = JSON.parse(localStorage.getItem('students'));
        var i = 0;
        for (i = 0; i < studentsList.length; i++) {
            var namesStudents = document.getElementById('showStudents');


            var li = document.createElement('li');
            namesStudents.append(li);
            li.className = "list-group-item";
            var h2 = document.createElement('h2');
            h2.textContent = (studentsList[i].firstName + ' ' + studentsList[i].lastName);
            li.append(h2);
            var h5 = document.createElement('h5');
            h5.textContent = studentsList[i].email;
            li.append(h5);
            var otroH = document.createElement('h5');
            otroH.textContent = "Dni: " + studentsList[i].dni;
            li.append(otroH);
        }
    }
}


//Eliminar estudiante x DNI:

var deleteStudentBtn = document.getElementById('deleteStudentBtn');
deleteStudentBtn.onclick = deleteStudent;

function deleteStudent() {
    var deleteDni = document.getElementById('deleteDni');
    var i = 0;
    if (localStorage.getItem('students')) {
        var studentsList = JSON.parse(localStorage.getItem('students'));
        for (i = 0; i < studentsList.length; i++) {
            var listDni = studentsList[i].dni;
            
            if (listDni === deleteDni.value) {
                
                studentsList.splice(i, 1);
                
                var studentsJson = JSON.stringify(studentsList);
                
                localStorage.setItem('students', studentsJson);
            }
        }
    }
    //Imprimir lista actualizada:
    printStudents();
}







