/* Crear una función que cree un nodo alumno [Pieza del Workshop I]
Crear una función que reciba como parámetro un objeto alumno y devuelva como resultado un nodo <li> con los datos del alumno. */


/* var ulAlumnos = document.getElementById('mainList');
 */
function createStudentNode(student) {
    var liAlumnos = document.createElement('li');
/*     ulAlumnos.append(liAlumnos);
 */
    var h1Alumnos = document.createElement('h1');
    liAlumnos.append(h1Alumnos);
    h1Alumnos.textContent = student.firstName + ' ' + student.lastName

    var pAlumnos = document.createElement('p');
    liAlumnos.append(pAlumnos);
    pAlumnos.textContent = student.dni;

    var p2Alumnos = document.createElement('p');
    liAlumnos.append(p2Alumnos);
    p2Alumnos.textContent = student.email;

    return liAlumnos

}
var student1 = {
    firstName: 'Juan',
    lastName: 'Peréz',
    dni: 22999333,
    email: 'juan@gmail.com'
}
var createNodoAlumno1 = createStudentNode(student1)
console.log(createNodoAlumno1);
