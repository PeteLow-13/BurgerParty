$(function(){
    $('.create').on('submit', function(event){
        event.preventDefault();

        var newBurger = {
            buger_name: $('.bu')
                .val()
                .trim(),
            devoured: 0
        };
       
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function(){
            console.log('New Burger Added!');
            location.reload();
        });
    });

    $('.eatburger').on('click', function(event){
        event.preventDefault();

        var  id = $(this).data('id');
        var devouredBurger = {
            dvoured: 1
        };
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devouredBurger
        }).then(function(){
            console.log('Burger Devoured!!!');
            location.reload();
        });
    });

    $('.delete_burger').on('click', function(event){
        event.preventDefault();
        
        var id = $(this).data('id');

        $.ajax('/api/burgers/' + id, {
            type: 'DELETE',
            url: '/api/burgers/' + id
        }).then(function(){
            console.log('Burger Deleted :(', id);
            location.reload();
        });

    });


});