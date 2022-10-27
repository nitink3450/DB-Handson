const express = require('express');
const mongoose = require('mongoose');
const {
    findAllWithMongoose,
    findWithSalary,
    findWithExp,
    findWithTwoConditions,
    deleteWithLastCompany,
    updateWithSalary
} = require("./Controllers/operation")
const { EmployeeDataObj } = require('./Controllers/EmployeeData');

const port = 4005 || process.env.PORT;
const app = express();

const url = 'mongodb://localhost:27017/Human_Resource3';

mongoose.connect(url).then(() => {
    console.log(`Connected to MongoDB...✅`)
}).catch(e => console.error(e));

//To insert Employee data many
EmployeeDataObj();
//To find all Employee data
findAllWithMongoose()
//To find all Employee data having salary
findWithSalary()
//To find all Employee data having exp
findWithExp()
//To find all Employee data with 2 conditions
findWithTwoConditions()
//To update Employee data with salary
updateWithSalary()
//To delete specific Employee data
deleteWithLastCompany()

app.listen(port, () => {
    console.log(`Connected to Port ${port}✅`);
})