$(()=> 
{
    let $table = $('table');
    const {sequelize} = require('../../../sequelize');
    const newLocal = '../config/nav.json';
    const ConfigApp = '../../config.json';
    const models = require('./models');

    // Configuracion de tema visual de la App
    $.getJSON(ConfigApp, function(data){
        $('table').attr('data-bs-theme', data.theme);
        models.product
            .findAll()
            .then((product) => 
                 {
                    console.log('Usuarios encontrados:', product);
                 })
            .catch((error) => 
                {
                    console.error('Error al obtener usuarios:', error);
                })
    } )

    
  
});