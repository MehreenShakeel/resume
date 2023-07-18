const mysql= require("mysql");
let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"cv"
});

con.connect(function(err){
    if (err){
        console.log("error",err);
    }
    else{
        console.log("connected");
    }
});