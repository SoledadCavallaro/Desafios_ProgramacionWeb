/* $(document).ready(function() {
	$('button').on('click', function(){
        $(this).parent().parent().hide(2000, function () {
            $(this).remove()
        })
    });
});
 */

// otra opcion:

$(document).ready(function() {
	$('button').on('click', function(){
        $(this).parentsUntil('tbody').fadeOut(2000, function () {
            $(this).remove()
        })
    });
});

$(this) = $('button') // linea 2 - 3
$(this).parentsUntil('tbody') = $(this) // linea 3 -4