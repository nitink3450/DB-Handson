const MongoClint = require("mongodb").MongoClient
const employeeData=require("./data.json")
const Connection = 'mongodb://127.0.0.1:27017'

MongoClint.connect(Connection,async(err, db)=>{
    if (err)
    {console.log("error while connecting",err)
    return
    }
    const database=db.db("Human_Resource")
    const data=database.collection('employee')

    console.log("connected to mongo data base");

    const insert = await database.collection("employee").insertMany(employeeData)
    console.log(insert)

    const finding = await data.find().toArray()
    console.log(finding);
    console.log('Showing all data');

    const salaryFind= await data.find({salary:{$gt:"30000"}}).toArray()
    console.log(salaryFind);
    console.log('Showing all data those salary greater than 30000')

    const overallExp = await data.find({overallExp:{$gte:"2"}}).toArray()
    console.log(overallExp);
    console.log("Showing all data those experience are greater than 2");

    const yearGrad = await data.find({yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}}).toArray()
    console.log(yearGrad);
    console.log("Showing all data those graduated after 2015 and having exp greater than 1")

    const salaryUpdate = await data.updateMany({salary:{$gt:"70000"}},{$set:{salary:"65000"}})
    console.log(salaryUpdate);
    console.log("Showing all data whose salary is greater than 70000 to 65000");

    const lastCompany= await data.deleteMany({lastCompany:"Y"})
    console.log(lastCompany);
    console.log("deleted all the data with last comapany is Y ")


})
