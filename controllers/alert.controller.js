
import { createAlert, getAllAlerts, getAlertById, updateAlertById, deleteAlertByID } from "../DAL/alerts.dal.js";



// POST Ctrl:
export async function createAlertCtrl(alert) {
    const response = await createAlert(alert);
    return response;
};



// GET (all alerts) Ctrl:
export async function getAllAlertsCtrl() {
    const response = await getAllAlerts();
    return response;
};



// GET (by ID) Ctrl:
export async function getAlertByIdCtrl(alertId){
    const response = await getAlertById(alertId);
    return response;
};



// PUT (by ID) Ctrl:
export async function updateAlertByIdCtrl(alertID, updateAlert){
    const response = await updateAlertById(alertID, updateAlert);
    return response;
};



// DELETE (by ID) Ctrl:
export async function deleteAlertByIdCtrl(alertId){
    const response = await deleteAlertByID(alertId);
    return response;
};