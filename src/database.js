const {get_config} =require('./getConfig');
const {get_connection} = require('./conectar');
const mysql = require('mysql2/promise');
const config = require('./config.json');;
// async function migrate()
// {
//     //crear la tabla client en la base de datos 
//     const connection = await get_connection();
//     var DB_NAME = config.DB_NAME;
//     try 
//     { 
//         //preprara la base de datos si es la primera vez que se va a ejecutar
//             await connection.beginTransaction();
//             const result = await connection.query(
//                         "CREATE TABLE IF NOT EXISTS clients (id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY , name VARCHAR(40), cuil VARCHAR(11), email VARCHAR(40), phone VARCHAR(15) );"
//                         );

//             const result1 = await connection.query(
//                         "CREATE TABLE IF NOT EXISTS bills (id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY , client_id int(11), date_of_issue date);"
//                                         );

//             const result3 = await connection.query(
//                         "CREATE TABLE IF NOT EXISTS unit_of_measurement (id int NOT NULL AUTO_INCREMENT PRIMARY KEY , capacity varchar(40), universe varchar(50) );"
//                                         );

//             const result2 = await connection.query(
//                         "CREATE TABLE IF NOT EXISTS products (id int NOT NULL AUTO_INCREMENT PRIMARY KEY , name varchar(40), bar_code varchar(50), mark varchar(40), id_unit_of_measurement varchar(30), quantity integer, price decimal  );"
//                                         );
//             const result4 = await connection.query(
//                         "CREATE TABLE IF NOT EXISTS prices (id int NOT NULL AUTO_INCREMENT PRIMARY KEY , value decimal(12,2));"
//                                         );

//             const result5 = await connection.query(
//                         "CREATE TABLE IF NOT EXISTS accounts (id int NOT NULL AUTO_INCREMENT PRIMARY KEY , opening_date date, closing_date date, client_id int(11) );"
//                                         );
//             const result6 = await connection.query(
//                         "CREATE TABLE IF NOT EXISTS buy (id int NOT NULL AUTO_INCREMENT PRIMARY KEY , bill_id int(11), product_id int(11), quantity_sold int(10) );"
//                                         );
//             const result7 = await connection.query(
//                         "CREATE TABLE IF NOT EXISTS current_prices (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, begin_date date, price_id int(11), product_id int(11) )"                   
//                                         );                                           
//             const result8 = await connection.query(
//                         "CREATE TABLE IF NOT EXISTS encompasses (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, account_id int(11), bill_id int(11))"
//                                             );      
//             await connection.commit();    

//     } catch (error) 
//     {
//         await connection.rollback();
//         console.log("no se logro crear la base de datos");
//     } finally 
//     {
//         // Siempre libera la conexión
//         connection.release();
//     }
                                                                                 
                                          


    
                        
// }
// async function create_cliente(cliente){
//     const connection = await get_connection(); 
//     const result = await connection.query("insert into cliente set ?",cliente);
//     return result; 
// }
// module.exports = {migrate}