import { createAlertCtrl, getAllAlertsCtrl, getAlertByIdCtrl, updateAlertByIdCtrl, deleteAlertByIdCtrl } from "../controllers/alert.controller.js";



// POST Service:
export async function createAlertService(req, res) {
    const alert = req.body;

    const response = await createAlertCtrl(alert);

    res.status(201).json({
        message: `an alert has been created with _id: ${response.insertedId}`
    });
};



// GET (all alerts) Service:
export async function getAllAlertsService(_, res) {
    const response = await getAllAlertsCtrl();
    res.status(200).json(response);
};



// GET (one by ID) Service:
export async function getAlertByIdService(req, res) {
    const { id } = req.params;

    const response = await getAlertByIdCtrl(id);

    res.status(200).json(response);
};



// PUT Service:
export async function updateAlertByIdService(req, res) {

    const { id } = req.params;
    const updateAlert = req.body;

    const isAlertExits = await getAlertByIdCtrl(id);
    
    if (isAlertExits.length === 0) {
        res.status(404).json({
            error: "Not found (this alert does not exsit in our system)"
        });
    } else {

        const response = await updateAlertByIdCtrl(id, updateAlert);

        res.status(200).json(response)
    }
};



// DELETE Service:
export async function deleteAlertByIDService(req, res) {
    const { id } = req.params;

    const isAlertExits = await getAlertByIdCtrl(id);

    if (isAlertExits.length === 0) {
        res.status(404).json({
            error: "Not found (this alert does not exsit in our system)"
        });
    };

    const response = await deleteAlertByIdCtrl(id);

    res.status(202).json({
        message: `The alert has been successfull deleted from the system`
    });
};