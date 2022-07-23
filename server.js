const express=require('express');
var app=express();

app.use(express.urlencoded());
app.use(express.json())

app.listen(3000,()=>{console.log("express on localhost:3000")});

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