var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,x-Requested-With,Content-Type,Accept");
    next();
});

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sai@123",
    database: "db2"
});
connection.connect(function(err){
    if(!err){
        console.log("Database Connected.....");
    }
    else{
        console.log("Error in connecting database.........");
    }
});

app.listen(4014,()=>{
    console.log("Server is Running");
});

app.get('/',function(req,res){
    res.json({msg:"Welcome to Node.js API"});
});

app.post('/find',(req,res)=>{
    let phone=req.body.phone;
  
    console.log(phone);
    connection.query('select status from createapp where phone=?',[phone],function(error,results,fields){
        var x = JSON.stringify(results);
        if(x == "[]"){
            res.send({
                "code":400,
                "failed":console.log("can't find the phone number")
            });
        }
        else{
            res.send({
            "success":console.log(results[0]),
            "code":200,
            "display":results[0],
           
            
            });
        }
    });
});
   