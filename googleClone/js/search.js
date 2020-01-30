function submitHandler(){
    location.href = `https://www.google.com/search?q=${$('input[type=text]').val()}`
    $('input[type=text]').val('');
}

function init(){
    $('body').click(function(e){
        if(e.target === $('input[type=text]')[0]){
            $('.search-container').addClass('js-shadow');
        }else{
            $('.search-container').removeClass('js-shadow');
        }
    });

    $('#js-form').submit(function(e){
        e.preventDefault();
        submitHandler();
    });

    $('input[type=button]:eq(0)').click(function(e){
        submitHandler();
    });
}

init();


