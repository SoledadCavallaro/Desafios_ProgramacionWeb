/* 

- Crear HOME con una tabla que se pueda eliminar personajes.
- cuando se refresque home, los personajes queden eliminados.
- Crear 2 paginas mas como HOME pero que le peguen a otro servicio.
    - Distintos diseños de tabla
    - Persistir datos de servicio
- Crear una pagina de contacto, devuelva un alert de mail enviado / un alert bootstrap.
    - validar campo mail
    - validar vacios
    - agregar un parrafo <p> y un gif :)
- La web tiene que ser responsive design (Bootstrap)
- Usar Pug para las vistas.
    a - usar pug para TODO
    
*/

$(document).ready(function () {
  var personajesList;

  function call() {

    $.ajax({

      url: "https://swapi.co/api/people",
      method: "GET",
      success: function (data) {

        // guarda en el local storage un array con lo que trae del API  
        var name = data.results;
        var personajes = JSON.stringify(name);

        localStorage.setItem('personajes', personajes);

        printPersonaje(name);

      },
      fail: function (error) {

        console.log('Error: ', error)

      }
    }); /* cierra Ajax */

  } /* cierra funcion call */

  function printPersonaje(personajesList) {

    for (var i = 0; i < personajesList.length; i++) {
      var tableBody = document.getElementById('tableBody');

      var tr = document.createElement('tr');
      tr.id = i;
      tableBody.append(tr);

      var tdNumero = document.createElement('td');
      tdNumero.textContent = i + 1;
      tr.append(tdNumero);

      var tdName = document.createElement('td');
      tdName.textContent = personajesList[i].name
      tr.append(tdName);

      var tdGender = document.createElement('td');
      tdGender.textContent = personajesList[i].gender
      tr.append(tdGender);

      var tdHeight = document.createElement('td');
      tdHeight.textContent = personajesList[i].height + ' cm'
      tr.append(tdHeight);

      var tdMass = document.createElement('td');
      tdMass.textContent = personajesList[i].mass + ' Kg'
      tr.append(tdMass);

      var tdEye_color = document.createElement('td');
      tdEye_color.textContent = personajesList[i].eye_color
      tr.append(tdEye_color);

      var button = document.createElement('button')
      button.className = 'btn btn-outline-danger';
      button.textContent = 'Eliminar';
      tr.append(button);

      button.dataset.id = personajesList[i].name;

    }

  }/* cierra print people */

  if (localStorage.getItem('personajes') && localStorage.getItem('personajes') !== '[]'

  ) {
    personajesList = JSON.parse(localStorage.getItem('personajes'));

    printPersonaje(personajesList);

  } else {
    call();
  };

  // Eliminar personaje de la lista y guardar nueva lista en el localstoage: 

  $('button').click(function () {
    var id = $(this).data('id');

    var listaParse = JSON.parse(localStorage.getItem('personajes'));

    var listaFiltrada = listaParse.filter(function (listaParse) {
      return listaParse.name !== id;
    });

    var newList = JSON.stringify(listaFiltrada);
    localStorage.setItem('personajes', newList);

    $(this).parentsUntil('tbody').fadeOut(1000, function () {
      $(this).remove()
    });

    /* 
    if (localStorage.getItem('personajes') === '[]'){
      localStorage.removeItem('personajes')};
   */
    //  location.reload();
  });



}); /* cierra document ready */







