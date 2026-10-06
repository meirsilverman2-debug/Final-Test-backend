import express from "express";
import { userChecking } from "../middelware/user.middleware.js";
import { createUsertService, getAllUsertsService, deleteUsertByIDService, getUsertByIdService } from "../service/user.service.js";
import { doYouHaveToken } from "../middelware/user.middleware.js";


const router = express.Router();



router.post("/login", userChecking, doYouHaveToken, createUsertService);


router.get("/me", doYouHaveToken, getUsertByIdService);


router.get("/users",doYouHaveToken, getAllUsertsService);


router.post("/register", userChecking, createUsertService);



router.delete("/users/:id", doYouHaveToken, deleteUsertByIDService);


export default router;