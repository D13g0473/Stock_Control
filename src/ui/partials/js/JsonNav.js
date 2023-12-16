$(()=> {
    // Seleccionar el elemento con ID "nav"
    let $nav = $('nav');

    const newLocal = '../config/nav.json';
    const ConfigApp = '../../config.json';
    // Cargar el archivo JSON
    $.getJSON(ConfigApp, function(data){
        $('body').attr('data-bs-theme', data.theme);
    } )
    $.getJSON(newLocal, function(data) {
        var menuItems = data.menuItems;

        $('body').prop('data-bs-theme', 'dark');
        // Crear la estructura del menú
        var navStructure = '<ul class="nav nav-pills">';
        menuItems.forEach(function(item) {
            if (item.items) {
                // Si hay subelementos, crear un elemento desplegable
                navStructure += '<li class="nav-item dropdown">';
                navStructure += '<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">' + item.label + '</a>';
                navStructure += '<div class="dropdown-menu">';
                item.items.forEach(function(subItem) {
                    if (subItem.divider) {
                        navStructure += '<div class="dropdown-divider"></div>';
                    } else {
                        navStructure += '<a class="dropdown-item" href="' + subItem.href + '">' + subItem.label + '</a>';
                    }
                });
                navStructure += '</div>';
                navStructure += '</li>';
            } else {
                // Si no hay subelementos, crear un elemento de menú simple
                navStructure += '<li class="nav-item">';
                var disabledClass = item.disabled ? ' disabled' : '';
                navStructure += '<a class="nav-link' + disabledClass + '" href="' + item.href + '">' + item.label + '</a>';
                navStructure += '</li>';
            }
        });
        navStructure += '</ul>';

        // Agregar la estructura al elemento seleccionado
        $nav.html(navStructure);
    });
});