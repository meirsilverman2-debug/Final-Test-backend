import { ObjectId } from "mongodb";
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




// The function gets a specific ID and returns that alert with that ID:
export async function getAlertById(alertId){
    console.log(typeof alertId === new ObjectId(alertId));
    const result = await alertsCollection.find({_id: new ObjectId(alertId)}).toArray();
    return result;
};



// The function gets an ID and a object with the updated/changed field and updates the entier alert:
export async function updateAlertById(alertId, alertUpdate){
    const result = await alertsCollection.findOneAndUpdate({_id: new ObjectId(alertId)}, {$set: {displayName: alertUpdate.displayName, description: alertUpdate.description, priority: alertUpdate.priority, arena: alertUpdate.arena, status: alertUpdate.status, lon: alertUpdate.lon, lat: alertUpdate.lat}}, {returnDocument: "after"});
    return result;
};



// The function gets an ID by which with this the alert with this ID will be deleted from the database:
export async function deleteAlertByID(alertId){
    console.log(alertId);
    
    const result = await alertsCollection.deleteOne({_id: new ObjectId(alertId)})
    return result;
};

