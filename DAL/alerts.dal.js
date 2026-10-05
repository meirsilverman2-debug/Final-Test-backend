import alertsCollection from "../db/mongodb.db.js";


// The function gets an alert object and returns the result which is an object containing the new id in many other things (but th id is the important one ok);
export async function createAlert(alert){
    const result = await alertsCollection.insertOne(alert);
    console.log(`Alert inserted with _id: ${result.insertedId}`);
    return result;
};


// The function gets nothing and returns all of the alert collection that exsit in our database:
export async function getAllAlerts(){
    const result = await alertsCollection.find().toArray();
    return result;
};


