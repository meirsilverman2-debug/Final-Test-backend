import express from "express";


const router = express.Router();


router.get("/alerts", (req, res) => {
    res.status(200).json({
        message: "works!"
    })
});


router.get("/alerts/:id", (req, res) => {
    res.status(200).json({
        message: "works!"
    })
});


router.post("/alerts", (req, res) => {
    res.status(200).json({
        message: "works!"
    })
});


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