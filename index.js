var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	//UserName
	user: "root",

	//PW
	password: "Mur@k@miMIH!",
	database: "bamazon_db"
});

connection.connect(function(err){
	if(err) throw err;
	console.log("connected as id " + connection.threadId);
});

function stockCheck (){
connection.query('SELECT * FROM products', function(err, res){
		if(err) throw err;
		console.log(res);
	});
}


stockCheck();

