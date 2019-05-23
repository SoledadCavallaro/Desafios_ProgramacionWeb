$(document).ready(function () {
    var planetasList;
  
    function call() {
  
      $.ajax({
  
        url: "https://swapi.co/api/planets/",
        method: "GET",
        success: function (data) {
  
          // guarda en el local storage lo que trae del API  
          var planetasApi = data.results;
  
          var planetas = JSON.stringify(planetasApi);
  
          localStorage.setItem('planetas', planetas);
  
          printPlanetas(planetasApi);
  
        },
        fail: function (error) {
  
          console.log('Error: ', error)
  
        }
      }); /* cierra Ajax */
  
    } /* cierra funcion call */
  
    function printPlanetas(planetasList) {
  
      for (var i = 0; i < planetasList.length; i++) {
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
  
        var tdNombre = document.createElement('td');
        tdNombre.className = 'align-middle';
        tdNombre.textContent = planetasList[i].name;
        tr.append(tdNombre);
  
        var tdRotacion = document.createElement('td');
        tdRotacion.className = 'align-middle';
        tdRotacion.textContent = planetasList[i].rotation_period;
        tr.append(tdRotacion);
  
        var tdPorbita = document.createElement('td');
        tdPorbita.className = 'align-middle';
        tdPorbita.textContent = planetasList[i].orbital_period;
        tr.append(tdPorbita);
  
        var tdClima = document.createElement('td');
        tdClima.className = 'align-middle';
        tdClima.textContent = planetasList[i].climate;
        tr.append(tdClima);
  
        var tdPoblacion = document.createElement('td');
        tdPoblacion.className = 'align-middle';
        tdPoblacion.textContent = planetasList[i].population;
        tr.append(tdPoblacion);
  
        var button = document.createElement('button')
        button.className = 'btn btn-outline-warning';
        button.textContent = 'Eliminar';
        tr.append(button);
  
        button.dataset.id = planetasList[i].name;
  
      }
  
    }/* cierra print planetas */
  
    if (localStorage.getItem('planetas') && localStorage.getItem('planetas') !== '[]'
  
    ) {
      planetasList = JSON.parse(localStorage.getItem('planetas'));
  
      printPlanetas(planetasList);
  
    } else {
      call();
    };
  
    // Eliminar planeta de la lista y guardar nueva lista en el localstoage: 
  
    $('button').click(function () {
      var id = $(this).data('id');
  
      var planetasParse = JSON.parse(localStorage.getItem('planetas'));
  
      var planetasFiltrada = planetasParse.filter(function(planetasParse){
        return planetasParse.name !== id;
      });
  
      var newList = JSON.stringify(planetasFiltrada);
      localStorage.setItem('planetas', newList);
  
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