import express from "express"
import { createUser, deleteUser, getUsers } from "../controllers/userController.js"


const router = express.Router();

router.post("/create-user", createUser);

router.get("/getusers", getUsers);

router.delete("/:id", deleteUser)

export default router;