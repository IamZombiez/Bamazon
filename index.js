require('console.table');
var mysql = require('mysql');
var inquirer = require('inquirer');
var buyProductID;
var buyQuantity;
var itemPrice;
var total;
var availability;

var connection = mysql.createConnection({
	host: "127.0.0.1", // "localhost",
	port: 3306,
	user: "root",
	password: "Mur@k@miMIH!",
	database: "bamazon_db"
});

connection.connect();

connection.query('SELECT ID, product_name, price, stock FROM products', function (err, results, fields) {
      if (err) throw err;
      console.log('---------------------------------ITEMS -------------------------------');
      console.table(results);

      console.log('========================= BAMAZON =============================');
      inquirer.prompt([
            { 
              name: "buyProductID",
              message: "Please Select the Product You Wish to Buy by ID "
             },

             { 
              name: "buyQuantity",
              message: "How Many Would You Like to Add to Your Cart? "
             }

      ]).then(function (answers) {
              buyProductID = answers.buyProductID;
              buyQuantity = answers.buyQuantity;

              connection.query(`SELECT price FROM products WHERE ID = ${buyProductID}`, function (err, results, fields) {
                    if (err) throw err;
                    itemPrice = results[0].price
              });

              connection.query(`SELECT stock FROM products WHERE ID = ${buyProductID}`, function (err, results, fields) {
                    if (err) throw err;
                    var inStock = results[0].stock;
                    if (inStock >= buyQuantity) {
                        availability = true;
                    }
                    else if (inStock <= buyQuantity ){
                        availability = false;
                        console.log("Insufficent Stock")
                    }
                    

              });

              connection.query(`SELECT product_name FROM products WHERE ID = ${buyProductID}`, function (err, results, fields) {
                    if (err) throw err;
                    console.log('========================= CONFIRM ORDER ========================');
                    console.log('Item : '+ results[0].product_name);
                    console.log('Quantity : ' + buyQuantity);
                    console.log('Price : $' + itemPrice + ' /per');
                    console.log('Total : $' + buyQuantity * itemPrice);
                    console.log('Availability: ' + availability);
                    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
                    inquirer.prompt([
                      {
                        type:'confirm',
                        name:'confirmation',
                        message:'Would you like to proceed with the order? '
                      }

                    ]).then(function (answers) {
                        if(availability === true){
                            console.log('**********************************************');
                            console.log('ORDER HAS BEEN PLACED');
                            console.log('**********************************************');
                        } else {
                            console.log('ORDER CANCELLED - Insufficent Stock');
                        }

                        connection.end()
                    });
              });
       

      });
});


