const employsalary= require('../model/employees.model');


exports.getAllemployee=(req,res)=>{
    employsalary.getemployee((err,data)=>{
        if(err){
            res.send(err);
            // console.log(err);
        }
        else{
            res.send(data);
            // console.log(data);
        }
    })
}

exports.getAllemployeeById=(req,res)=>{
    let data = req.params;
    employsalary.getAllemployeeById(data,(err,data)=>{
        if(err){
            res.send(err);
            // console.log(err);
        }
        else{
            res.send(data);
            // console.log(data);
        }
    })
}

exports.getAllemployeeBySalaryFilter=(req,res)=>{
    let data = req.params;
    employsalary.getAllemployeeBySalaryFilter(data,(err,data)=>{
        if(err){
            res.send(err);
            // console.log(err);
        }
        else{
            res.send(data);
            // console.log(data);
        }
    })
}

exports.post=(req,res)=>{
    let data = req.body;
    console.log(data);
    employsalary.post(data,(err,data)=>{
        if(err){
            res.send(err);
            // console.log(err);
        }
        else{
            res.send(data);
            // console.log(data);
        }
    })
}

exports.updtEmployee=(req,res)=>{
    let data = req.body;
    employsalary.updtEmployee(data,(err,data)=>{
        if(err){
            res.send(err);
            // console.log(err);
        }
        else{
            res.send(data);
            // console.log(data);
        }
    })
}

exports.deleteEmployee=(req,res)=>{
    let data = req.params;
    employsalary.deleteEmployee(data,(err,data)=>{
        if(err){
            res.send(err);
            // console.log(err);
        }
        else{
            res.send(data);
            // console.log(data);
        }
    })
}