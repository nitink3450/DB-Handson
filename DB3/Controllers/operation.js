const { EmployeeModel } = require("../Models/schema");
const findAllWithMongoose = async () => {
    try {
        const result = await EmployeeModel.find();

        console.log("Succesfully found all", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findWithSalary = async () => {
    try {
        const result = await EmployeeModel.find({ "salary": { $gt: 30000 } });

        console.log("Succesfully found with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findWithExp = async () => {
    try {
        const result = await EmployeeModel.find({ "overallExp": { $gt: 1 } });

        console.log("Succesfully found with Experience", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findWithTwoConditions = async () => {
    try {
        const result = await EmployeeModel.find({ $and: [{ "yearGrad": { $gt: 2015 } }, { "overallExp": { $gt: 1 } }] });

        console.log("Succesfully found with Two Conditions", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const updateWithSalary = async () => {
    try {
        const result = await EmployeeModel.updateMany({ "salary": { $gt: 30000 } }, { $set: { "salary": 28000 } });

        console.log("Succesfully updated with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const deleteWithLastCompany = async () => {
    try {
        const result = await EmployeeModel.deleteMany({ "lastCompany": "Y" });

        console.log("Succesfully updated with salary", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}
module.exports = {
    findAllWithMongoose,
    findWithSalary,
    findWithExp,
    findWithTwoConditions,
    deleteWithLastCompany,
    updateWithSalary
};
