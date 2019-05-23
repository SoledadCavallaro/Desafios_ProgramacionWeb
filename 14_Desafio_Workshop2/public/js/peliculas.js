$(document).ready(function () {
  var peliculasList;

  function call() {

    $.ajax({

      url: "https://swapi.co/api/films/",
      method: "GET",
      success: function (data) {

        // guarda en el local storage lo que trae del API  
        var filmsApi = data.results;

        var peliculas = JSON.stringify(filmsApi);

        localStorage.setItem('peliculas', peliculas);

        printPeliculas(filmsApi);

      },
      fail: function (error) {

        console.log('Error: ', error)

      }
    }); /* cierra Ajax */

  } /* cierra funcion call */

  function printPeliculas(peliculasList) {

    for (var i = 0; i < peliculasList.length; i++) {
      var tableBody = document.getElementById('tableBody');

      //creo la fila
      var tr = document.createElement('tr');
      tr.id = i;
      tableBody.append(tr);

      //creo el contenido de la fila
      var tdNumero = document.createElement('td');
      tdNumero.className = 'align-middle';
      tdNumero.textContent = i + 1;
      tr.append(tdNumero);

      var tdTitulo = document.createElement('td');
      tdTitulo.className = 'align-middle';
      tdTitulo.textContent = peliculasList[i].title;
      tr.append(tdTitulo);

      var tdDirector = document.createElement('td');
      tdDirector.className = 'align-middle';
      tdDirector.textContent = peliculasList[i].director
      tr.append(tdDirector);

      var tdEpisodio = document.createElement('td');
      tdEpisodio.className = 'align-middle';
      tdEpisodio.textContent = peliculasList[i].episode_id
      tr.append(tdEpisodio);

      var tdEstreno = document.createElement('td');
      tdEstreno.className = 'align-middle';
      tdEstreno.textContent = peliculasList[i].release_date
      tr.append(tdEstreno);

      var tdOpening = document.createElement('td');
      tdOpening.className = 'align-middle';
      tdOpening.textContent = peliculasList[i].opening_crawl
      tr.append(tdOpening);

      var button = document.createElement('button')
      button.className = 'btn mt-130px btn-warning';
      button.textContent = 'Eliminar';
      tr.append(button);

      button.dataset.id = peliculasList[i].title;

    }

  }/* cierra print peliculas */

  if (localStorage.getItem('peliculas') && localStorage.getItem('peliculas') !== '[]'

  ) {
    peliculasList = JSON.parse(localStorage.getItem('peliculas'));

    printPeliculas(peliculasList);

  } else {
    call();
  };

  // Eliminar pelicula de la lista y guardar nueva lista en el localstoage: 

  $('button').click(function () {
    var id = $(this).data('id');

    var filmsParse = JSON.parse(localStorage.getItem('peliculas'));

    var filmsFiltrada = filmsParse.filter(function(filmsParse){
      return filmsParse.title !== id;
    });

    var newList = JSON.stringify(filmsFiltrada);
    localStorage.setItem('peliculas', newList);

    $(this).parentsUntil('tbody').fadeOut(1000, function(){
      $(this).remove()
    });





    /* 
    if (localStorage.getItem('personajes') === '[]'){
      localStorage.removeItem('personajes')};
   */
    //  location.reload();
  });



}); /* cierra document ready */