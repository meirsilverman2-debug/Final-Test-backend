import express from "express";
import { userChecking } from "../middelware/user.middleware.js";
import {createUsertService, getAllUsertsService, deleteUsertByIDService} from "../service/user.service.js";
import { getUserById } from "../DAL/user.dal.js";


const router = express.Router();



router.post("/login", userChecking, createUsertService);


router.get("/me", getUserById);


router.get("/users", getAllUsertsService);


router.post("/register", userChecking,  (req, res) => {
    res.json({
        message: "works!"
    })
});



router.delete("/api/auth/users/:id", deleteUsertByIDService);


export default router;