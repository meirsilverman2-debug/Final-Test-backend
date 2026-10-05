import express from "express";
import { alertChecking } from "../middelware/alert.middleware.js";
import {createAlertCtrl, getAllAlertsCtrl } from "../controllers/alert.controller.js";


const router = express.Router();


router.get("/alerts", getAllAlertsCtrl);


router.get("/alerts/:id", (req, res) => {
    res.status(200).json({
        message: "works!"
    })
});


router.post("/alerts", alertChecking, createAlertCtrl);


router.delete("/alerts/:id", (req, res) => {
    res.status(200).json({
        message: "works!"
    })
});


router.put("/alerts/:id", (req, res) => {
    res.status(200).json({
        message: "works!"
    })
});

export default router;