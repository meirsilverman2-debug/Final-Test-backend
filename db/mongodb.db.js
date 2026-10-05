import {MongoClient} from "mongodb";

const MONGO_URL = "mongodb://localhost:27017";
const client = new MongoClient(MONGO_URL);

try {
    await client.connect();
    console.log("mongodb is successfully connected!");
} catch (error) {
    console.log(error);
};

const db = client.db("alertsDb");
const alertsCollection = db.admin.collection("alerts")


export default alertsCollection;