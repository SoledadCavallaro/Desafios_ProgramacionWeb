/* Crea una función que permita levantar una lista del localStorage
La función tiene que recibir como parámetro una key y buscar en el localStorage por esa key devolviendo un objeto de JavaScript, si no existe el elemento debe devolver un Array vacío. La función tiene que validar los parámetros que recibe, en caso de que alguno sea incorrecto no debe romper ni borrar nada.
var studentsList = getLocalList('studentsList') // Debe devolver siempre un Array [] vacío o con elementos [...] */

function init(){
    var studentList =  ['Max', 'Tom','Luz', 'Sara', 'Maria', 'Mara'];
    var studentListJson = JSON.stringify(studentList);
    localStorage.setItem('students', studentListJson);
}

function search(term){
    var students = JSON.parse(localStorage.getItem('students'));
    var result = [];

    for (var i = 0 ; i < students.length; i++){
        if (students[i].indexOf(term) != -1){
            result = students}
        }
    return result
}

init();
 
var result = search(prompt('Ingrese nombre'));
console.log(result); 
// si encuentra el nombre devuelve toda la lista de estudiantes sino un array vacio