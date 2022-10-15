const MongoClient = require("mongodb").MongoClient
const emplyoeeData = require("./Data.json");
const Connection = "mongodb://127.0.0.1:27017"
MongoClient.connect(Connection, async (err, db1) => {
    if (err) {
        console.log("Error while connnecting", err)
        // return;
    }
    else {
        console.log("Connection Successful")
    }

    const Database = db1.db("Human_Resource");
    const Dbcollection = Database.collection("employee")
    console.log("Connected to MongoDataBase");
    const inserting = await Database.collection("employee").insertMany(emplyoeeData);
    console.log(inserting);
    const Finding = await Dbcollection.find().toArray();
    console.log(Finding);
    const Fsalary = await Dbcollection.find({ salary: { $gt: "30000" } }).toArray();
    console.log(Fsalary);
    const Oexp = await Dbcollection.find({ yearGrad: { $gt: "2015" }, overallExp: { $gt: "1" } }).toArray();
    console.log(Oexp);
    const UpdateSalary = await Dbcollection.updateMany({ salary: { $gt: "70000" } }, { $set: { salary: "65000" } });
    console.log(UpdateSalary);
    const DeleteY = await Dbcollection.deleteMany({ lastCompany: "Y" });
    console.log(DeleteY);
})



