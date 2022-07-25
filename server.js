const express=require('express');
var app=express();
var cors = require('cors')

app.use(express.urlencoded());
app.use(express.json());
app.use(cors('*'));


app.listen(3000,()=>{console.log("express on localhost:3000")});
app.get('/',(req,res)=>{
    res.send('Connected');
})
// //all employees
// app.get('/employees',(req,res)=>{
//     mysqlConnection.query('SELECT * FROM Employee',(err,rows,field)=>{
//         if(!err)
//         res.send(rows)
//         // console.log(rows);
//         else console.log(err);
//     })
// })

// //selected employee
// app.get('/employees/:id',(req,res)=>{
//     mysqlConnection.query('SELECT * FROM Employee WHERE EmpID=?',[req.params.id],(err,rows,field)=>{
//         if(!err){
//         res.send(rows)
//         console.log(rows);
//         }
//         else console.log(err);
//     })
// })

// //delete an employee
// app.delete('/employees/:id',(req,res)=>{
//     mysqlConnection.query('DELETE FROM Employee WHERE EmpID=?',[req.params.id],(err,rows,field)=>{
//         if(!err){
//         res.send(rows)
//         console.log(rows);
//         }
//         else console.log(err);
//     })
// });


require('./router/api')(app);