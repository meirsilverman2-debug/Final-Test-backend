import alertsCollection from "../db/mongodb.db.js";


// The function gets an alert object and returns the result which is an object containing the new id in many other things (but th id is the important one ok);
export async function createAlert(alert){
    const result = await alertsCollection.insertOne(alert);
    console.log(typeof result);
    console.log(result);
    
    console.log(`Alert inserted with _id: ${result.insertedId}`);
    return result
};


