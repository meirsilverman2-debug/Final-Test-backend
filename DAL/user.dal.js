import { userCollection } from "../db/mongodb.db.js";




// The function gets a user object and returns the result which is an object containing the new id in many other things (but th id is the important one ok);
export async function createUser(user) {
    const result = await userCollection.insertOne(user);
    console.log(`Alert inserted with _id: ${result.insertedId}`);
    return result;
};



// The function gets nothing and returns all of the users collection that exsit in our database:
export async function getAllUsers() {
    const result = await userCollection.find().toArray();
    return result;
};




// The function gets a specific ID and returns that user with that ID:
export async function getUserById(userId) {
    console.log(typeof alertId === new ObjectId(alertId));
    const result = await userCollection.find({ _id: new ObjectId(alertId) }).toArray();
    return result;
};



// The function gets an ID and a object with the updated/changed field and updates the entier user:
export async function updateUserById(userId, userUpdate) {
    const result = await userCollection.findOneAndUpdate({ _id: new ObjectId(userId) }, { $set: { userName: userUpdate.userName, passwword: userUpdate.password, email: userUpdate.email, assignedArea: userUpdate.assignedArea}}, { returnDocument: "after" });
    return result;
};



// The function gets an ID by which with this the user with this ID will be deleted from the database:
export async function deleteUserByID(userId) {
    console.log(userId);
    const result = await userCollection.deleteOne({ _id: new ObjectId(userId) })
    return result;
};
