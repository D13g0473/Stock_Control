const {BrowserWindow, Menu, app, ipcMain} =require('electron'); 
const {get_connection} = require('./database');
const {sequelize} = require('./sequelize');
const $ = require('jquery');
const mysql =require('promise-mysql'); 
require('datatables.net');

let window;
let new_window;
//crea la ventana principal
//--------------------------------------------------------------------------------------------------
function create_window(){
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { 
            nodeIntegration: true, //hace que sea posible integrar modulos de node en la ventana new browser
            contextIsolation: false
         }
    })
    window.loadFile('src/ui/home/index.html'); 
    const menu_product1 = Menu.buildFromTemplate(template_menu_1);
     Menu.setApplicationMenu(menu_product1); 
    
  
    // window.on('closed',()=>{
    //     app.quit(); 
    // })
}
//crea una ventana para agregar productos
//--------------------------------------------------------------------------------------------------
function create_new_product(){
    new_window = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Agregar nuevo producto",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    new_window.loadFile('src/ui/product/create.html')
    const menu_product = Menu.buildFromTemplate(template_menu);
    Menu.setApplicationMenu(menu_product); 
}
//crea una ventana para agregar clientes
//--------------------------------------------------------------------------------------------------
function create_new_client(){
    new_window = new BrowserWindow({
        width: 400,
        height: 600,
        title: "Agregar cliente",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    new_window.loadFile('src/ui/client/client_create.html')
    const menu_product = Menu.buildFromTemplate(template_menu);
    Menu.setApplicationMenu(menu_product); 
}
//--------------------------------------------------------------------------------------------------
//crea una ventana para listar clientes 
function create_client_list(){
    new_window = new BrowserWindow({
        width: 800,
        height: 600,
        title: "lista de clientes",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    new_window.loadFile('src/ui/client/client_index.html')
    const menu_product = Menu.buildFromTemplate(template_menu);
    Menu.setApplicationMenu(menu_product); 
}
//---------------------------------------------------------------------------------------------------
//crea una vista para el menu
function  create_stock_view(){
    new_window = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Stock",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    new_window.loadFile('src/ui/stock/stock.html')
    const menu_product = Menu.buildFromTemplate(template_menu);
    Menu.setApplicationMenu(menu_product); 
}

//---------------------------------------------------------------------------------------------------
//crea una para visualizar las ventas
function  create_sales_view(){
    new_window = new BrowserWindow({
        width: 800,
        height: 600,
        title: "historial de ventas",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    new_window.loadFile('src/ui/transaction/sales.html')
    const menu_product = Menu.buildFromTemplate(template_menu);
    Menu.setApplicationMenu(menu_product); 
}
//---------------------------------------------------------------------------------------------------
//crea una ventana para mostrar las cuentas pendientes de los clientes

function  create_debts_view(){
    new_window = new BrowserWindow({
        width: 800,
        height: 600,
        title: "cuentas",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    new_window.loadFile('src/ui/transaction/debts.html');
    const menu_product = Menu.buildFromTemplate(template_menu);
    Menu.setApplicationMenu(menu_product); 
}

//---------------------------------------------------------------------------------------------------
//crea una ventana para mostrar las cuentas pendientes de los clientes
function  create_buys(){
    new_window = new BrowserWindow({
        width: 800,
        height: 600,
        title: "cuentas",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    new_window.loadFile('src/ui/transaction/buys.html');
    const menu_product = Menu.buildFromTemplate(template_menu);
    Menu.setApplicationMenu(menu_product); 
}
//---------------------------------------------------------------------------------------------------
//crea una ventana para mostrar las cuentas pendientes de los clientes
function  create_update_stock(){
    new_window = new BrowserWindow({
        width: 800,
        height: 600,
        title: "reporte de stock",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    new_window.loadFile('src/ui/stock/update_stock.html');
    const menu_product = Menu.buildFromTemplate(template_menu);
    Menu.setApplicationMenu(menu_product); 
}
//crea una interfaz para el menu 
//--------------------------------------------------------------------------------------------------
const template_menu = [
    {
        label: '🏠 inicio',
        click(){   
            create_window(); 
            new_window.close(); 
        }
    },
    {
        label: 'tools',
        click(item,focusedWindow){
            focusedWindow.toggleDevTools(); 
        }
    }
]
const template_menu_1 = [
    {
        label: 'Agregar',
        submenu: [ 
                {
                    label: "producto",
                    click(){   
                        create_new_product();
                        window.close(); 
                    }
                },
                {
                    label: 'cliente',
                    click(){   
                        create_new_client();
                        window.close(); 
                    }
                }, 
                {
                    label:'venta',
                    click(){
                        create_buys(); 
                        window.close();
                    }
                } 
                // {
                //     label:'stock',
                //     click(){
                //         create_update_stock(); 
                //         window.close();
                //     }
                // }
    ]
    },
 //-------------------------------------------------------------------------------------------------
 {
    label: 'ver',
    submenu: [ 
            {
                label: 'clientes',
                click(){   
                    create_client_list();
                    window.close(); 
                }
            },
            {
                label: 'stock',
                click(){   
                    create_stock_view();
                    window.close(); 
                }
            },
            {
                label: 'ventas',
                click(){   
                    create_sales_view();
                    window.close(); 
                }
            },
            {
                label: 'cuentas',
                click(){   
                    create_debts_view();
                    window.close(); 
                }
            },
            
]
},   
 //-------------------------------------------------------------------------------------------------   
   
    {
        label: 'tools',
        click(item,focusedWindow){
            focusedWindow.toggleDevTools(); 
        }
    }
]
//--------------------------------------------------------------------------------------------------
//objeto consulta

// async function create_cliente(cliente){
//     const connection = await get_connection(); 
//     const result = await connection.query("insert into cliente set ?",cliente);
//     return consulta; 
// }
//--------------------------------------------------------------------------------------------------
//sirve de mediador para enviar datos a una base de datos. 
// ipcMain.on("submitt",(e,cliente)=>{
//     async function create_cliente(cliente){
//         const connection = await get_connection(); 
//         const result = await connection.query("insert into cliente set ?",cliente);
//         console.log(result); 
//     }
// }); 


//funciones que a exportar
//--------------------------------------------------------------------------------------------------
module.exports ={
    create_window,
    create_new_product, 
}