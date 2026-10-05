import {createAlert} from "../DAL/alerts.dal.js";


export async function createAlertCtrl(req, res){
    console.log("createAlertCtrl");
    const response = await createAlert(req.body);
    res.status(201).json({
        message: `an alert has been created with _id: ${response.insertedId}`
    });
};