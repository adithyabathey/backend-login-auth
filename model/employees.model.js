const connection = require('../connection/dbConfig');

const employee = function(emp){

    this.EmpID = emp.EmpID;
    this.Name = emp.Name;
    this.EmpCode = emp.EmpCode;
    this.Salary = emp.Salary; 

} 

employee.getemployee = (result) =>{
    var getQuery = 'SELECT * FROM Employee'
    connection.query(getQuery,(err,res)=>{
        if(err){
            // console.log(err);
            result(null , err);
        }
        else{
        //  console.log(res);
            result(null , res);
      }});
    };

employee.getAllemployeeById = (data , result) =>{
    var getQuery = `SELECT * FROM Employee where EmpID = ${data.id}`
    connection.query(getQuery,(err,res)=>{
        if(err){
            // console.log(err);
            result(null , err);
        }
        else{
        //  console.log(res);
            result(null , res);
    }});
};

employee.getAllemployeeBySalaryFilter = (data , result) =>{
    var getQuery = `SELECT * FROM Employee where Salary > ${data.sal}`
    connection.query(getQuery,(err,res)=>{
        if(err){
            // console.log(err);
            result(null , err);
        }
        else{
        //  console.log(res);
            result(null , res);
    }});
};

employee.post = (data , result) =>{
    var postQuery = `INSERT INTO employee set?`
    connection.query(postQuery,data,(err,res)=>{
        if(err){
        // console.log(err);
            result(null , err);
        }
        else{
        //  console.log(res);
            result(null , res);
    }});
};

employee.deleteEmployee = (data , result) =>{
    var delQuery = `DELETE FROM Employee WHERE EmpID = ${data.id}`
    connection.query(delQuery,(err,res)=>{
        if(err){
            // console.log(err);
            result(null , err);
        }
        else{
        //  console.log(res);
            result(null , res);
    }});
};

employee.updtEmployee = (data , result) =>{
    var updateQuery = `update employee set name = '${data.name}' , EmpCode = '${data.empCode}' , Salary='${data.salary}' Where EmpID= ${data.id}`
    connection.query(updateQuery,data,(err,res)=>{
        if(err){
        // console.log(err);
            result(null , err);
        }
        else{
        //  console.log(res);
            result(null , res);
    }});
};

module.exports = employee;