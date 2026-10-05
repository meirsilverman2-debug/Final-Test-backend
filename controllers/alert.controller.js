import { createAlert, getAllAlerts, getAlertById, updateAlertById, deleteAlertByID } from "../DAL/alerts.dal.js";



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



// GET (by ID) Ctrl:
export async function getAlertByIdCtrl(req, res){
    const response = await getAlertById(req.params);
    res.status(200).json(response);
};



// PUT (by ID) Ctrl:
export async function updateAlertByIdCtrl(req, res){
    console.log("works");
    
    const response = await updateAlertById(req.params, req.body);
    res.status(200).json(response);
};



// DELETE (by ID) Ctrl:
export async function deleteAlertByIdCtrl(req, res){
    const response = await deleteAlertByID(req.params);
    res.status(202).json({
        message:  `The alert has been successfull deleted from the system`
});
};