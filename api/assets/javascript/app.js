$(document).ready(function(){

    $('button').on('click', function() {
        var meme = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + meme + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var memeDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var memeImage = $('<img/>');

                    memeImage.addClass('meImg')

                    memeImage.attr('src', results[i].images.fixed_height.url);

                    memeImage.attr('data-still', results[i].images.fixed_height_still.url)

                    memeImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    memeDiv.append(p);

                    memeDiv.append(memeImage);

                    memeDiv.prependTo($('#gifs'));
                }

                $('.meImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var spicy = [''];

    
    
        $('#theButton').on('click', function(){
            var spicyButton = $("#gif-input").val();
            

            var newButton = $("<button/>").addClass( "btn btn-info meme").attr('data-name',spicyButton).html(spicyButton).css({'margin': '5px'});
            
            $("#memebuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + spicyButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(spicyButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var memeDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var memeImage = $('<img/>');

                    memeImage.addClass('meImg')

                    memeImage.attr('src', results[i].images.fixed_height_still.url);

                    memeImage.attr('data-still', results[i].images.fixed_height_still.url)

                    memeImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    memeDiv.append(p);

                    memeDiv.append(memeImage);

                    memeDiv.prependTo($('#gifs'));
                }

                $('.meImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});