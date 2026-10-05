import express from "express";
import { alertChecking } from "../middelware/alert.middleware.js";
import {createAlertService, getAllAlertsService, getAlertByIdService, updateAlertByIdService, deleteAlertByIDService} from "../service/alert.service.js";


const router = express.Router();


// All of the five endpoints in our alert system:

router.post("/alerts", alertChecking, createAlertService);


router.get("/alerts", getAllAlertsService);


router.get("/alerts/:id", getAlertByIdService);


router.delete("/alerts/:id", deleteAlertByIDService);


router.put("/alerts/:id", alertChecking, updateAlertByIdService);


export default router;