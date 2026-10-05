import express from "express";
import { alertChecking } from "../middelware/alert.middleware.js";
import { createAlertCtrl, getAllAlertsCtrl, getAlertByIdCtrl, updateAlertByIdCtrl, deleteAlertByIdCtrl } from "../controllers/alert.controller.js";


const router = express.Router();


router.get("/alerts", getAllAlertsCtrl);


router.get("/alerts/:id", getAlertByIdCtrl);


router.post("/alerts", alertChecking, createAlertCtrl);


router.delete("/alerts/:id", deleteAlertByIdCtrl);


router.put("/alerts/:id", alertChecking, updateAlertByIdCtrl);

export default router;