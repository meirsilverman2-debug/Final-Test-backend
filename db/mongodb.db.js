import {MongoClient} from "mongodb";

const MONGO_URL = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(MONGO_URL);

try {
    await client.connect();
    console.log("mongodb is successfully connected!");
} catch (error) {
    console.log(error);
};

const db = client.db("alertsDb");
const userDb = client.db("userDb")

export const alertsCollection = db.collection("alerts");
export const userCollection = userDb.collection("users");

