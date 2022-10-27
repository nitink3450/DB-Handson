const mongoose = require('mongoose');

const schemaEmployeeData = mongoose.Schema({
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    salary: {
        type: String,
        required: false,
    },
    department: {
        type: String,
        required: false,
    },
    lastCompany: {
        type: String,
        required: false,
    },
    lastSalary: {
        type: String,
        required: false,
    },
    overallExp: {
        type: String,
        required: false,
    },
    lastCompany: {
        type: String,
        required: false,
    },
    contactInfo: {
        type: String,
        required: false,
    },
    yearGrad: {
        type: String,
        required: false,
    },
    gradStream: {
        type: String,
        required: false,
    },
})

const EmployeeModel = mongoose.model("Employee3", schemaEmployeeData)

module.exports = {
    schemaEmployeeData,
    EmployeeModel
}