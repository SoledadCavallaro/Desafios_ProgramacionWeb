$(document).ready(function() {
	var request = $.ajax({
        url: "https://swapi.co/api/people",
        method: "GET"
    });
    
    request.done(function( data ) {
        var container = $(".container");
        var people= data.results;

        for(var i = 0; i < people.length ; i++){
            container.append("Personaje: " + people[i].name + "<br/>");

            console.log(people[i].name);

        }

    });
      
    request.fail(function( error ) {
        console.log( 'Error: ' , error )
    });
});