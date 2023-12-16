const {create_window, create_new_product} =require('./main');
const {app} = require('electron');
// const {migrate} = require('./database');  
const $ = require('jquery');
require('./conectar');
// migrate(); 
require('electron-reload')(__dirname); 
app.whenReady().then(create_window) 




