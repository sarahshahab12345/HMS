import express from "express";
import { login } from "../../controllers/Admin/User-Auth-Controller.js";

const router = express.Router();

router.post("/login", login);

export default router;
