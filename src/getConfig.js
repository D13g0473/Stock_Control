const fs = require('fs');
const path = require('path');

// Ruta al archivo de configuración
function get_config()
    {
        const configFilePath = path.join(__dirname, 'config.json');

        // Lee el archivo de configuración
        fs.readFile(configFilePath, 'utf8', (err, data) => {
        if (err) 
        {
            console.error('Error al leer el archivo de configuración:', err);
            return;
        }
        const config = JSON.parse(data);
        return  config;
        });
    }
    module.exports = {get_config}