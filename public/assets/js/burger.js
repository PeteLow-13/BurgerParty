// $( document ).ready(function() {
$ (function(){    
    console.log( "ready!" );

    $('#create').on('click', function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $('#bu')
                .val()
                .trim(),
            devoured: 0
        };
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function(){
            console.log('New Burger Added');
            location.reload();
        });
    });

    $('.devour-button').on('click', function(event){
        event.preventDefault();

        var  id = $(this).data('id');
        var devouredBurger = {
            devoured: 1
        };
        
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devouredBurger
        }).then(function(){
            console.log('Burger Devoured:(', id);
            location.reload();
        });
    });

    $('.delete-button').on('click', function(event){
        event.preventDefault();
        
        var id = $(this).data('id');

        $.ajax('/api/burgers/' + id, {
            type: 'DELETE',
            // url: '/api/burgers/' + id
        }).then(function(){
            console.log('Burger Deleted :(', id);
            location.reload();
        });

    });

});
