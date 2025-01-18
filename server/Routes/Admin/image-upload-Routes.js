import express from "express";
import { upload } from "../../helpers/cloudinary.js";
import handleImageUpload from "../../controllers/Admin/image-upload-Controller.js";

const router = express.Router();

router.post("/upload-image", upload.single("file"), handleImageUpload);

export default router;
