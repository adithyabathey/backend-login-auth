const mysql=require('mysql');

var mysqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    password:'root',
    database: 'employee_detail'
});

mysqlConnection.connect((err)=>{
    if(err){
    console.log("DB not connected",err);}
    else{
    console.log("DB connected");
    }
});


module.exports = mysqlConnection;
