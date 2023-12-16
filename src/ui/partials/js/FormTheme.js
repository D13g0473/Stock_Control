$(()=>{
    const newLocal = '../config/nav.json';
    const ConfigApp = '../../config.json';
    $.getJSON(ConfigApp, function(data)
    {
        $('form').attr('data-bs-theme', data.theme);
        $( "form" ).on( "submit", function( event ) {
            alert( "Handler for `submit` called." );
            event.preventDefault();
            var formDataString = $(this).serialize();
          });
    } )
});