module.exports = (app) =>{

    const Employ = require('../controller/employees.controller');

    app.get('/getemployees',Employ.getAllemployee);
    app.get('/getemployees/:id',Employ.getAllemployeeById);
    app.post('/post',Employ.post);
    app.delete('/delEmployee/:id',Employ.deleteEmployee);
    app.delete('/updtEmployee/:id',Employ.updtEmployee);

}