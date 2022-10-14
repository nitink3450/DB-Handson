const MongoClient = require("mongodb").MongoClient
const emplyoeeData = require("./Data.json");
const Connection = "mongodb://127.0.0.1:27017"
MongoClient.connect(Connection, async (err, db) => {
    if (err) {
        console.log("Error while connnecting", err)
        // return;
    }
    else {
        console.log("Connection Successful")
    }
    const Database = db.db("Human_Resource");
    const DbConnection = Database.collection("employee")
    console.log("Connected to MongoDataBase");
    const inserting = await Database.collection("employee").insertMany(emplyoeeData);
    console.log(inserting);
    const Finding = await DbConnection.find().toArray();
    console.log(Finding);
    const Fsalary = await DbConnection.find({ salary: { $gt: "30000" } }).toArray();
    console.log(Fsalary);
    const Oexp = await DbConnection.find({ yearGrad: { $gt: "2015" }, overallExp: { $gt: "1" } });
    console.log(Oexp);
    const UpdateSalary = await DbConnection.updateMany({ salary: { $gt: "70000" } }, { $set: { salary: "65000" } });
    console.log(UpdateSalary);
    const DeleteY = await DbConnection.deleteMany({ lastCompany: "Y" });
    console.log(DeleteY);
})



