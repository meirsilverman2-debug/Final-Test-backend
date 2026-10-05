import { createAlert, getAllAlerts } from "../DAL/alerts.dal.js";


// POST Ctrl:
export async function createAlertCtrl(req, res) {
    const response = await createAlert(req.body);
    res.status(201).json({
        message: `an alert has been created with _id: ${response.insertedId}`
    });
};


// GET (all alerts) Ctrl:
export async function getAllAlertsCtrl(_, res) {
    const response = await getAllAlerts();
    res.status(200).json(response);
};